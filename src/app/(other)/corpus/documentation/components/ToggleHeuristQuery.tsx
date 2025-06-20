'use client';
import { useState } from "react";
import Link from "next/link";

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
                <br className="py-2"/>
                <h2 className="text-lg">General Query Tips</h2>
                <ul className="list-disc px-8">
                    <li className="py-4">
                        Find entities whose field (&lt;FID&gt;) has a certain search keyword (&lt;KEYWORD&gt;).
                        <br className="py-2"/>
                        <code className="px-2 py-1 bg-gray-50 text-gray-700">
                        &#91; &#123; &quot;t&quot; : &quot;{id}&quot; &#125; , &#123;&quot;f:&lt;FID&gt;&quot; : &quot;&lt;KEYWORD&gt;&quot;&#125; &#93;
                        </code>
                    </li>
                    <li className="py-4">
                        Find entities whose controlled field (&lt;FID&gt;) has a certain vocabulary term (&lt;VID&gt;). For the VID, see the <Link className="link" href="/corpus/documentation">vocabulary&apos;s page</Link>.
                        <br className="py-2"/>
                        <code className="px-2 py-1 bg-gray-50 text-gray-700">
                        &#91; &#123; &quot;t&quot; : &quot;{id}&quot; &#125; , &#123;&quot;f:&lt;FID&gt;&quot; : &quot;&lt;VID&gt;&quot;&#125; &#93;
                        </code>
                    </li>
                    <li className="py-4">
                        Find entities whose foreign key field (&lt;FID&gt;) links to a certain entity type (&lt;ID&gt;).
                        <br className="py-2"/>
                        <code className="px-2 py-1 bg-gray-50 text-gray-700">
                        &#91; &#123; &quot;t&quot; : &quot;{id}&quot; &#125; , &#123;&quot;linked_to:&lt;FID&gt;&quot; : [ &#123; &quot;t&quot; : &quot;ID&quot; &#125; ] &#125; &#93;
                        </code>
                    </li>
                    <li className="py-4">
                        Find entities whose foreign key field (&lt;FID&gt;) links to a certain entity type (&lt;ID&gt;), whose controlled field (&lt;2FID&gt;) has a certain vocabulary term (&lt;2VID&gt;).
                        <br className="py-2"/>
                        <code className="px-2 py-1 bg-gray-50 text-gray-700">
                        &#91; &#123; &quot;t&quot; : &quot;{id}&quot; &#125; , &#123;&quot;linked_to:&lt;FID&gt;&quot; :
                        [ &#123; &quot;t&quot; : &quot;ID&quot; &#125; , &#123;&quot;f:&lt;2FID&gt;&quot; : &quot;&lt;2VID&gt;&quot;&#125; ] &#125; &#93;
                        </code>
                    </li>
                </ul>
            </div>
            )}
            </>
    )
}