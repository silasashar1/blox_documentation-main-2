import React from 'react';
import './HubCards.css'; // Ensure the CSS file is imported

const HubCard = ({ title, description, link, buttonLabel, additionalButtonLabel, additionalButtonLink, iconSrc, comingSoon }) => (
  <div className="ComponentHub-Cards">
    <div className="Hub-Placeholder">
      <img src={iconSrc} alt={`${title} Icon`} className="Icon32pxData-Hub" />
    </div>
    <span className="Data-Hub">{title}</span>
    <span className="Collect-Data-Enrich-Analyse-the-tags-generated">{description}</span>
    {comingSoon ? (
      <div className="ComponentsButtonOutlined">
        <span className="Coming-Soon">
          <img src="https://d1r1e7xjkfj7nz.cloudfront.net/Vector2x.png" className="Vector" alt="Coming Soon Icon" />
          Coming Soon
        </span>
      </div>
    ) : (
      <>
        <div className="ComponentsButtonOutlined">
          <button>{buttonLabel}</button>
        </div>
        <div className="ComponentsButtonOutlined">
          <button>{additionalButtonLabel}</button>
        </div>
      </>
    )}
    {!comingSoon && <button className="ViewMoreButton">View More</button>}
  </div>
);

export default HubCard;
