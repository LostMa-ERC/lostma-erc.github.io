SELECT 
    n, 
    lang, 
    rtrim(ltrim(replace(lang_col, lang, ''), ' ('), ')') as lang_label
FROM (
    SELECT 
        count(w."H-ID") AS n, 
        string_split(t."language_COLUMN", ' ')[1] AS lang,
        t."language_COLUMN" as lang_col
    FROM TextTable t 
    LEFT JOIN WITNESS w 
        ON t."H-ID" = w."is_manifestation_of H-ID" 
    GROUP BY t."language_COLUMN" 
    ORDER BY lang
)