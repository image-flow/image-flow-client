import Navbar from "../../Components/Navbar/Navbar";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import "./LandingPage.scss";
import BannerBG from "../../Assets/LandingPage/bannerTextBG.png";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="banner-one">
        <div className="banner-text" style={{ backgroundImage: `url()` }}>
          <div className="banner-heading">ImageFlow</div>
          <div className="banner-subheading">
            Automate and Visualize your Image Processing Workflows
          </div>
          <div className="banner-subheading" style={{ marginTop: ".25rem" }}>
            Unleash you creative potential.
          </div>
          <div className="buttons-wrapper">
            {/* <button>
              Start Using for Free &nbsp;
              <i class="fas fa-rocket"></i>
            </button>
            <button>
              Donate To Us &nbsp;
              <i class="fas fa-donate"></i>
            </button>
            <button>
              Star this project &nbsp;
              <i class="fab fa-github"></i>
            </button>
            <button>
              Contribute &nbsp;
              <i class="fas fa-code-branch"></i>
            </button>
            <button>
              About Us &nbsp;
              <i class="fas fa-user-tie"></i>
            </button> */}
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <i class="fas fa-rocket timeline-icon"></i>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <button>Start Using for Free &nbsp;</button>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <i class="fas fa-donate timeline-icon"></i>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <button>Donate To Us &nbsp;</button>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <i class="fab fa-github timeline-icon"></i>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  {" "}
                  <button>Star on GitHub &nbsp;</button>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <i class="fas fa-user-tie timeline-icon"></i>
                </TimelineSeparator>
                <TimelineContent>
                  <button>About Us &nbsp;</button>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
        <div className="img" style={{ backgroundImage: `url(${BannerBG})` }}>
          <div className="gradient-overlay"></div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
