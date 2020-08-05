import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import cls from './style';

import results from '../../results';

export default class Home extends Component {
	render() {
		return (
			<div class={`${cls.home} page`}>
				<h1>Jobs</h1>
				<Card>
					<div class={cls.containerCard}>
                        {results.reverse().map(j => {
                            return <Card class={cls.card}>
                                <div class={cls.cardHeader}>
                                    {j.title}
                                </div>
                                <div class={cls.cardBody}>
                                    <p>{j.city}</p>
                                    <p>{j.date}</p>
                                </div>
                            </Card>;
                        })}
					</div>
				</Card>
			</div>
		);
	}
}
