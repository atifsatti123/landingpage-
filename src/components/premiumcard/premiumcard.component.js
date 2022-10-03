import React from "react";
import "./premiumcard.styles.css";

const Premiumcardcomponent = ({ premium }) => {
  const { id, planName, description, price, lists,btn,clasName } = premium;
  return (
    <div className={clasName}>
      <div className="premium-card-plan">
        <h3>{planName}</h3>
      </div>
      <div className={''}></div>
      <div className="premium-card-description">{description}</div>

      <div className="premium-card-price">
        {price}<span className="subscribe">Per month</span></div>
        <div className={`${id === 1 ? "bgblack" : "bgwhite"} subscribe`}>
             
          
        </div>
        <div className="premium-card-lists">
        {premium.lists.map((list, key) => {
                        return (
                            <ul className={`${(price == '$0') ? 'greyColor' : 'pro'} lists`}

                                id={`${(price == '$0') ? 'basic-list-' + key : 'pro-list-' + key}`}

                                key={key}>
                                <li>{list.first}</li>
                                {/* <li></li> */}
                            </ul>
                        )
                    })}
        </div>
            <div className={`premium-button`}>{btn}</div>
      </div>
    
  );
};

export default Premiumcardcomponent;
