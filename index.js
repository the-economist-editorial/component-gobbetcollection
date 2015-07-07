import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import Gobbet from '@economist/component-gobbet'
import ImageCaption from '@economist/component-imagecaption'
import ShareBar from '@economist/component-sharebar';
import Icon from '@economist/component-icon';


var ResponsiveReactGridLayout = ReactGridLayout.Responsive;

class WorldIfGobbet extends React.Component {

  render() {
    let customHeader = <ShareBar useFX={true} fxDirection="flip-to-top" fxType="cube" background="#333333" fxDefaultStateBackground="#999999"/>;
    return (
      <Gobbet className="gobbet" showShareBar={false} title={customHeader}>
        <ImageCaption caption="Lorem ipsum dolor sit amet, consectetuer ad." src="http://lorempixel.com/g/300/169/food" textposition="top" />
      </Gobbet>
      );
  }
};

export default class GobbetCollection extends React.Component {

  render() {
    var layout = [
    {i: 1, x: 0, y: 0, w: 4, h: 4},
    {i: 2, x: 4, y: 0, w: 4, h: 4},
    {i: 3, x: 8, y: 0, w: 4, h: 4},
    {i: 4, x: 0, y: 0, w: 4, h: 4},
    {i: 5, x: 4, y: 0, w: 4, h: 4},
    {i: 6, x: 8, y: 0, w: 4, h: 4}];
    var mdLayout = [
    {i: 1, x: 0, y: 0, w: 4, h: 4},
    {i: 2, x: 4, y: 0, w: 4, h: 4},
    {i: 3, x: 8, y: 0, w: 4, h: 4},
    {i: 4, x: 0, y: 0, w: 4, h: 4},
    {i: 5, x: 4, y: 0, w: 4, h: 4},
    {i: 6, x: 8, y: 0, w: 4, h: 4}];
    var smLayout = [
    {i: 1, x: 0, y: 0, w: 1, h: 3 },
    {i: 2, x: 4, y: 0, w: 1, h: 3 },
    {i: 3, x: 8, y: 0, w: 1, h: 3 },
    {i: 4, x: 0, y: 0, w: 1, h: 3 },
    {i: 5, x: 4, y: 0, w: 1, h: 3 },
    {i: 6, x: 8, y: 0, w: 1, h: 3 }];
    var layouts = {lg: layout, md: mdLayout, sm: smLayout};
    return (
      <ResponsiveReactGridLayout className="layout" layouts={layouts}
        breakpoints={{lg: 900, md: 600, sm: 400}}
        cols={{lg: 12, md: 8, sm: 1}}
        autosize={true}
        isDraggable={false}>
        <div key={1}>
          <WorldIfGobbet className="gobbet" showShareBar={true} >
            <ImageCaption caption="Sed consequat, leo eget bibendum sodales, augue velit cursus nunc," src="http://lorempixel.com/g/300/169/food" textposition="top" />
          </WorldIfGobbet>
        </div>
        <div key={2}>
          <WorldIfGobbet className="gobbet" showShareBar={true} >
            <ImageCaption caption="Sed consequat, leo eget bibendum sodales, augue velit cursus nunc," src="http://lorempixel.com/g/300/169/food" textposition="top" />
          </WorldIfGobbet>
        </div>
        <div key={3}>
          <WorldIfGobbet className="gobbet" showShareBar={true} >
            <ImageCaption caption="Sed consequat, leo eget bibendum sodales, augue velit cursus nunc," src="http://lorempixel.com/g/300/169/food" textposition="top" />
          </WorldIfGobbet>
        </div>
        <div key={4}>
          <WorldIfGobbet className="gobbet" showShareBar={true} >
            <ImageCaption caption="Sed consequat, leo eget bibendum sodales, augue velit cursus nunc," src="http://lorempixel.com/g/300/169/food" textposition="top" />
          </WorldIfGobbet>
        </div>
        <div key={5}>
          <WorldIfGobbet className="gobbet" showShareBar={true} >
            <ImageCaption caption="Sed consequat, leo eget bibendum sodales, augue velit cursus nunc," src="http://lorempixel.com/g/300/169/food" textposition="top" />
          </WorldIfGobbet>
        </div>
        <div key={6}>
          <WorldIfGobbet className="gobbet" showShareBar={true} >
            <ImageCaption caption="Sed consequat, leo eget bibendum sodales, augue velit cursus nunc," src="http://lorempixel.com/g/300/169/food" textposition="top" />
          </WorldIfGobbet>
        </div>
      </ResponsiveReactGridLayout>
    )
  }
}