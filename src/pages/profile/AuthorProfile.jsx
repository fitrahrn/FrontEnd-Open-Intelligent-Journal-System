
import React, { useState, useEffect } from 'react';
import api from "../../interceptor/axios"
import Layout from "../../components/Layout"
import {Link,useParams} from "react-router-dom";
import { Bar, Line, Pie } from "react-chartjs-2";
const AuthorProfile = () => {
  const [name, setName] = useState("");
  const [affiliation,setAffiliation] = useState("");
  const [country,setCountry] = useState("");
  const [affiliationAddress,setAffiliationAddress] = useState("");
  const {username} = useParams();
  const [journalCount,setJournalCount] = useState([])
  const [articleCount,setArticleCount] = useState([])
  const [citationCount,setCitationCount] = useState([])
  const chartData = 
  {
    labels: journalCount.map((data) => data.title), 
    datasets: [
      {
        label: "Article in Journal",
        data: journalCount.map((data) => data.publishCount),
        backgroundColor: ['rgba(255, 99, 132, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(255, 205, 86, 0.5)',
                  'rgba(75, 192, 192, 0.5)',
                  'rgba(153, 102, 255, 0.5)',
                  'rgba(255, 159, 64, 0.5)'],

        hoverOffset: 4,
        borderColor: "black",
        borderWidth: 2
      }
    ]
  };
  const chartData2 = 
  {
    labels: articleCount.map((data) => data.year), 
    datasets: [
      {
        label: "Article by year",
        data: articleCount.map((data) => data.yearCount),
        backgroundColor: [
            'rgb(255, 99, 132)',
          ],

        hoverOffset: 4,
        borderColor: "black",
        borderWidth: 2
      }
    ]
  };
  const chartData3 = 
  {
    labels: citationCount.map((data) => data.document), 
    datasets: [
      {
        label: "Author's h-index",
        data: citationCount.map((data) => data.citationCount),
        hoverOffset: 4,
        borderColor: "blue",
        borderWidth: 2
      },
      {
        label: "h-index Threshold",
        data: citationCount.map((data) => data.id),
        hoverOffset: 4,
        borderColor: "red",
        borderWidth: 2
      }
    ]
  };
  const chartData4 = 
  {
    labels: articleCount.map((data) => data.year), 
    datasets: [
      {
        label: "Document Count",
        data: articleCount.map((data) => data.yearCount),
        hoverOffset: 4,
        borderColor: "blue",
        borderWidth: 2,
        type:'bar'
      },
      {
        label: "Citation Count",
        data: articleCount.map((data) => data.citationCount),
        hoverOffset: 4,
        borderColor: "red",
        borderWidth: 2,
        type:'line'
      }
    ]
  };
  useEffect(() => {
      getAuthorProfiles();
      getJournalCounts();
      getArticleYearCounts();
      getCitationCounts();
    }, []);
  const getAuthorProfiles = async () => {
      const response = await api.get(`https://backend-dot-oijs-429910.et.r.appspot.com/user/data/${username}`)
      setName(response.data.name)
      setAffiliation(response.data.affiliation)
      setCountry(response.data.country)
      setAffiliationAddress(response.data.affiliation_address)
  };
  const getJournalCounts = async () => {
    const response = await api.get(`https://backend-dot-oijs-429910.et.r.appspot.com/user/journal/${username}`)
    setJournalCount(response.data)
  }; 
  const getArticleYearCounts = async () => {
    const response = await api.get(`https://backend-dot-oijs-429910.et.r.appspot.com/user/article/${username}`)
    console.log(response.data)
    setArticleCount(response.data)
  };
  const getCitationCounts = async () => {
    const response = await api.get(`https://backend-dot-oijs-429910.et.r.appspot.com/articles/citation/${username}`)
    console.log(response.data)
    setCitationCount(response.data)
  };  
  return (
      <Layout>
          <div class="container-fluid">
              <div class="content-container">
                  
                  <div class="card m-3 mx-auto">
                      <h2 className='card-header text-center'>Author Analysis</h2>
                      <div className='card-body p-3'>
                          <h3 className='h3'>{name}</h3>
                          {affiliationAddress ?  
                              <p className='card-subtitle '>{affiliation}, {affiliationAddress},{country}</p>
                              :<p className='card-subtitle '>{affiliation},{country}</p>
                          }
                          <div class="card m-3">
                              <h5 className='card-header text-center'>Article by Journal</h5>
                              <div className='card-body row'>
                                <div className='col'>
                                  <Pie
                                        data={chartData}
                                        height={10}
                                        width={10}
                                        options={{
                                        plugins: {
                                            title: {
                                            display: false,
                                            text: "Article Journal Published"
                                            },
                                            legend: {
                                                display: true
                                            }
                                        }
                                        }}
                                    />
                                </div>
                                <div className='col'>
                                  <ul class="list-group">
                                    {journalCount.map((journal) => (
                                      <li className='list-group-item'>
                                        <div class="row justify-content-between">
                                          <p class="card-text col">{journal.title}</p>
                                          <p class="card-text col-1">{journal.publishCount}</p>
                                        </div>
                                      </li>
                                          
                                    ))}
                                      

                                  </ul>
                                </div>
                                  
                              </div>
                          </div>
                          <div class="card m-3"style={{width: 40+'%'}}>
                              <h5 className='card-header text-center'>Article by Year</h5>
                              <div className='card-body'>
                                  <Line
                                      data={chartData2}
                                      height={10}
                                      width={10}
                                      options={
                                        {
                                          plugins: {
                                              title: {
                                              display: false,
                                              text: "Users Gained between 2016-2020"
                                              },
                                              legend: {
                                                  labels: {
                                                      color:'rgb(255, 99, 132)'
                                                  },
                                                  display: true
                                              }
                                          },
                                          scale: {
                                            ticks: {
                                              precision: 0
                                            }
                                          }
                                        }
                                        
                                      }
                                  />
                              </div>
                          </div>
                          <div class="card m-3"style={{width: 40+'%'}}>
                              <h5 className='card-header text-center'>h-index</h5>
                              <div className='card-body'>
                                  <Line
                                      data={chartData3}
                                      height={10}
                                      width={10}
                                      options={
                                        {
                                          plugins: {
                                              title: {
                                              display: false,
                                              text: "Users Gained between 2016-2020"
                                              },
                                              legend: {
                                                  labels: {
                                                      color:'rgb(255, 99, 132)'
                                                  },
                                                  display: true
                                              }
                                          }
                                        }
                                      }
                                  />
                              </div>
                          </div>
                          <div class="card m-3"style={{width: 40+'%'}}>
                              <h5 className='card-header text-center'>Document & Citation Trends</h5>
                              <div className='card-body'>
                                  <Line
                                      data={chartData4}
                                      height={10}
                                      width={20}
                                      options={{
                                      plugins: {
                                          title: {
                                          display: false,
                                          text: "Users Gained between 2016-2020"
                                          },
                                          legend: {
                                              labels: {
                                                  color:'rgb(255, 99, 132)'
                                              },
                                              display: true
                                          }
                                      }
                                      }}
                                  />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Layout>
  );
}

export default AuthorProfile;