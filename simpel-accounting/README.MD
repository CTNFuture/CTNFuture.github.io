## **Simpel Accounting 2016**

This version of Simpel Accounting is a demo/front-end only. I'll update with a link to a new Github repository with a fully or more functional version.

FAQ


**Simpel Accounting?!? Don't you mean "simple?"**

"Simpel" is the more phonetically correct way to spell the word "simple." And since I intentionally misspelled that word, I can worry less about someone else already using the phrase, "Simpel Accounting."


**How is this method of accounting different? Why use it?**

Simpel accounting is actually about both the accounting method used (cash over accrual) and how it is presented.

Simpel accounting presents the data in a very simple way to start (only showing net worth and profit, if any). From this big picture view, the reader of the financials can dig into the data one step at a time (Click Profit (Cash, Operating) -> Revenue to see what I'm writing about). Data is also presented with easy to understand graphs.

Next, cash is king. And cash basis of accounting is the best. Accrual basis of accounting is simply a timing difference in regards to cash. However, accountants can use these projections to shift money around the corporate timeline to make things seem more favorable for the company. For example, high profits from one year can be shifted into another year (by making certain accounting elections and estimates) that the financial officer is concerned about having low profits. This can smooth out profits and make it seem like the company is always out performing last year.

Worst case scenario, accrual basis of accounting allows fictitious entries (e.g. Enron's use of [mark-to-market accounting](https://en.wikipedia.org/wiki/Enron_scandal#Mark-to-market_accounting)) to slip by due to the overwhelming complexity it adds to financial statements. By keeping the income statement on a cash basis, such abusive accounting practices are impossible. Furthermore, auditing such statements are extremely easy.

Simply put, cash basis keeps them honest.


**Why do we use accrual accounting? Does Simpel Accounting not use any accrual accounting?**

No, Simpel Accounting does use accrual accounting, however it is separately stated. You can find accrued expenses and revenues in the following location:

Click the ≡ icon -> *Comprehensive Financials*. They are listed under *Other Income/Loss incurred (to be received/paid in the future)*. The timing difference is reflected with the credit card icon next to it.

For *Other Income/Loss incurred (to be received/paid in the future)*, the accrued amounts includes accrued revenue and expenses (amounts owed to the company or from the company but no billing has taken place) and expenses and revenues related to accounts payable and accounts receivable (billing has taken place, but no cash has exchanged hands).

*Other Income/Loss incurred (to be received/paid in the future)* does not include depreciation, amortization, or bad debt write-offs.

It is still important to list accruals (but keep them separate from cash) to prevent abusive accounting practices.

For example, say the mayor of a city is approached by a company to put down sidewalks for his entire city for $10,000,000. The mayor knows that will bankrupt the city. The company says, "Don't worry, we'll just bill you 5 years from now." The mayor knows that he will be out of office after 4 years and with the city being on a cash basis the financial statements will make it look like he kept the city in budget while giving them all new sidewalks. He'll be a hero and can continue his political campaign elsewhere, but leaving the city in a bad financial position.

Thus, accruals need to be stated so the public can know what is really going on. However, having them separately stated makes them easier to find and track.


**Does Simpel Accounting really make things easier for people to understand what is going on?**

Have you seen a financial statement before? Look at this city's [financial statement](http://www.co.delaware.oh.us/auditor/cafr/cafr2014/2014%20cafr%20delaware.pdf) and tell me where does the city get and spend most of it's *cash*?

As a citizen shouldn't that information be made very clear to you?


**Who is suppose to use Simpel Accounting?**

My intentions were to have cities' financial information on a public website (think Wikipedia) in an easy to understand format. Perhaps former accountants would input financial statements of their cities into a huge database, which citizens can easily access. This way corruption can be easily seen.

For example, Demo City, CA obviously has problems with police pensions and public forfeiture.

But I think such a simple, cash basis presentation of financial information should be used for all entities (corporations, non-profits, individuals, governments, etc.). While this should never be used in place of required financial reporting, I think it can and should be used by entities to provide investors and potential investors a clear picture of what is going on.


**What about non-cash expenses like depreciation, amortization, and inventory write-offs?**

Such information is still tracked, but it is kept in the balance sheet (the net worth part of Simpel Accounting). Click Net Worth -> Assets -> Property -> Buildings to see what I'm talking about.

I eventually plan on adding a separate schedule and a graph of that data.


**I understand why you wouldn't put accrued revenue and expenses on the income statement, but why not depreciation?**

While depreciation is not an accrued expense (expenses recognized now but paid with cash later), it is part of the accrual accounting system (you already paid the cash, but you recognize the expense later through the [matching principle](https://en.wikipedia.org/wiki/Matching_principle)).

Non-cash expenses like depreciation, amortization, bad debt account write-offs, and inventory write-offs are all estimations of the decreased value of a company. You won't know the actual value (how much cash they will receive), until that building, inventory, or whatever is sold. Thus, they should all be in the net worth calculation (as this number is only an estimate of what the company is worth), not in the cash profit calculation.

(By the way, cash purchases of buildings would be listed under *unusual expenses*. While it maybe necessary expense to run their city, cities aren't in the business of buying and selling buildings for profit and purchasing and creating builds are not a regular activity for them.)

Plus, certain accounting methods on non-cash expenses can allow accountants to push profits to different years, thus they have the same problems as accrued revenue and expenses.


**Why does it default to operating income instead of net income? Why does net income have a strikethrough?**

When comparing prior years or other companies/cities, you usually want to look at operating income. That is why it is there by default. However, net income is still necessary for a full analysis. Net income (on a cash basis) can be found under the ≡ icon -> Comprehensive Financials as Total Loss/Profit.

However, I want to make such information available on the Simple Format page. But that is a little beyond my amateur programming skills for now. That is why it has a strikethrough until I add that feature.


**So am I free to use Simpel Accounting?**

Please view the license in the repository for details on how you can use Simpel Accounting.

Furthermore, keep in mind we use code/templates from the following:

Website uses Highcharts. Please visit their website for licenses available at:<BR>https://shop.highsoft.com/highcharts

Website uses a template from CodyHouse.co:<BR>https://codyhouse.co/demo/secondary-expandable-navigation/index.html

Please visit CodyHouse.co's Terms page for use of such template:<BR>https://codyhouse.co/terms/

Website uses Sweet Alerts:<BR>http://t4t5.github.io/sweetalert/
