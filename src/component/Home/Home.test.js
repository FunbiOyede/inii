import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Loader from "../Loader/Loader";
import { Home } from "./Home.jsx";

configure({ adapter: new Adapter() });

describe("<Home />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("should render loader if isLoad is true", () => {
    wrapper.setState({ isLoad: true });
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
});
