SELECT 
    n, 
    lang, 
    rtrim(ltrim(replace(lang_col, lang, ''), ' ('), ')') as lang_label
FROM (
    SELECT
        count(*) AS n, 
        string_split(t."language_COLUMN", ' ')[1] AS lang, 
        t."language_COLUMN" AS lang_col
    FROM TextTable t 
    GROUP BY t."language_COLUMN"
    ORDER BY lang
)