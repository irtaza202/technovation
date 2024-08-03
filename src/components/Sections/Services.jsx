import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/pic4.PNG";
import AddImage2 from "../../assets/img/pic6.PNG";
import AddImage3 from "../../assets/img/pic2.PNG";
import AddImage4 from "../../assets/img/pic5.PNG";
import { Link } from "react-scroll";

export default function Services() {
  return (
    <Wrapper id="services">
      {/* <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div> */}
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              Our IT consulting services are designed to help businesses
              leverage technology to streamline processes, reduce costs, and
              improve performance. We work with our clients to identify
              opportunities for improvement and provide recommendations for
              implementing the latest technologies and best practices.At our
              software company, we pride ourselves on our commitment to
              excellence, customer satisfaction, and delivering innovative
              solutions that drive results. Contact us today to learn more about
              how we can help your business succeed in the digital age.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Graphic Design"
                subtitle="Graphic design extends beyond establishing identity and brand recognition. It can be very effective at attracting attention and encouraging your audience to want to learn more. It also can be employed to produce visual aids that can better help you communicate your ideas."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Web Design & Development"
                subtitle="Our website developers provide expert web application development and web design services to our clients. Wolf-techs offers a variety of website design and development services, from creating mobile web development solutions and responsive website designs, to building custom e-commerce experiences using the latest and proven web technologies."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="App Design & Development"
                subtitle="Our application software developers are industry-specific technology experts with many years of combined experience delivering interoperable, scalable, and flexible web & mobile applications for all kinds of industries."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="printer"
                title="Social Media Marketing"
                subtitle="Does your business have the votes of confidence it needs from social media networks? Build your brand awareness across the web and create meaningful connections with your customers and followers through social media marketing (SMM)."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Web Hosting"
                subtitle="We only provide fully managed, reliable web hosting so you can focus on taking care of your clients and building amazing websites. Our services are backed by a 100% network and power uptime and monitored 24/7."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">A few words about company</h4>
                <h2 className="font40 extraBold">A Study of Creativity</h2>
                <p className="font12">
                  Founded in 2021, Tecknovation was built on the vision of
                  delivering high performance technology solutions that redefine
                  and streamline the way financial institutions, financial
                  professionals and their clients transact business. While we’ve
                  grown to become a major force in the industry, we’ve been
                  careful to retain what got us there: A relentless dedication
                  to finding new ways to help financial institutions reach their
                  goals, manage their businesses more efficiently, and generate
                  new revenue. We have continued steady growth to become a
                  leading financial technology provider to some of the most
                  prestigious firms in the industry.
                </p>
                <ButtonsRow
                  className="flexNullCenter"
                  style={{ margin: "30px 0" }}
                >
                  <div style={{ width: "190px" }}>
                    {/* <FullButton
                      title="Get Started"
                      action={() => alert("clicked")}
                    /> */}
                    <Link
                      activeClass="active"
                      style={{
                        padding: "10px 25px",
                        cursor: "pointer",
                        backgroundColor: "#7620ff",
                        color: "white",
                        borderRadius: "13px",
                      }}
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-80}
                    >
                      Contact Us
                    </Link>
                  </div>
                  {/* <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton
                      title="Contact Us"
                      action={() => alert("clicked")}
                      border
                    />
                  </div> */}
                </ButtonsRow>
              </AddLeft>
              <AddRight style={{position:'unset'}}>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1}  alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2}  alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp1>
                      <img src={AddImage3} style={{width:'75%', marginLeft:'15px'}} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp4>
                      <img src={AddImage4} style={{width:197, height:224}} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
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
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
