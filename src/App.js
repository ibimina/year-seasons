import { React, Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Button from "./Button";

class App extends Component {
  state = { winter: false, summer: false, spring: false, fall: false };
  winterSeason = () => {
    this.setState({ winter: !this.state.winter });
    this.setState({ summer: false });
    this.setState({ spring: false });
      this.setState({ fall: false });
  };
  summerSeason = () => {
    this.setState({ summer: !this.state.summer });
    this.setState({ winter: false });
    this.setState({ spring: false });
      this.setState({ fall: false });
  };
  springSeason = () => {
    this.setState({ spring: !this.state.spring });
    this.setState({ winter: false });
    this.setState({ summer: false });
    this.setState({ fall: false });
  };
  fallSeason = () => {
    this.setState({ fall: !this.state.fall });
    this.setState({ winter: false });
    this.setState({ summer: false });
    this.setState({ spring: false });
  };

  render() {
    const title = "Seasons in the year";
    const details =
      "In many parts of the world, the year is made up of four different seasons.These seasons are spring, summer, fall, and winter.Each has its own pattern of weather and varying hours of sunlight during the rainy days.The northern and southern parts of the Earth have different season at the same time. This difference is due to which part of Earth is nearst the sun at a certain time of the year.However, places around the middle of the Earth have one hot season all year or only two seasons, dry and rainy.";
    let season;

    if (this.state.winter) {
      season = (
        <>
          <h2>Winter</h2>
          <p>
            Winter is the coldest season of the year. Days are short and nights
            are long. People need to heat their homes and wear thicker clothes to keep warm. The
            freezing winds often bring snow and ice. Winter lasts from December
            to March in the northern hemisphere, Earth’s upper half, and from
            June to September in the southern hemisphere, Earth’s lower half.
          </p>
        </>
      );
    } else if (this.state.summer) {
      season = (
        <>
          <h2>Summer</h2>
          <p>
            Summer is the hottest season of the year. The temperature can stay
            warm, even after the sun has gone down at night. There are plenty of
            leaves on the tree and lots of plants are in flower. Many trees and
            other plants produce fruit during summer. People spend time outside,
            enjoying the long, sunny days. In the northern hemisphere, Earth's
            upper half, it is summer from June to September. In the southern
            hemisphere, Earth's lower half, it is summer from December to March
          </p>
        </>
      );
    } else if (this.state.spring) {
      season = (
        <>
          <h2>Spring</h2>
          <p>
            Spring is the season when hte landscpe comes to life after a cold
            winter.There is stronger sunlight, temperature begin to rise, and
            the days grow longer. The weather can change a lot in the spring. It
            can be sunny and dry one minute , and wet and showery the next. In the
            northern hemispher, Earth's upper half, spring begins in March. In
            the southern hemispere,Earth's lower half, spring begins in
            september
          </p>
        </>
      );
    } else if (this.state.fall) {
      season = (
        <>
          <h2>Fall</h2>
          <p>
            Fall is a season during which the days get shorter and temperatures
            start to drop. In some places, rainfall increases. In areas with icy
            winters, some trees, such as oak, sycamore, and birch, prepare to
            lose their leaves.  In the northern hemisphere, Earth's upper half, fall takes place from
            September to December, and in the southern hemisphere, Earth's lower
            half, it is from March to June.
          </p>
        </>
      );
    } 

    let { winter, summer, spring,fall } = this.state;
    return (
      <>
        <Header title={title} />
        <Main details={details} />
        <div className="wrap">
          <Button
            onClick={this.winterSeason}
            text={winter ? "Winter article" : "Winter"}
          />
          <Button
            onClick={this.summerSeason}
            text={summer ? "Summer article" : "Summer"}
          />
          <Button
            onClick={this.springSeason}
            text={spring ? "Spring article" : "Spring"}
          />
          <Button
            onClick={this.fallSeason}
            text={fall ? "Fall article" : "Fall"}
          />
        </div>
        {season}
      </>
    );
  }
}

export default App;
