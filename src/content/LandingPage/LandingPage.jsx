import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Tabs, Tab, } from 'carbon-components-react';
import Image from './image2.jpg'

const LandingPage = () => {
  const props = {
    tabs: {
      selected: 0,
      role: 'navigation',
    },
    tab: {
      role: 'presentation',
      tabIndex: 0,
    },
  };
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
  <div className="bx--col-lg-16">
    <Breadcrumb noTrailingSlash aria-label="Page navigation">
      <BreadcrumbItem>
        <a href="/">Getting started</a>
      </BreadcrumbItem>
    </Breadcrumb>
    <h1 className="landing-page__heading">Fashioning &amp; Designing with Ck-collections</h1>
  </div>
</div>
<div className="bx--row landing-page__r2">
  <div className="bx--col bx--no-gutter">
    <Tabs {...props.tabs} aria-label="Tab navigation">
      <Tab {...props.tab} label="About">
        <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div className="bx--row landing-page__tab-content">
            <div className="bx--col-md-4 bx--col-lg-7">
              <h2 className="landing-page__subheading">
                What is Fashioning?
              </h2>
              <div className="landing-page__P">
              <p>
              With Browzwear, apparel companies are moving to true-to-life digital samples that remove productivity barriers, speed up time to market, and enhance sustainability.
              </p>
              
              <h3>650+ ORGANIZATIONS USE BROWZWEAR</h3>
              <p>
Leading fashion brands and manufacturers around the world use Browzwear products to accelerate product development and business growth
</p>
              </div>
              <Button>Learn more</Button>
            </div>        
            <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            <img 
              className="landing-page__illo"
              src={Image} 
              alt="Carbon illustration" />
            </div>
          </div>
        </div>
      </Tab>
      <Tab {...props.tab} label="Design">
        <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div className="bx--row landing-page__tab-content">
            <div className="bx--col-lg-16">
              Rapidly build beautiful and accessible experiences. The Carbon kit
              contains all resources you need to get started.
            </div>
          </div>
        </div>
      </Tab>
      <Tab {...props.tab} label="Develop">
        <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div className="bx--row landing-page__tab-content">
            <div className="bx--col-lg-16">
              Carbon provides styles and components in Vanilla, React, Angular,
              and Vue for anyone building on the web.
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>
  </div>
</div>
      <div className="bx--row landing-page__r3">
        <div className="bx--col-md-4 bx--col-lg-4">
          <h3 className="landing-page__label">

          </h3>
        </div>
        <div className="bx--col-md-4 bx--col-lg-4">Fashion design is a form of art dedicated to the creation of clothing and other lifestyle accessories. Modern fashion design is divided into two basic categories: haute couture and ready-to-wear. The haute couture collection is dedicated to certain customers and is custom sized to fit these customers exactly.</div>
        <div className="bx--col-md-4 bx--col-lg-4">Carbon is Modular</div>
        <div className="bx--col-md-4 bx--col-lg-4">Carbon is Consistent</div>
      </div>
    </div>
  );};

export default LandingPage;