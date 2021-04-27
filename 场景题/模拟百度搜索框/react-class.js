import React, { Component } from 'react';
import JSONP from 'jsonp';
function jsonp(url, options = {}) {
    return new Promise((resolve, reject) => {
        JSONP(url, options, ((err, data) => {
            if (err) reject(err);
            resolve(data);
        }))
    })
}

class SeacrhCom extends Component {
    constructor() {
        super();
        this.state = {
            val: "",
            arr: [],
            index: -1
        }
    }


    handleChange = async (e) => {
        this.setState({ val: e.target.value });
        let { s } = await jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + this.state.val, { param: "cb" });
        this.setState({ arr: s });
    }
    handleKeyUp = (e) => {
        let keyCode = e.keyCode;
        if (keyCode === 38 || keyCode === 40) {
            if (keyCode === 38) {
                this.setState({ index: this.state.index - 1 })
                if (this.state.index < 0) {
                    this.setState({ index: this.state.arr.length - 1 });
                }
                //根据上下键切换，则给表单时面赋不同的值
                e.target.value = this.state.arr[this.state.index + 1];
                this.setState({ val: e.target.value });
            } else {
                this.setState({ index: this.state.index + 1 })
                if (this.state.index >= this.state.arr.length - 1) {
                    this.setState({ index: -1 });
                }
                //根据上下键切换，则给表单时面赋不同的值
                e.target.value = this.state.arr[this.state.index + 1];
                this.setState({ val: e.target.value });
            }
        }
    }
    handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            //https://www.baidu.com/s?wd=xxx  百度的查询接口
            window.open('https://www.baidu.com/s?wd=' + this.state.val, '_blank');
            this.refs.input.focus();
        }
    }
    componentDidMount() {
        //生命周期，在组件加载完成后，让input聚焦 (focus)
        this.refs.input.focus();
    }
    handleMouseEnter = (key, item, event) => {
        this.setState({ index: key, val: item });
        this.refs.input.value = item;
    }
    handleClick = () => {
        window.open('https://www.baidu.com/s?wd=' + this.state.val, '_blank');
        this.refs.input.focus();
    }

    render() {
        let style = { marginTop: "20px" };
        return (
            <div className="container" style={style}>
                <input type="text" ref="input" defaultValue={this.state.val}
                    onChange={this.handleChange} onKeyUp={this.handleKeyUp}
                    onKeyDown={this.handleKeyDown} className="form-control" placeholder="Baidu Search"
                />
                <ul className="list-group">
                    {this.state.arr.map((item, key) => {
                        return <li onClick={this.handleClick}
                            onMouseEnter={event => this.handleMousEnter(key, item, event)}
                            className={key === this.state.index ? 'list-group-item active' : "list-group-item"}
                            key={key}
                        >{item}</li>
                    })}
                </ul>
                <h2>{this.state.val}</h2>
            </div>
        )
    }
}

export default function App() {
    return (
        <div className="App">
            <SeacrhCom />
        </div>
    )
}