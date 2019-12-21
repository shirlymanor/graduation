import React from 'react';
import _ from 'lodash';

import {Link, htmlToReact} from '../utils';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                {_.get(this.props, 'pageContext.site.data.footer.social_icons') && 
                    <ul className="icons">
                        {_.map(_.get(this.props, 'pageContext.site.data.footer.social_icons'), (item, item_idx) => (
                            <li key={item_idx}><Link to={_.get(item, 'url')} className={'icon ' + _.get(item, 'icon')}><span className="label">{_.get(item, 'title')}</span></Link></li>
                        ))}
                    </ul>
                }
              
            </footer>
        );
    }
}
