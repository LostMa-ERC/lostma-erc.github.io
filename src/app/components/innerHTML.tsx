export default function SetInnerHTML(str:string | null | undefined) {
    let p;
    if (str) {
        var cleanString = str.replace(/\\n/g, "<br/>")
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
