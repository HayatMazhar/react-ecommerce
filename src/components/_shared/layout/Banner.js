
import React, { Component } from 'react'
import BannerNav from '../navigation/BannerNav'

export default class Banner extends Component {
    render() {
        return (
            <section className="section-main bg padding-y">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-3">
                            <BannerNav />
                        </aside>
                        <div className="col-md-9">
                            <article className="banner-wrap">
                                <img src="assets/images/2.jpg" className="w-100 rounded" alt='' />
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
