import React, { useState, useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom';
import '../styles/popover.css'
import debounce from 'lodash/debounce';
import DocViewer, { DocViewerRenderers/*, DocViewerRef */ } from "@cyntler/react-doc-viewer";
const styles = {
    backgroundColor: 'white',
    padding: '20px',
    border: '1px solid #ccc',
};
function DisplayBook() {
    const { id } = useParams();
    const containerRef = useRef(null);
    const [showActions, setShowActions] = useState(false);
    const [selectedText, setSelectedText] = useState("");
    const [position, setPosition] = useState({ x: 0, y: 0 });

    //const selection = window.getSelection();
    //const docViewerRef = useRef<DocViewerRef>(null);


    const filepath = () => {
        return `http://localhost:4000/api/bookFiles/${id}`;
    }
    const docs = [
        { uri: filepath() },
        //{ uri: require("../1.pdf") }, // Local File
    ];
    function getOffsetSum(elem) {
        var top=0, left=0
        while(elem) {
          top = top + parseInt(elem.offsetTop)
          left = left + parseInt(elem.offsetLeft)
          elem = elem.offsetParent        
        }
      
        return {top: top, left: left}
      }
    
function getOffsetRect(elem) {
    var box = elem.getBoundingClientRect()

    var body = document.body
    var docElem = document.documentElement

    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft

    var clientTop = docElem.clientTop || body.clientTop || 0
    var clientLeft = docElem.clientLeft || body.clientLeft || 0

    var top  = box.top +  scrollTop - clientTop
    var left = box.left + scrollLeft - clientLeft

    return { top: Math.round(top), left: Math.round(left) }
}


function getOffset(elem) {
    if (elem.getBoundingClientRect) {
        return getOffsetRect(elem)
    } else {
        return getOffsetSum(elem)
    }
}


    const handleMouseUp = (e) => {
        e.preventDefault();
        const selection = window.getSelection();
        if (selection.toString()) {
            setSelectedText(selection.toString());
            setShowActions(true);
            console.log('Text selected:', selection.toString());
        } else {
            setShowActions(false);
        }
    }
    function handleAction(action) {
        switch (action) {
            case "copy":
                // copy selectedText to clipboard
                console.log('aopy')
                break;
            case "search":
                // search for selectedText
                console.log('search')
                break;
            case "add":
                // add selectedText to flow
                console.log('add')
                break;
            default:
                break;
        }
        setShowActions(false);
    }
    const handleClick = useCallback((e) => {
        const container = containerRef.current;
        const containerBounds = container.getBoundingClientRect();
        const xi = e.clientX - containerBounds.left;
        const yi = e.clientY - containerBounds.top;
        console.log(`Clicked at (${xi}, ${yi})`);
       
        setPosition({ x: xi, y: yi });
        setShowActions(true);
    }, [containerRef]);
    return (
        <div className='displayBook' style={styles}>
            <div    >
                
                <div onMouseUp={()=>handleMouseUp()} >
                
                    <DocViewer
                        documents={docs}
                        pluginRenderers={DocViewerRenderers}
                        config={{
                            header: {
                                disableHeader: false,
                                disableFileName: false,
                                retainURLParams: false,
                            }
                        }}
                    />
            </div> 
                    {showActions && (
                        <div className="actions" >
                            <div className='word-options' style={{ top: 4, left: 5 }}>
                                <button /*onClick={() => handleAction("copy")}*/> Define</button>
                                <button /*onClick={() => handleAction("copy")}*/> View Similar Words</button>
                                <button /*onClick={() => handleAction("copy")}*/> Add to Favourite</button>
                            </div>
                        </div>
                    )}</div>
            {/* <DocViewer
                pluginRenderers={DocViewerRenderers}
                documents={docs}
                config={{
                    header: {
                        disableHeader: false,
                        disableFileName: false,
                        retainURLParams: false
                    }
                }}
                style={{ height: 500 }}
            /> */}

        </div>
    )
}
export default DisplayBook