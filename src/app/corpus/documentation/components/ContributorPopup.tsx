'use client';
import { useState } from "react";
import { LinkSVG } from "@/public/svgs";
import { GenerateFullTemplate, GenerateReqTemplate } from "./GenerateCSV";
import { EntityDetail } from "./models";

export default function ContributorPopup(entityDetail:EntityDetail) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
          setIsOpen(!isOpen);
    };
    
    return (
        <div className="">
            <div className="row flex justify-center max-h-12">
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
                    Click for Contributor Information
                </button>
            </div>
            {isOpen && (
            <div className="grid md:grid-cols-2">
                <div className="order-last flex items-center justify-center">
                    <div className="grid">
                    <p>Do you want to upload instances of this record type? Download a template for organising each record&apos;s information, wherein each row will be 1 new record of this type.</p>
                    <div className="flex justify-center py-2">
                        <button 
                            className="button"
                            onClick={() => GenerateFullTemplate({entity:entityDetail})}
                        >
                            CSV Template: All Fields
                        </button>
                    </div>
                    <div className="flex justify-center py-2">
                        <button 
                            className="button"
                            onClick={() => GenerateReqTemplate({entity:entityDetail})}
                        >
                            CSV Template: Required Fields
                        </button>
                    </div>
                    </div>
                </div>
                <div className="order-first p-2">
                    <p className="flex"><span>{LinkSVG}</span> Foreign key</p>
                    <p className="my-1">The value of this field is the H-ID (unique Heurist ID) of another entity. When uploading instances of this record type via CSV, the column of this field must end in the 4-character phrase &quot;H-ID.&quot;</p>
                    <p className="my-1">If the record&apos;s field links to an entity created for the LostMa project, it is named in the table below. If no name is provided, the field links to a generic Heurist entity (i.e. Place) that is not documented on this website. In that case, login to the database for more information.</p>
                    <p className="my-1">When filling in this information, you&apos;ll need to locate the H-ID of the record you want to link. Go to the linked record type&apos;s profile page and see how to view the entered record types, in order to find the one you need.</p>
                </div>
            </div>
            )}
        </div>
    )
}