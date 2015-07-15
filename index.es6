import React from 'react';
import Gobbet from '@economist/component-gobbet';
import ImageCaption from '@economist/component-imagecaption';
import ShareBar from '@economist/component-sharebar';

export default class GobbetCollection extends React.Component {
  render() {
    const customHeader = (<ShareBar useFX={true}
    fxDirection="flip-to-top" fxType="cube" background="#333333" fxDefaultStateBackground="#999999"/>);
    return (
      <div className="span_12">
        <div className="section group span_10">
          <div className="col span_4">
            <Gobbet className="gobbet" title={customHeader}>
              <ImageCaption caption="Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
              src="http://lorempixel.com/g/300/169/food" textposition="top" />
            </Gobbet>
          </div>
          <div className="col span_4">
            <Gobbet className="gobbet" title={customHeader}>
              <ImageCaption caption="Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
              src="http://lorempixel.com/g/300/169/food" textposition="top" />
            </Gobbet>
          </div>
          <div className="col span_4">
            <Gobbet className="gobbet" title={customHeader}>
              <ImageCaption caption="Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
              src="http://lorempixel.com/g/300/169/food" textposition="top" />
            </Gobbet>
          </div>
          <div className="col span_4">
            <Gobbet className="gobbet" title={customHeader}>
              <ImageCaption caption="Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
              src="http://lorempixel.com/g/300/169/food" textposition="top" />
            </Gobbet>
          </div>
          <div className="col span_4">
            <Gobbet className="gobbet" title={customHeader}>
              <ImageCaption caption="Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
              src="http://lorempixel.com/g/300/169/food" textposition="top" />
            </Gobbet>
          </div>
          <div className="col span_4">
            <Gobbet className="gobbet" title={customHeader}>
              <ImageCaption caption="Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
              src="http://lorempixel.com/g/300/169/food" textposition="top" />
            </Gobbet>
          </div>
        </div>
      </div>
    );
  }
}
