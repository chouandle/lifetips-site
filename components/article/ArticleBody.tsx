interface ArticleBodyProps {
  body: string;
}

export function ArticleBody({ body }: ArticleBodyProps) {
  return (
    <article className="max-w-4xl mx-auto my-10 px-5">
      <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
        <div
          className="prose prose-lg max-w-none
            prose-h2:text-2xl prose-h2:font-semibold prose-h2:text-gray-900 prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b-2 prose-h2:border-teal
            prose-h2:first:mt-0
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-teal prose-strong:font-semibold
            prose-ol:pl-6 prose-ul:pl-6 prose-li:mb-2
            prose-table:w-full prose-table:shadow-sm prose-table:rounded-lg prose-table:overflow-hidden
            prose-th:bg-gray-50 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-gray-600 prose-th:text-sm
            prose-td:px-4 prose-td:py-3 prose-td:border-t prose-td:border-gray-100
            prose-tr:hover:bg-gray-25
          "
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </article>
  );
}