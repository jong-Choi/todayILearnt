import React from "react";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <>
      <StyledContainer>
        <div class="container">
          <div class="left">
            <div class="header">
              <h2 class="animation a1">Welcome Back</h2>
              <h4 class="animation a2">
                Log in to your account using email and password
              </h4>
            </div>
            <div class="form">
              <input
                type="email"
                class="form-field animation a3"
                placeholder="Email Address"
              />
              <input
                type="password"
                class="form-field animation a4"
                placeholder="Password"
              />
              <p class="animation a5">
                <p>Forgot Password</p>
              </p>
              {/* <a class="animation a6" href="/"> */}
              <button class="animation a6">LOGIN</button>
              {/* </a> */}
            </div>
          </div>
          <div class="right"></div>
        </div>
      </StyledContainer>
      <StyledContainer2>
        <section class="banner">
          <div class="container">
            <div class="banner-text">
              <h1>허리피라우</h1>
              <p>
                <strong>구글에서 다운로드 받으세요</strong> 구글 확장 프로그램을
                설치하고 광명을 찾으세요 <br></br>이 템플릿 출처
                https://codepen.io/andrewheinke/pen/XeLjmL
              </p>
              <button>설치하러 가기 ㄱㄱ</button>
            </div>
          </div>
          <img
            class="banner-image"
            src="https://preview.ibb.co/bMi5Y6/banner_img.png"
            alt="monitoring"
          />
        </section>

        <div class="container">
          <div class="row">
            <div class="mb-30 col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-icon"
                  src="https://image.ibb.co/cFV8mR/monitoring.png"
                  alt="monitoring"
                />
                <h3 class="card-title">Monitoring</h3>
                <p class="card-text">
                  Collect metrics on visibility, monitor Droplet performance and
                  receive alerts when problems arise in your infrastructure–at
                  no additional cost.
                </p>
                <a class="card-link" href="#">
                  Learn more
                </a>
              </div>
            </div>
            <div class="mb-30 col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-icon"
                  src="https://image.ibb.co/jfmg6R/cloud_firewalls.png"
                  alt="monitoring"
                />
                <h3 class="card-title">Cloud Firewalls</h3>
                <p class="card-text">
                  Perfect for both staging and production deployments, cloud
                  firewalls let you easily secure your infrastructure and define
                  what services are visible on your Droplets–at no additional
                  cost.
                </p>
                <a class="card-link" href="#">
                  Learn more
                </a>
              </div>
            </div>
            <div class="mb-30 col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-icon"
                  src="https://image.ibb.co/fcnzt6/team_management.png"
                  alt="team management"
                />
                <h3 class="card-title">개쩌는 앱입니다</h3>
                <p class="card-text">너무나 쩔어서 허리를 쭉쭉 펴버럽니다.</p>
                <a class="card-link" href="#">
                  Learn more
                </a>
              </div>
            </div>
            <div class="mb-30 col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-icon"
                  src="https://image.ibb.co/evyiLm/backups.png"
                  alt="monitoring"
                />
                <h3 class="card-title">Backups</h3>
                <p class="card-text">
                  Backups run automatically on your Droplets each week and are
                  stored for four weeks–add 20% of monthly Droplet cost.
                </p>
                <a class="card-link" href="#">
                  Learn more
                </a>
              </div>
            </div>
            <div class="mb-30 col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-icon"
                  src="https://image.ibb.co/g9bERR/snapshots.png"
                  alt="snapshots"
                />
                <h3 class="card-title">Snapshots</h3>
                <p class="card-text">
                  Scale out your system effortlessly. Just take a snapshot of an
                  existing server, then spin up a new Droplet from the
                  snapshot–add $0.05 per gigabyte per month.
                </p>
                <a class="card-link" href="http">
                  Learn more
                </a>
              </div>
            </div>
            <div class="mb-30 col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-icon"
                  src="https://image.ibb.co/cFV8mR/monitoring.png"
                  alt="monitoring"
                />
                <h3 class="card-title">Monitoring</h3>
                <p class="card-text">
                  Collect metrics on visibility, monitor Droplet performance and
                  receive alerts when problems arise in your infrastructure–at
                  no additional cost.
                </p>
                <a class="card-link" href="http">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </StyledContainer2>
    </>
  );
};

export default LoginPage;

const StyledContainer = styled.div`
  * {
    box-sizing: border-box;
  }
  @import url("https://fonts.googleapis.com/css?family=Rubik:400,500&display=swap");

  body {
    font-family: "Rubik", sans-serif;
  }

  .container {
    display: flex;
    height: 100vh;
  }

  .left {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    animation-name: left;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-delay: 1s;
  }

  .right {
    flex: 1;
    background-color: black;
    transition: 1s;
    background-image: url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .header > h2 {
    margin: 0;
    color: #4f46a5;
  }

  .header > h4 {
    margin-top: 10px;
    font-weight: normal;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.4);
  }

  .form {
    max-width: 80%;
    display: flex;
    flex-direction: column;
  }

  .form > p {
    text-align: right;
  }

  .form > p > a {
    color: #000;
    font-size: 14px;
  }

  .form-field {
    height: 46px;
    padding: 0 16px;
    border: 2px solid #ddd;
    border-radius: 4px;
    font-family: "Rubik", sans-serif;
    outline: 0;
    transition: 0.2s;
    margin-top: 20px;
  }

  .form-field:focus {
    border-color: #0f7ef1;
  }

  .form > button {
    padding: 12px 10px;
    border: 0;
    background: linear-gradient(to right, #de48b5 0%, #0097ff 100%);
    border-radius: 3px;
    margin-top: 10px;
    color: #fff;
    letter-spacing: 1px;
    font-family: "Rubik", sans-serif;
  }

  .animation {
    animation-name: move;
    animation-duration: 0.4s;
    animation-fill-mode: both;
    animation-delay: 2s;
  }

  .a1 {
    animation-delay: 2s;
  }

  .a2 {
    animation-delay: 2.1s;
  }

  .a3 {
    animation-delay: 2.2s;
  }

  .a4 {
    animation-delay: 2.3s;
  }

  .a5 {
    animation-delay: 2.4s;
  }

  .a6 {
    animation-delay: 2.5s;
  }

  @keyframes move {
    0% {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-40px);
    }

    100% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }

  @keyframes left {
    0% {
      opacity: 0;
      width: 0;
    }

    100% {
      opacity: 1;
      padding: 20px 40px;
      width: 440px;
    }
  }
`;

const StyledContainer2 = styled.div`
  // variables
  $darkPurple: #00106a;
  $lightBlue: #dfe9ff;
  $activeBlue: #4b71ff;
  $white: #ffffff;
  $lightPurple: #989dc5;

  // mixins
  @mixin box-shadow($top, $left, $blur, $color, $inset: "") {
    -webkit-box-shadow: $top $left $blur $color #{$inset};
    -moz-box-shadow: $top $left $blur $color #{$inset};
    box-shadow: $top $left $blur $color #{$inset};
  }

  body {
    background: $lightBlue;
    font-family: Lato, sans-serif;
  }

  // navigation styling
  nav {
    height: 50px;
    background: $white;
    @include box-shadow(0, 0.5rem, 1.5rem, rgba(0, 0, 0, 0.15));
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    z-index: -2;
    position: relative;
    ul {
      margin: 0;
      list-style: none;
      padding: 0;
      display: flex;
      align-items: center;
      cursor: pointer;
      li {
        margin-right: 30px;
        color: $activeBlue;
        &:last-child {
          margin-right: 0px;
        }
      }
    }
    .logo {
      height: 50px;
      width: 75px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      margin-right: 30px;
      background-color: #4b71ff;
      cursor: pointer;
    }
    .arrow-down {
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-top: 15px solid #fff;
    }
  }

  // banner styles
  .banner {
    height: auto;
    margin: 32px 0px;
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 1;
    @media (min-width: 768px) {
      height: 450px;
      margin-bottom: 32px;
    }
    .banner-image {
      position: absolute;
      opacity: 0.25;
      right: 0px;
      top: 0px;
      height: 300px;
      z-index: -1;
      -webkit-filter: drop-shadow(0 3rem 0.05rem rgba(191, 216, 255, 1));
      filter: drop-shadow(0 3rem 0.05rem rgba(191, 216, 255, 1));
      @media (min-width: 768px) {
        display: inherit;
        height: 400px;
        top: 0px;
        opacity: 0.5;
      }
      @media (min-width: 992px) {
        height: 500px;
        top: -50px;
        opacity: 1;
      }
    }

    .banner-text {
      max-width: 550px;
      float: left;
      h1 {
        color: $darkPurple;
        font-size: 3rem;
        font-weight: 700;
        letter-spacing: 3px;
        margin-bottom: 1rem;
      }
      p {
        color: $darkPurple;
        font-size: 1.05rem;
        line-height: 1.75;
      }
    }
    button {
      border: 0;
      border-radius: 50px;
      padding: 0.75rem 2.75rem;
      background: $activeBlue;
      color: $white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.25);
      cursor: pointer;
      position: relative;
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 1px;
      -webkit-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;

      &:hover {
        -webkit-transform: translateY(-5px);
        -ms-transform: translateY(-5px);
        -o-transform: translateY(-5px);
        transform: translateY(-5px);
        box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.25);
      }
    }
  }

  // card styles
  .mb-30 {
    margin-bottom: 30px;
  }
  .card {
    padding: 16px 24px;
    background: $white;
    height: 100%;
    position: relative;
    border: none;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15);
    border: 2px solid transparent;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    z-index: 10;
    h3.card-title {
      font-weight: 700;
      font-size: 1.3rem;
      color: $darkPurple;
    }
    p {
      color: $lightPurple;
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 72px;
    }
    .card-link {
      position: absolute;
      bottom: 18px;
    }
    &:hover {
      -webkit-transform: translateY(-5px);
      -ms-transform: translateY(-15px);
      -o-transform: translateY(-15px);
      transform: translateY(-15px);
      box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.15);
      cursor: pointer;
    }
    .card-icon {
      width: 60px;
      margin-bottom: 8px;
      position: relative;
      top: 0;
      left: -12px;
    }
  }

  // footer styles
  footer {
    background: $darkPurple;
    margin: 32px 0 0px;
    padding: 32px 0;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        color: $white;
        margin-bottom: 16px;
      }
    }
  }
`;
