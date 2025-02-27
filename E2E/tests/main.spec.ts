import { test, expect } from "@playwright/test";
import { SidebarPage } from "../pageObjects/SidebarPage";
import { TablePage } from "../pageObjects/TablePage";
import { SitePage } from "../pageObjects/SitePage";
import { EditPage } from "../pageObjects/EditPage";
import { defaultBid, editBid } from "../interfaces/Bid";

test.beforeEach("Go to page", async ({ page }) => {
  await page.goto("http://localhost:5050");
});

test("Smoke tests", async ({ page }) => {
  await expect(
    page.locator("//table[@class='table table-striped']")
  ).toBeVisible();
  await expect(
    page.locator("//h1[@data-name='offers-information']")
  ).toHaveText("Hello, welcome to bid management!");
});

test("Sidebar test", async ({ page }) => {
  const sidebar = new SidebarPage(page);
  await sidebar.isVisible();
  await sidebar.clickHome();
  await expect(sidebar.clickedHome).toHaveClass(/active/);
  await sidebar.clickAperture();
});

test("Table visibility test", async ({ page }) => {
  const table = new TablePage(page);
  await table.isVisible();
  await table.expectColumns();
});

test("Add button test", async ({ page }) => {
  const site = new SitePage(page);
  await site.isVisible();
  await site.expectText();
  await site.clickButton();
  await site.modal.expectModalVisible();
});

test("Edit", async ({ page }) => {
  const table = new TablePage(page);
  const edit = new EditPage(page);
  await table.isVisible();
  await table.clickEdit();
  await edit.expectFormVisible();
});

test("Delete", async ({ page }) => {
  const table = new TablePage(page);
  await table.isVisible();
  await table.clickDelete();
  await table.delete.expectModalVisible();
});

test("View", async ({ page }) => {
  const table = new TablePage(page);
  await table.isVisible();
  await table.clickView();
});

test.only("Add BID", async ({ page }) => {
  const site = new SitePage(page);
  const table = new TablePage(page);
  await site.isVisible();
  await site.expectText();
  await site.clickButton();
  await site.modal.expectModalVisible();
  await site.modal.fillForm();
  await site.modal.clickSubmit();
  await expect(table.rowName).toContainText(defaultBid.name);
});

test.only("Edit BID", async ({ page }) => {
  const site = new SitePage(page);
  const table = new TablePage(page);
  const edit = new EditPage(page);
  await site.isVisible();
  await table.clickEdit();
  await edit.expectFormVisible();
  await edit.editForm();
  await edit.clickSubmit();
  await expect(table.rowName).toContainText(editBid.name);
});

test("Delete BID", async ({ page }) => {
  const site = new SitePage(page);
  const table = new TablePage(page);
  await table.clickDelete();
  await site.deleteModal.clickYes();
  await expect(table.rowName).toBeHidden();
});