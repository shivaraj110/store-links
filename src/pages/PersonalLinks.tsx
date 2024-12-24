import React, { useState } from 'react';
import { LinkCard } from '../components/LinkCard';
import { SearchBar } from '../components/SearchBar';
import { Button } from '../components/ui/Button';
import { Link } from '../types';

const mockLinks: Link[] = [
  {
    id: '1',
    title: 'Example Personal Link',
    url: 'https://example.com',
    description: 'This is a personal link example',
    isPublic: false,
    userId: '1',
    createdAt: new Date().toISOString(),
    views: 0,
    user: {
      id: '1',
      username: 'johndoe',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces',
    },
  },
];

export default function PersonalLinks() {
  const [search, setSearch] = useState('');
  const [links] = useState<Link[]>(mockLinks);

  const filteredLinks = links.filter((link) =>
    link.title.toLowerCase().includes(search.toLowerCase()) ||
    link.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Personal Links</h1>
        <Button size="sm">Add Link</Button>
      </div>

      <SearchBar value={search} onChange={setSearch} />

      <div className="space-y-3 mt-4">
        {filteredLinks.map((link) => (
          <LinkCard
            key={link.id}
            link={link}
            onEdit={() => {}}
            onDelete={() => {}}
          />
        ))}
      </div>
    </div>
  );
}