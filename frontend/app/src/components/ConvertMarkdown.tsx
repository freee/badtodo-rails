import {useState,useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import {marked} from "marked";
import {keepTag} from './KeepTag';
marked.setOptions({
    gfm:true,
})
const r = new marked.Renderer();
interface InputProps{
    markdownText:string
}
export const ConvertMarkdown: React.FC<InputProps> = ({markdownText}) => {

    // const  myMemo = markdownText.replace(/[０-９]|[－]/gm,
    //     function( tmpStr ) {
    //         return String.fromCharCode( tmpStr.charCodeAt(0) - 0xFEE0 );
    //     }
    // );
    // let plugins:any[];
    // if(rehypeRaw)plugins = [rehypeRaw];
    // else plugins = [rehypeSanitize];
    //return <ReactMarkdown rehypePlugins = {plugins} remarkPlugins={[remarkGfm]} children = {markdownText} />;
    const element = marked.parse(markdownText,{renderer: r});
    console.log(element);
    const validatedElement:string = keepTag(element,['h1','h2','h3','h4','h5','h6','li','ul','p','br','hr','a','img','table','tbody','tr','td','th','thead','strong','b','del','s','code','em','i','s','pre','ol',]);
    if(validatedElement)return <span dangerouslySetInnerHTML={{__html:validatedElement}}/>
    else return <span dangerouslySetInnerHTML={{__html:validatedElement}}/>
}
export default ConvertMarkdown;