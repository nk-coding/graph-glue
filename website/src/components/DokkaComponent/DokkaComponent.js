import React, { useEffect } from "react";
import * as clipboard from "./clipboard";
import * as platformContentHandler from "./platform-content-handler";
import styleStyle from "!!raw-loader!/styles/style.css"
import mainStyle from "!!raw-loader!/styles/main.css"
import prismStyle from "!!raw-loader!/styles/prism.css"
import  "style-scoped"
import { useHistory } from "react-router-dom";

export default function DokkaComponent(properties) {
    useEffect(() => {
        clipboard.setup()
        platformContentHandler.setup()
    })

    const history = useHistory();

    const contentClickHandler = (e) => {
        const targetLink = e.target.closest('a');
        if(!targetLink) return;
        const href = targetLink.getAttribute("href")
        if (!href.startsWith("http")) {
            e.preventDefault();
            history.push(href);
        }
    };

    return (
        <div>
            <style scoped>{styleStyle}</style>
            <style scoped>{mainStyle}</style>
            <style scoped>{prismStyle}</style>
            <div 
                onClick={contentClickHandler}
                dangerouslySetInnerHTML={{__html: properties.dokkaHTML}}
            />
        </div>
    )
}