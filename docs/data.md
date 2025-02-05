# Data Formats

The 2 types of data that can be updated via the JSON files each have their own specific formatting that must be followed in order for the website's code to properly understand and parse the information you have provided.

## Reference

Jump to the keys you're looking for:

- News Item
    - [start](#1-start-text-required)
    - [category](#2-category-text-required)
    - [title](#3-title-text-required)
    - [detail](#4-detail-text-required)
    - [description](#5-description-text-required)
- Person
    - [forename](#1-forename-text-required)
    - [surname](#2-surname-text-required)
    - [role](#3-role-text-required)
---

## News Item

News items are listed in an array in the [`data/news.json`](../data/news.json) file. They are ordered chronologically when the website is generated, so you can add new items to the array in any order you want.

Each news item is a dictionary, meaning it is a series of key-value pairs. The keys and the types of values they take are listed below:

### 1. `start` (_text_) [required]

Date in ISO format (YYYY-MM-DD).

- The website's code orders all the news items by the value of this date.

- This date can be the first day of something, the exact day of something, or the day by which you want the news item to appear in the chronological order of items.

- Except in the case of publications, this date will not show up on the website. It can serve as an internal date to help with ordering news items.

```json
{
    "start": "2024-05-28"
}
```

### 2. `category` (_text_) [required]

Either the value `"Publication"`, `"Event"`, or `"Other"`.

- "Other" can include any kind of project output or activity that is not a publication or an event that LostMa organised. It is generally interpetted as "announcement."

```json
{
    "start": "2024-05-28",
    "category": "Event"
}
```

### 3. `title` (_text_) [required]

A brief title or, in the case of publication, the title of the article.

- In all cases, no longer than 250 characters.

```json
{
    "start": "2024-05-28",
    "category": "Event",
    "title": "Kickoff Conference"
}
```
    
### 4. `detail` (_text_) [required]

The meaning of the detail changes depends on the category of news. Carefully read the categories below `"Publication"`, `"Event"`, or `"Other"`.

- For an `"Event"` and `"Other"`, `detail` is an English-language representation of the relevant date. If the day is known, write the day first. Separate the month and year with a comma.

```json
{
    "start": "2024-05-28",
    "category": "Event",
    "title": "Kickoff Conference",
    "detail": "28-29 May, 2024"
}
```

- For a `"Publication"`, `detail` is an array of the author name or authors' names. Do not invert or abbreviate the name. Even if there is only 1 author, put the name in an array.

```json
{
    "start": "2022-10-26",
    "category": "Publication",
    "title": "Lost Manuscripts and Extinct Texts : A Dynamic Model of Cultural Transmission", 
    "detail": ["Jean-Baptiste Camps", "Julien Randon-Furling"]
}
```
    
### 5. `description` (_text_) [required] 

A brief description or, in the case of publication, the abstract of the article.

- Except for publications, no longer than 750 characters.

```json
{
    "start": "2022-10-26", 
    "category": "Publication",
    "title": "Lost Manuscripts and Extinct Texts : A Dynamic Model of Cultural Transmission", 
    "detail": ["Jean-Baptiste Camps", "Julien Randon-Furling"],
    "description": "How did written works evolve..."
}
```

### 6. `location` (_object_) [optional]

A set of 2 key-value pairs (`venue`, `city`) that provide geographical context.

- Events are required to have a location.
- Publications and other news items are not required to (and usually don't) have a location.
- `city` is the English name, followed by a comma and the English name of the country, i.e. `"Antwerp, Belgium"`.
- `venue` is name of the institution and/or venue where the event took place.

```json
{
    "start": "2024-05-28",
    "category": "Event",
    "title": "Kickoff Conference",
    "detail": "28-29 May, 2024",
    "description": "Kick-off conference, inviting the scientific community to interrogate the key questions of the project.",
    "location": {
        "venue": "École nationale des chartes",
        "city": "Paris, France"
    }
},
```

### 7. `link` (_object_) [optional]

A set of 3 key-value pairs (`page`, `label`, `url`) that provide information for an internal or external link to another resource.

- `page` is a `true` or `false` value that indicates whether the link is to an internal or external resource. If `true`, meaning the link is to another page on the website, that page needs to have already been created.
- `label` is a word or very brief phrase, no more than 3 words, that will appear on the button used to open the link.
- `url` is the path to the resource. If the link is to an internal page, it will be something like `/news/EVENT`, meaning it links to a page that is created inside the `news` directory. If the link is to an external website, please privilege a link with a secure protocol, meaning it starts with "https://" rather than "http://".

A link to an external resource:

```json
{
    "start": "2024-05-24",
    "category": "Event",
    "link": {
        "page": false,
        "label": "Video Recording",
        "url": "https://www.youtube.com/watch?v=_rekmYY4-Pc"
    }
}
```

A link to an internal web page:

```json
{
    "start": "2025-02-01",
    "category": "Event",
    "link": {
        "page": true,
        "label": "Conference Website",
        "url": "/news/hackathon2025"
    }
}
```

---

## People

The [`JSON file`](../data/people.json) is a dictionary featuring 2 keys: `Team` and `Collaborators`. Though they're separate groups, the format for the personal information in each one is the same.

```json
{
    "forename": "Catherine de",
    "surname": "Medici",
    "role": "Italian Corpus"
}, 
```

### 1. `forename` (_text_) [required]

The given or given names of the individual. However, if the person's last name starts with a preposition or article, i.e. _de Medici_, add that preposition or article to the end of `forename`. The reason is because the website's code orders individuals alphabetically by the value in `surname`. In order to sorting "Catherine de Medici" around the lastnames that start with M, instead of D, the value of `forename` would be "Catherine de".

### 2. `surname` (_text_) [required]

The last name of the individual. If the last name starts with an article or preposition, i.e. _de Medici_, remove it and place it at the end of `forename`.

### 3. `role` (_text_) [required]

The individual's role or responsibility on the project. Every word of the role should be capitalised. For collaborators, this is the name of the corpus they contributed, i.e. "Middle Dutch Corpus."
