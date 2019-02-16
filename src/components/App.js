import React, { Component } from 'react'
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideosList from './VideosList';
import VideosDetail from './VideoDetail';

export default class App extends Component {

    state = { videos: [], selectedVideo: null }

    componentDidMount = () => {
        this.onTermSubmit('javascript');
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideosDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideosList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
