# Update Data

LostMa team members will likely need to update the following information on the website:

- [News](#how-to-update-news) (manual)
- [People](#how-to-update-team) (manual)

This data is stored in a JSON format, which is both human-readable and machine-parsable&mdash;the perfect pivot format! [Learn about JSON here.](https://www.w3schools.com/whatis/whatis_json.asp)

1. You: Edit the JSON file.
2. You: Save and commit the file to the main branch.
3. Automated: The edits will be added to the website if they pass the unit tests. Follow the progress of the update's deployment [here](https://github.com/LostMa-ERC/lostma-erc.github.io/actions).

---

### How to Update News

Update news by editing the file [`news.json`](./news.json). As a JSON file, it's a set of keys and their values.

- Required keys:
    - **`start`**: The website's code automatically orders news by a date in ISO format (YYYY-MM-DD). Stored in the `start` key, this date can refer to the first day of a multi-day event, a date of publication, or the day in which you want the announcement to be made. The date itself will not show up on the website. Its purpose is to help us order the series of news chronologically, according to the time we find most relevant for the news item.

    - **`category`**: Each news item must be categorised as [`"Publication"`](#publication), [`"Event"`](#event), or [`"Other"`](#other).

    - **`title`**
    
    - **`subtitle`**: The meaning of the subtitle changes depends on the category of news. Carefully read the categories below ([`"Publication"`](#publication), [`"Event"`](#event), or [`"Other"`](#other)).
    
    - **`description`**

- Optional keys:

    - **`location`**: This key is required for `Event` news and is itself a dictionary with 2 required keys.
        * `city` (text): The English name of the city, followed by a comma and the English name of the country, i.e. `Antwerp, Belgium`.
        * `venue` (text): The name of the institution and/or venue where the event took place.

    - **`link`**: This key is not required but always a good thing to have. It is a dictionary with 3 required keys.
        * `page` (true/false): `true` if the link is to another page on the website; `false` if the link is to an external website.
        * `label` (text): The short label that will appear on the button that opens the link. The label must be 3 words or fewer, and each word should be capitalised, i.e. `"Journal Article"`.
        * `url` (text): If `"page": false`, the URL to the external link; if `"page": true`, the path to the page, i.e. `"/news/EVENT"`

#### Publication

News about publications must have the category `"Publication"` (capitalised) and should have a link.

- `"title"`: The title of the publication.
- `"subtitle"`: A list of the authors' names. Even if there is only one author, the name must still be in an array `[]`.
- `"description"`: An abstract describing the publication.

```json
{
    "start": "2022-10-26", 
    "category": "Publication",
    "title": "Lost Manuscripts and Extinct Texts : A Dynamic Model of Cultural Transmission", 
    "subtitle": ["Jean-Baptiste Camps", "Julien Randon-Furling"],
    "description": "How did written works evolve...",
    "link": {
        "page": false,
        "label": "Conference Paper",
        "url": "https://shs.hal.science/halshs-03827975"
    }
}
```

#### Event

News about events LostMa has organised must have the category `"Event"` (capitalised).

- `"title"`: The name of the event.
- `"subtitle"`: An English-language expression of the date, as you want it to appear. It can differ from the ISO-formatted date in the key `"start"`.
- `"description"`: A brief description of the event; maximum 250 characters.

All events must have a location.

```json
{
    "start": "2025-02-01",
    "category": "Event",
    "title": "Hackathon 2025",
    "subtitle": "TBD, 2025",
    "description": "Hackathon to work with and analyse the data, driven by scientific inquiries and leading to early results.",
    "location": {
        "venue": "École nationale des chartes",
        "city": "Paris, France"
    },
    "link": {
        "page": true,
        "label": "Conference Website",
        "url": "/news/hackathon2025"
    }
},
```

#### Other

Other news can include any kind of announcement.

- `"title"`: A title for the announcement.
- `"subtitle"`: An English-language expression of the date, as you want it to appear. It can differ from the ISO-formatted date in the key `"start"`.
- `"description"`: A brief description of the announcement, no more than 250 characters. 

```json
{
    "start": "2024-03-01",
    "category": "Other",
    "title": "New team member 🤝",
    "subtitle": "1 March, 2024",
    "description": "Kelly Christensen joins as a Data Architect.",
    "link": {
        "page": false,
        "label": "GitHub",
        "url": "https://github.com/kat-kel"
    },
},
```

---

### How to Update Team


Update names of team members and contributors by editing the file [`people.json`](./people.json). As a JSON file, it's a set of keys and their values.

```json
{
    "forename": "Jean-Baptiste",
    "surname": "Camps",
    "role": "Project Leader"
}, 
```

- `"forename"`: The first name or names. If the person's last name starts with a preposition or article, i.e. _de Medici_, include that at the end of the forename. This is because the website's code orders the people by the first letter of the value in the `"surname"` key.
- `"surname"`: The family name.
- `"role"`: The person's role or responsibility on the project. For contributors, this is the name of the corpus they contributed, i.e. "Middle Dutch Corpus." Capitalise each word.
