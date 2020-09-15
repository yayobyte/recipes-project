import { waitForElement, fireEvent } from "@testing-library/react";
import renderApp from "./boostrapper";

describe("IntTests: App Cases", () => {
    it("Loads the app without crashing", async () => {
        const { getByTestId } = renderApp();
        const mainPageContainer = await waitForElement(() => getByTestId('main-page'))
        expect(mainPageContainer).toBeDefined();
    });
    it("Queries the API and show results", async () => {
        const { getByTestId } = renderApp();
        const recipeContainer = await waitForElement(() => getByTestId('recipe-preview-437eO3ORCME46i02SeCW46'))
        expect(recipeContainer).toBeDefined();
    });
    it("Clicks on More Details button and loads the recipe", async () => {
        const { getByTestId, getByText } = renderApp();
        const moreDetailsButton = await waitForElement(() => getByTestId('more-details-button-437eO3ORCME46i02SeCW46'))
        expect(moreDetailsButton).toBeDefined();
        fireEvent.click(moreDetailsButton);
        const title = await waitForElement(() => getByText("Crispy Chicken and Rice with Peas & Arugula Salad"));
        expect(title).toBeDefined();
    });
    it("Clicks on Back Button and returns to list of recipes", async () => {
        const { getByTestId } = renderApp();
        const goBackButton = await waitForElement(() => getByTestId('more-details-button-back-to-recipes'))
        expect(goBackButton).toBeDefined();
        fireEvent.click(goBackButton);
        const title = await waitForElement(() => getByTestId("main-page"));
        expect(title).toBeDefined();
    });
});

