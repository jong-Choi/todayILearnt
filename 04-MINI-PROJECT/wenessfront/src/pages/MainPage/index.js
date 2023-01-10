import React from "react";
import styled from "styled-components";

function MainPage() {
  //템플릿출처 https://codepen.io/aybukeceylan/pen/gOpbRPO
  return (
    <StyledContainer>
      <link
        href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap"
        rel="stylesheet"
      />
      <div class="task-manager">
        <div class="left-bar">
          <div class="upper-part">
            <div class="actions">
              <div class="circle"></div>
              <div class="circle-2"></div>
            </div>
          </div>
          <div class="left-content">
            <ul class="action-list">
              <li class="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="feather feather-inbox"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-6l-2 3h-4l-2-3H2" />
                  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                </svg>
                <span>Inbox</span>
              </li>
              <li class="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span> Today</span>
              </li>
              <li class="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="feather feather-calendar"
                  viewBox="0 0 24 24"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <path d="M16 2v4M8 2v4m-5 4h18" />
                </svg>
                <span>Upcoming</span>
              </li>
              <li class="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-hash"
                >
                  <line x1="4" y1="9" x2="20" y2="9" />
                  <line x1="4" y1="15" x2="20" y2="15" />
                  <line x1="10" y1="3" x2="8" y2="21" />
                  <line x1="16" y1="3" x2="14" y2="21" />
                </svg>
                <span>Important</span>
              </li>
              <li class="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-users"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>Meetings</span>
              </li>
              <li class="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="feather feather-trash"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
                <span>Trash</span>
              </li>
            </ul>
            <ul class="category-list">
              <li class="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-users"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>Family</span>
              </li>
              <li class="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="feather feather-sun"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
                <span>Vacation</span>
              </li>
              <li class="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-trending-up"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                <span>Festival</span>
              </li>
              <li class="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-zap"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <span>Concerts</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="page-content">
          <div class="header">지금 내 자세</div>
          {/* 여기서부터 다른 템플릿이에여*/}
          {/* 템플릿 출처 : http://www.css3transition.com/profile-card-design/ */}
          <StyledContainer2>
            <div
              class="card-container"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              {/* <span class="pro">PRO</span> */}
              <img
                src="https://cdn2.sharechat.com/cv-65102bd_1647284708901_sc_new_compressed_thumb.jpeg"
                alt="user"
                style={{ objectFit: "cover" }}
              />
              <h3>올바른 자세</h3>
              <h6>88%</h6>
              {/* 그래프는 또 다른 템플릿이에여 */}
              {/* 출처 :  https://codepen.io/DashboardPack/pen/REmEZQ */}
              <div class="row">
                <div class="col-md-12">
                  <div class="mb-3 card">
                    <div class="card-header-tab card-header">
                      <div class="card-header-title">
                        <i class="header-icon lnr-rocket icon-gradient bg-tempting-azure">
                          {" "}
                        </i>
                        Bandwidth Reports
                      </div>
                      <div class="btn-actions-pane-right">
                        <div class="nav">
                          <a
                            href="hello"
                            class="border-0 btn-pill btn-wide btn-transition active btn btn-outline-alternate"
                          >
                            Tab 1
                          </a>
                          <a
                            href="hello"
                            class="ml-1 btn-pill btn-wide border-0 btn-transition  btn btn-outline-alternate second-tab-toggle-alt"
                          >
                            Tab 2
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="tab-content">
                      <div class="tab-pane fade active show" id="tab-eg-55">
                        <div class="widget-chart p-3">
                          {/* <div style={{ height: "350px" }}>
                            <canvas id="line-chart"></canvas>
                          </div> */}
                          <div class="widget-chart-content text-center mt-5">
                            <div class="widget-description mt-0 text-warning">
                              <i class="fa"></i>
                              <span class="pl-1">2시간 30분</span>
                              <span class="text-muted opacity-8 pl-1">
                                {" "}
                                중{" "}
                              </span>
                              <i class="fa"></i>
                              <span class="pl-1">86% </span>
                              <span class="text-muted opacity-8 pl-1">
                                동안 올바른 자세였습니다.
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="pt-2 card-body">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="widget-content">
                                <div class="widget-content-outer">
                                  <div class="widget-content-wrapper">
                                    <div class="widget-content-left">
                                      <div class="widget-numbers fsize-3 text-muted">
                                        86%
                                      </div>
                                    </div>
                                    <div class="widget-content-right">
                                      <div class="text-muted opacity-6">
                                        올바른 자세
                                      </div>
                                    </div>
                                  </div>
                                  <div class="widget-progress-wrapper mt-1">
                                    <div class="progress-bar-sm progress-bar-animated-alt progress">
                                      <div
                                        class="progress-bar bg-danger"
                                        role="progressbar"
                                        aria-valuenow="63"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: "86%" }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="widget-content">
                                <div class="widget-content-outer">
                                  <div class="widget-content-wrapper">
                                    <div class="widget-content-left">
                                      <div class="widget-numbers fsize-3 text-muted">
                                        5%
                                      </div>
                                    </div>
                                    <div class="widget-content-right">
                                      <div class="text-muted opacity-6">
                                        적절한 그래프 템플릿을 못찾겠는 자세
                                      </div>
                                    </div>
                                  </div>
                                  <div class="widget-progress-wrapper mt-1">
                                    <div class="progress-bar-sm progress-bar-animated-alt progress">
                                      <div
                                        class="progress-bar bg-success"
                                        role="progressbar"
                                        aria-valuenow="32"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: "5%" }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="widget-content">
                                <div class="widget-content-outer">
                                  <div class="widget-content-wrapper">
                                    <div class="widget-content-left">
                                      <div class="widget-numbers fsize-3 text-muted">
                                        4%
                                      </div>
                                    </div>
                                    <div class="widget-content-right">
                                      <div class="text-muted opacity-6">
                                        턱 괸 자세
                                      </div>
                                    </div>
                                  </div>
                                  <div class="widget-progress-wrapper mt-1">
                                    <div class="progress-bar-sm progress-bar-animated-alt progress">
                                      <div
                                        class="progress-bar bg-primary"
                                        role="progressbar"
                                        aria-valuenow="71"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: "4%" }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="widget-content">
                                <div class="widget-content-outer">
                                  <div class="widget-content-wrapper">
                                    <div class="widget-content-left">
                                      <div class="widget-numbers fsize-3 text-muted">
                                        15%
                                      </div>
                                    </div>
                                    <div class="widget-content-right">
                                      <div class="text-muted opacity-6">
                                        누운 자세
                                      </div>
                                    </div>
                                  </div>
                                  <div class="widget-progress-wrapper mt-1">
                                    <div class="progress-bar-sm progress-bar-animated-alt progress">
                                      <div
                                        class="progress-bar bg-warning"
                                        role="progressbar"
                                        aria-valuenow="41"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: "15%" }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                User interface designer and <br /> front-end developer
              </p>
              {/* 그래프템플릿 끝 */}
              {/* <div class="buttons">
                <button class="primary">Message</button>
                <button class="primary ghost">Following</button>
              </div> */}
              <div class="skills">
                {/* <h6>Skills</h6>
                <ul>
                  <li>UI / UX</li>
                  <li>Front End Development</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node</li>
                </ul> */}
              </div>
            </div>
          </StyledContainer2>
          {/* 여기까지 다른 템플릿이었어요 */}
        </div>
        <div class="right-bar">
          <div class="top-part">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-users"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div class="count">6</div>
          </div>
          <div class="header">친구들이 접속중인 방</div>
          <div class="right-content">
            <div class="task-box yellow">
              <div class="description-task">
                <div class="time">08:00 - 09:00 AM</div>
                <div class="task-name">Product Review</div>
              </div>
              <div class="more-button"></div>
              <div class="members">
                <img
                  src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                  alt="member"
                />
                <img
                  src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=2210&q=80"
                  alt="member-2"
                />
                <img
                  src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                  alt="member-3"
                />
                <img
                  src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                  alt="member-4"
                />
              </div>
            </div>
            <div class="task-box blue">
              <div class="description-task">
                <div class="time">10:00 - 11:00 AM</div>
                <div class="task-name">Design Meeting</div>
              </div>
              <div class="more-button"></div>
              <div class="members">
                <img
                  src="https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&auto=format&fit=crop&w=2230&q=80"
                  alt="member"
                />
                <img
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                  alt="member-2"
                />
                <img
                  src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                  alt="member-3"
                />
              </div>
            </div>
            <div class="task-box red">
              <div class="description-task">
                <div class="time">01:00 - 02:00 PM</div>
                <div class="task-name">Team Meeting</div>
              </div>
              <div class="more-button"></div>
              <div class="members">
                <img
                  src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                  alt="member"
                />
                <img
                  src="https://images.unsplash.com/photo-1475552113915-6fcb52652ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
                  alt="member-2"
                />
                <img
                  src="https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                  alt="member-3"
                />
                <img
                  src="https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&auto=format&fit=crop&w=2230&q=80"
                  alt="member-4"
                />
              </div>
            </div>
            <div class="task-box green">
              <div class="description-task">
                <div class="time">03:00 - 04:00 PM</div>
                <div class="task-name">Release Event</div>
              </div>
              <div class="more-button"></div>
              <div class="members">
                <img
                  src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80"
                  alt="member"
                />
                <img
                  src="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=80"
                  alt="member-2"
                />
                <img
                  src="https://images.unsplash.com/photo-1521122872341-065792fb2fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2208&q=80"
                  alt="member-3"
                />
                <img
                  src="https://images.unsplash.com/photo-1486302913014-862923f5fd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=3400&q=80"
                  alt="member-4"
                />
                <img
                  src="https://images.unsplash.com/photo-1484187216010-59798e9cc726?ixlib=rb-1.2.1&auto=format&fit=crop&w=955&q=80"
                  alt="member-5"
                />
              </div>
            </div>
            <div class="task-box blue">
              <div class="description-task">
                <div class="time">08:00 - 09:00 PM</div>
                <div class="task-name">Release Event</div>
              </div>
              <div class="more-button"></div>
              <div class="members">
                <img
                  src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80"
                  alt="member"
                />
                <img
                  src="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=80"
                  alt="member-2"
                />
                <img
                  src="https://images.unsplash.com/photo-1521122872341-065792fb2fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2208&q=80"
                  alt="member-3"
                />
                <img
                  src="https://images.unsplash.com/photo-1486302913014-862923f5fd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=3400&q=80"
                  alt="member-4"
                />
                <img
                  src="https://images.unsplash.com/photo-1484187216010-59798e9cc726?ixlib=rb-1.2.1&auto=format&fit=crop&w=955&q=80"
                  alt="member-5"
                />
              </div>
            </div>
            <div class="task-box yellow">
              <div class="description-task">
                <div class="time">11:00 - 12:00 PM</div>
                <div class="task-name">Practise</div>
              </div>
              <div class="more-button"></div>
              <div class="members">
                <img
                  src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                  alt="member"
                />
                <img
                  src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=2210&q=80"
                  alt="member-2"
                />
                <img
                  src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                  alt="member-3"
                />
                <img
                  src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                  alt="member-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default MainPage;

const StyledContainer = styled.div`
  * {
    box-sizing: border-box;
    outline: none;
  }

  :root {
    --bg-color: #f5f8ff;
    --main-color: #353536;
    --secondary-color: #8e92a4;
    --main-text-color: #5d606b;
    --secondary-dark-color: #9496a5;
    --tag-color-one: #e0fbf6;
    --tag-color-text-one: #58c2a9;
    --tag-color-two: #ece7fe;
    --tag-color-text-two: #8972f3;
    --tag-color-three: #fde7ea;
    --tag-color-text-three: #e77f89;
    --tag-color-four: #f7f8fc;
    --tag-color-text-four: #a0a6b5;
    --checkbox-color: #009e90;
    --button-color: #49beb7;
    --box-color: #fff1d6;
    --box-color-2: #d3e6ff;
    --box-color-3: #ffd9d9;
    --box-color-4: #daffe5;
    --task-color: #777982;
  }

  %flex {
    display: flex;
    align-items: center;
  }

  body {
    margin: 0;
    @extend %flex;
    justify-content: center;
    flex-direction: column;
    overflow: auto;
    width: 100%;
    height: 100vh;
    padding: 20px;
    font-family: "DM Sans", sans-serif;
    font-size: 12px;
    background-image: linear-gradient(
        21deg,
        rgba(64, 83, 206, 0.3697003234675773) 68%,
        rgba(255, 206, 196, 0.5) 163%
      ),
      linear-gradient(
        163deg,
        rgba(49, 146, 170, 0.07944489965716128) 86%,
        rgba(239, 112, 138, 0.5) 40%
      ),
      linear-gradient(
        30deg,
        rgba(76, 79, 173, 0.6173675716587805) 22%,
        rgba(237, 106, 134, 0.5) 169%
      ),
      linear-gradient(
        48deg,
        rgba(31, 85, 147, 0.7323890641868473) 64%,
        rgba(247, 126, 132, 0.5) 43%
      );
    background-blend-mode: overlay, multiply, color, normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  .task-manager {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    height: 90vh;
    max-height: 900px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0.3px 2.2px rgba(0, 0, 0, 0.011),
      0 0.7px 5.3px rgba(0, 0, 0, 0.016), 0 1.3px 10px rgba(0, 0, 0, 0.02),
      0 2.2px 17.9px rgba(0, 0, 0, 0.024), 0 4.2px 33.4px rgba(0, 0, 0, 0.029),
      0 10px 80px rgba(0, 0, 0, 0.04);
    overflow: hidden;
  }

  .left-bar {
    background-color: var(--bg-color);
    width: 230px;
    border-right: 1px solid #e3e7f7;
    position: relative;
  }

  .left-content {
    padding: 40px;
  }

  .item {
    @extend %flex;
    color: var(--main-color);
    margin-bottom: 14px;
    font-weight: 500;

    svg {
      width: 14px;
      height: 14px;
      color: currentcolor;
      margin-right: 10px;
    }
  }

  .category-list {
    margin-top: 50px;

    .item {
      color: var(--secondary-color);
    }
  }

  .actions {
    padding: 12px;
    display: flex;
    justify-content: space-between;
  }

  .circle {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #fe4d46;
    box-shadow: 14px 0 0 0 #fbc023, 28px 0 0 0 #7dd21f;
  }

  .circle-2 {
    border-radius: 50%;
    width: 4px;
    height: 4px;
    background-color: #d5d7e3;
    box-shadow: -6px 0 0 0 #d5d7e3, 6px 0 0 0 #d5d7e3;
  }

  .right-bar {
    width: 320px;
    border-left: 1px solid #e3e7f7;
    display: flex;
    flex-direction: column;

    .header {
      font-size: 20px;
      color: var(--main-text-color);
      margin-left: 30px;
    }
  }

  .top-part {
    padding: 30px;
    @extend %flex;
    align-self: flex-end;

    svg {
      width: 14px;
      height: 14px;
      color: var(--main-color);
      margin-right: 14px;
    }

    .count {
      font-size: 12px;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      background-color: #623ce8;
      color: #fff;
      @extend %flex;
      justify-content: center;
    }
  }

  .right-content {
    padding: 10px 40px;
    overflow-y: auto;
    flex: 1;
  }

  .task-box {
    position: relative;
    border-radius: 12px;
    width: 100%;
    margin: 20px 0;
    padding: 16px;
    cursor: pointer;
    box-shadow: 2px 2px 4px 0px rgba(235, 235, 235, 1);

    &:hover {
      transform: scale(1.02);
    }
  }

  .time {
    margin-bottom: 6px;
    opacity: 0.4;
    font-size: 10px;
  }

  .task-name {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.6;
  }

  .yellow {
    background-color: var(--box-color);
  }

  .blue {
    background-color: var(--box-color-2);
  }

  .red {
    background-color: var(--box-color-3);
  }

  .green {
    background-color: var(--box-color-4);
  }

  .more-button {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #8e92a4;
    box-shadow: 0 -4px 0 0 #8e92a4, 0 4px 0 0 #8e92a4;
    opacity: 0.4;
    right: 20px;
    top: 30px;
    cursor: pointer;
  }

  .members {
    display: flex;
    margin-top: 14px;

    img {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      margin-right: 4px;
      object-fit: cover;
    }
  }

  .page-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 40px 20px 0 20px;

    .header {
      font-size: 26px;
      color: var(--main-color);
      margin-top: 30px;
    }
  }

  .content-categories {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    border-bottom: 1px solid #ddd;
    padding: 20px 0;
  }

  .nav-item {
    display: none;
  }

  .category {
    font-weight: 500;
    color: var(--secondary-color);
    border-bottom: 1px solid #ddd;
    transition: 0.4s ease-in;
    padding: 20px 30px;
    cursor: pointer;
  }

  #opt-1:checked + label,
  #opt-2:checked + label,
  #opt-3:checked + label,
  #opt-4:checked + label {
    color: var(--checkbox-color);
    border-bottom: 2px solid var(--checkbox-color);
  }

  .task-item {
    display: none;
  }

  .tasks-wrapper {
    padding: 30px 0;
    flex: 1;
    overflow-y: auto;
    height: 100%;
    padding-right: 8px;
  }

  .task {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 16px;
    padding-left: 30px;
    color: var(--task-color);
    font-size: 13px;
    font-weight: 500;

    &:hover {
      transform: translatex(2px);
    }

    label {
      cursor: pointer;
    }
  }

  label .label-text {
    position: relative;
  }

  label .label-text:before {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    border: 1px solid #ddd;
    border-radius: 2px;
    left: -24px;
    transition: 0.2s ease;
  }

  .task-item:checked + label .label-text:before {
    background-color: var(--checkbox-color);
    border: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 10px;
    background-position: center;
    border: 1px solid var(--checkbox-color);
  }

  .tag {
    font-size: 10px;
    padding: 4px 8px;
    border-radius: 20px;

    &.approved {
      background-color: var(--tag-color-one);
      color: var(--tag-color-text-one);
    }

    &.progress {
      background-color: var(--tag-color-two);
      color: var(--tag-color-text-two);
    }

    &.review {
      background-color: var(--tag-color-three);
      color: var(--tag-color-text-three);
    }

    &.waiting {
      background-color: var(--tag-color-four);
      color: var(--tag-color-text-four);
    }
  }

  .upcoming {
    border-bottom: 1px solid #ddd;
    padding-bottom: 30px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 900px) {
    .left-bar {
      display: none;
    }
  }

  @media screen and (max-width: 700px) {
    .task-manager {
      flex-direction: column;
      overflow-y: auto;
    }

    .right-bar,
    .page-content {
      width: 100%;
      display: block;
    }

    .tasks-wrapper {
      height: auto;
    }
  }

  @media screen and (max-width: 520px) {
    .page-content {
      padding: 40px 10px 0 10px;
    }

    .right-content {
      padding: 10px 16px;
    }

    .category {
      padding: 20px;
    }
  }
`;

const StyledContainer2 = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat");

  * {
    box-sizing: border-box;
  }

  body {
    text-align: center;
    background-image: linear-gradient(
      to right top,
      #2d0036,
      #4f015b,
      #730283,
      #9a02ac,
      #c400d7
    );
    font-family: Montserrat, sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    min-height: 100vh;
    margin: 0;
  }

  h3 {
    margin: 10px 0;
  }

  h6 {
    margin: 5px 0;
    text-transform: uppercase;
  }

  p {
    font-size: 14px;
    line-height: 21px;
  }

  .card-container {
    background-color: #231e39;
    border-radius: 25px;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.35);
    color: #b3b8cd;
    padding: 30px 0 0;
    position: relative;
    width: 350px;
    max-width: 100%;
    text-align: center;
    margin: 20px 0;
    overflow: hidden;
  }

  .card-container .pro {
    color: #231e39;
    background-color: #febb0b;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
    padding: 3px 7px;
    position: absolute;
    top: 30px;
    left: 30px;
  }

  .card-container img {
    border: 1px solid #c400d7;
    border-radius: 50%;
    padding: 7px;
    height: 150px;
    width: 150px;
  }

  button.primary {
    background-color: #c400d7;
    border: 1px solid #c400d7;
    border-radius: 3px;
    color: #fff;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    padding: 10px 25px;
  }

  button.primary.ghost {
    background-color: transparent;
    color: #c400d7;
  }

  .skills {
    background-color: #1f1a36;
    text-align: left;
    padding: 15px;
    margin-top: 30px;
  }

  .skills ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .skills ul li {
    border: 1px solid #2d2747;
    border-radius: 2px;
    display: inline-block;
    font-size: 12px;
    margin: 0 7px 7px 0;
    padding: 7px;
  }
`;
