import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../document.model';
import { DocumentItem } from '../document-item/document-item';

@Component({
  selector: 'cms-document-list',
  imports: [CommonModule, DocumentItem],
  templateUrl: './document-list.html',
  styleUrl: './document-list.css'
})
export class DocumentList {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document('1', 'Design Patterns', 'Classic software design patterns reference', 'https://example.com/design-patterns', null),
    new Document('2', 'Angular Guide', 'Official Angular style guide and best practices', 'https://example.com/angular-guide', null),
    new Document('3', 'API Reference', 'REST API documentation for the CMS backend', 'https://example.com/api-reference', null),
    new Document('4', 'User Manual', 'End-user manual for the WeLearn CMS platform', 'https://example.com/user-manual', null),
    new Document('5', 'Release Notes', 'Changelog and release notes for version 2.0', 'https://example.com/release-notes', null)
  ];

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}