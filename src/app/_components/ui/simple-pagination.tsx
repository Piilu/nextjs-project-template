import React from 'react'
import
{
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationEllipsis
}
    from './pagination'
import { Button } from './button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type PageMeta } from '~/server/service/paginate-service';

type SimplePaginationProps = {
    id: string,
    justify?: "end" | "start" | "center",
    meta: PageMeta,
    onPageChange: (page: number) => void;
}

export default function SimplePagination(props: SimplePaginationProps)
{
    const { justify, meta, onPageChange, id } = props;

    const totalPagesToDisplay = 5;
    const showLeftEllipsis = meta.currentPage - 1 > totalPagesToDisplay / 2;
    const showRightEllipsis = meta.totalPages - 1 - meta.currentPage + 1 > totalPagesToDisplay / 2;
    const getPageNumbers = () =>
    {
        if (meta.total === 0)
        {
            return Array.from({ length: 1 }, (_, i) => i + 1);
        }
        if (meta.totalPages <= totalPagesToDisplay)
        {
            return Array.from({ length: meta.totalPages }, (_, i) => i + 1);
        } else
        {
            const half = Math.floor(totalPagesToDisplay / 2);
            // To ensure that the current page is always in the middle
            let start = meta.currentPage - half;
            let end = meta.currentPage + half;
            // If the current page is near the start
            if (start < 1)
            {
                start = 1;
                end = totalPagesToDisplay;
            }
            // If the current page is near the end
            if (end > meta.totalPages)
            {
                start = meta.totalPages - totalPagesToDisplay + 1;
                end = meta.totalPages;
            }
            // If showLeftEllipsis is true, add an ellipsis before the start page
            if (showLeftEllipsis)
            {
                start++;
            }
            // If showRightEllipsis is true, add an ellipsis after the end page
            if (showRightEllipsis)
            {
                end--;
            }
            return Array.from({ length: end - start + 1 }, (_, i) => start + i);
        }
    };

    return (
        <Pagination>
            <PaginationContent className={`w-full flex justify-${justify ?? "start"}`}>
                <PaginationItem>
                    <Button
                        disabled={meta.prev === null}
                        onClick={() => onPageChange(meta.prev ?? 1)}
                        size={"icon"} variant={"ghost"}><ChevronLeft className='h-4 w-4' /></Button>
                </PaginationItem>

                {
                    showLeftEllipsis &&
                    <>
                        <PaginationItem onClick={() => onPageChange(1)}>
                            <Button variant={meta.currentPage == 1 ? "outline" : "ghost"} size={"icon"}>1</Button>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    </>
                }
                {
                    getPageNumbers().map(page =>
                    {
                        return (
                            <PaginationItem key={`${id}-page-${page}`} onClick={() => onPageChange(page)}>
                                <Button variant={page == meta?.currentPage ? "outline" : "ghost"} size={"icon"}>{page}</Button>
                            </PaginationItem>
                        )
                    })
                }
                {
                    showRightEllipsis &&
                    <>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem onClick={() => onPageChange(meta?.totalPages)}>
                            <Button variant={meta.currentPage == meta.totalPages ? "outline" : "ghost"} size={"icon"}>{meta.totalPages}</Button>
                        </PaginationItem>
                    </>
                }

                <PaginationItem>
                    <Button
                        disabled={meta.next === null}
                        onClick={() => onPageChange(meta?.next ?? meta.totalPages)}
                        size={"icon"} variant={"ghost"}><ChevronRight className='h-4 w-4' /></Button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
