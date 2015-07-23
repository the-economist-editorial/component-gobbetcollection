import React from 'react';
import WorldIfGobbet from '@economist/component-wifgobbet';
import ImageCaption from '@economist/component-imagecaption';

export default class GobbetCollection extends React.Component {
  render() {
     return (
      <section className="margin-l-1 margin-r-1 gutter-l GobbetCollection--list">
          <article className="col-4">
            <WorldIfGobbet>
              <ImageCaption caption=""
              src="http://lorempixel.com/g/288/420/cats" textposition="top" />
            </WorldIfGobbet>
          </article>
          <article className="col-4">
            <WorldIfGobbet>
              <ImageCaption caption=""
              src="http://lorempixel.com/g/288/420/food" textposition="top" />
            </WorldIfGobbet>
          </article>
          <article className="col-4">
            <WorldIfGobbet>
              <ImageCaption caption=""
              src="http://lorempixel.com/g/288/420/people" textposition="top" />
            </WorldIfGobbet>
          </article>
          <article className="col-4">
            <WorldIfGobbet>
              <ImageCaption caption=""
              src="http://lorempixel.com/g/288/420/city" textposition="top" />
            </WorldIfGobbet>
          </article>
          <article className="col-4">
            <WorldIfGobbet>
              <ImageCaption caption=""
              src="http://lorempixel.com/g/288/420/fashion" textposition="top" />
            </WorldIfGobbet>
          </article>
          <article className="col-4">
            <WorldIfGobbet>
              <ImageCaption caption=""
              src="http://lorempixel.com/g/288/420/food" textposition="top" />
            </WorldIfGobbet>
          </article>
      </section>
    );
  }
}
