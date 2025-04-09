SELECT
    count(distinct(t."H-ID")) AS texts,
    count(distinct(w."H-ID")) AS witnesses,
    any_value(trm_code) AS code,
    any_value(trm_Description) AS lang
FROM TextTable t
LEFT JOIN trm ON t."language_COLUMN TRM-ID" = trm_ID
LEFT JOIN Witness w ON w."is_manifestation_of H-ID" = t."H-ID"
WHERE t.language_COLUMN IS NOT NULL
GROUP BY trm_ID
ORDER BY code;