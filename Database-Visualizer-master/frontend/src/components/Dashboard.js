import { Bar } from "react-chartjs-2"

import { useEffect, useState } from "react"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Dashboard = () => {
  const labels = ["January", "February", "March", "April", "May", "June", "July"]
  const [reviewData, setReviewData] = useState([])
  const [viewsData, setViewsData] = useState([])
  const [ratingData, setRatingData] = useState([])
  const [publisherData, setPublisherData] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(false)
  const [genreData, setGenreData] = useState([])

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [54, 12, 87, 90, 34],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [87, 23, 546, 3, 46, 5],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  }
  const extractData = (data, labelfield, datafield) => {
    const result = { labels: [], data: [] }
    data.map((item) => {
      result.labels.push(item[labelfield])
      result.data.push(item[datafield])
    })
    // console.log(result)
    return result
  }

  const groupData = (data, groupfield, operation) => {
    let groups = [...new Set(data.map(show => show[groupfield]))];

    let result = { labels: groups, data: [...Array(groups.length).keys()].map(i=> 0) }
    data.forEach((item) => {
      if(operation === 'sum')
        result.data[result.labels.indexOf(item[groupfield])] +=1;
      else if(operation === 'mean')
        result.data[result.labels.indexOf(item[groupfield])] +=1;
    })
    console.log(result)
    return result
  }

  const loadviewshowdata = () => {
    setReviewsLoading(true)
    fetch("http://localhost:5000/shows/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data)
          // setProductLoading(false)
          // setProductData(data)

          setViewsData(extractData(data, "title", "views"))
          setReviewData(extractData(data, "title", "reviews"))
          setRatingData(extractData(data, "title", "ratings"))
          setPublisherData(groupData(data, 'publisher', 'sum'))
          setGenreData(groupData(data, 'genre', 'sum'))
          setReviewsLoading(false)
        })
      }
    })
  }

  useEffect(() => {
    loadviewshowdata()
  }, [])

  const displayReviewsChart = () => {
    if (!reviewsLoading) {
      return (
        <Bar
          style={{ height: "100%", width: "100%" }}
          data={{
            labels: reviewData.labels,
            datasets: [
              {
                label: "Ratings",
                data: reviewData.data,
                backgroundColor: "#56007e",
              },
            ],
          }}
        />
      )
    }
  }
  const displayViewsChart = () => {
    if (!reviewsLoading) {
      return (
        <Bar
          style={{ height: "100%", width: "100%" }}
          data={{
            labels: viewsData.labels,
            datasets: [
              {
                label: "Views",
                data: viewsData.data,
                backgroundColor: "#00ccff",
              },
            ],
          }}
        />
      )
    }
  }
  const displayRatingChart = () => {
    if (!reviewsLoading) {
      return (
        <Bar
          style={{ height: "100%", width: "100%" }}
          data={{
            labels: ratingData.labels,
            datasets: [
              {
                label: "Stars",
                data: ratingData.data,
                backgroundColor: "#66ff00",
              },
            ],
          }}
        />
      )
    }
  }

  const displayPublisherChart = () => {
    if (!reviewsLoading) {
      return (
        <Bar
          style={{ height: "100%", width: "100%" }}
          data={{
            labels: publisherData.labels,
            datasets: [
              {
                label: "Shows",
                data: publisherData.data,
                backgroundColor: "#ddff00",
              },
            ],
          }}
        />
      )
    }
  }

  const displayGenreChart = () => {
    if (!reviewsLoading) {
      return (
        <Bar
          style={{ height: "100%", width: "100%" }}
          data={{
            labels: genreData.labels,
            datasets: [
              {
                label: "No. of Shows",
                data: genreData.data,
                backgroundColor: "#ff00d4",
              },
            ],
          }}
        />
      )
    }
  }

  return (
    <div>
      {/* <Bar  data={data} />; */}

      <header>
        <div className="col-md-10 mx-auto pt-5">
          <h1 className="text-center">Realtime Dashboard</h1>
        </div>
      </header>
      <div className="col-md-10 mx-auto">
        <div className="row">
          <div className="col-md-6 mt-5">
            <div className="card chart-cont">
              <div className="card-header">
                <h4>Comparison of No. of Ratings</h4>
              </div>
              <div className="card-body">{displayReviewsChart()}</div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="card chart-cont">
              <div className="card-header">
                <h4>Comparison of No. of Views</h4>
              </div>
              <div className="card-body">{displayViewsChart()}</div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="card chart-cont ">
              <div className="card-header">
                <h4>Comparison of Ratings</h4>
              </div>
              <div className="card-body">{displayRatingChart()}</div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="card chart-cont ">
              <div className="card-header">
                <h4>No. of Shows by Each Publisher</h4>
              </div>
              <div className="card-body">{displayPublisherChart()}</div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="card chart-cont ">
              <div className="card-header">
                <h4>Top Genres</h4>
              </div>
              <div className="card-body">{displayGenreChart()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
