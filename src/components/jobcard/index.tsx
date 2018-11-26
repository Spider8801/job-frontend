import { Card, Divider, H2, H3, Icon, Intent, Label, Tag } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import React, { Component } from 'react';
import './style.scss';

class JobCard extends Component<any, any> {
	render() {
		return (
			<Card className="jb-card" interactive={true} elevation={1}>
				<div className="jb-card-top">
					<div className="jb-card-head-start">
						<H3>
							Company Inc. <Icon icon={IconNames.ENDORSED} iconSize={Icon.SIZE_STANDARD} intent={Intent.SUCCESS} />
						</H3>
						<Label>
							<Icon icon={IconNames.LOCATE} iconSize={Icon.SIZE_LARGE} /> Wasignton DC, USA
						</Label>
					</div>
					<div className="jb-card-head-end">
						<div>
							<Tag rightIcon="paperclip" large={false}>
								URGENT
							</Tag>
						</div>
						<Divider />
						<Label>
							Bookmark this
							<Icon icon={IconNames.BOOKMARK} iconSize={Icon.SIZE_LARGE} />
						</Label>
					</div>
				</div>
				<Divider />
				<div className="jb-card-bottom">
					<div className="jb-card-left">
						<img src="https://picsum.photos/180" alt="company-name" title="comapny-name" />
						<div className="jb-card-comapny" />
					</div>
					<div className="jb-card-right">
						<div className="jo-card-container">
							<H2>Job Title</H2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
								ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
								fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
								deserunt mollit anim id est laborum.
							</p>
						</div>
					</div>
				</div>
			</Card>
		);
	}
}

export default JobCard;
