import React , {useState, useEffect} from 'react'

const Definitions = (props) => {
  const [letter, setLetter] = useState('A')

  useEffect(() => {
    setLetter(props.letter)
  }, [props.letter])
  const word = {
    fontSize:'15px',
    fontWeight:"700",
  }
 const define = {
    fontSize:'12px',
  }
  const wordbox ={
    paddingTop:'10px',
  }
 const container ={
    paddingBottom:'30px'
  }

    return (
<div style={{paddingHorizontal:20}}>
{letter == 'A' &&
<div style={container}>
  <div style={wordbox}>
    <p style={word}>Abstract of title</p>
  <p style={define}>A written history of all the transactions related to the title for a specific tract of land. An abstract of title covers the period from the original source of title (often the original land grant from the United States government to an individual) to the present time and summarizes all subsequent documents that have been recorded against that tract.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Acceptance</p>
  <p style={define}>A buyer’s or seller’s agreement to enter into a contract and be bound by the terms of the offer.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Account Termination Fee</p>
  <p style={define}>A fee that may be charged if you pay in full and terminate your home equity line of credit during the first 5 years. Paying down to a zero balance does not count as termination. See also: prepayment penalty.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Additional principal payment</p>
  <p style={define}>A payment made by a borrower of more than the scheduled principal amount due in order to reduce the outstanding balance on the loan, to save on interest over the life of the loan and/or pay off the loan early.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Adjustable-rate mortgage (ARM)</p>
  <p style={define}>A mortgage in which your interest rate and monthly payments may change periodically during the life of the loan, based on the fluctuation of an index. Lenders may charge a lower interest rate for the initial period of the loan. Most ARMs have a rate cap that limits the amount the interest rate can change, both in an adjustment period and over the life of the loan. Also called a variable-rate mortgage.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Adjustment cap</p>
  <p style={define}>A limit to how much a variable interest rate can increase or decrease in a single adjustment period.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Adjustment period</p>
  <p style={define}>The period of time between adjustment dates for an adjustable-rate mortgage (ARM).</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Affordability analysis</p>
  <p style={define}>A preliminary analysis of a borrower’s ability to afford the purchase of a home that takes into consideration factors such as income, liabilities and available funds, as well as the type of home loan, the likely taxes and insurance for the home and the estimated closing costs. See also: Prequalification</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Amoritization Table or Schedule</p>
  <p style={define}>A timetable or schedule that gives you a breakdown of your monthly payments into principal and interest. You can use this schedule to figure out the amount of principal you’ll be repaying during your mortgage term.</p>
  </div>
</div>
}
{letter == 'B' &&
<div style={container}>
<div style={wordbox}>
  <p style={word}>Balance Sheet</p>
<p style={define}>A dated financial statement (in table form) that shows your assets, liabilities and net worth.</p>
</div>
<div style={wordbox}>
  <p style={word}>Balloon loan</p>
<p style={define}>A loan that provides you with lower-than-usual monthly payments for a set period of time followed by a payment larger than usual at the end of your loan repayment period. While a balloon loan may lower your monthly payments it can also mean you make higher interest payments over the life of the loan.</p>
</div>
<div style={wordbox}>
  <p style={word}>Base rate</p>
<p style={define}>An interest rate that is used as a benchmark, or index, for pricing variable-rate loans such as adjustable-rate mortgages, auto loans and credit cards.</p>
</div>
<div style={wordbox}>
  <p style={word}>Basis point</p>
<p style={define}>An amount equal to 1/100th of a percentage point. For example, a fee calculated as 50 basis points of $200,000 would be 0.50% or $1,000.</p>
</div>
<div style={wordbox}>
  <p style={word}>Break even point</p>
<p style={define}>The point at which total income equals total expenses. Also used in connection with decisions related to purchasing discount points on a mortgage. Calculating the break even point will identify how many months it will take to recoup the costs associated with paying for the discount point amount under consideration. In other words, if $3,600 is paid toward discount points to reduce the interest rate and the reduced rate would decrease the monthly mortgage payment by $100, it would take 3 years to break even on the choice to pay the discount point amount.</p>
</div>
<div style={wordbox}>
  <p style={word}>Bridge loan</p>
<p style={define}>A type of mortgage financing between the termination of one loan and the start of another loan. For example, a bridge loan might be taken out by a borrower and secured by that borrower’s present home so that the closing on a new house can take place before the present home is sold.</p>
</div>
<div style={wordbox}>
  <p style={word}>Broker</p>
<p style={define}>A third party who arranges funding or negotiates a contract between parties, but does not lend the money.</p>
</div>
<div style={wordbox}>
  <p style={word}>Buydown</p>
<p style={define}>The lump-sum prepayment of all or a portion of your mortgage interest by a lender or homebuilder in order to lower your monthly mortgage payment, typically for a period of 1-3 years. See also: Term</p>
</div>
</div>
}
{letter == 'C' &&
<div style={container}>
<div style={wordbox}>
  <p style={word}>Cap</p>
<p style={define}>A limit on how much a variable interest rate can increase. Many adjustable-rate mortgages have both annual (or semiannual) rate caps and lifetime caps. They limit the amount your payments can increase in an adjustment period and over the life of the loan. See: Interest rate cap.</p>
</div>
<div style={wordbox}>
  <p style={word}>Cash available for closing</p>
<p style={define}>Borrower funds that are available to cover down payment and closing costs. If lending guidelines require the borrower to have cash reserves at the time the loan closes or that the down payment come from specified sources, the borrower’s cash available for closing does not include cash reserves or money from those specified sources.</p>
</div>
<div style={wordbox}>
  <p style={word}>Cash to close</p>
<p style={define}>The amount a homebuyer needs in cash at the closing of the loan. This typically, this includes down payment and closing costs.</p>
</div>
<div style={wordbox}>
  <p style={word}>Cash-out refinance</p>
<p style={define}>A refinance transaction in which the new loan amount exceeds the total of the principal balance of the existing first mortgage and any secondary mortgages or liens, together with closing costs and points for the new loan. This excess is usually given to the borrower in cash and can often be used for debt consolidation, home improvement or any other purpose.</p>
</div>
<div style={wordbox}>
  <p style={word}>Ceiling rate</p>
<p style={define}>The maximum interest rate that can accrue on a variable rate loan or adjustable-rate mortgage (ARM).</p>
</div>
<div style={wordbox}>
  <p style={word}>Certificate of title</p>
<p style={define}>A statement provided by an abstract company, title company or attorney stating who holds title to real estate based on the public record.</p>
</div>
<div style={wordbox}>
  <p style={word}>Clear title</p>
<p style={define}>Titles that are marketable and are free of liens or disputed legal questions as to ownership of the property.</p>
</div>
<div style={wordbox}>
  <p style={word}>Close</p>
<p style={define}>The Close step is the date you will sign and execute your new loan documents.Depending on the location of the property or type of transaction, the three business days right of rescission period may apply before your funds are available to you. The three business days right of rescission period states that in certain real estate secured transactions that involve the refinance of a primary residence, the Truth in Lending Act allows applicants 3 business days to cancel the transaction and prohibits lenders from disbursing proceeds until after the rescission period has lapsed.</p>
</div>
</div>
}
{letter == 'D' &&
<div style={container}>
<div style={wordbox}>
  <p style={word}>Debt consolidation</p>
<p style={define}>A single loan to pay off multiple debts, usually over a longer term. This is a popular use for a home equity line of credit.</p>
</div>
<div style={wordbox}>
  <p style={word}>Debt-to-income ratio</p>
<p style={define}>Your total monthly debt payments (for example: loans, credit cards and court-ordered payments) divided by your gross monthly income before taxes and expressed as a percentage. Federal Housing Administration (FHA) guidelines layer in early 2017 recommend that your monthly mortgage payment should be no greater than 31% of your monthly income before taxes and your total monthly debt should be no greater than 43% of your monthly income before taxes.</p>
</div>
<div style={wordbox}>
  <p style={word}>Deed (warranty or quit-claim)</p>
<p style={define}>A document that legally transfers ownership of real estate from a seller to a buyer and delivered to the buyer at closing. Before making a loan, a lender will usually require a title search or a title report to make sure the borrower legally owns the real estate tthat is being used to secure the loan.</p>
</div>
<div style={wordbox}>
  <p style={word}>Deed of trust</p>
<p style={define}>The document used in some states instead of a mortgage; title is vested in a trustee to secure repayment of the loan.</p>
</div>
<div style={wordbox}>
  <p style={word}>Down payment</p>
<p style={define}>The amount of cash you pay toward the purchase of your home to make up the difference between the purchase price and your mortgage loan. Down payments often range between 5% and 20% of the sales price depending on many factors, including your loan, your lender and your credit history. How much of a down payment should you make?</p>
</div>
<div style={wordbox}>
  <p style={word}>Due-on-sale provision</p>
<p style={define}>A provision in a mortgage home loan that allows the lender to demand repayment in full if the borrower sells the property that serves as security for the loan.</p>
</div>
</div>
}
{letter == 'E' &&
<div style={container}>
<div style={wordbox}>
  <p style={word}>Earnest money</p>
<p style={define}>A deposit made toward a down payment as a sign of good faith. The deposit is typically made when a purchase agreement is signed.</p>
</div>
<div style={wordbox}>
  <p style={word}>Encumbrance</p>
<p style={define}>Any lien or liability attached to a property that affects or limits the title to that property, for example unpaid taxes, mortgages and leases.</p>
</div>
<div style={wordbox}>
  <p style={word}>Equal Credit Opportunity Act (ECOA)</p>
<p style={define}>A federal law that requires lenders and other creditors to make credit available without discrimination based on race, color, religion, national origin, age, sex, marital status or receipt of income from public assistance programs. Learn more about the ECOA</p>
</div>
<div style={wordbox}>
  <p style={word}>Equity</p>
<p style={define}>The difference between the fair market value (appraised value) of your home and your outstanding mortgage balances and other liens.</p>
</div>
<div style={wordbox}>
  <p style={word}>Escrow</p>
<p style={define}>Funds deposited with a third party, to be held until a specific date is reached and/or a specific condition is met.</p>
</div>
<div style={wordbox}>
  <p style={word}>Extra Payment/Payment Overage</p>
<p style={define}>When you pay more than your contractual payment, the additional amount that is paid, can either pay your next month's contractual payment or reduce the unpaid principal balance of your mortgage after satisfying any other amounts that are due (for example, outstanding fees, etc.). This may reduce the interest assessed in the future.</p>
</div>
</div>
}
{letter == 'F' &&
<div style={container}>
<div style={wordbox}>
  <p style={word}>Fair Credit Reporting Act (FCRA)</p>
<p style={define}>Law passed by Congress to give borrowers certain rights when dealing with consumer reporting agencies, or credit bureaus. All credit bureaus are required to provide accurate credit histories to authorized businesses for use in evaluating applications for insurance, employment, credit or loans.</p>
</div>
<div style={wordbox}>
  <p style={word}>Fair market value</p>
<p style={define}>The likely selling price of a home. The fair market value is usually determined by an appraisal.</p>
</div>
<div style={wordbox}>
  <p style={word}>Federal Housing Administration (FHA)</p>
<p style={define}>An agency of the Department of Housing and Urban Development. The FHA provides mortgage insurance for certain residential mortgages. It also sets standards for underwriting these mortgages and for construction of homes secured by these mortgages.</p>
</div>
<div style={wordbox}>
  <p style={word}>Fee Simple</p>
<p style={define}>Clear and absolute ownership of a piece of property. The fee simple owner of a property has the right to use the land in any way desired, for example: build on it, sell it or lease it.</p>
</div>
<div style={wordbox}>
  <p style={word}>Fixed-rate mortgage</p>
<p style={define}>A home loan with a predetermined fixed interest rate for the entire term of the loan.</p>
</div>
<div style={wordbox}>
  <p style={word}>Forbearance</p>
<p style={define}>A period during which your monthly loan payments are temporarily suspended or reduced. You may qualify for forbearance if you are willing but unable to make loan payments due to certain types of financial hardships. During forbearance, principal payments are postponed but interest continues to accrue.</p>
</div>
<div style={wordbox}>
  <p style={word}>Foreclosure</p>
<p style={define}>A legal procedure in which property securing a defaulted loan is sold by the lender in order to repay a borrower’s loan. The amount paid by a buyer at the foreclosure may not be enough to fully repay the loan and the borrower may continue to owe the lender the difference.</p>
</div>
</div>
}
{letter == 'G' &&
<div style={container}>
  <div style={wordbox}>
  <p style={word}>Good faith estimate (GFE)</p>
<p style={define}>An itemized, detailed list of certain estimated costs associated with a home loan that the lender is required to provide to the borrower within 3 business days of the application.</p>
</div>
</div>
}
{letter == 'H' &&
<div style={container}>
  <div style={wordbox}>
  <p style={word}>Homeowners insurance</p>
<p style={define}>Insurance to protect your home against damage from fire, hurricanes and other catastrophes. Usually, homeowners insurance also covers you against theft and vandalism, as well as personal liability in case someone is hurt or injured on your property. A lender will likely require you to name it as a payee under the insurance if you need to make a claim. Also called hazard insurance.</p>
</div>
<div style={wordbox}>
  <p style={word}>Home equity line of credit (HELOC)</p>
<p style={define}>A line of credit secured by the borrower's residence. The typical HELOC term is 30 years: a 10-year draw period followed by a 20-year repayment period. A HELOC is often used for home improvements, debt consolidation or other major expenses. In most cases, you can withdraw funds up to your available credit limit for the first 10 years (your draw period) using convenience checks, debit cards or money transfer via Online Banking.</p>
</div>
<div style={wordbox}>
  <p style={word}>HUD</p>
<p style={define}>An acronym for the U.S. Department of Housing and Urban Development. HUD is a government agency responsible for the implementation and administration of housing and urban development programs. Among other things, HUD administers the Federal Housing Administration, enforces RESPA regulations and oversees Fannie Mae and Freddie Mac.</p>
</div>
</div>
}
{letter == 'I' &&
<div style={container}>
   <div style={wordbox}>
  <p style={word}>Impounding</p>
<p style={define}>The collection and placement of monies by a lender into an account in order to pay the borrower’s property taxes and insurance premiums when they become due.</p>
</div>
<div style={wordbox}>
  <p style={word}>Index</p>
<p style={define}>When used in a mortgage note or credit agreement, a financial index is the measurement used to decide how much the annual percentage rate will change at the beginning of each adjustment period. Generally, the index plus or minus margin equals the new rate that will be charged, subject to any caps. Lenders use various financial index rates: Secured Overnight Financing Rate[(SOFR) and Treasury-Indexed ARMs (T-Bills)]</p>
</div>
<div style={wordbox}>
  <p style={word}>Insured mortgage</p>
<p style={define}>A mortgage that is protected by an insurer in case of default. The insurance protects the lender (not the borrower) if a borrower defaults on the loan.</p>
</div>
<div style={wordbox}>
  <p style={word}>Interest rate cap</p>
<p style={define}>A limit on how much the variable interest rate can increase at any one time. Many home loans have both annual (or semiannual) caps and lifetime caps, which limit the amount your payments can increase in an adjustment period and over the life of the loan. Many caps allow a rate increase of 2-5% over the starting interest rate in an adjustment period (for example, a starting rate of 5% could increase to 7% or, depending on the loan guidelines, to as much as 10%). A lender’s lifetime interest rate cap is typically 6% over the life of the loan.</p>
</div>
</div>
}
{letter == 'J' &&
<div style={container}>
  <div style={wordbox}>
  <p style={word}>Jumbo loan</p>
<p style={define}>Also known as a nonconforming loan. The amount of the loan exceeds standards that would make it eligible for sale to Fannie Mae and Freddie Mac. Certain geographical areas have temporary conforming loan limits higher than typical conforming limits. Lenders may charge additional fees and place certain restrictions due to the large loan amounts. </p>
</div>
</div>
}
{letter == 'K' &&
<div ><p>No Definitions</p></div>
}
{letter == 'L' &&
<div style={container}>
  <div style={wordbox}>
  <p style={word}>Lien</p>
<p style={define}>The legal claim of a creditor on a borrower’s property, to be used as security for a debt. </p>
</div>
<div style={wordbox}>
  <p style={word}>Loan Estimate (LE)</p>
<p style={define}>Disclosure to help consumers understand the key loan terms and estimated costs of a mortgage before they make a complete application. After a consumer submits 6 key elements: name, income, social security number, property address, estimated property value and desired loan amount, the lender is required to provide this form. All lenders are required to use the same standard loan estimate form to make it easier for consumers to compare and shop for a mortgage. </p>
</div>
<div style={wordbox}>
  <p style={word}>Loan origination</p>
<p style={define}>The process by which a mortgage lender makes a home loan and records a mortgage against the borrower’s real property as security for repayment of the loan. </p>
</div>
<div style={wordbox}>
  <p style={word}>Loan-to-value ratio (LTV)</p>
<p style={define}>The ratio between the unpaid principal amount of your loan, or your credit limit in the case of a line of credit, and the appraised value of your collateral. Expressed as a percentage. For example, if you have an $80,000 first mortgage on a property with an appraised value of $100,000, the LTV is 80% ($80,000 / $100,000 = 80%).</p>
</div>
</div>
}
{letter == 'M' &&
<div style={container}>
  <div style={wordbox}>
  <p style={word}>Margin</p>
  <p style={define}>The number of percentage points the lender adds to or subtracts from the index rate to determine the interest rate adjustments. The margin is constant throughout the life of the mortgage and is specified in the promissory note.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Maturity Date</p>
  <p style={define}>The day on which the outstanding principal, interest and fees on a loan must all be repaid.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Mortgage</p>
  <p style={define}>A legal document giving a lender a lien on real estate to secure repayment of a loan. Mortgage loans generally run from 10 to 30 years, after which the loan is required to be paid off. Also called deed of trust and/or security deed.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Mortgage Insurance</p>
  <p style={define}>For conventional loans, insurance that protects the lender if you default on your loan. If your down payment is less than 20%, most lenders will require you to pay mortgage insurance. Also called private mortgage insurance (PMI).</p>
  </div>
</div>
}
{letter == 'N' &&
<div style={container}>
  <div style={wordbox}>
    <p style={word}>Negative amortization</p>
  <p style={define}>The result when monthly payments don’t cover all the interest due on the loan. The unpaid interest is added to the unpaid balance, which means the homebuyer will owe increasingly more than the original amount of the loan.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>No closing cost loan</p>
  <p style={define}>A loan in which the borrower is not required to pay cash out-of-pocket at closing for the normal closing costs. The lender typically includes the closing costs in the principal balance or charges a higher interest rate than for a loan with closing costs to cover the advance of closing costs.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Notice of default</p>
  <p style={define}>A formal written notice to a borrower that a default has occurred and that legal action may be taken.</p>
  </div>
</div>
}
{letter == 'O' &&
<div style={container}>
  <div style={wordbox}>
    <p style={word}>Option ARM</p>
  <p style={define}>A type of adjustable-rate mortgage (ARM) that offers the borrower a choice of 4 monthly payment options to help provide financial flexibility to manage payments in rising rate markets and take advantage of falling interest rates.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Origination</p>
  <p style={define}>The date that the proceeds of a loan are disbursed.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Origination fee</p>
  <p style={define}>A fee imposed by a lender to cover certain processing expenses in connection with making a mortgage loan. Usually a percentage of the amount loaned (often 1%). The origination fee is stated in the form of points.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Owner financing</p>
  <p style={define}>A property purchase transaction in which the property seller provides all or part of the financing.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Owner-occupied</p>
  <p style={define}>A property that the owner occupies as a principal residence.</p>
  </div>
</div>
}
{letter == 'P' &&
<div style={container}>
  <div style={wordbox}>
    <p style={word}>Payment cap</p>
  <p style={define}>A limit on how much a monthly payment can increase at any one time. Some adjustable-rate mortgages have payment caps in addition to annual (or semi-annual) interest rate caps and lifetime interest rate caps. Payment caps don’t limit the amount of interest charged and may cause negative amortization.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Payment change date</p>
  <p style={define}>The date when a new monthly payment amount takes effect on an adjustable-rate mortgage (ARM). Generally, the payment change date occurs in the month immediately after the interest rate adjustment date. The borrower is notified 30 days before the new rate and payment take effect.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Payoff</p>
  <p style={define}>Payment of the outstanding balance of a loan in full. Also, the amount required to pay the outstanding balance in full.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>PITI</p>
  <p style={define}>An acronym for principal, interest, taxes and insurance. Also referred to as the monthly housing expense.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Points</p>
  <p style={define}>An amount paid to the lender, typically at closing, to lower (or buy down) the interest rate. One discount point equals one percentage point of the loan amount. For example, 2 points on a $100,000 mortgage would cost $2,000. Negative points indicate the amount to be credited at closing to reduce closing costs. Also called discount points or mortgage points.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Preapproval</p>
  <p style={define}>A lender’s conditional agreement to lend a specific amount of money to a homebuyer under a specified set of terms.</p>
  </div>
  <div style={wordbox}>
    <p style={word}>Principal & Interest</p>
  <p style={define}>The principal is the amount of money borrowed on a loan. The interest is the charge paid for borrowing money. Principal and interest account for the majority of your mortgage payment, which may also include escrow payments for property taxes, homeowners insurance, mortgage insurance and any other costs that are paid monthly, or fees that may come due.</p>
  </div>

</div>
}
{letter == 'Q' &&
<div style={container}>
  <div style={wordbox}>
    <p style={word}>Qualifying ratios</p>
  <p style={define}>
  Calculations that are used to determine whether a borrower can qualify for a mortgage. They consist of 2 separate calculations: a housing expense as a percent of income and total debt obligations as a percent of income.
  </p>
  </div>
</div>
}
{letter == 'R' &&
<div style={container}>
  <div style={wordbox}>
    <p style={word}>Rate</p>
  <p style={define}>
  The amount of interest on a loan, expressed as a percentage.
  </p>
  </div>
  <div style={wordbox}>
    <p style={word}>Rate Lock</p>
  <p style={define}>
  A commitment issued by a lender to a borrower guaranteeing a specific interest rate for a specified period of time. Rate lock periods are for a fixed number of days, and rate lock expiration occurs when that period has passed, subjecting the interest rate on the loan to market fluctuations since the date of the initial rate lock. When a rate lock expires, you will need to contact your lending specialist to establish a new rate lock prior to closing your loan.
  </p>
  </div>
  <div style={wordbox}>
    <p style={word}>Reamortize</p>
  <p style={define}>
  To take the remaining balance of a mortgage loan and establish a new period of amortization after which the principal balance will be zero. Typically used after the end of the term of an interest-only loan.
  </p>
  </div>
  <div style={wordbox}>
    <p style={word}>Recording</p>
  <p style={define}>
  A charge for a public official (typically a Registrar of Deeds or County Clerk) noting in the public record the terms of a legal document affecting title to real property such as a deed, a security instrument, a satisfaction of mortgage or an extension of mortgage.
  </p>
  </div>
  <div style={wordbox}>
    <p style={word}>Refinance</p>
  <p style={define}>
  Paying off your existing loan with the proceeds from a new loan, generally using the same property as collateral, in order to take advantage of lower monthly payments, lower interest rates or save on financing costs.
  </p>
  </div>
</div>
}
{letter == 'S' &&
<div style={container}>
  <div style={wordbox}>
    <p style={word}>Security</p>
  <p style={define}>
  The property that will be pledged as collateral for a loan. If the borrower defaults, the lender can sell the collateral to satisfy the debt.
  </p>
  </div>
  <div style={wordbox}>
    <p style={word}>Settlement</p>
  <p style={define}>
  The completion of a property’s sale or purchase, or the completion of all steps necessary to receive the proceeds of (and create an obligation to repay) a loan.
  </p>
  </div>
  <div style={wordbox}>
    <p style={word}>Short Sale</p>
  <p style={define}>
  A commonly used alternative to a foreclosure. If a homeowner can no longer afford to make mortgage payments and their home is worth less than they owe, a short sale allows them to sell the home to pay off the mortgage. In a short sale, the lender agrees to accept an amount less than is actually owed on the loan, based on a showing of financial hardship.
  </p>
  </div>
  <div style={wordbox}>
    <p style={word}>Start Rate</p>
  <p style={define}>
  The starting interest rate for an adjustable-rate mortgage (ARM) loan or variable-rate home equity line of credit. Also known as an initial rate or intro rate. It provides lower interest and lower monthly payments at the beginning but may adjust at the next adjustment period.
  </p>
  </div>
  <div style={wordbox}>
    <p style={word}>Subordinate financing</p>
  <p style={define}>
  Any mortgage or other lien that has a priority lower than that of the first mortgage. The subordinate loan has a claim to payment in a foreclosure only after the first mortgage is paid.
  </p>
  </div>
</div>
}
{letter == 'T' &&
<div style={container}>
  <div style={wordbox}>
    <p style={word}>Term</p>
  <p style={define}>
  The number of years it will take to pay off a loan. The loan term is used to determine the payment amount, repayment schedule and total interest paid over the life of the loan.
  </p>
  </div>
  <div style={wordbox}>
    <p style={word}>Title</p>
  <p style={define}>
  Written evidence of ownership in property.
  </p>
  </div>
  <div style={wordbox}>
    <p style={word}>Treasury Index</p>
  <p style={define}>
  An index that is used to determine interest rate changes for certain adjustable-rate mortgage (ARM) plans. It is based on the results of auctions that the U.S. Treasury holds for its Treasury bills and securities or is derived from the U.S. Treasury’s daily yield curve, which is based on the closing market bid yields on actively traded Treasury securities in the over-the-counter market. 
  </p>
  </div>
</div>
}
{letter == 'U' &&
<div style={container}>
  <div style={wordbox}>
    <p style={word}>Underwriting</p>
  <p style={define}>
  The lender’s process of deciding whether to make a loan to a potential borrower based on credit, employment, assets and other factors, and the matching of this risk to an appropriate rate, term and loan amount.
  </p>
  </div>
  <div style={wordbox}>
    <p style={word}>Unsecured Loans</p>
  <p style={define}>
  Typically used when referring to a loan or a line of credit (unsecured loan, unsecured line of credit) that is not backed by collateral.
  </p>
  </div>
</div>
}
{letter == 'V' &&
<div style={container}>
  <div style={wordbox}>
    <p style={word}>VA Loans</p>
  <p style={define}>
  A mortgage that is guaranteed by the Department of Veterans Affairs (VA) for qualified veterans of U.S. military forces.
  </p>
  </div>
  <div style={wordbox}>
    <p style={word}>Variable Rate</p>
  <p style={define}>
  An interest rate that may fluctuate or change periodically, often in relation to an index such as the prime rate or other criteria. Payments may increase or decrease accordingly.
  </p>
  </div>
  <div style={wordbox}>
    <p style={word}>Variable-rate monthly minimum payment</p>
  <p style={define}>
  The minimum amount you will need to pay each month on your home equity line of credit, or HELOC (does not include any payments for the Fixed- Rate Loan Payment Option). The payment amount includes both principal and interest (minimum of $100). The monthly required payment may vary each month and is based on your outstanding loan balance and fluctuating interest rate. In general, this payment is intended to repay your loan balance in substantially equal principal and interest installments over the remaining loan term, based on the balance and rate information at the time of each monthly calculation.
  </p>
  </div>
</div>
}
{letter == 'W' &&
<div style={container}>
  <div style={wordbox}>
    <p style={word}>What-if Analysis</p>
  <p style={define}>
  An affordability analysis that is based on a what-if scenario. A what-if analysis is useful if you do not have complete data or if you want to explore the effect of various changes to your income, liabilities, or available funds or to the qualifying ratios or down payment expenses that are used in the analysis.
  </p>
  </div>
</div>
}
{letter == 'X' &&
<div><p>No Definitions</p></div>
}
{letter == 'Y' &&
<div style={container}>
  <div style={wordbox}>
    <p style={word}>Year-end statement</p>
  <p style={define}>
  The report shows how much was paid in interest during the year, as well as the remaining mortgage loan balance at the end of the year. If the bank has an impound account for you, it will also show how much was paid and reserved in property taxes. If the bank does not have a property tax impound account, then tax details are not displayed on the report.
  </p>
  </div>
</div>
}
{letter == 'Z' &&
<div><p>No Definitions</p></div>
}
</div>
    )
}
export default Definitions