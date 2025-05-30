'use client';
import { useState } from "react";

export default function ToggleHeuristQuery({id}: {id:number}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
          setIsOpen(!isOpen);
    };

    return (
        <>
        <button
                id="contributor-popup-button"
                type="button"
                className="button"
                aria-controls="contributor-popup"
                aria-expanded="false"
                aria-label="contributor-popup"
                aria-haspopup="true"
                onClick={toggleDropdown}
            >
                Heurist Search Queries
            </button>
            {isOpen && (
            <div className="p-2">
                <p>To view all the records of this type in the Heurist database, enter the following filter in the search bar:
                    <code className="px-2 py-1 bg-gray-50 text-gray-700">t:{id}</code>.
                </p>
                <p>To view all the records of this type that you created, replace <code>&quot;USER&quot;</code> with your user ID (an integer) and enter the following filter:<br/>
                    <code className="px-2 py-1 bg-gray-50 text-gray-700">
                        &#91;&#123;&quot;t&quot;:&quot;{id}&quot;&#125;,&#123;&quot;addedby&quot;:&quot;USER&quot;&#125;,&#123;&quot;sortby&quot;:&quot;m&quot;&#125;&#93;
                    </code>.
                </p>
                <p>To view all the records of this type that were created within a specific time frame, replace <code>&quot;START/END&quot;</code> with dates in the format YYYY-MM-DD (i.e. &quot;2024-11-01/2024-12-01&quot;) and enter the following filter:<br/>
                    <code className="px-2 py-1 bg-gray-50 text-gray-700">
                        &#91;&#123;&quot;t&quot;:&quot;{id}&quot;&#125;,&#123;&quot;added&quot;:&quot;START/END&quot;&#125;,&#123;&quot;sortby&quot;:&quot;m&quot;&#125;&#93;
                    </code>.
                </p>
                <p>To view all the records of this type that have a phrase in the label, replace <code>&quot;PHRASE&quot;</code> and enter the following filter:<br/>
                    <code className="px-2 py-1 bg-gray-50 text-gray-700">
                    &#91;&#123;&quot;t&quot;:&quot;{id}&quot;&#125;,&#123;&quot;f&quot;:&quot;PHRASE&quot;&#125;,&#123;&quot;sortby&quot;:&quot;m&quot;&#125;&#93;
                    </code>.
                </p>
            </div>
            )}
            </>
    )
}