import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/pr-fly-2.jpeg";
import ProjectImg2 from "../../assets/img/projects/pr-unze-1.jpeg";
import ProjectImg3 from "../../assets/img/projects/pr-khata-1.jpeg";
import ProjectImg4 from "../../assets/img/projects/pr-dentist.PNG";
import ProjectImg5 from "../../assets/img/projects/pr-bistro.PNG";
import ProjectImg6 from "../../assets/img/projects/pr-hiredroid.PNG";
import AddImage2 from "../../assets/img/add/add2.png";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Great Achievements</h1>
            <p className="font13">
              Tecknovation performs thorough research on each given problem and
              advises its customers on how their business growth aims can be
              achieved by the implementation of a specific and research-based
              software solution.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Fly Safari"
                text="Flysafari is a comprehensive project dedicated to international flight bookings. The platform provides detailed information to ensure travelers can make informed decisions about their journeys. Whether planning a single trip or a round trip, Flysafari caters to all your international travel needs."
                action={() =>
                  window.open("https://flysafariuk.co.uk/", "_blank")
                }
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Active Bistro"
                text="Active Bistro, your premier online platform for discovering top dining options! Our site uses cutting-edge technology for a seamless user experience. Key technologies include Next.js for fast front-end performance, NestJS for robust back-end management."
                action={() =>
                  window.open("https://activebistro.co.uk/", "_blank")
                }
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="mKhata"
                text="mKhata helps you manage your credit and make real time data-based decisions on credit sale. It is a digital ledger that replaces the outdated book-based system prone to errors and provides a complete comprehensive record of customer’s credit history which can be accessed any time."
                action={() => window.open("https://mkhata.me/", "_blank")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Dentist Ranked"
                text="Dentists Ranked is an online platform that aims to simplify the process of finding the right dentist or dental clinic for patients. Our extensive database provides detailed information about each dental clinic and dentist, along with ratings and reviews from previous patients."
                action={() =>
                  window.open("https://www.dentistsranked.com/", "_blank")
                }
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Unze"
                text="Unze is a dynamic online shopping brand catering to kids, women, and men, offering a diverse range of stylish products. It features a variety of fashion options to suit every taste and preference."
                action={() => window.open("https://unze.com.pk/", "_blank")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Hiredroid"
                text="Hiredroid is your platform for connecting skilled freelancers with businesses in need of top-tier talent. Whether you're looking for expert developers, designers, or other professionals, Hiredroid ensures you find the right match for your project needs."
                action={() => window.open("https://hiredroid.com/", "_blank")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              {/* <FullButton title="Load More" action={() => alert("clicked")} /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A few words about company</h4>
              <h2 className="font40 extraBold">A Study of Creativity</h2>
              <p className="font12">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
              <ButtonsRow
                className="flexNullCenter"
                style={{ margin: "30px 0" }}
              >
                <div style={{ width: "190px" }}>
                  <FullButton
                    title="Get Started"
                    action={() => alert("clicked")}
                  />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton
                    title="Contact Us"
                    action={() => alert("clicked")}
                    border
                  />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
