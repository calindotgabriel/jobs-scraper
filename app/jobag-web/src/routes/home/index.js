import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';

import results from '../../results';

export default class Home extends Component {
	render() {
		return (
			<div class={`${style.home} page`}>
				<h1>Jobs</h1>
				<Card>
					<div class={style.cardBody}>
                        {results.map(j => {
                            return <Card>{j.title}</Card>;
                        })}
					</div>
				</Card>
			</div>
		);
	}
}
