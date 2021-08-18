import { RenderItemProps } from "../../interfaces";

export const processCategoryDataToDisplay = (categories: RenderItemProps[]) => {
  // Filter expenses with "Confirmed" status
  const chartData = categories.map((item: RenderItemProps) => {
    let confirmExpenses = item.expenses.filter((a) => a.status == "C");
    var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0);

    return {
      name: item.name,
      y: total,
      expenseCount: confirmExpenses.length,
      color: item.color,
      id: item.id,
    };
  });

  // filter out categories with no data/expenses
  const filterChartData = chartData.filter((a) => a.y > 0);

  // Calculate the total expenses
  const totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0);

  // Calculate percentage and repopulate chart data
  const finalChartData = filterChartData.map((item) => {
    const percentage = ((item.y / totalExpense) * 100).toFixed(0);
    return {
      label: `${percentage}%`,
      y: Number(item.y),
      expenseCount: item.expenseCount,
      color: item.color,
      name: item.name,
      id: item.id,
    };
  });

  return finalChartData;
};
