import React, { useState } from 'react';
import { CategoryFilter } from '../components/CategoryFilter';
import { LinkCard } from '../components/LinkCard';
import { SearchBar } from '../components/SearchBar';
import { Link, LinkCategory } from '../types';

const mockLinks: Link[] = [
  {
    id: '1',
    title: 'Example Scholarship',
    url: 'https://example.com/scholarship',
    description: 'Full scholarship opportunity for CS students',
    category: 'scholarships',
    isPublic: true,
    userId: '1',
    createdAt: new Date().toISOString(),
    views: 42,
    user: {
      id: '1',
      username: 'johndoe',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces',
    },
  },
];

export default function PublicLinks() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<LinkCategory | null>(null);
  const [links] = useState<Link[]>(mockLinks);

  const filteredLinks = links.filter(
    (link) =>
      (category === null || link.category === category) &&
      (link.title.toLowerCase().includes(search.toLowerCase()) ||
        link.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Public Links</h1>
        <p className="mt-1 text-gray-600">
          Discover and share useful resources with the community
        </p>
      </div>

      <CategoryFilter selected={category} onChange={setCategory} />
      <SearchBar value={search} onChange={setSearch} />

      <div className="space-y-4">
        {filteredLinks.map((link) => (
          <LinkCard
            key={link.id}
            link={link}
            onEdit={link.userId === '1' ? () => {} : undefined}
            onDelete={link.userId === '1' ? () => {} : undefined}
          />
        ))}
      </div>
    </div>
  );
}