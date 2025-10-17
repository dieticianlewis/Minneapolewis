function setPageTitle(pageTitle) {
    const siteTitle = 'Minneapolewis';
    const fullTitle = pageTitle ? `${pageTitle} - ${siteTitle}` : siteTitle;
    
    // This is a safe operation that only changes the title text
    document.title = fullTitle;
}