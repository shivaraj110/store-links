import { formatDistanceToNow } from 'date-fns';
import { Eye, Link as LinkIcon } from 'lucide-react';
import React from 'react';
import { Link } from '../types';

type LinkCardProps = {
  link: Link;
  onEdit?: () => void;
  onDelete?: () => void;
};

export function LinkCard({ link, onEdit, onDelete }: LinkCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{link.title}</h3>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex items-center text-sm text-blue-600 hover:underline"
          >
            <LinkIcon className="mr-1 h-4 w-4" />
            Visit Link
          </a>
        </div>
        {(onEdit || onDelete) && (
          <div className="flex space-x-2">
            {onEdit && (
              <button
                onClick={onEdit}
                className="text-gray-500 hover:text-gray-700"
              >
                Edit
              </button>
            )}
            {onDelete && (
              <button
                onClick={onDelete}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            )}
          </div>
        )}
      </div>
      <p className="mt-2 text-sm text-gray-600">{link.description}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <img
            src={link.user.avatarUrl}
            alt={link.user.username}
            className="mr-2 h-6 w-6 rounded-full"
          />
          <span>{link.user.username}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <Eye className="mr-1 h-4 w-4" />
            {link.views}
          </span>
          <span>{formatDistanceToNow(new Date(link.createdAt))} ago</span>
        </div>
      </div>
    </div>
  );
}