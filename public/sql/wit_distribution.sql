SELECT
    sum(case when form like 'prose' then 1 else 0 end) as prose_texts,
    sum(case when form like 'verse' then 1 else 0 end) as verse_texts,
    wit_count
FROM (
    SELECT
        count(w."H-ID") AS wit_count,
        any_value(t.literary_form) AS form
    FROM Witness w
    LEFT JOIN TextTable t
        ON t."H-ID" = w."is_manifestation_of H-ID"
    GROUP BY w."is_manifestation_of H-ID"
)
GROUP BY wit_count
ORDER BY wit_count;