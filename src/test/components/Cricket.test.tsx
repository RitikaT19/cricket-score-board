import React, { Component } from "react";
import { mount, ReactWrapper } from "enzyme";
import { Cricket } from "../../components/Cricket";

describe("Testing Cricket Component", () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

  beforeEach(() => {
    wrapper = mount(<Cricket />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have 1 button for starting the match", () => {
    expect(wrapper.find("#start-match")).toHaveLength(1);
  });

  it("should have 1 button for stopping the match", () => {
    expect(wrapper.find("#stop-game")).toHaveLength(1);
  });

  it("should simulate on Click on start match button", () => {
    expect(wrapper.find("#start_match")).toBeTruthy();
    wrapper.find("#start-match").simulate("click");
  });

  it("should simulate on Click on stop game button", () => {
    expect(wrapper.find("#stop-game")).toBeTruthy();
    wrapper.find("#stop-game").simulate("click");
  });

  it("should have 1 score card title", () => {
    expect(wrapper.find(".score-card-title")).toHaveLength(1);
  });

  it("should have 1 score board", () => {
    expect(wrapper.find(".score-board")).toHaveLength(1);
  });

  it("should have 1 over and ball section", () => {
    expect(wrapper.find(".over-and-ball")).toHaveLength(1);
  });

  // it("should have 1 score on one ball section", () => {
  //   expect(wrapper.find(".score-on-one-ball")).toHaveLength(1);
  // });

  it("should have 1 extra-details section", () => {
    expect(wrapper.find(".extra-details")).toHaveLength(1);
  });
});
