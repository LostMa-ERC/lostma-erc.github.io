const InnerHTMLParagraph = ({content,}: {content :string | null | undefined}) => {
    let p;
    if (content) {
        var cleanString = content.replace(/\\n/g, "<br/>")
                .replace(/\n/g, "<br/>")
                .replace(/\\'/g, "\'")
                .replace(/\\"/g, '\"')
                .replace(/\\&/g, "\&")
                .replace(/\\r/g, "\r")
                .replace(/\\t/g, "\t")
                .replace(/\\b/g, "\b")
                .replace(/\\f/g, "\f")
        p = <p className="content" dangerouslySetInnerHTML={{__html: cleanString}}/>
    }
    else {
        p = <></>
    }
    return p;

}

export default InnerHTMLParagraph