export async function grabResults(page, queryDefenition) {
    // Wait for the text area to be available

    const textAreaLocator = page.getByPlaceholder("Ask anything...");
    await textAreaLocator.waitFor(); // Ensure the element is available

    // Fill the text area with the query
    await textAreaLocator.fill(queryDefenition);
    console.log("Filled the query!");
    await page.keyboard.press("Enter");

    // Wait for the page to navigate to the discussion URL
    await page.waitForNavigation({ waitUntil: "networkidle" });
    console.log("Navigation completed!");

    const relatedHeader = await page.waitForSelector("text=Related");

    // Locate the element and extract its text content
    const textContent = await page.$eval('div[dir="auto"]', (element) => {
        // Extract the inner HTML
        const html = element.innerHTML;

        // Convert it into a temporary DOM element
        const tempElement = document.createElement("div");
        tempElement.innerHTML = html;

        // Use innerText to get the text content, which preserves paragraph spacing
        return tempElement.innerText;
    });

    // Get the current URL
    const currentURL = page.url();
    console.log("Current URL:", currentURL);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { url: currentURL, content: textContent };
}

// Example usage
