---
document_id: lingee-unified-page-generation-spec
document_role: executable-entrypoint-and-governance-contract
title: Lingee 通用页面生成与验收规范
version: "2.5.0"
status: lingee-icon-source-migrated_pending_versioned-page-source-closure
updated_at: 2026-08-06
timezone: Asia/Taipei
language: zh-CN
spec_scope: page-generation-framework-and-deterministic-web-lowering
entrypoint_semantics: single-entrypoint-not-single-byte-container
source_ingestion: figma-direct-read-plus-pinned-lingee-icon-package-required
icon_source_ingestion: official-lingee-icon-package-only
manual_visual_values: forbidden
direct_read_completeness_required: true
codegen_protocol_status: defined
release_data_status: blocked_pending_active_manifest_and_artifact_closure
generation_readiness:
  derived_only: true
  ready: false
  codegen_protocol_ready: true
  figma_link_validation_ready: false
  icon_library_validation_ready: false
  active_page_manifest_ready: false
  used_component_contracts_ready: false
  token_font_asset_closure_ready: false
  renderer_profile_locked: false
  baseline_matrix_ready: false
  machine_schema_validation_ready: false
  blocking_reason_codes:
    - NO_ACTIVE_PAGE_MANIFEST
    - NO_ACTIVE_SHELL_OR_ARCHETYPE
    - USED_COMPONENT_CONTRACTS_INCOMPLETE
    - RELEASE_ARTIFACT_CLOSURE_INCOMPLETE
    - RENDERER_PROFILE_NOT_LOCKED
    - BASELINE_MATRIX_EMPTY
    - FIGMA_IMMUTABLE_VERSION_MISSING
    - FIGMA_EXACT_SOURCE_LINK_CLOSURE_INCOMPLETE
    - LINGEE_ICON_PAGE_MAPPING_INCOMPLETE
machine_contracts:
  schema_bundle_version: "2.2.0"
  required_paths:
    release_manifest: "acceptance/<release-id>/release-manifest.yaml"
    page_manifest_schema: "schemas/page-manifest-2.2.0.schema.json"
    component_contract_schema: "schemas/component-contract-2.2.0.schema.json"
    archetype_contract_schema: "schemas/archetype-contract-2.2.0.schema.json"
    source_map_schema: "schemas/source-map-2.2.0.schema.json"
    read_report_schema: "schemas/read-report-2.2.0.schema.json"
    semantic_validator: "validators/lingee-contract-validator"
    icon_compatibility_map: "sources/lingee-icon/1.0.15/icon-compatibility-map.json"
    icon_used_report: "sources/lingee-icon/1.0.15/used-icons-report.json"
  artifact_status: required_not_materialized
release_bundle_contract:
  spec_path: "Lingee-unified-page-generation-spec.md"
  path_policy: repository-relative-posix
  external_artifacts_required: true
  artifact_root_hash_algorithm: sha256-sorted-path-index-v1
  no_unresolved_placeholders_in_active_records: true
figma_link_contract:
  schema_version: "1.0.0"
  identity_tuple:
    - file_key
    - immutable_version_id
    - node_id
    - component_key_or_not_applicable
  human_url_role: locator_only_not_version_proof
  canonical_url_policy: exact_file_key_and_node_id_no_session_t_required
  deterministic_read_requires:
    - immutable_version_id
    - canonical_version_request
    - exact_read_root
    - expected_node_type
    - expected_raw_name
    - component_key_when_publishable
    - snapshot_sha256
    - reference_closure
  source_audit_before_v2_4_link_completion:
    document_version_audited: "2.3.0"
    audited_at: 2026-08-06
    url_occurrence_count: 80
    unique_url_count: 56
    unique_node_specific_url_count: 55
    existing_node_specific_url_count: 54
    missing_node_specific_url_count: 1
    versioned_url_count: 0
    known_missing_locator:
      file_key: HXHbn9VT1RgPuJ70JI4tQ5
      node_id: "20086:11753"
      role: topbar-legacy-root
    basic_component_catalog_entry_count: 37
    basic_component_catalog_entry_existing_count: 37
    basic_component_catalog_entry_type_distribution:
      PAGE: 26
      FRAME: 5
      SECTION: 1
      COMPONENT_SET: 5
    ai_input_atomic_section_current_direct_child_count: 22
    ai_input_atomic_section_previous_documented_direct_child_count: 21
    ai_input_newly_reconciled_non_contract_child_node_id: "22130:13104"
  source_audit_after_v2_4_link_completion:
    document_version_audited: "2.4.0"
    audited_at: 2026-08-06
    figma_url_occurrence_count: 173
    unique_figma_url_count: 136
    concrete_node_url_occurrence_count: 168
    unique_concrete_node_url_count: 134
    unique_file_key_and_node_id_target_count: 132
    non_concrete_template_or_file_url_occurrence_count: 5
    known_dead_concrete_target_count: 1
    known_dead_target: "HXHbn9VT1RgPuJ70JI4tQ5 / 20086:11753"
    immutable_versioned_url_or_request_count: 0
    stale_ai_input_21_count_occurrence: 0
  readiness: blocked_pending_version_and_exact-source-link-closure
token_contract_status: registered_alias_audit_pending
token_sources:
  - id: global-color
    file: color.tokens.json
    mode: color
    layer: global-palette
  - id: semantic-light
    file: light.tokens.json
    mode: Light
    layer: semantic-palette
  - id: semantic-dark
    file: dark.tokens.json
    mode: dark
    layer: semantic-palette
  - id: component-color
    file: components.json
    mode: "Mode 1"
    layer: component-palette
  - id: typography
    file: typography.json
    mode: kwork
    layer: typography
  - id: spacing
    file: spacing.json
    mode: "Mode 1"
    layer: spacing
  - id: radius
    file: radius.json
    mode: light
    layer: radius
design_system_figma:
  file_key: HXHbn9VT1RgPuJ70JI4tQ5
  file_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-"
  immutable_version_id: REQUIRED
  canonical_version_request: REQUIRED
  canonical_node_url_template: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id={node_id_colon_to_hyphen}"
  global_catalog_node_id: "5:509"
  global_catalog_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=5-509"
typography_contract_status: combined_live_read_consistent_binding_pending
typography_spec_source:
  file_key: HXHbn9VT1RgPuJ70JI4tQ5
  root_node_id: "22009:521"
  root_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22009-521"
  root_name: Typography - 芝芝
  content_node_id: "22009:535"
  content_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22009-535"
  source_role: composite-typography-usage-contract
  read_method: figma-mcp-two-node-cross-read
  immutable_version_id: REQUIRED_PER_ACCEPTANCE_RELEASE
  variable_binding_status: connector-not-returned
  open_weight_label_conflicts:
    - heading-16
    - heading-14
spacing_contract_status: combined_live_column_cross_read_consistent_naming_conflicts_coverage_gap_binding_pending
spacing_spec_source:
  file_key: HXHbn9VT1RgPuJ70JI4tQ5
  root_node_id: "22009:894"
  root_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22009-894"
  table_node_id: "22009:895"
  table_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22009-895"
  source_role: spacing-hook-and-unit-contract
  read_method: figma-mcp-root-table-plus-three-column-cross-read
  columns:
    names: "22009:896"
    rem: "22009:923"
    px: "22009:950"
  column_urls:
    names: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22009-896"
    rem: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22009-923"
    px: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22009-950"
  immutable_version_id: REQUIRED_PER_ACCEPTANCE_RELEASE
  variable_binding_status: connector-not-returned
  open_naming_conflicts:
    - decimal-hook-1.5x-small-vs-token-1-5x-small
    - decimal-hook-0.5x-small-vs-token-0-5x-small
    - sl-prefixed-medium-hook-vs-token-medium
  coverage_gaps:
    - local-0-5x-large-24-not-in-figma-table
radius_contract_status: combined_live_column_cross_read_consistent_circle_conflict_binding_pending
radius_spec_source:
  file_key: HXHbn9VT1RgPuJ70JI4tQ5
  root_node_id: "22009:657"
  root_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22009-657"
  table_node_id: "22009:658"
  table_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22009-658"
  source_role: radius-usage-and-unit-contract
  read_method: figma-mcp-root-plus-four-column-cross-read
  columns:
    names: "22009:659"
    values: "22009:684"
    examples: "22009:709"
    usage: "22009:734"
  column_urls:
    names: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22009-659"
    values: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22009-684"
    examples: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22009-709"
    usage: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22009-734"
  immutable_version_id: REQUIRED_PER_ACCEPTANCE_RELEASE
  variable_binding_status: connector-not-returned
  open_semantic_conflicts:
    - radius-circle-50-percent-height-vs-999
  metadata_description_conflicts:
    - small
    - medium
    - large
    - x-large
icon_library_contract_status: official-package-pinned-runtime-exports-audited_catalog-defects-and-page-icon-mapping-pending
icon_library_spec_source:
  documentation_url: "https://kingdee.github.io/lingee-ui/#/foundation/icon"
  package_name: lingee-icon
  package_version: "1.0.15"
  package_version_policy: exact-version-only
  package_homepage: "https://kingdee.github.io/lingee-icon"
  npm_url: "https://www.npmjs.com/package/lingee-icon/v/1.0.15"
  repository_url: "https://github.com/kingdee/lingee-icon"
  npm_integrity: "sha512-BS9sueKMX0tPaOkr7RkZBqwiZshjx/L+jKLu/7l6cnvr42Lm0FrJuda8Yx7oaLJkqTx9au+QHm/W/P7aPDhHZg=="
  tarball_sha256: "87ecacb9900ea61cb5fb8734d9d5ede35c28e4b378a62d893d8856428eb58e7e"
  catalog_path: ICONS.md
  catalog_sha256: "90adaced05883590a1a67b93eb8c99adcf428528482399976f40dd2b0ceb0963"
  type_index_path: dist/index.d.ts
  type_index_sha256: "8836802c7b4230b45192303534fee58abb76ad28e2fce56d6a06fdbde93e786f"
  sprite_path: dist/svg-sprite.js
  sprite_sha256: "0aeaec0e07641e1cc6505261dc45409a765dc8c96a51b1680f6d9ffef3791600"
  source_role: canonical-icon-catalog-and-runtime-component-contract
  authority: sole-runtime-icon-library-spec-source
  read_method: pinned-npm-package-metadata-plus-published-artifact-audit
  icon_name_format: PascalCase
  runtime_category_count: 27
  runtime_export_count: 966
  catalog_table_row_count: 967
  catalog_declared_header_category_count: 21
  catalog_declared_header_icon_count: 872
  catalog_declared_section_count_sum: 966
  catalog_runtime_exact_match_count: 965
  catalog_only_name_count: 2
  runtime_only_name_count: 1
  catalog_defects:
    - {catalog_name: GitFork, runtime_export: null, status: unavailable_block}
    - {catalog_name: "ExclamationCircleFill（详情）", runtime_export: ExclamationCircleFill, status: explicit-compatibility-mapping-required}
  common_sizes: [16, 18, 20, 24]
  react_api: named-component-import
  html_api: pinned-local-svg-sprite
  default_color_mode: currentColor
  figma_icon_root_role: historical-visual-mapping-only_not-runtime-source
  figma_visual_reference:
    file_key: HXHbn9VT1RgPuJ70JI4tQ5
    root_node_id: "22007:30176"
    root_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22007-30176"
topbar_component_contract_status: live-canvas-and-section-cross-read-consistent_legacy-root-not-found_immutable-version-and-contract-pending
topbar_spec_source:
  file_key: HXHbn9VT1RgPuJ70JI4tQ5
  canvas_node_id: "9659:23458"
  canvas_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9659-23458"
  section_node_id: "22090:14341"
  section_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22090-14341"
  legacy_root_node_id: "20086:11753"
  legacy_root_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=20086-11753"
  legacy_root_probe_status: node-not-found-topology-unresolved
  read_method: figma-mcp-section-and-canvas-cross-read-plus-legacy-root-probe
  direct_component_count: 5
  direct_components:
    - {raw_name: 顶部栏, node_id: "19461:4154", component_key: 7821b30f2358cd442ed683b6737f0ad6a2a5e3f7, url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=19461-4154"}
    - {raw_name: 二级页签顶部栏, node_id: "19461:4345", component_key: a18b90b1a2df97b94e2e69e11335b21afa449537, url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=19461-4345"}
    - {raw_name: 三级页签顶部栏, node_id: "19461:4734", component_key: f77f6afd53389f7a5d27455278e25151c1cfdce5, url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=19461-4734"}
    - {raw_name: 详情页顶部栏, node_id: "19483:12205", component_key: f2a30c32de20c793d29f14a5f8b2fe84b270ae24, url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=19483-12205"}
    - {raw_name: 分页顶部栏, node_id: "18515:13646", component_key: 0bd6602cfa72caac61cc82651e92d104ed0dbc32, url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=18515-13646"}
  formal_boolean_definition_count: 12
  immutable_version_id: REQUIRED_PER_ACCEPTANCE_RELEASE
  direct_read_complete: false
sidebar_component_contract_status: variant-enumerated_state-switch-blocked_direct-read-incomplete_immutable-version-pending
sidebar_spec_source:
  file_key: HXHbn9VT1RgPuJ70JI4tQ5
  canvas_raw_name: 左导航
  canvas_node_id: "9659:23457"
  canvas_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9659-23457"
  new_composite_set_raw_name: 1.Sidebar
  new_composite_set_node_id: "22109:985"
  new_composite_set_key: 7f84bbc8a9d1927d5d30aaca70a3f4e6c5b242e1
  new_composite_set_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-985"
  new_composite_variant_count: 3
  atomic_section_raw_name: 左导航原子
  atomic_section_node_id: "22109:1090"
  atomic_section_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-1090"
  direct_component_set_count: 14
  atomic_component_set_links:
    - {raw_name: ConversationItem, node_id: "22109:1091", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-1091"}
    - {raw_name: NewTaskPanel, node_id: "22109:1138", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-1138"}
    - {raw_name: History Panel, node_id: "22109:1162", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-1162"}
    - {raw_name: History Panel-dev, node_id: "22109:1191", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-1191"}
    - {raw_name: icon, node_id: "22109:1243", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-1243"}
    - {raw_name: NewTaskButton, node_id: "22109:1248", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-1248"}
    - {raw_name: Room Navigation Item, node_id: "22109:1261", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-1261"}
    - {raw_name: Partner Sessions, node_id: "22109:1283", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-1283"}
    - {raw_name: Partner Sessions, node_id: "22109:1296", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-1296"}
    - {raw_name: Profile picture, node_id: "22109:1318", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-1318"}
    - {raw_name: Component 1, node_id: "22109:1326", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-1326"}
    - {raw_name: Window Title Bar, node_id: "22109:1399", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-1399"}
    - {raw_name: Conversation Group Header, node_id: "22109:1440", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-1440"}
    - {raw_name: Component 5, node_id: "22109:1470", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-1470"}
  direct_component_count: 50
  unique_set_variant_tuple_count: 49
  direct_example_instance_count: 3
  formal_property_count: 19
  formal_boolean_property_count: 11
  formal_text_property_count: 8
  legacy_set_raw_name: Sidebar
  legacy_set_node_id: "9745:8380"
  legacy_set_key: 3d9d9a3bc0534026f5757ff0ffb51e36d96c57fb
  legacy_set_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9745-8380"
  legacy_descendant_status: historical-current-revalidation-pending
  read_method: figma-mcp-canvas-subtree-plus-new-set-and-atomic-section-exact-cross-read
  evidence_level: variant-enumerated
  state_switch_readiness: blocked
  immutable_version_id: pending
  direct_read_complete: false
content_card_component_contract_status: catalogued_not_contract_complete_section-enumerated-and-resolved-instance-observed_runtime-contract-blocked_direct-read-incomplete_immutable-version-pending
content_card_spec_source:
  file_key: HXHbn9VT1RgPuJ70JI4tQ5
  canvas_type: CANVAS
  canvas_raw_name: 内容卡片
  canvas_node_id: "9667:19011"
  canvas_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9667-19011"
  section_type: SECTION
  section_raw_name: 设置
  section_node_id: "22125:5795"
  section_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22125-5795"
  section_dimensions: "2066×3558"
  section_fill: "white"
  section_stroke: "1px rgba(0,0,0,0.1)"
  canvas_section_topology_status: current-direct-child-no-completeness-proof
  direct_section_child_count: 14
  direct_component_set_count: 6
  set_variant_component_count: 13
  direct_standalone_component_count: 2
  direct_example_instance_count: 6
  section_owned_component_definition_count: 15
  direct_definition_roots:
    - {raw_name: 内容区, node_type: COMPONENT_SET, node_id: "22125:5796", component_key: a57d5184934c0861f696328a1dfa134678984ac3, url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22125-5796"}
    - {raw_name: " 2.列表内容卡片", node_type: COMPONENT_SET, node_id: "22125:5969", component_key: 28a3db1ea9d230f87508a4f2c6dc28893fdf6d40, url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22125-5969"}
    - {raw_name: StepIndicator, node_type: COMPONENT_SET, node_id: "22125:6110", component_key: 05c336d3245498cc05e71547f0f0dad733b2473d, url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22125-6110"}
    - {raw_name: FileListItem, node_type: COMPONENT_SET, node_id: "22125:6121", component_key: 0d0c0d0be0c60948de3dfc9a9569099c10d8bf0c, url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22125-6121"}
    - {raw_name: More Button, node_type: COMPONENT_SET, node_id: "22125:6138", component_key: cb706eaec2b06a3e51ad1fd5189a9a1fa7089518, url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22125-6138"}
    - {raw_name: CategoryLink, node_type: COMPONENT_SET, node_id: "22125:6143", component_key: 9a16f8f1b6b1d56a3b8af16d9eff505267082d88, url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22125-6143"}
    - {raw_name: 分类标题, node_type: COMPONENT, node_id: "22125:5848", component_key: 80927fdab60521967a33d36df6e3123da4981a8c, url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22125-5848"}
    - {raw_name: " 5.执行卡片", node_type: COMPONENT, node_id: "22125:6093", component_key: 5977a1ae2625401b823f02e95cbc90429a097fec, url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22125-6093"}
  formal_property_count: 32
  formal_boolean_property_count: 24
  formal_text_property_count: 8
  exact_source_root_probe_count: 4
  exact_source_root_probe_ids:
    - "22125:6022"
    - "22125:6075"
    - "22125:6085"
    - "22125:6091"
  exact_source_root_probe_urls:
    - "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22125-6022"
    - "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22125-6075"
    - "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22125-6085"
    - "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22125-6091"
  source_root_descendant_status: not-returned
  read_method: figma-mcp-section-and-canvas-cross-read-plus-four-card-source-root-probes
  evidence_level: section-enumerated-and-resolved-instance-observed
  runtime_contract_readiness: blocked
  immutable_version_id: pending
  direct_read_complete: false
ai_input_component_contract_status: catalogued_not_contract_complete_section-enumerated-and-all-direct-definition-roots-exact-cross-read-plus-resolved-instance-source-root-observed_runtime-contract-blocked_direct-read-incomplete_immutable-version-pending
ai_input_spec_source:
  file_key: HXHbn9VT1RgPuJ70JI4tQ5
  canvas_type: CANVAS
  canvas_raw_name: "对话输入框（ai）"
  canvas_node_id: "9667:17533"
  canvas_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9667-17533"
  section_type: SECTION
  section_raw_name: 输入框原子
  section_node_id: "22130:12743"
  section_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-12743"
  section_dimensions: "5078×5684"
  section_fill: "white"
  section_stroke: "1px rgba(0,0,0,0.1)"
  canvas_section_topology_status: current-direct-child-no-completeness-proof
  direct_section_child_count: 22
  direct_component_set_count: 17
  set_variant_component_count: 57
  direct_standalone_component_count: 3
  direct_example_instance_count: 1
  direct_non_contract_frame_count: 1
  direct_non_contract_frame:
    node_id: "22130:13104"
    node_type: FRAME
    raw_name: "Animated Grid 15×15"
    url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13104"
    contract_role: documentation-scaffold-not-component-definition
  section_owned_component_definition_count: 60
  direct_definition_root_links:
    - {node_type: COMPONENT_SET, node_id: "22130:12744", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-12744"}
    - {node_type: COMPONENT_SET, node_id: "22130:12768", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-12768"}
    - {node_type: COMPONENT_SET, node_id: "22130:12773", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-12773"}
    - {node_type: COMPONENT_SET, node_id: "22130:12880", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-12880"}
    - {node_type: COMPONENT_SET, node_id: "22130:12991", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-12991"}
    - {node_type: COMPONENT_SET, node_id: "22130:13017", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13017"}
    - {node_type: COMPONENT_SET, node_id: "22130:13024", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13024"}
    - {node_type: COMPONENT_SET, node_id: "22130:13034", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13034"}
    - {node_type: COMPONENT_SET, node_id: "22130:13039", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13039"}
    - {node_type: COMPONENT_SET, node_id: "22130:13079", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13079"}
    - {node_type: COMPONENT_SET, node_id: "22130:13330", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13330"}
    - {node_type: COMPONENT_SET, node_id: "22130:13342", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13342"}
    - {node_type: COMPONENT_SET, node_id: "22130:13357", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13357"}
    - {node_type: COMPONENT_SET, node_id: "22130:13402", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13402"}
    - {node_type: COMPONENT_SET, node_id: "22130:13415", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13415"}
    - {node_type: COMPONENT_SET, node_id: "22130:13425", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13425"}
    - {node_type: COMPONENT_SET, node_id: "22130:13456", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13456"}
    - {node_type: COMPONENT, node_id: "22130:12987", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-12987"}
    - {node_type: COMPONENT, node_id: "22130:12989", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-12989"}
    - {node_type: COMPONENT, node_id: "22130:13006", url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13006"}
  formal_property_count: 4
  formal_boolean_property_count: 4
  formal_text_property_count: 0
  returned_formal_boolean_values:
    - owner_raw_name: 对话操作
      owner_node_id: "22130:13006"
      raw_property_name: 显示页签
      value: false
      current_live_exact_root_binding_target: "Tabs INSTANCE visibility"
    - owner_raw_name: tabs-glass
      owner_node_id: "22130:13415"
      raw_property_name: txet
      value: true
      current_live_exact_root_binding_target: "TEXT visibility"
    - owner_raw_name: tabs-glass
      owner_node_id: "22130:13415"
      raw_property_name: icon
      value: true
      current_live_exact_root_binding_target: "PieChart INSTANCE visibility"
    - owner_raw_name: " 1.首页-对话框"
      owner_node_id: "22130:13425"
      raw_property_name: 显示推荐卡
      value: true
      current_live_exact_root_binding_target: "推荐场景卡片 INSTANCE visibility"
  formal_visibility_wiring_scope: current-node-tree-only-not-production-default-or-runtime-transition
  direct_definition_exact_root_probe_count: 20
  direct_definition_exact_root_probe_breakdown: "17 COMPONENT_SET roots + 3 standalone COMPONENT roots"
  direct_definition_exact_root_probe_ids:
    - "22130:12744"
    - "22130:12768"
    - "22130:12773"
    - "22130:12880"
    - "22130:12991"
    - "22130:13017"
    - "22130:13024"
    - "22130:13034"
    - "22130:13039"
    - "22130:13079"
    - "22130:13330"
    - "22130:13342"
    - "22130:13357"
    - "22130:13402"
    - "22130:13415"
    - "22130:13425"
    - "22130:13456"
    - "22130:12987"
    - "22130:12989"
    - "22130:13006"
  direct_definition_exact_root_subtree_status: current-live-returned
  exact_source_root_probe_count: 1
  exact_source_root_probe_ids:
    - "22130:13030"
  exact_source_root_probe_urls:
    - "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13030"
  source_root_descendant_status: not-returned
  source_root_formal_property_status: not-returned
  read_method: figma-mcp-canvas-and-section-cross-read-plus-17-set-root-exact-probes-plus-3-standalone-root-exact-probes-plus-1-problem-guidance-source-root-probe
  evidence_level: section-enumerated-and-all-direct-definition-roots-exact-cross-read-plus-resolved-instance-source-root-observed
  runtime_contract_readiness: blocked
  immutable_version_id: pending
  direct_read_complete: false
  embedded_unique_image_ref_count: 6
  embedded_unique_image_refs:
    - "17d191423f23244e5dced613205855f762f78d4e"
    - "fdb8db15038ce2277f08deb1451bae7149b40150"
    - "8963a5beb1d3b082ca51e0381a19537811a5e974"
    - "880c21d5f4ec65c7a05284b030c4b72e1462cf2a"
    - "1c444169943c32827aabc78f8ab6645053a5c083"
    - "a91353ad96f1aff5e02ec119276e8cc10ed8f835"
  cropped_image_ref_observation:
    image_ref: "8963a5beb1d3b082ca51e0381a19537811a5e974"
    needsCropping: true
    crop_transform_status: current-live-returned-not-exported
  image_export_and_hash_status: not-exported
pending_typical_page_intake_count: 1
pending_typical_page_intakes:
  - page_id: workbench-home
    title: 工作台首页
    source:
      file_key: HXHbn9VT1RgPuJ70JI4tQ5
      root_node_id: "22025:6465"
      root_type: FRAME
      root_raw_name: 首页-新任务
      url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22025-6465&t=1NxUXT2KNQgaazdo-4"
      canonical_node_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22025-6465"
      link_role: page_instance_root
      immutable_version_id: REQUIRED
      canonical_version_request: REQUIRED
      version_url: OPTIONAL_HUMAN_LOCATOR
      source_mode: current-live-only
    target_matrix:
      viewport: "1920×1080"
      theme: light
      state: new-task-default
    status: live_evidence_pending_immutable_version
    direct_read_complete: false
    contract_status: blocked
    active_registry_eligible: false
typical_page_learning:
  status: live_evidence_pending_immutable_version
  registered_page_count: 0
  registered_pages: []
  active_archetype_count: 0
  active_shell_count: 0
  active_page_sources: []
  historical_page_evidence: discarded_by_user
  historical_page_reuse: forbidden
  existing_implementation_page_authority: none
protocol_layers:
  - Global System Contract
  - Archetype Contract
  - Page Manifest
  - Evidence & Acceptance Pack
pre_protocols:
  - Figma Direct-Read Protocol
  - Lingee Icon Package Resolution Protocol
  - Web Deterministic Rendering Protocol
component_catalog_status: catalogued_not_contract_complete
verification_rule: P0_NOT_ZERO_IMPLIES_IMPLEMENTED_UNVERIFIED
---

# Lingee 通用页面生成与验收规范

> 本文件是 Lingee 页面接入、确定性 Web 生成、审计和验收的唯一**入口与治理合同**，不是把字体、图片、SVG、Token、IR、Manifest 和 baseline 字节全部内嵌进 Markdown 的单文件容器。v2.5.0 在 v2.4.0 的 Figma 一一对应链接合同之上，将全部产品图标读取迁移到官方 [Lingee UI 图标库](https://kingdee.github.io/lingee-ui/#/foundation/icon) 对应的固定版本 `lingee-icon` 包：网站用于人工选图，受完整性校验的包产物用于机器读取与运行时渲染，Figma 图标节点仅保留为页面语义和视觉映射证据。当前仍缺 immutable page version、active Page Manifest、完整依赖组件合同、页面图标映射、冻结资产闭包和 baseline，因此 `generation_readiness.ready=false`。`workbench-home` 仍只是待 immutable-version 锁版的 pending live intake，不是 active registered page。**任一目标验收矩阵中的 P0 未清零，交付状态最高只能是 `implemented_unverified`，不得标记 `verified`、`pixel_verified` 或“100% 还原”。**

## 0. 执行摘要

1. 每次页面生成请求都必须由用户提供并最终锁定 **Figma file key/URL、目标 root page node、真实 immutable version ID，以及目标 viewport/theme/states**；缺少任一项时 Direct-Read Gate=`block`，不得开始实现。当前已收到 pending typical page intake=`1`：`workbench-home` 的 live file/root locator 与用户确认 matrix（`1920×1080` / `light` / `new-task-default`）已知，但 immutable version ID、canonical versioned request 与 source-version coherence 仍缺失；registered page=`0`、active page sources=`0`、active archetypes=`0`、active shells=`0`，状态为 `live_evidence_pending_immutable_version`。该 intake 必须从零锁版直读，不得继承任何历史页面事实，也不得升格为 active Page Manifest。
2. 所有视觉、结构与内容值必须来自**当前请求锁定 source 的完整直读快照**。`index.html`、`styles.css`、`app.js`、`README.md` 与 `assets/` 仅是 `quarantined historical implementation evidence`，不得反推新的 Page Manifest、archetype、shell、fixture 或资产绑定；人工抄值、截图目测、聊天上下文、缓存结果及其他非锁定来源也只能作为审计或冲突线索。
3. connector 若只能读取 live file、不能证明 immutable version，或任一 MCP/API 响应被截断而未完成分块续读与对账，必须记录 `unknown/block`，禁止标记 `direct-read-complete`。设计源数据可要求声明范围 100% 直读并对账，但不得把它偷换成浏览器数学零像素差。
4. 直读完成后，必须先通过 **Web Deterministic Rendering Protocol** 建立固定 renderer profile、render tree 与 lowering rule，再依次解析四层合同：**Global System Contract → Archetype Contract → Page Manifest → Evidence & Acceptance Pack**。下层只能收紧或实例化上层，不得静默覆盖上层硬规则；`direct_read_complete` 是 `extracted → contract_complete` 的必要但不充分条件，`generation_ready` 还必须由 release validator 派生。
5. 典型页面 active registry 当前仍为空：pending intakes=`1`，registered pages=`0`、active page sources=`0`、active archetypes=`0`。`workbench-home` 只登记 live intake identity，不创建 active Page Manifest；必须取得 immutable version 并完成全量直读、对账、schema 与审批后，才可进入 active registry，名称相同或相似也不得触发历史关联。
6. 页面 Shell 当前无 active 登记。`workbench-home` 的 current-live child geometry 仅为待锁版 observation，不是 immutable proof，也不定义 active shell 或 `main-local` origin。每个新页面的 viewport、Sidebar/main/topbar/content 几何、坐标原点与 shell identity 都必须由该页面锁定 source 的完整直读和 Manifest 明确定义；禁止从组件尺寸、旧代码、README、磁盘资产、聊天上下文、缓存或已丢弃页面反推。
7. 顶部栏/Sidebar/组件根节点总体仍为 `catalogued_not_contract_complete`；Alert `9640:63959`、Breadcrumb `12456:15731`、Button `16375:18601`、Checkbox `22031:12715`、Colorpicker `22035:1740`、DatePicker `19818:6054`、Divider `14654:142`、Drawer `18848:9085`、Form `18325:432`、Dropdown `16980:2989`、Empty `18405:8760`、Image Preview `22064:1923`、Indicators `14138:146`、Input `9640:63861`、Number Stepper `16338:4993`、Pagination `12456:13325`、Popover `17290:17715`、Radio `9659:15916`、RangePicker `9659:15915`、ScrollArea `9754:1315`、Search `9640:64731`、Select `13940:4020`、Slider `16671:21811`、Spin `14649:18225`、Steps `9659:17975`、Switch `9640:66921`、Table `9640:65189`、Dialog `9640:64241`、Tabs `9640:64818`、Tag `9640:63706`、Textarea `15443:3939`、Time Picker `9659:15034`、Toast `14657:16548`、Tooltip `12299:14090`、Progress `17649:6904`、Avatar `9640:65021` 三十六个组件仅分别有 3.6.1–3.6.36 的有限 live-read 观测；已知 node/尺寸/property/resolved value 不替代 immutable-version 完整直读、视觉/状态/交互/响应式/a11y 合同；三十六者均归一 `catalogued`，不得声称 `extracted`、`direct_read_complete` 或 `contract_complete`。
8. `list`、`table`、`form`、`dashboard`、`chat`、`settings`、`auth`、`error` 仅是未登记候选类型，active archetype=`0`；`workbench-home` pending live intake 不计为 archetype source page。只有至少一个用户新投喂的 page node 在 immutable version 上完整直读并形成通过 schema 校验的 Page Manifest 后，才允许建立新 archetype。
9. 业务名称、示例文案、示例数据和 Figma 画板内容均为 fixture/example，不是跨页面产品规则。当前 active 页面 fixture=`0`；§5.2 记录的 `workbench-home` 文案、卡片与会话/项目内容仅是 current-live fixture observation，尚未成为 deterministic approved fixture。任何历史页面、历史实现或名称相似性都不得成为新页面内容或行为来源。
10. 保真声明必须使用第 DR-5 节等级：默认视觉算法以“任一 RGBA 通道绝对差 `>8`”定义 changed pixel，并要求 `changed_pixel_ratio<=0.001`；`observed_max_channel_delta` 必须报告但不再与 changed-pixel 阈值重复作为普通 Gate。只有同 binary/font/OS/DPR 环境下 `changed_pixels=0`、`changed_pixel_ratio=0`、`max_channel_delta=0`，并且所有 hard/interaction/a11y checks 通过，才可声明 `literal_pixel_exact` 或字面“像素 100%”。若 Figma 与浏览器渲染差异使零差无法达到，必须如实停在 `visual_threshold_verified`。
11. 技术栈必须先探测目标项目：非空项目保留现有栈与目录约定；空项目才默认语义 HTML/CSS/JavaScript。新增依赖必须先获许可。当前仓库探测结果只能作为隔离的实现环境线索，不得授权任何页面入口、route、Manifest、archetype、shell、fixture 或资产绑定。

12. 当前仓库的 `color.tokens.json`、`light.tokens.json`、`dark.tokens.json`、`components.json`、`typography.json`、`spacing.json`、`radius.json` 是已登记的机器可读 Token 事实源；实现必须遵循“全局色板 → 语义色板 → 组件色板 → 组件实现”，非组件元素只消费语义色板，任何实现都不得直接消费全局色板。七文件尚须固定 SHA-256、完成 alias/命名/作用域审计并关闭第 3.8 节缺口，当前状态为 `registered_alias_audit_pending`，不得据“已登记”宣称 Token 合同已验证。

13. 字体合同采用双来源结合：`typography.json`/mode `kwork` 提供原子 Token 身份，Figma `HXHbn9VT1RgPuJ70JI4tQ5` 的 `Typography - 芝芝` 节点 `22009:521`（内容组 `22009:535`）提供复合用途。两次精确节点直读一致识别出 6 条标题与 4 条正文规范；但 connector 未返回 immutable version、稳定 Text Style ID 或 Variable 绑定，且标题 16/14 的标签 `Medium` 与样本文字 `Semibold 600` 冲突，因此当前只允许 `resolved-value-match`，不得虚报 `bound/direct_read_complete`，冲突角色不得投入实现。

14. 圆角合同同样采用双来源校对：`radius.json`/mode `light` 提供 11 个原子 Token 身份，Figma `HXHbn9VT1RgPuJ70JI4tQ5` 的圆角表 `22009:657` 提供 px/`50%H`、示例和应用场景。根节点与名称/值/示例/用途四列交叉读取一致：9 个固定圆角及 `pill=999px` 与本地解析值匹配；`circle` 在 Figma 为 `50%H`（80×80 示例半径 40），本地却为 999，必须 `block`。connector 未返回 immutable version 或 Variable binding，不得把名称/值一致写成已绑定。

15. 间距合同采用双来源校对：`spacing.json`/mode `Mode 1` 提供 13 个仅限 `GAP` scope 的原子 Token 身份，Figma `HXHbn9VT1RgPuJ70JI4tQ5` 的间距表 root `22009:894`/table `22009:895` 提供 12 条 hook、rem 与 px 表达。root/table 与名称 `22009:896`、rem `22009:923`、px `22009:950` 三列交叉读取一致：12/12 数值匹配且均满足 `1rem=16px`，9 条可按显式 `spacing-` namespace join 精确对齐；`spacing-1.5x-small`、`spacing-0.5x-small`、`--sl-spacing-medium` 与本地 path 存在 3 个命名冲突，本地 `0-5x-large=24` 则是 Figma 表覆盖缺口。connector 未返回 immutable version 或 Variable binding，名称/值一致不得写成已绑定，也不得把该表扩展到 padding、margin 或 gutter。

16. 产品图标的唯一运行时规范源改为 [Lingee UI Icon](https://kingdee.github.io/lingee-ui/#/foundation/icon) 对应的 `lingee-icon@1.0.15`。机器不得抓取网站 DOM 或 Figma 临时 SVG URL，而必须读取受 lockfile、npm integrity、tarball SHA-256、`ICONS.md`、`dist/index.d.ts` 与 sprite hash 约束的发布包。包内实际为 27 个分类、966 个 PascalCase runtime exports；`ICONS.md` 表有 967 行，顶部仍写 21 类/872 个，README 写 860 个，均不得作为机器计数。目录与 runtime exact match=965，`GitFork` 仅在目录、`ExclamationCircleFill（详情）` 与 runtime `ExclamationCircleFill` 名称不一致，必须按 §3.9 显式处置。Figma `HXHbn9VT1RgPuJ70JI4tQ5 / 22007:30176` 只保留为历史视觉/语义映射证据，不再决定运行时图标字节或组件身份。每个页面图标必须由逻辑语义映射到一个精确 `export_name`，找不到时 fail closed，禁止回退到 Figma 导出、emoji、Unicode、CSS 手绘、截图或第三方图标。

17. §3.0 已建立 9 类保留全局设计来源的唯一可点击索引：Token/颜色目录、Typography、Spacing、Radius、官方图标库、顶部栏、Sidebar、内容卡片与 AI 输入。其中 8 类 Figma 来源保存 file key、node ID 与完整 URL；图标类保存 Lingee UI 文档 URL、固定包版本、完整性与目录/类型索引 hash。AI 输入 current-live evidence 已对 **17/17 个 direct COMPONENT_SET roots + 3/3 个 direct standalone COMPONENT roots** 分别完成 exact-root subtree read，另有且分开计数的 `问题引导` source-root probe=`1`。链接与 exact probes 都只作 locator/evidence，不替代 immutable-version、pagination/completeness、包版本锁或完整合同证据，也不建立任何典型页面来源。
18. §3.6 已按证据拆分为 36 项“已完成有限 live-read”和 Skeleton 1 项“仅注册待学习”；37/37 均有对应 Figma URL。当前仅 `Lingee-unified-page-generation-spec.md` 是规范入口，workspace 根目录重复规范历史文件为 0。
19. 顶部栏组合组件的当前有限 live-read 以 `HXHbn9VT1RgPuJ70JI4tQ5` 的 Canvas `9659:23458` 与用户指定 SECTION `22090:14341` 为可定位入口；两次返回中的 SECTION subtree 一致，当前显示其直接包含 5 个独立 COMPONENT、合计 12 个 formal boolean definitions。旧登记 root `20086:11753` 的本次精确读取返回 `Node not found`，其与当前拓扑的关系保持 unresolved，禁止静默替换或按同名合并。该证据无 immutable version、非 full-recursive read，故 `direct_read_complete=false`；顶部栏不计入 §3.6 的 37 项基础控件。
20. 左导航当前有限 live-read 以 Canvas raw=`左导航` `9659:23457` 为入口；Canvas subtree 与对新组合 set raw=`1.Sidebar` `22109:985`、原子 SECTION raw=`左导航原子` `22109:1090` 的两次精确读取一致。新 set 只枚举 3 个 raw `scene=web` 组合变体（`state=chat`、`state=dev`、`state=Management`）；原子 SECTION 登记 14 个直接 COMPONENT_SET、50 个直接 COMPONENT、49 个唯一 set+variant tuple、3 个 SECTION 直接示例 INSTANCE，以及 19 项已返回 formal properties（11 boolean + 8 text）。legacy set raw=`Sidebar` `9745:8380` 本次只返回 set identity、无 descendants，十个旧 node 降为 `historical/current-revalidation-pending`；Canvas/new set/SECTION/legacy set 身份不得合并。当前仅为 `variant-enumerated`，`state_switch_readiness=blocked`、`direct_read_complete=false`，不等于 `runtime-switch-ready`；左导航属于全局/组合来源，不加入 §3.6，基础控件统计仍为 36+1=37。
21. 内容卡片当前有限 live-read 以 Canvas raw=`内容卡片` `9667:19011` 与用户指定 SECTION raw=`设置` `22125:5795` 为入口；SECTION 精确读取与 Canvas 返回中的同一 subtree 一致，当前 Canvas response 显示 SECTION 为直接 child，但没有 completeness proof，不得宣称它是 immutable file 中唯一 child。当前 SECTION 枚举 14 个直接 child：6 个 COMPONENT_SET、2 个独立 COMPONENT 与 6 个示例 INSTANCE；6 sets 下合计 13 个 variant COMPONENT，加 2 个独立定义，得到 15 个当前 section-owned component definition nodes；本次返回 formal properties 合计 32=24 boolean+8 text，其他 definition 的“未返回”不等于不存在。后四个实例 source component 的 4 次 exact probe 只返回 source identity/root，descendants 与 formal properties 均未返回；实例 resolved subtree 仅为 current fixture/reference evidence。当前 `evidence_level=section-enumerated-and-resolved-instance-observed`、`runtime_contract_readiness=blocked`、`direct_read_complete=false`、immutable version pending；必须保留 raw 前导 ASCII 空格、同名不同 ID/key 与 FileListItem 400/368 宽度差异，禁止按名称合并、自动归一或把 variant enumeration 当成 runtime switching。内容卡片仍为 `catalogued_not_contract_complete` 的全局/组合来源，不加入 §3.6，基础控件统计仍为 36+1=37。
22. AI 输入当前有限 live-read 以 Canvas type=`CANVAS`、raw=`对话输入框（ai）` `9667:17533` 与其当前 direct child SECTION type=`SECTION`、raw=`输入框原子` `22130:12743` 为入口；当前返回未提供 Canvas completeness proof，SECTION 是文档容器而非单个组件 API。SECTION 实际枚举 **22 个直接 child=`17 COMPONENT_SET + 3 standalone COMPONENT + 1 INSTANCE + 1 non-contract FRAME`**；新增对账出的 FRAME 是 raw=`Animated Grid 15×15`、node=`22130:13104`，仅作 documentation scaffold，不计入组件定义。17 sets 下合计 57 个 raw variant COMPONENT，连同 3 个 standalone 得到 60 个 section-owned definitions；本次仅返回 4 个 formal properties，全部为 boolean、text=0，且“未返回”不等于不存在。当前已对 **17/17 set roots + 3/3 standalone roots** 共 20 个 direct definition roots 分别 exact-read，20 次均返回各自 current-live root subtree；这与 `问题引导` `22130:13029` → source `22130:13030` 的 **1 次 source-root probe** 分开计数，后者仍只返回 source root identity/geometry、descendants 与 formal properties 未返回，resolved `营销海报生成` 只是 fixture。exact roots 还确认四条仅限当前节点树的 visibility wiring：`对话操作.显示页签=false` → Tabs INSTANCE、`tabs-glass.txet=true` → TEXT、`tabs-glass.icon=true` → PieChart INSTANCE、` 1.首页-对话框.显示推荐卡=true` → 推荐场景卡片 INSTANCE；当前值不是 production default 或 runtime transition。必须保留 raw 前导空格、`arrow ` 尾随空格、`txet` typo、`Variant3` 未知语义、Slogan 非笛卡尔积、同名不同 ID/key 与两套内容 set 的独立 identity；local Button/功能禁止 name-only merge。六个当前 imageRef identifier 已登记，其中 `8963a5beb1d3b082ca51e0381a19537811a5e974` 返回 `needsCropping=true` 与 crop transform，但均未下载/export/hash，不构成 asset closure。该家族证据提升仅为 `section-enumerated-and-all-direct-definition-roots-exact-cross-read-plus-resolved-instance-source-root-observed`；没有 immutable version、snapshot/hash、pagination/completeness、完整 bindings/dependency/reference/asset closure、prototype/event/state、输入/上传/语音、a11y、responsive/tests，故 `runtime_contract_readiness=blocked`、`direct_read_complete=false`、immutable version pending 不变，不得升级 lifecycle、runtime-ready、contract_complete、full read 或 verified。AI 输入属于全局/组合来源，不加入 §3.6，基础控件仍为 36+1=37。

### 0.1 “通过本 MD 直接生成”的严格定义

“通过本 MD 直接生成”定义为：生成器只接收本文件路径作为入口，从 front matter 的 `machine_contracts.required_paths.release_manifest` 读取同一冻结发布包中的外部 `release-manifest.yaml`（本节代码块只是规范模板），再按相对路径和 SHA-256 加载机器产物；生成器不得再向聊天记录、旧代码、live Figma、图标网站 DOM、未锁定 CDN、任意本地目录或模糊名称搜索请求缺失值。Markdown 负责入口、权威、合同和人类说明；固定版本 `lingee-icon` 目录/类型索引、字体、图片、非图标 SVG、raw chunks、IR、Schema、Manifest 与 baseline 必须作为同一发布包的受哈希约束文件存在。

如果要求“物理上只有一个 `.md` 文件”，则字体、图片和 SVG 只能被 base64/文本内嵌，会显著增加体积并破坏缓存、审计与增量更新；本规范不采用该模式。**单入口不等于单字节容器。**

每个可生成 release 必须有以下机器清单：

```yaml
release_manifest_schema: "1.0.0"
release_id: "REQUIRED_STABLE_RELEASE_ID"
spec:
  path: "Lingee-unified-page-generation-spec.md"
  version: "2.5.0"
  sha256: "REQUIRED_REAL_SHA256"
schema_bundle:
  version: "2.2.0"
  page_manifest: "schemas/page-manifest-2.2.0.schema.json"
  component_contract: "schemas/component-contract-2.2.0.schema.json"
  archetype_contract: "schemas/archetype-contract-2.2.0.schema.json"
  source_map: "schemas/source-map-2.2.0.schema.json"
  read_report: "schemas/read-report-2.2.0.schema.json"
  semantic_validator:
    path: "validators/lingee-contract-validator"
    version: "REQUIRED_PINNED_VERSION"
    sha256: "REQUIRED_REAL_SHA256"
generator:
  name: "REQUIRED"
  version: "REQUIRED_PINNED_VERSION"
  renderer_profile_id: "REQUIRED"
  supported_schema_bundle: ["2.2.0"]
active_records:
  pages: ["REQUIRED_NON_EMPTY_PAGE_MANIFEST_PATHS"]
  archetypes: ["REQUIRED_OR_EXPLICIT_NONE"]
  components: ["REQUIRED_USED_COMPONENT_CONTRACT_PATHS"]
artifacts:
  - path: "REQUIRED_REPOSITORY_RELATIVE_POSIX_PATH"
    media_type: "REQUIRED"
    size_bytes: "REQUIRED_INTEGER"
    sha256: "REQUIRED_REAL_SHA256"
artifact_index:
  ordering: "utf8-bytewise-path-ascending"
  canonicalization: "canonical-json-jcs-or-byte-exact-by-media-type"
  root_hash_algorithm: "sha256-sorted-path-index-v1"
  root_sha256: "REQUIRED_REAL_SHA256"
readiness:
  derived_only: true
  active_page_manifest_count: "REQUIRED_POSITIVE_INTEGER"
  figma_link_validation_pass: true
  icon_library_validation_pass: true
  used_component_contract_complete_ratio: 1
  unresolved_required_count: 0
  blocking_unknown_count: 0
  unmapped_implementation_value_count: 0
  token_font_asset_closure_complete: true
  renderer_profile_locked: true
  baseline_matrix_complete: true
  schema_validation_pass: true
  semantic_validation_pass: true
  generation_ready: "DERIVED_BY_VALIDATOR"
```

`generation_ready` 是校验器的派生结果，禁止人工填写为 `true`。只有同时满足下列布尔公式才允许生成：

```text
generation_ready =
  active_page_manifest_count >= 1
  AND figma_link_validation_pass = true
  AND icon_library_validation_pass = true
  AND used_component_contract_complete_ratio = 1
  AND unresolved_required_count = 0
  AND blocking_unknown_count = 0
  AND unmapped_implementation_value_count = 0
  AND token_font_asset_closure_complete = true
  AND renderer_profile_locked = true
  AND baseline_matrix_complete = true
  AND schema_validation_pass = true
  AND semantic_validation_pass = true
```

模板中的 `REQUIRED`、`unknown`、`pending`、示例 hash 与占位路径允许存在；任何 `active_records` 可达对象中出现这些值一律使 Schema/semantic validation 失败。校验器必须递归检查引用闭包，而不是只搜索字符串。

### 0.2 机器 Schema 与跨字段不变量

YAML 示例不等于 Schema。正式 release 必须包含 §0.1 列出的 JSON Schema 文件，并由固定版本 semantic validator 检查 JSON Schema 无法完整表达的跨文件关系。至少强制以下不变量：

1. `source.figma.page_node_id = source_ingestion.read_scope.root_node_id = shell.source_page_node_id`，且 `source.figma.page_node_url` 必须解析到同一 `file_key + page_node_id`；每个 viewport/state/component instance 的 URL 也必须与其相邻 node ID 精确一致。
2. `classification.shell_id = shell.shell_id`；无 shell 时两者都必须是显式 `none`，不得一处空、一处 `REQUIRED`。
3. `fidelity.direct_read_complete = source_ingestion.completeness_report.direct_read_complete`，且只能由通过的 read report 派生。
4. 每个 `components[].contract_id@contract_version` 必须出现在 release active component index，且实例 property tuple 位于对应合同的 `legal_tuples`。
5. 每个 render/baseline cell key 必须按 UTF-8 原值用 `<page-id>__<viewport-id>__<theme-id>__<critical-state-id>` 生成；四个 ID 禁止包含 `__`。
6. 每个实现 DOM/CSS/content/asset/transition stable ID 恰有一个 source-map entry；同一 locator 多来源必须显式记录 deterministic composite transform。
7. 所有路径必须是发布包根目录下的相对 POSIX 路径；禁止绝对路径、`..`、符号链接逃逸和平台相关分隔符。
8. 所有 artifact hash、size、media type 与实际字节一致；release root hash 可复算。
9. active record 中任何 `REQUIRED|unknown|pending|not-returned|connector-not-returned` 只要影响目标矩阵即 `block`。
10. 每个 `icon_catalog.page_icon_mapping[]` 的 `export_name` 必须存在于同一精确 `package_version` 的 catalog、type index 与 runtime exports；`logical_name×state` 唯一，size/color/a11y/source-map 完整，且禁止来源审计计数为 0。
11. `generation_ready`、全部 fidelity 等级和 lifecycle 升级只能由校验与证据派生，不得作为绕过 Gate 的输入。

### 0.3 生成模式与声明边界

为避免把“生成视觉预览”与“生产发布”混为同一个 Gate，每个 Page Manifest 必须选择一个模式：

| mode | 允许范围 | 必须通过 | 禁止声明 |
|---|---|---|---|
| `exact-state-preview` | 只生成 Manifest 明列的静态 viewport/theme/state cells；未声明交互不可触发 | G-FL、G-IC、G-DR、G-WR、G0–G5；使用到的视觉组件/Token/icon/font/asset/render tree 完整；source baseline 矩阵完整 | 不得称 behavior verified、production ready 或全页面状态完整 |
| `interactive-prototype` | 生成 Manifest 明列的交互路径与其可达状态 | 上述全部 + 声明路径的状态机、pointer/keyboard/focus 与相关 a11y/异常态测试 | 不得把未声明路径或生产 API/权限称为完成 |
| `production` | 按产品合同发布 | G-FL、G-IC、G-DR、G-WR、G0–G8，P0=0，适用 P1 有 disposition，完整审批 | 不得跳过任何目标矩阵或 release Gate |

三种模式都禁止猜视觉值、使用替代资产或绕过 provenance。模式只缩小**声明范围**，不降低该范围内的视觉和来源标准；从 preview 升级 prototype/production 必须新 Manifest version 和新增证据。

## 1. 权威、术语与状态

### 1.1 权威顺序

发生冲突时按以下顺序裁决：

1. 当前任务中用户的明确裁决。
2. Page Manifest 引用的 immutable Figma version、精确 node 和对应 baseline。
3. 本文件中的 Global System Contract。
4. 已批准的 Archetype Contract。
5. 目标页面的 Page Manifest。
6. Evidence & Acceptance Pack 中可复现的结构读取、导出指纹和测试报告。
7. 当前仓库代码，只作为实现现状证据。
8. 非锁定来源、截图目测、节点命名猜测和行业惯例；只能提出问题，不能关闭缺口。

上述顺序用于裁决**来源真实性和硬约束**，不表示上层可替下层填写实例值。字段合并规则固定为：Global 只定义全局硬规则；Archetype 只定义可继承结构和约束；Page Manifest 必须提供页面实例值并可进一步收紧，但不得覆盖 Global/Archetype 硬规则。确需偏离时必须创建独立 `exception_contract`，包含冲突字段、前后值、影响矩阵、owner、证据、期限和四方审批；不得以“页面更具体”为由静默覆盖。

图标来源有一条专门的不变量：Page Manifest/Figma 页面只能声明图标语义、布局、状态、尺寸与颜色 Token，不能覆盖 §3.9 的 `lingee-icon` 唯一运行时来源。若 Figma 图标几何无法映射到固定包 export，必须形成 `ICON_NOT_FOUND`/迁移 blocker，不能以 Page Manifest 更具体为由恢复 Figma SVG 导出。

### 1.2 坐标系

- `canvas-global`：相对当前 Page Manifest 锁定的 root page node 或其显式 shell root 左上角；viewport 尺寸与原点必须由该 Manifest 的 source evidence 定义。
- `main-local`：相对当前 Page Manifest 明确登记的 main region 左上角；其 `canvas-global` 原点必须由该新 Manifest 的 shell/page node 直接定义，不存在跨页面默认值。
- `component-local`：相对组件根节点。
- Page Manifest 每个矩形必须显式写 `coordinate_space`。缺少坐标系、root 或原点证据时数值视为 `unknown`，禁止从历史页面、旧实现或组件尺寸猜测。

### 1.3 证据与交付状态

交付生命周期状态只允许使用下表定义；它与单个 Gate/检查维度的结果是两套不同字段，不得互相代替。

| 生命周期状态 | 严格定义 | 允许动作与升级条件 |
|---|---|---|
| `catalogued` | 已登记稳定身份、名称及可定位来源（例如 Figma node ID），但尚未完成结构提取或合同证明；**不代表已深读** | 只允许发现、排期和提取。现有名 `catalogued_not_contract_complete` 为兼容显示名，写入/汇总时归一到 `catalogued`，并保留 `contract_complete=false` |
| `extracted` | 已从锁定且可复现的 immutable version 对声明范围执行完整递归直读，保存标准化快照/IR、hash、source-map 和 Completeness Report；`direct_read_complete=true` 且已对账，但事实之间仍可能有未裁决缺口 | 只允许整理和补齐合同；不得声称可实现或可验收。`direct_read_complete` 是进入下一状态的必要条件，不代表合同已完整 |
| `contract_complete` | 声明范围内的视觉、状态、交互、响应式、a11y、资产与例外合同均完整，影响该范围的 `unknown` 已关闭 | 可进入实现就绪检查。现有名 `contract_complete_for_declared_scope` 仅为范围限定兼容名，归一到 `contract_complete` |
| `implementation_ready` | 目标实现范围已通过 Readiness Gate，输入、依赖、确定性 fixture/data contract 与目标验收矩阵均已锁定，且无阻断实现的 P0 | 允许开始实现；现有名 `ready_to_implement` 归一到本状态 |
| `implemented_unverified` | 实现已完成，但 P0、完整验收矩阵或实际检查尚未全部通过 | 可演示和继续验收，不得宣称验收完成 |
| `verified` | P0=0，且目标 `page × viewport × theme × critical_state` 完整矩阵的所有适用检查均通过并可追溯 | 只可按证据记录的范围发布或声明已验证 |
| `blocked` | 任一阶段出现 blocker，导致确定性提取、合同、实现或验收不能继续 | 可由任何生命周期阶段横向转入；解除 blocker 后只能回到转入前状态，再按相邻阶段继续升级 |

唯一正常升级链为：

```text
catalogued → extracted → contract_complete → implementation_ready → implemented_unverified → verified
```

生命周期**不允许跳级**；即使一次取得多阶段证据，也必须逐级记录每个升级条件及审批。`direct_read_complete` 是 `extracted → contract_complete` 的必要非充分条件：它只证明 Figma 声明范围已完整读取与对账，不证明产品交互、a11y、响应式或异常态合同完整。`blocked` 是可从任何阶段进入的阻断状态，不是可绕过正常升级链的捷径。

Gate/检查维度结果只使用下列值：

| Gate 维度结果 | 含义 | 对生命周期的影响 |
|---|---|---|
| `pass` | 该维度合同、证据和检查完整且通过 | 只证明该维度可进入下一 Gate，不能单独推导生命周期升级 |
| `partial` | 该维度已有部分可执行证据，但仍有明确缺口 | 保留缺口；是否继续由 Gate 规则和影响范围决定，最高不得越过相邻生命周期条件 |
| `block` | 该维度缺口会使确定性提取、实现或验收失真 | 形成 blocker 时生命周期转为 `blocked` |

`unknown` 只是字段级“无足够证据”标记，不是生命周期状态，也不是最终 Gate 维度结果；影响当前范围的 `unknown` 必须在 Gate 汇总时判为 `partial` 或 `block`。`pass` 只能由 Evidence & Acceptance Pack 证明，不能由“已登记”“已实现”或人工目测推导；尤其不得把 `pass/partial/block` 写入生命周期字段，或把 `blocked` 当作 Gate 维度结果。

## 2. 四层协议总览

四层合同之前有三个不可跳过的前置协议：Figma Direct-Read 负责固定并完整读取页面/组件设计来源；Lingee Icon Package Resolution 负责把页面图标语义解析到固定 `lingee-icon` export；Web Deterministic Rendering 负责把 IR 无歧义降低为 render tree/DOM/CSS/SVG。任一协议失败，四层合同都不得被实现消费。

| 层 | 必需产物 | 解决的问题 | 失败时动作 |
|---|---|---|---|
| 1. Global System Contract | 全局证据规则、技术栈策略、shell、token/font/asset 规则、组件目录 | 所有页面共同遵守什么 | 停止冲突项，不允许 Page Manifest 覆盖硬规则 |
| 2. Archetype Contract | 页面结构槽位、允许组合、状态类别、禁止推断项 | 同类页面共享什么结构 | 未批准 archetype 只能用页面自包含合同 |
| 3. Page Manifest | 单页 node、viewport、theme、fixture、组件实例、交互、异常态、实现路径 | 这个页面到底生成什么 | schema 或 P0 unknown 时停止，不猜值 |
| 4. Evidence & Acceptance Pack | version、baseline、hash、环境、测试、diff、审批记录 | 如何证明实现正确 | 证据不完整时最高 `implemented_unverified` |

解析规则：`Global` 硬规则 > `Archetype` 约束 > `Page Manifest` 实例值 > 实现代码。页面如需例外，必须在 Manifest 中引用批准记录和证据；禁止用 CSS/代码现状反向修改合同。

# Figma Direct-Read Protocol

> 本协议是四层合同之前的强制来源摄取阶段，不是可选审计步骤。任何“生成页面”“更新页面”或“按 Figma 还原”任务都必须先从本次指定的 immutable Figma version 完整直读；没有可验证的固定版本、读取被截断、存在未处置 `unknown`，或无法形成完整对账时，Direct-Read Gate 必须为 `block`。

## DR-1. 请求输入、preflight 与版本锁

### DR-1.1 强制请求参数

每次请求必须显式提供并写入 metadata 与 Page Manifest：

- `figma_file_key` 或可解析出 file key 的 Figma URL；两者同时提供时必须一致。
- 唯一目标 `root_page_node_id`，不得只给 Canvas、页面名称或截图。
- Figma 服务真实返回的 `immutable_version_id`，不得用时间戳、分支名、live file `lastModified` 或自造字符串代替。
- `page_id`、目标 `viewports`、`themes`、`states`；每个目标状态必须指向 Figma node/variant/prototype 证据，或明确标记 `product-contract-required`。
- 读取工具/connector 名称与版本、认证主体/权限范围、目标项目和允许改动路径。

缺失参数一律记为 `REQUIRED` + `block`，不得从旧 Markdown、当前代码、截图、相似页面或节点命名补值。旧快照只能用于发现变更，不能替代本次直读。

### DR-1.2 Preflight 检查

开始递归读取前必须完成并落盘：

1. 验证认证权限足以读取目标 file/version/node、远程库引用、variables/styles、原型、图片与可导出资产；最小权限不够时列出具体 inaccessible refs。
2. 验证 file 存在、`root_page_node_id` 存在且属于该 file/version；记录根节点类型、名称和父链，禁止名称模糊匹配。
3. 通过 Figma/connector 暴露的真实版本能力锁定 `immutable_version_id`，记录不含 secret 的 canonical versioned request、returned version metadata、`createdAt`、`lastModified` 和版本读取端点/方法；UI `version_url` 可选。若 connector 只能读 live file、不能按 immutable version 复读，也没有 DR-1.3 approved frozen snapshot，立即 `block`。
4. 读取开始前保存 version probe；全部 chunk 完成后再次读取 version probe。前后 `file_key`、`immutable_version_id`、canonical request fingerprint、returned version metadata 及适用的 `createdAt/lastModified` 必须一致；任何漂移都使整次抓取作废，删除其候选通过状态并从 preflight 重读。
5. 记录请求的 viewport/theme/state 声明矩阵，并验证对应 root/variant/state 节点可定位。Figma 未定义的产品行为不伪造 reaction，而进入 `product-contract-required`。
6. 禁止伪造 immutable version、hash、字体二进制、许可、baseline 或验收结果；未取得的字段保持 `REQUIRED`、`unknown` 或 `block`。

**当前事实：现有 connector 结果没有提供 immutable version ID。** 因而本文现有 file/node 登记仍只属于 catalog/audit 线索，当前状态不能升级为 `direct_read_complete`、`source_exact`、`verified` 或任何“100%”声明。

### DR-1.3 版本能力矩阵与同版本快照 fallback

不同 Figma 子资源的历史版本能力可能不同，禁止用“文件节点支持 version”推断 Variables、远程库、Dev Resources 或 image fills 同样支持。Preflight 必须生成 `source-version-capability.json`：

```yaml
source_version_capability_schema: "1.0.0"
file_key: "REQUIRED"
target_immutable_version_id: "REQUIRED"
domains:
  - domain: "file-nodes|render-export|variables|styles|image-fills|components|prototype|dev-resources|remote-library"
    read_method: "REQUIRED_EXACT_ENDPOINT_OR_TOOL"
    historical_version_parameter_supported: "true|false|unknown"
    requested_version_id: "REQUIRED_OR_NOT_APPLICABLE"
    returned_version_id: "REQUIRED_OR_NOT_RETURNED"
    byte_snapshot_path: "REQUIRED_OR_BLOCK"
    sha256: "REQUIRED_OR_BLOCK"
    coherence: "same-version|approved-frozen-snapshot|live-only|unknown"
    impact: "none|block"
source_version_coherence: "pass|block"
```

规则如下：

1. 支持历史 `version` 的 domain 必须在每个请求中显式传入同一 immutable version，并验证响应 metadata；UI `version_url` 只用于人类定位，真正的锁定证据是 `version_id + canonical request + response bytes/hash`。
2. 若某 domain 不支持历史版本，只允许使用在目标版本发布时同步捕获、带真实时间/主体/工具版本/原始字节/hash 的 **approved frozen snapshot**。该 snapshot 必须与节点中的绑定 ID、release Token bytes 和 source-map 对账。
3. 运行时临时读取的 live-only Variables/Styles/远程库结果不得与历史 page nodes 混装。无法取得 approved frozen snapshot 时 `coherence=live-only`、`impact=block`。
4. 不得用 `lastModified`、当前解析值相同、名称相同或本地 Token 文件存在来证明历史同版本；相同值只能是冲突排查线索。
5. `source_version_coherence=pass` 是 `direct_read_complete=true` 的额外必要条件。

## DR-2. 全量递归读取合同

### DR-2.1 必须覆盖的声明范围

从目标 root 开始，读取必须覆盖 root 与**全部 descendants**，并保存原始身份、顺序、父子关系和下列字段；某字段仅在节点类型适用时出现，不适用与未返回必须区分：

- 节点树：可见与隐藏层、locked 状态、section/frame/group、布尔/矢量/文本/媒体节点、z-order、父子/兄弟索引、实例内部节点，以及跨实例嵌套。
- 组件系统：instance、完整 override chain、main component、component set、所有 variants、variant/property definitions、boolean/text/instance-swap properties、slots、exposed instances、preferred values、远程 component/library refs。
- Variables：collections、modes、variable IDs、类型、resolved value、alias chains、scope、code syntax、remote refs、目标 theme/mode 映射；别名必须解析到终点并保留每一跳。
- Styles：paint/text/effect/grid styles 的 ID、名称、remote/local 身份、引用节点、解析值和 remote refs。
- 文本：完整 characters、styled text segments/ranges、字体族/字体 PostScript 名、style、weight、size、line height、letter spacing、paragraph spacing/indent、case、decoration、horizontal/vertical alignment、OpenType/list/hyperlink 等 connector 可返回的全部 typography 字段。
- Geometry：`absoluteBoundingBox`、`absoluteRenderBounds`、相对父节点 bounds、size、min/max、aspect ratio、vector geometry/path（可返回时）、transform matrix、relative transform、rotation、layout position、z-index/order。
- Auto Layout 与约束：layout mode/wrap、primary/counter axis sizing、fixed/hug/fill、constraints、layout grow/align、padding 四边、item spacing/gap、counter-axis spacing、alignment、baseline alignment、overflow/scroll、clipsContent。
- Paint 与合成：fills、solid/gradient stops 与 transform、image refs、scale mode、crop transform、filters、strokes/weights/alignment/dash、individual corner radii、opacity、blend mode、masks、clipping、effects/shadows/blur/background blur、background/fill geometry。
- 资源与输出：image/gif/video refs、私有/远程资源引用、export settings、格式/scale/suffix、原始尺寸、可导出 asset node、缩略图只作索引而非实现替代物。
- 原型与设计注释：prototype reactions、triggers/actions、transition/easing/duration、destinations、flows/starting points、overlay/preserve scroll、annotations、descriptions、documentation links、dev resources。
- 页面级信息：背景、layout grids、guides（connector 可返回时）、selection-independent metadata，以及影响目标 viewport/theme/state 的所有引用对象。

读取器必须显式使用 `skipInvisibleInstanceChildren=false`，或提供并证明语义等价的“隐藏实例子节点也递归返回”策略。默认跳过 invisible children 的结果一律不完整。

### DR-2.2 分页、分段与引用闭包

- 对节点树、variables、styles、components、reactions、assets 和任何 connector 限额使用稳定分页/分段读取；每个 chunk 记录 scope、cursor/range、请求参数、响应节点/记录数、首末 ID、重试次数和 canonical SHA-256。
- 任一 MCP/API 出现 `truncated`、`hasMore`、next cursor、深度限制、响应尺寸上限、超时后部分成功或疑似计数不符，必须继续缩小 subtree/ID batch 分块读取，直到所有 chunk 可对账。**截断响应绝不能当作完整快照。**
- 组件、变量、style、image、font 和 prototype destination 的引用必须求闭包；引用位于 root 外或远程库时，保存稳定 ref 与可访问元数据。无权限读取的 remote body 记录 `inaccessible_remote_ref` + `block`，不得复制当前实现值冒充来源。
- 每个 child ID 必须恰有一个可解释父关系；重复、缺失、循环或无法解析的引用计入 orphan/unresolved。节点在 Figma 中合法共享时必须以 typed ref 记录，而不是伪装成树子节点。
- 读取前后的 root/一级子节点 ID 与顺序、总数、类型计数和引用计数必须与 chunk 汇总对账；失败即整次 `direct_read_complete=false`。

### DR-2.3 Unknown 与禁止推断

不可访问、connector 未返回、connector 不支持和 Figma 本身未定义必须分别记录：

```yaml
value_status: known|not_applicable|figma_not_defined|connector_not_returned|connector_unsupported|inaccessible
value: "ACTUAL_VALUE_OR_NULL"
impact: none|contract-gap|implementation-block|acceptance-block
resolution: "EVIDENCE_OR_PRODUCT_CONTRACT_REQUIRED"
```

除 `known` 和真实 `not_applicable` 外，不得转换成实现值。影响视觉、结构、内容、资产、字体、目标状态或验收确定性的项必须 `block`；Figma 未定义的业务交互标记 `product-contract-required`，不得要求 reaction 数量必须大于零，也不得以“常见行为”自动补齐。

## DR-3. 标准化快照、IR 与 provenance 合同

### DR-3.1 必需产物目录

每次读取必须产生只读、可寻址的 snapshot/IR；示例目录如下，实际路径可调整，但 Manifest 必须逐项映射：

```text
acceptance/<release-id>/sources/figma/<page-id>/<immutable-version-id>/
  metadata.json
  raw/chunks/<scope>-<sequence>.json
  nodes.ndjson
  components/
    components.ndjson
    component-sets.ndjson
    instances.ndjson
    overrides.ndjson
  variables/
    collections.json
    variables.ndjson
    aliases.ndjson
    resolved-modes.json
  styles/
    styles.ndjson
    resolved-styles.json
  assets/
    refs.ndjson
    export-plan.json
    assets-manifest.json
    exported/
  fonts/
    font-requirements.json
    font-resolution.json
  interactions/
    reactions.ndjson
    flows.json
    product-contract-required.json
  read-report.json
  hashes.json
  source-map.json
```

`metadata.json` 必须记录 file key、immutable version ID、canonical request fingerprint、returned version metadata、可选 UI version URL、createdAt/lastModified、root node、viewports/themes/states、抓取开始/结束时间、认证范围摘要、connector/tool 名称与版本、读取选项（含 invisible-instance 策略）和 schema 版本。每个 NDJSON/JSON 记录也必须携带或可通过不可变 header 引用 `file_key`、`immutable_version_id`、`root_node_id`、`captured_at`、`tool_name/tool_version` 和自身 canonical JSON SHA-256。

Canonical JSON 固定采用 RFC 8785 JSON Canonicalization Scheme（JCS）兼容规则：UTF-8、无 BOM、对象 key 按规范排序、合法 JSON number、禁止 NaN/Infinity、字符串不做业务级 trim/Unicode normalize；数组默认保留源语义顺序，只有具体 Schema 明确声明为 set 时才可按该 Schema 的稳定 identity tuple 排序。NDJSON 每条记录单独 JCS 后使用单个 LF 分隔，文件末尾保留一个 LF。非 JSON 文件按实际字节计算 hash，不执行换行或 metadata 改写。

`artifact_root_hash_algorithm=sha256-sorted-path-index-v1` 的唯一算法为：对发布包中除 root index 自身外的每个 artifact 计算实际字节 SHA-256 与 size；构造 `{path,media_type,size_bytes,sha256}` 数组，以规范化相对 POSIX path 的 UTF-8 bytes 升序排序；对该数组执行 JCS；最终计算 SHA-256。`hashes.json` 必须记录每个文件和 root hash。没有实际字节时只能写 `REQUIRED`，不得填示例 hash、空字符串或自造 Merkle 值。

### DR-3.2 Normalized IR 规则

- 原始 chunk 永不被人工改写；normalized IR 通过稳定 schema 从 raw 生成，并保留 `raw_chunk_id + JSON pointer`。
- 单位、颜色、矩阵、bounds、变量 mode 和文本 range 可标准化，但必须同时保留 raw value；不得舍入到会改变生成结果的精度。
- instance resolved view 与 main component/override chain 分开保存；不能只保存扁平渲染结果。
- `figma_feature_support` 为每类输入特性记录 `supported|partial|unsupported|not_present`、读取/生成/验证能力和证据。`unsupported`/`partial` 对当前页面有影响时进入 blocker。
- 正式 asset 必须来自锁定版本的 export plan；导出文件的 node/ref、参数、尺寸、media type 与 SHA-256 写入 manifest。截图不能作为 SVG/组件/文字替代物。

### DR-3.3 `source-map.json`

`source-map.json` 必须让每个生成的 DOM、CSS、内容值、行为与 asset 回溯到 Figma node/property/token 或明确的产品合同：

```yaml
source_map_schema: "2.2.0"
entries:
  - implementation:
      path: "REQUIRED_TARGET_FILE"
      locator: "STABLE_RENDER_NODE_ID|AST_ID|CSS_DECLARATION_ID|ASSET_PATH|STATE_TRANSITION_ID"
      property: "REQUIRED_IMPLEMENTATION_PROPERTY"
      generated_value: "REQUIRED_ACTUAL_VALUE_OR_HASH"
    provenance:
      kind: "figma-node|figma-property|figma-variable|figma-style|figma-asset|product-contract"
      file_key: "REQUIRED"
      immutable_version_id: "REQUIRED"
      node_id: "REQUIRED_OR_NOT_APPLICABLE"
      property_path: "REQUIRED_JSON_POINTER_OR_PROPERTY"
      variable_id: "REQUIRED_OR_NOT_APPLICABLE"
      mode_id: "REQUIRED_OR_NOT_APPLICABLE"
      raw_chunk_id: "REQUIRED_OR_NOT_APPLICABLE"
      ir_record_sha256: "REQUIRED"
    transform:
      lowering_rule_id: "REQUIRED_VERSIONED_RULE_ID"
      input: "REQUIRED_CANONICAL_INPUT_OR_HASH"
      output: "REQUIRED_CANONICAL_OUTPUT_OR_HASH"
    verification: "REQUIRED_ASSERTION_OR_HASH"
overrides: []
```

所有 generated CSS/DOM/asset 与 Figma 声明的内容/状态值都必须有 entry；无法映射即 Completeness Report 失败。人工 override 只能包含 `owner`、`reason`、`evidence`、`expiry`、`approval`、目标 locator 和替代前后值，且必须可审计；**存在任何 override 时，即使已批准，也不得把该范围称为 `source_exact` 或“source-exact 100%”。** 未批准、过期或无证据 override 是 P0 blocker。

## DR-4. Direct-Read Completeness Report

### DR-4.1 Schema/checklist

`read-report.json` 至少实现以下逻辑 schema；计数均来自本次固定版本，不得复用旧报告：

```yaml
direct_read_report_schema: "2.2.0"
identity:
  file_key: "REQUIRED"
  immutable_version_id: "REQUIRED"
  root_node_id: "REQUIRED"
  root_type: "REQUIRED"
  root_name: "REQUIRED"
  first_level_children:
    - {index: 0, node_id: "REQUIRED", type: "REQUIRED", name: "REQUIRED"}
version_probes:
  before: {canonical_request_sha256: "REQUIRED", returned_version_id: "REQUIRED", version_url: "OPTIONAL", createdAt: "REQUIRED", lastModified: "REQUIRED"}
  after: {canonical_request_sha256: "REQUIRED", returned_version_id: "REQUIRED", version_url: "OPTIONAL", createdAt: "REQUIRED", lastModified: "REQUIRED"}
  unchanged: false
counts:
  nodes_total: "REQUIRED_INTEGER"
  nodes_by_type: {"TYPE": "REQUIRED_INTEGER"}
  hidden_nodes: "REQUIRED_INTEGER"
  components: "REQUIRED_INTEGER"
  component_sets: "REQUIRED_INTEGER"
  instances: "REQUIRED_INTEGER"
  override_records: "REQUIRED_INTEGER"
  orphan_count: "REQUIRED_INTEGER"
  variables: "REQUIRED_INTEGER"
  alias_edges: "REQUIRED_INTEGER"
  unresolved_variables_or_aliases: "REQUIRED_INTEGER"
  styles: "REQUIRED_INTEGER"
  text_nodes: "REQUIRED_INTEGER"
  assets: "REQUIRED_INTEGER"
  reactions: "REQUIRED_INTEGER"
  flows: "REQUIRED_INTEGER"
  required_fonts: "REQUIRED_INTEGER"
signatures:
  first_level_order_sha256: "REQUIRED"
  node_id_set_sha256: "REQUIRED"
  type_count_sha256: "REQUIRED"
  text_signature_sha256: "REQUIRED"
  component_override_signature_sha256: "REQUIRED"
  variable_alias_signature_sha256: "REQUIRED"
  style_signature_sha256: "REQUIRED"
  asset_ref_signature_sha256: "REQUIRED"
  reaction_signature_sha256: "REQUIRED_OR_EMPTY_SET_HASH"
  font_requirement_signature_sha256: "REQUIRED"
chunks:
  page_count: "REQUIRED_INTEGER"
  chunk_count: "REQUIRED_INTEGER"
  expected_records: "REQUIRED_INTEGER"
  reconciled_records: "REQUIRED_INTEGER"
  duplicate_records: "REQUIRED_INTEGER"
  missing_records: "REQUIRED_INTEGER"
  all_chunks_reconciled: false
truncation:
  detected: true
  recovered: false
  final_truncation: true
references:
  inaccessible_count: "REQUIRED_INTEGER"
  unresolved_count: "REQUIRED_INTEGER"
assets:
  required_count: "REQUIRED_INTEGER"
  exported_count: "REQUIRED_INTEGER"
  hashed_count: "REQUIRED_INTEGER"
fonts:
  resolved_binary_count: "REQUIRED_INTEGER"
  license_verified_count: "REQUIRED_INTEGER"
figma_feature_support: []
unsupported_features: []
product_contract_required: []
target_matrix_coverage:
  viewports_complete: false
  themes_complete: false
  variants_and_states_complete: false
provenance:
  implementation_value_count: "REQUIRED_INTEGER"
  mapped_value_count: "REQUIRED_INTEGER"
  unmapped_values: []
source_version_coherence:
  report_path: "REQUIRED"
  result: "pass|block"
renderer_inputs:
  render_tree_path: "REQUIRED"
  render_tree_sha256: "REQUIRED"
  unresolved_lowering_rule_count: "REQUIRED_INTEGER"
result: "pass|block"
blockers: []
```

`text_signature` 必须覆盖 node ID、完整文本、styled ranges 和 typography refs；asset/reaction/font 等 signature 即使集合为空也要对**已完整读取的空集合**生成真实签名，不能用空字符串假装已读。

### DR-4.2 通过条件

只有同时满足以下条件，才可写 `direct_read_complete=true`：

1. immutable version 可复读且前后 probe 不变；`final_truncation=false`；DR-1.3 `source_version_coherence=pass`，任何 live-only 子资源均已阻断或由 approved frozen snapshot 关闭。
2. 所有 page/chunk/ID batch 均已完成、hash 已记录、总数/类型/一级子节点顺序对账，`all_chunks_reconciled=true`、missing/duplicate=0。
3. root 和声明范围全部 descendants（含隐藏层与 instance children）已读取；orphan=0。Figma 合法共享引用或不可消除项必须逐项有 owner 批准和 typed-ref 证据，否则 `block`。
4. component/instance/main/override、variable/mode/alias、styles、text、geometry、assets、reactions/flows、fonts 等适用闭包已对账；unresolved=0。无法访问或不支持的项不得“批准为已解析”，只能缩小声明范围或保持 `block`。
5. 目标 viewport/theme/variants/states 覆盖完整；Figma 没有定义的产品交互列入 `product-contract-required`，**不要求 Figma reaction 数量非零**，但在 `behavior_verified` 前必须由产品状态机补齐并测试。
6. 每个正式资产都有成功导出结果、参数、稳定路径和真实 SHA-256；字体需求已完整列出。字体 binary/license 未取得时可完成“设计源读取”对账，但实现与视觉 Gate 仍为 `block`。
7. `unsupported_features` 对当前范围为空，或每项都明确标为不影响当前范围；影响范围的 partial/unsupported 必须 `block`。
8. 生成/实现使用的每个值都有 `source-map`；`unmapped_values=[]`。尚未生成代码时，Manifest/IR/render tree 的待生成字段也必须有预期 provenance 与 lowering rule 映射，`unresolved_lowering_rule_count=0`；不得以计数 0 绕过。

## DR-5. 保真等级与“100%”声明规则

| 等级 | 严格定义 | 允许声明 |
|---|---|---|
| `direct_read_complete` | Figma 声明范围从固定版本完整递归读取，所有 chunk、节点、引用和计数已按 DR-4 对账 | “设计源声明范围已完整直读并对账”；不代表已实现 |
| `source_exact` | 实现使用的每个视觉/结构/内容值都有 Figma provenance，无任何人工 override、无未批准手工值、无替代资产 | “实现值 source-exact”；不代表 DOM 几何或浏览器像素已通过 |
| `structure_exact` | 关键 DOM、landmark、内容、状态结构与 runtime geometry hard assertions 全部通过，所有要求 0px 偏差的坐标/尺寸实测偏差为 0 | “结构与关键几何精确” |
| `behavior_verified` | Figma reactions 与 `product-contract-required` 的产品状态机全部实现，pointer/keyboard/focus/异常态/a11y 行为测试全部通过 | “声明矩阵行为已验证” |
| `visual_threshold_verified` | 同环境 baseline/actual diff 使用 `per_channel_absolute_delta_threshold=8` 标记 changed pixel，声明矩阵全部满足 `changed_pixel_ratio<=0.001`；`observed_max_channel_delta` 如实报告，hard checks 不借阈值豁免 | “通过工程视觉阈值” |
| `literal_pixel_exact` | 同一 browser binary、font binaries、OS/image、DPR、viewport、color space 与确定性输入下，矩阵每个 cell 都是 `changed_pixels=0`、`changed_pixel_ratio=0`、`max_channel_delta=0`，且所有 hard/interaction/a11y checks 通过 | 仅此等级可称字面“像素 100%”或数学零差异 |

等级按证据分别记录，不能由后一个名称反推前项，也不能跳过 Gate。“工程 100% 还原”如确需使用，只能明确定义为：**声明矩阵中前五项（`direct_read_complete`、`source_exact`、`structure_exact`、`behavior_verified`、`visual_threshold_verified`）全部通过**；该短语必须附范围、矩阵和报告链接，且不得写成数学零差异。若 Figma 与浏览器渲染差异导致零像素无法达到，结论必须停在 `visual_threshold_verified`，并记录差异分类；不得把 threshold pass 改称 `literal_pixel_exact`。

## DR-6. Figma → Web 不可自动消除的限制与 blocker

以下差异必须在 `figma_feature_support`/`unsupported_features` 中逐项探测。它们可能需要补充证据、产品合同、设计降级或工具升级，**不是手工猜值的理由**：

- 字体二进制、版本、hinting、许可、可嵌入性，以及 Figma 字体服务与浏览器字体 shaping/rasterization 的差异。
- 浏览器/OS 的抗锯齿、subpixel、色彩管理、GPU/compositor、device pixel rounding 与截图编码差异。
- connector 是否真正暴露 immutable version 并允许按该版本读取；只暴露 live file/`lastModified` 时不可复现。
- image refs、私有图片、远程库、受限 Dev Resources 和正式资产导出权限。
- Figma Prototype 未定义或 connector 未返回的 reaction、条件、变量动作、overlay/scroll 细节；缺失项进入 `product-contract-required`。
- responsive 所需多个 viewport/page node/variant 缺失；单个 1920 node 不能自动推导断点与重排。
- blend modes、mask、clip、boolean/vector geometry、background blur/effects、复杂 gradients 与浏览器 CSS/SVG/canvas 的支持差异。
- video、animated GIF、Lottie/第三方插件内容、交互式嵌入及媒体首帧/播放策略。
- variable modes、alias/remote collection、code syntax、主题切换及 connector 对 mode resolution 的差异。
- 第三方/远程 component library 的访问、版本固定、instance swap 和 override 解析差异。

任何影响目标矩阵的限制都必须形成具体 blocker，包含 feature、node/ref、影响、所缺证据、owner 和解除条件；禁止用 magic number、fallback 字体、近似 icon、手绘 CSS 或截图组件绕过。

## DR-7. 自动生成与闭环流水线

唯一允许的自动生成顺序为：

1. **Figma link closure**：按 §3.0.3 解析并验证 Global/Component/Composite/Archetype/Page 的 exact node URL、immutable version 与页面实例→定义 lineage；G-FL 未通过即停止。
2. **Direct read**：执行 DR-1 preflight 与 DR-2 全量递归读取；遇到 unknown/inaccessible/version drift 停止，不猜。
3. **Snapshot/hash**：落盘 raw chunks、metadata 和真实 SHA-256，前后版本 probe 一致。
4. **Normalized IR**：生成 nodes/components/variables/styles/assets/fonts/interactions IR 与 feature-support 清单。
5. **自动生成/更新 Page Manifest 与 render tree**：只从本次 IR 写入视觉、结构、内容、variant/state vector、token、asset 和 lowering rule 引用，不从旧文档 prose 或代码抄值；同时生成 `source-map.json`。
6. **Release/Gate**：组装 §0.1 release manifest，锁定 Schema bundle、semantic validator 与 WR renderer profile；再次验证 G-FL，依次通过 Direct-Read Completeness Gate、G-WR 与四层 Readiness Gate。任一 blocker 立即停止，禁止先写实现后补来源。
7. **导出正式 assets**：按固定版本 export plan 导出，校验尺寸/viewBox/media type/hash/许可；禁止替代图标和临时 URL。
8. **生成 DOM/CSS/behavior**：仅消费通过 Gate 的 release bundle，并严格按 render tree + 固定 lowering rule 生成；所有值持续写入 provenance。
9. **Runtime geometry hard checks**：在目标环境实测关键 DOM/geometry，0px assertion 不得由视觉阈值豁免。
10. **同环境 baseline/actual diff**：固定 browser binary/font/OS/DPR/viewport/theme/state/fixture，生成 baseline、actual、diff 和报告。
11. **分类差异并修复**：按 source、structure、behavior、font/rendering、asset、environment 分类回溯 node/property/token；修复来源或实现，不修改证据来迎合结果。
12. **重跑**：从受影响的最早阶段重跑，直到全部目标 cell pass，或输出可操作 blocker 并保持 `implemented_unverified/blocked`。

严禁为“过验收”放宽阈值、删除失败 cell、手调无 provenance 的 magic number、使用替代/近似图标、把截图当组件、伪造 hash/baseline，或在有人工 override 时声称 source-exact 100%。

# Web Deterministic Rendering Protocol

> Direct read 只证明“读到了什么”，本协议定义“如何无歧义地把它编译为 Web”。任何生成器若没有固定 renderer profile，即使输入 IR 完全相同，也不得声明确定性生成或 source-exact。

## WR-1. Renderer Profile

每个 release 必须锁定以下 profile；profile 是 Page Manifest 和 release manifest 的强制引用：

```yaml
renderer_profile_schema: "1.0.0"
renderer_profile_id: "REQUIRED_STABLE_ID"
version: "REQUIRED_PINNED_SEMVER"
generator:
  name: "REQUIRED"
  version: "REQUIRED_PINNED_VERSION"
  binary_or_bundle_sha256: "REQUIRED_REAL_SHA256"
target:
  platform: web
  dom_profile: "semantic-html-with-stable-node-ids"
  css_profile: "lingee-css-lowering-1"
  script_profile: "REQUIRED_OR_NONE"
browser:
  name: "REQUIRED"
  version_or_revision: "REQUIRED"
  binary_sha256_or_image_digest: "REQUIRED"
  os_image_digest: "REQUIRED"
  headless_mode: "REQUIRED_BOOLEAN"
  launch_arguments: ["REQUIRED_OR_EMPTY"]
rendering:
  device_scale_factor: "REQUIRED_NUMBER"
  color_space: sRGB
  css_pixel_rounding: "preserve-source-double-until-browser-layout"
  screenshot_pixel_rounding: "browser-native-at-locked-dpr"
  box_sizing: border-box
  default_positioning_strategy: "auto-layout-to-flex-absolute-only-when-source-absolute"
  svg_policy: "locked-export-or-lossless-source-vector"
  text_policy: "locked-font-binary-and-styled-ranges"
  unsupported_feature_policy: block
css_baseline:
  reset_path: "REQUIRED"
  reset_sha256: "REQUIRED_REAL_SHA256"
  global_styles_path: "REQUIRED"
  global_styles_sha256: "REQUIRED_REAL_SHA256"
lowering_rules:
  path: "REQUIRED"
  sha256: "REQUIRED_REAL_SHA256"
feature_registry:
  path: "REQUIRED"
  sha256: "REQUIRED_REAL_SHA256"
```

profile 的任一 binary、规则文件、CSS baseline 或环境 digest 改变，都必须产生新 profile version、重跑受影响矩阵并重建 actual；未经设计变更不得覆盖 source baseline。

## WR-2. Stable Render Tree 与 lowering 顺序

Normalized IR 必须先生成平台无关的 `render-tree.ndjson`，再生成 DOM/CSS；禁止直接从 Markdown prose 或 Figma raw response 拼 CSS。每个 render node 至少保存：

- stable `render_node_id`、Figma node ID、parent ID、source sibling index、node type、visibility、opacity、blend/clip/mask 和 coordinate space；
- raw 与 resolved geometry、transform、Auto Layout/constraints、paint/effect/text/asset refs；
- component instance、variant tuple、property/override chain 和 state vector；
- 每个目标 Web property 的 lowering rule ID、输入值、确定性输出值和 source-map entry。

lowering 固定顺序：

1. 解析 instance/main/override、Variables/modes/aliases、Styles 和 styled text ranges；仍有 unresolved 时停止。
2. 建立 source z-order、mask/clip group 与 stacking-context 需求，禁止先扁平化后猜层级。
3. 解析 node-local geometry、transform、Auto Layout、constraints、absolute children 和 scroll ownership。
4. 计算 paint、stroke、corner、effect、opacity 与 asset strategy，但保留原始浮点精度。
5. 生成 render tree；对每个 lowering 决策记录 rule ID。
6. render tree 通过 Schema、identity、tree/order 和 feature-support 校验后，才生成 DOM/CSS/SVG/behavior。

## WR-3. DOM 与 CSS 基线

1. 每个生成元素必须有稳定 `data-lingee-node-id` 或等价 AST ID；不得把易变 CSS selector 作为唯一 source-map locator。
2. DOM 顺序默认严格匹配可访问的 source sibling order。仅当语义/焦点合同要求不同顺序时，必须以显式结构 transform 和审批记录实现，禁止只用 CSS `order` 隐藏差异。
3. UA 默认样式必须由锁定 reset 消除或显式纳入 baseline；全局固定 `box-sizing:border-box`，伪元素继承同一 box sizing。
4. 不得使用外部 CDN、系统 emoji、未锁定 Web Font、浏览器默认 form appearance 或随平台变化的图标字体。
5. 页面背景、root margin、滚动条策略、selection/caret、focus ring、overscroll、color-scheme 和媒体查询输入必须在 Page Manifest 明示；未声明不得使用浏览器默认值。
6. class name 可优化，但 stable node ID、source-map 和视觉输出不得受构建 hash、CSS Modules 名称或框架 hydration 顺序影响。

## WR-4. Geometry、Auto Layout 与小数规则

1. `layoutMode=HORIZONTAL|VERTICAL` 优先映射为 flex；wrap、axis sizing、align、padding、gap、layoutGrow、layoutAlign 必须逐字段映射。不得因视觉相似改用 grid，或把 gap 分摊成 child margin。
2. Figma fixed/hug/fill 必须映射到 renderer profile 中版本化的 sizing rule；每次转换保存 source字段与 CSS 输出。`hug` 不等于无条件 `fit-content`，必须结合子树、min/max、文本和 absolute children 处理。
3. source absolute child 才可默认输出 absolute positioning；不得为了像素对齐把整个正常 Auto Layout 页面改成截图式绝对定位。
4. 保留 source double precision 到 CSS serialization；禁止在 IR 或 Manifest 中预先取整。CSS 数字序列化精度和去尾零规则由 lowering profile 固定。
5. runtime hard geometry 在锁定 DPR 下比较 `getBoundingClientRect()`；要求 0px 的字段以 CSS pixel double 比较，并单独报告 device-pixel raster rounding。
6. transform matrix、rotation、transform origin、relative transform 和 nested coordinate space 必须按矩阵组合，不得只抄 absoluteBoundingBox。
7. clipsContent、overflow、scroll owner、sticky、fixed、overlay、min/max、aspect ratio 与 layout grids 若影响目标必须有显式 rule；unsupported 时 block。

## WR-5. Paint、Stroke、Corner 与 Effect

1. 每个 fill/stroke/gradient/effect 按 source 顺序保存；多 fill、多 shadow、inner shadow、layer/background blur 不得压成单值。
2. Figma stroke alignment 与 Web border 不等价时必须使用已登记的 wrapper/pseudo-element/SVG lowering rule，并验证 render bounds；禁止直接把所有 stroke 写成 CSS border。
3. individual corner radii、corner smoothing、dash pattern、stroke cap/join/miter、opacity 与 blend mode必须保留；浏览器不支持或输出不等价时进入 feature blocker。
4. gradient stops、transform、spread/angle、alpha 与 color space 必须由 raw matrix 转换；禁止从两端颜色重新拟合。
5. `radius-circle`、`radius-pill` 身份不可互换。circle 只有在批准的转换和 shape invariant 通过时使用；否则继续 block。

## WR-6. Typography lowering

1. 使用精确字体 binary SHA、PostScript name、style/weight、可变字体 axes、size、line-height、letter/word spacing、text case/decoration、paragraph/list 属性和完整 styled ranges。
2. `font-weight` 数字或关键字必须来自已批准 mapping；不得把 `Medium`、`Semibold`、`regular` 按行业惯例互换。`heading-16/14` 冲突关闭前禁止使用相关 role。
3. 明确 `white-space`、换行、word-break、overflow-wrap、line-clamp、ellipsis、text-align、vertical alignment、bidi direction、language 与 Unicode 原文；不得 trim Figma characters 或合并相邻 range 导致样式丢失。
4. 截图前必须等待所有要求字体通过 `document.fonts.check`，并保存实际 `document.fonts` probe；fallback 被使用即 P0。
5. 文字 absolute bounds 只用于核对，不授权通过 letter-spacing、scale 或 transform 人工挤压文字来追 baseline。

## WR-7. SVG、图标与位图资产 lowering

1. 页面图标必须通过 `page/Figma instance semantic role → icon-compatibility-map → lingee-icon exact export_name` 选择。运行时稳定身份为 `package_name + exact_package_version + export_name`；Figma component ID/key 可作为映射证据，但不得再作为图标运行时字节来源。
2. React 项目必须使用 `import { IconName } from "lingee-icon"` 的静态 named import；纯 HTML 项目只能加载同一固定版本包内已校验的本地 `dist/svg-sprite.js`，再使用 `<use href="#IconName">`。禁止抓取文档站 DOM、使用 `@latest`、远程临时 CDN 或运行时拼接未知 export。
3. 图标名必须是固定 `ICONS.md`/`dist/index.d.ts` 中真实存在且大小写完全一致的 PascalCase export。生成器不得模糊搜索、选择第一个相似名称或把 `*1/*2` 后缀静默合并；不存在时输出 `ICON_NOT_FOUND` 并停止该范围。
4. `size` 必须来自页面实例/组件合同，常用值为 16/18/20/24px 但不得据此覆盖设计证据；`color` 默认使用 `currentColor` 并由组件 Token 驱动。只有设计明确要求时才使用 `fill`、`rotate` 或 `spin`，且所有状态都必须进入 Manifest 与 baseline。
5. 非图标 SVG 仍须保存 source version、node、format、scale、contents-only、absolute-bounds、outline-text、simplify-stroke、width/height/viewBox/preserveAspectRatio 和字节 SHA；其内部 ID 必须确定性命名或隔离，转换前后与 raster baseline 都要验收。
6. imageRef、crop transform、scale mode、filter、rotation 和 clipping 必须进入 asset manifest；图片 URL 只是下载手段，不是稳定资产身份。
7. 不得用 Figma 临时导出、emoji、Unicode glyph、CSS 绘制、截图、第三方库或视觉近似替代缺失的 `lingee-icon` export；必须由设计系统先向官方图标包新增并发布新固定版本。

## WR-8. 截图稳定条件与失败动作

每个 actual capture 必须执行并记录：

1. viewport、DPR、browser/OS、locale、timezone、color scheme、forced colors、reduced motion、root font size、scrollbar policy 全部与 cell 一致。
2. fixture、clock、seed、网络响应、权限、route、storage 和用户身份固定；禁止生产数据进入 baseline。
3. 等待 DOM ready、hydration、全部字体、图片/SVG、异步 fixture 和两次稳定 animation frame；连续两次 layout signature 不一致时不得截图。
4. 明确动画处置：静态 cell 必须将 animation/transition 固定到声明时间点或使用批准的 pause contract；不得简单全局关闭而改变目标视觉。
5. 固定 scroll、hover、active、focus-visible、selection、caret、IME composition、open overlay、portal 和 sticky 状态；未声明的 transient UI 必须不存在。
6. 捕获前记录 console/network error、未处理 rejection、字体 fallback、missing asset 与 layout shift；任一影响目标时 block。
7. 若 lowering rule 无法无损表达实际 Figma feature，必须进入 `unsupported_features`；禁止选择“最接近 CSS”继续生成并宣称一致。

# 第一层：Global System Contract

## 3. 全局系统合同

### 3.0 已学习全局规则、Figma 入口与单文件治理

本节是全局设计规则与基础组件来源的**唯一可点击索引**。Figma 来源链接使用稳定 file key + node ID 并省略会话参数 `t`；图标来源使用官方 Lingee UI 文档链接与固定发布包身份。链接本身不等于 immutable version 或包完整性，也不提升任何生命周期。技术栈、证据门禁、生命周期和验收阈值属于本规范的执行协议，因此不伪造设计节点或图标来源。

#### 3.0.1 全局设计规则与结构来源

| 规则/范围 | 稳定来源身份 | 规范链接 | 当前证据边界 |
|---|---|---|---|
| Token/颜色依赖目录 | `HXHbn9VT1RgPuJ70JI4tQ5` / `5:509` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=5-509) | 七份本地 JSON 是机器事实源；该链接仅为 Global Canvas 目录入口，不证明颜色 Variable binding |
| Typography 复合使用规范 | `HXHbn9VT1RgPuJ70JI4tQ5` / `22009:521` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22009-521) | 10 条产品角色交叉读一致；binding pending，见 §3.8.7 |
| Spacing Hook/单位规范 | `HXHbn9VT1RgPuJ70JI4tQ5` / `22009:894` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22009-894) | 12 行三列交叉读一致；命名/coverage/binding pending，见 §3.8.8 |
| Radius 使用规范 | `HXHbn9VT1RgPuJ70JI4tQ5` / `22009:657` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22009-657) | 11 行四列交叉读一致；circle 冲突与 binding pending，见 §3.8.9 |
| 基础图标库 | `lingee-icon@1.0.15` / npm integrity + tarball SHA-256 | [Lingee UI 图标库](https://kingdee.github.io/lingee-ui/#/foundation/icon) · [固定 npm 版本](https://www.npmjs.com/package/lingee-icon/v/1.0.15) · [Figma 视觉对照（非运行时源）](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22007-30176) | runtime=27 类/966 exports；目录表=967 行且声明计数过时，存在 2 catalog-only / 1 runtime-only 名称差异；页面语义→export 映射 pending，见 §3.9 |
| 顶部栏家族 | `HXHbn9VT1RgPuJ70JI4tQ5` / Canvas `9659:23458`；SECTION `22090:14341`；legacy root `20086:11753` | [Canvas](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9659-23458) · [用户 SECTION](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22090-14341) · [旧登记 root](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=20086-11753) | 当前 Canvas→SECTION→5 COMPONENT 的两次 live subtree 返回一致；旧 root 本次 probe=`Node not found`，身份与拓扑关系 unresolved；有限证据见 §3.3 |
| Sidebar / 左导航家族 | `HXHbn9VT1RgPuJ70JI4tQ5` / Canvas `9659:23457`；新组合 set `22109:985`；原子 SECTION `22109:1090`；legacy set `9745:8380` | [Canvas](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9659-23457) · [新组合 set](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-985) · [左导航原子 SECTION](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22109-1090) · [legacy set](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9745-8380) | 当前 Canvas 下新组合 set 与原子 SECTION 为直接 sibling；新 set=3 个 `scene=web` 变体，SECTION=14 sets/50 components/49 unique tuples/3 examples/19 formal properties；legacy 十 node 仅历史登记待重验证；`state_switch_readiness=blocked`、`direct_read_complete=false`，见 §3.4 |
| 内容卡片家族 | `HXHbn9VT1RgPuJ70JI4tQ5` / Canvas `9667:19011`；SECTION `22125:5795` | [Canvas](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9667-19011) · [用户 SECTION](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22125-5795) | raw=`内容卡片` / raw=`设置`；当前 SECTION 精确读取与 Canvas subtree 一致并枚举 14 直接 child、15 个 section-owned definitions、32 项已返回 formal properties；无 completeness proof，四个 source exact probe 未返回 descendants；`runtime_contract_readiness=blocked`、`direct_read_complete=false`，见 §3.5.1 |
| AI 输入 / 对话输入框家族 | `HXHbn9VT1RgPuJ70JI4tQ5` / Canvas `9667:17533`；SECTION `22130:12743` | [Canvas](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9667-17533) · [输入框原子 SECTION](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-12743) | raw=`对话输入框（ai）` / raw=`输入框原子`；当前 Canvas response 中 SECTION 为 direct child，但无 completeness proof。SECTION=22 直接 child（17 sets + 3 standalone + 1 instance + 1 non-contract FRAME `22130:13104`）、57 set variants、60 section-owned definitions、4=4 boolean+0 text formal properties；**17/17 set roots + 3/3 standalone roots** 已 exact-read 并返回各自 current-live root subtree，另有分开计数的 source-root probe=`1`（`22130:13030`，仍无 descendants/formal properties）；六个 imageRef identifier 未 export/hash；`runtime_contract_readiness=blocked`、`direct_read_complete=false`，见 §3.5.2。链接与 probes 不是 immutable-version、pagination/completeness 或 asset-closure 证据 |

#### 3.0.2 链接与文件治理规则

1. §3.0.1 的每个 Figma-derived 全局来源、§3.6 的全部 37 个注册组件都必须同时保存 `file key`、node ID 与完整可点击 URL；URL 中 `node-id` 必须是同一 node ID 的冒号转连字符形式。
2. 图标不适用第 1 条的 Figma 生成源规则；图标必须保存官方文档 URL、`package_name`、精确 `package_version`、npm integrity、包/目录/类型索引 hash，以及页面语义到 `export_name` 的精确映射。Figma 图标节点只能作为可选视觉映射证据。
3. “已学习”在本文只表示存在有边界的 live-read 观测，不等于 `direct_read_complete`、`extracted` 或合同完整。没有 §3.6.x 证据章节的条目必须留在“仅注册待学习”组。
4. 唯一规范入口为发布包根目录下的仓库相对路径 `Lingee-unified-page-generation-spec.md`，调用时可用占位符 `{SPEC_PATH}` 指向它。禁止写死用户目录或操作系统绝对路径。后续学习只更新本文件，不创建 `(n)`、`backup`、`old`、日期副本或第二份汇总 Spec。
5. 当前 workspace 根目录不存在其他 `*spec*.md`、`(n).md`、`.bak` 或 backup/old 规范副本；重复规范历史文件计数为 0。`semantic-review/2026-07-29-135513-pr-0.md` 是非规范代码审查证据，不是设计合同，不得覆盖或作为第二入口。

### 3.0.3 Figma 一一对应链接注册表与 Direct-Link Gate

“存在一个 Figma URL”只证明可定位，不等于可生成。本文把链接分为四种角色，生成器必须按角色消费，禁止把目录页或展示 FRAME 静默当成组件定义：

| link role | 允许指向 | 用途 | 是否可单独作为生成源 |
|---|---|---|---|
| `file_locator` | Figma design file | 文件级 Variables/Styles/版本能力入口 | 否 |
| `catalog_entry` | PAGE、SECTION、documentation FRAME/GROUP | 定位目录并发现候选定义 | 否；必须解析到 `exact_source_root` |
| `exact_source_root` | COMPONENT_SET、standalone COMPONENT，或经合同批准的页面 FRAME | 递归读取一个合同实体 | 仍需 immutable version、key/hash/closure |
| `page_instance_root` | 典型页面或验收状态 FRAME | 建立 Page Manifest、实例 override 与 baseline | 仍需 viewport/theme/state/version |

每个可生成实体必须有以下机器记录；一个家族含多个独立 set/component 时使用 `source_roots[]`，不得强行压成一个 URL：

```yaml
figma_source_record_schema: "1.0.0"
entity_id: "REQUIRED_STABLE_ID"
layer: "global|component|composite|archetype|page"
contract_path: "REQUIRED_REPOSITORY_RELATIVE_PATH"
source:
  file_key: "REQUIRED"
  file_url: "REQUIRED"
  immutable_version_id: "REQUIRED_REAL_VERSION_ID"
  canonical_version_request: "REQUIRED_EXACT_REQUEST_WITHOUT_SECRET"
  source_roots:
    - role: "catalog_entry|exact_source_root|page_instance_root"
      node_id: "REQUIRED"
      expected_node_type: "REQUIRED"
      expected_raw_name: "REQUIRED_EXACT_OR_EMPTY"
      component_key: "REQUIRED_FOR_COMPONENT_OR_SET"
      canonical_node_url: "REQUIRED_CLICKABLE_FIGMA_URL"
      snapshot_sha256: "REQUIRED_REAL_SHA256"
      recursive: true
  reference_closure_status: "pass|block"
consumers: ["REQUIRED_PAGE_OR_PARENT_ENTITY_IDS"]
status: "active|pending|superseded|blocked"
```

链接 URL 必须显式包含正确的 file key 与 `node-id`；`node-id` 的连字符形式与记录中的冒号形式必须双向一致。URL 的 `t=` 只是会话定位参数，不能填入 `immutable_version_id`。同一个 node ID 在不同 file 中不是同一身份；至少以 `file_key + immutable_version_id + node_id + component_key_or_not_applicable` 建立主键。

对同一设计系统文件中已登记的超大 Figma identity 清单，允许机器使用 front matter `design_system_figma.canonical_node_url_template` 由每条 node ID 确定性展开 canonical URL；这仍是一一对应链接，不允许按名称搜索或省略 node ID。**Lingee 图标不使用该模板**：图标身份必须来自 §3.9 的固定包版本与精确 `export_name`，历史 Figma 图标节点不得被重新提升为运行时图标来源。凡跨文件、失效、待迁移或 node ID 未知的 Figma 记录不得套模板猜测。

#### 3.0.3.1 v2.4.0 链接覆盖结论

| 层级 | 人类可点击入口 | 精确生成源状态 | 当前结论 |
|---|---:|---|---|
| 全局来源家族 | 9/9 | Variables/Styles 与缺失 foundations 尚未版本闭合 | `blocked` |
| 基础组件目录 | 37/37，节点均存在 | 当前入口类型为 26 PAGE + 5 FRAME + 1 SECTION + 5 COMPONENT_SET；PAGE/FRAME/SECTION 必须继续解析 §3.6.x 的定义 roots | `catalogued` |
| 组合组件家族 | 4/4 | 已为 Topbar 5 roots、Sidebar 14 atomic sets、内容卡片 8 direct definitions、AI 输入 20 direct definitions补机器 URL；依赖闭包和 immutable version 未完成 | `blocked` |
| Archetype | active=0 | 没有 source page URL 或合同 | `not_registered` |
| 典型页面 | pending 1/1：`workbench-home` | 只有 current-live FRAME；无 version、Page Manifest、状态矩阵和 baseline | `blocked` |

§3.6 注册表中的 37 个 URL 统一解释为 `catalog_entry_url`；只有 Button、Divider、Drawer、Form、Indicators 当前登记节点本身为 `COMPONENT_SET`。其余 32 项虽然入口节点真实存在，但不是可直接消费的单一组件定义。生成器必须读取对应 §3.6.x 中明确登记的 set/component IDs，并在正式 Component Contract 的 `source_roots[]` 写入 exact links；若该节没有足够 identity 或 closure，则保持 `block`。已知 file key + node ID 的 URL 由本文按规范格式补齐，不再要求用户重复粘贴。

#### 3.0.3.2 仍必须由用户 / Design Owner 提供的 Figma 链接

| 优先级 | 需要提供的链接或版本身份 | 为什么无法由本文自行确定 | 提供后写入位置 |
|---|---|---|---|
| P0 | 当前设计系统文件 `HXHbn9VT1RgPuJ70JI4tQ5` 的真实 immutable version ID / 可复读版本入口 | 现有 0 个 URL 含版本证明；live 文件已经出现计数漂移 | front matter、release manifest、全部 active records |
| P0 | 七份 Token 机器源各自对应的 Figma Variable collection/mode identity 与可复读入口（或 connector 可验证的 collection/variable IDs + versioned request）；Typography/Spacing/Radius 使用节点还需 Style/Variable binding identity | 当前 `5:509` 只是 Global 目录 PAGE，七份 JSON 与 Figma Variables 尚无一一绑定；仅凭颜色/尺寸值不能反推 Variable | `token_sources[]`、§3.8.2、§3.8.7–§3.8.9、`figma-link-registry.yaml` |
| P0 | Topbar 失效 legacy root `20086:11753` 的当前替代节点链接，或明确批准其 `superseded` | 当前节点只返回 `Node not found`，不能自动猜替代物 | `topbar_spec_source`、§3.3.1、lineage |
| P0 | 旧左导航五个规范节点 `15974:17934`、`13307:18812`、`19884:25161`、`20579:22340`、`19884:24731` 到当前文件的 exact canonical 对应链接，或逐项废弃批准 | 旧链接可定位，但迁移目标仍是 `REQUIRED_EXACT_NEW_NODE_OR_EXPLICIT_SUPERSEDED` | §3.4.7 lineage |
| P0 | Skeleton 的 exact COMPONENT_SET / COMPONENT / SECTION 链接 | 目前只有 PAGE `9659:15003`，没有 §3.6.x 深读与正式 source roots | §3.6 B、Skeleton Component Contract |
| P0（使用时） | 每个需要生成的典型页面 FRAME 链接；若 viewport/theme/critical state 分属不同 FRAME，须逐 cell 提供 | 当前只有 `workbench-home / 22025:6465 / new-task-default` 一个 live locator | §5 registry、Page Manifest、baseline matrix |
| P0（建立时） | 每个 active Archetype 的来源页面/结构 FRAME 链接 | 当前 active archetype=0；候选类型名称不是 Figma identity | §4 Archetype Contract |
| P1（纳入全局时） | Grid、Border、Shadow/Effect、Motion、Illustration 的 canonical 规范节点链接 | 当前只在候选类别中出现，node ID=`unknown` | §3.0.1 全局来源、对应 Global Contract |

输入链接的最低格式为 `https://www.figma.com/design/<file-key>/<file-name>?node-id=<a>-<b>`；同时必须说明它是 `catalog_entry`、`exact_source_root` 还是 `page_instance_root`。若同一组件有多个独立 set，必须全部提供或确认本文已登记的 `source_roots[]` 完整；不得只给一个视觉相似节点。

#### 3.0.3.3 G-FL Figma Link Gate

生成前 validator 必须逐条验证：URL 可解析；file key/node ID 相符；节点存在；type/raw name/component key 与合同一致；不可变版本可复读；目录入口可达的全部被使用定义都进入 `source_roots[]`；页面实例引用可追溯到组件合同；跨文件同 ID 不合并；dead/superseded/missing/unknown 链接不进入 active closure。任一项失败即 `G-FL=block`，且 `generation_ready=false`。

### 3.1 技术栈探测与变更边界

生成前必须按顺序探测：

1. 读取仓库说明、包管理文件、构建配置、入口、路由、测试与 lint 配置。
2. 判断项目是非空现有项目还是空项目，并把证据写入 Manifest 的 `target.stack_detection`。
3. 非空项目保持既有框架、语言、构建、路由和目录结构，只修改 Manifest `allowed_paths` 允许的范围。
4. 空项目默认使用语义 HTML、CSS、JavaScript，并提供无需外部 CDN 的最小运行方式。
5. 任何新增依赖、框架迁移、构建工具或外部资源都必须有明确许可、固定版本和许可证记录；未获许可不得安装。
6. 实现文件由每页 Manifest 决定。当前仓库的 `index.html`、`styles.css`、`app.js`、`README.md` 与 `assets/` 全部属于 `quarantined historical implementation evidence`，只能用于实现审计，不得成为页面学习、入口路径、route、archetype、shell、fixture 或资产绑定的 authority。

当前工作区可继续执行技术栈探测，但探测结果只回答“若未来 Manifest 批准实现，应如何保留项目约定”，不能生成任何页面事实。现已收到 `workbench-home` 的 1 个 pending live intake；在取得 immutable version、完成完整证据并获准 active 登记前，不得从该 intake 或现有实现推导页面类型、布局、route 或实现来源。

### 3.2 页面 Shell 注册状态（active 空；pending intake=1）

| 登记项 | 当前值 | 规则 |
|---|---:|---|
| pending live intake observation | 1（`workbench-home`） | §5.2 的 current-live child geometry 只供待锁版学习，不计 active shell/source |
| active shell | 0 | pending intake 未取得 immutable version 与完整证据，不得创建或选择 shell |
| shell source | 0 | 每个 shell 必须追溯到用户新投喂的锁定 page node/version；live locator 不等于 active source |
| inherited geometry | none | viewport 与 Sidebar/main/topbar/content 几何均须由新 Manifest 明示 |
| `main-local` origin | unregistered | 只能由对应新 Manifest 的 shell/page node 定义 |

禁止事项：

- 不得从组件尺寸、设计系统展示容器、旧代码、README、磁盘资产、聊天上下文、缓存读取或已丢弃页面反推 shell。
- 不得因 viewport、平台或页面名称相似就自动关联任何 shell；名称匹配不构成 identity 或 provenance。
- `workbench-home` 的 main `22025:6466` 与 Sidebar `22132:3165` 几何是 current-live observation，不是 immutable geometry proof，不得登记 active shell 或 `main-local` origin。
- 新 shell 只能在用户提供 file key/URL、root page node、真实 immutable version、viewport/theme/states，并完成该 page node 全量直读后登记。
- active shell 保持 0 时，Page Manifest 的 `shell_id`、区域矩形与坐标原点均必须为 `REQUIRED`/`unknown`，不得由 pending live observation 或历史默认值填充。

### 3.3 顶部栏组合组件有限 live-read 证据

本节合并顶部栏家族的当前 live-read 证据，生命周期仍为 `catalogued_not_contract_complete`（归一为 `catalogued`）。这里的 node、key、formal property、当前 resolved value、嵌套引用与 fixture 只描述本次 connector 返回；不构成 immutable-version 快照、完整 property API、合法组合矩阵、交互/响应式/a11y 合同或实现许可。

#### 3.3.1 身份拓扑、入口与读取结果

| 层级 | raw identity / node | Figma 链接 | 当前有限证据 |
|---|---|---|---|
| 文件 | `HXHbn9VT1RgPuJ70JI4tQ5` | [设计系统文件](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-) | connector 读取的是 live file，未返回 immutable version ID |
| Canvas | raw=`顶部栏`；`9659:23458` | [打开 Canvas](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9659-23458) | 当前返回中可定位用户 SECTION；Canvas 不是五个 COMPONENT 中的任一个 |
| 用户指定容器 | type=`SECTION`；`22090:14341`；1360×1486 | [打开用户 SECTION](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22090-14341) | white fill、1px `rgba(0,0,0,0.1)` stroke；直接包含下表 5 个独立 COMPONENT；属于文档/展示容器证据，不得当作单个组件或产品页面表面 |
| 旧登记入口 | `20086:11753` | [打开旧 root](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=20086-11753) | 本次精确 node probe 返回 `Node not found`；可能原因未由 connector 裁决，其与 Canvas/SECTION 的历史或 canonical 关系保持 `unresolved` |

对 `22090:14341` 的精确读取与从 `9659:23458` 返回中取得的同一 SECTION subtree 一致，当前可记录拓扑为 **Canvas `9659:23458` → SECTION `22090:14341` → 5 个直接 COMPONENT**。三层身份必须独立保存；不得因 raw 名称含“顶部栏”而把 Canvas、SECTION、旧 root 或任一 COMPONENT 合并。旧 root 的读取失败也不授权静默删除历史 identity 或宣称新 SECTION 是其替代物。

#### 3.3.2 五个直接组合组件与 formal boolean definitions

下表五个 direct COMPONENT 的 canonical node URL 已逐项登记在 front matter `topbar_spec_source.direct_components[]`；node ID、raw name、component key 与 URL 是同一机器记录，生成器不得只读其中任一列。

| raw 组件名 | node ID / component key | 当前根几何与 Auto Layout | 当前 formal boolean definitions（均返回 default=`true`） |
|---|---|---|---|
| `顶部栏` | `19461:4154` / `7821b30f2358cd442ed683b6737f0ad6a2a5e3f7` | width=1160；row；gap=24 | `显示图标`、`显示按钮 1`、`显示搜索框`、`显示按钮 2` |
| `二级页签顶部栏` | `19461:4345` / `a18b90b1a2df97b94e2e69e11335b21afa449537` | width=1160；column；padding-bottom=16；gap=8 | `显示搜索`、`显示过滤图标` |
| `三级页签顶部栏` | `19461:4734` / `f77f6afd53389f7a5d27455278e25151c1cfdce5` | width=1160；column；padding-bottom=16；gap=8 | `显示搜索`、`显示过滤图标`、`显示下拉按钮` |
| `详情页顶部栏` | `19483:12205` / `f2a30c32de20c793d29f14a5f8b2fe84b270ae24` | width=1160；column；padding-bottom=16；gap=8 | `显示按钮 1`、`Show Button` |
| `分页顶部栏` | `18515:13646` / `0bd6602cfa72caac61cc82651e92d104ed0dbc32` | 449×52；row；padding=0 24；gap=12 | `附件图标` |

当前返回合计 **12 个 formal boolean definitions**（4+2+3+2+1）；“均为 `true`”只表示组件定义在本次 live response 中的默认 resolved value，不证明 property 集完整，也不定义合法组合、产品默认值或运行时行为。`Show Button` 是原始中英混名，必须原样保留，直到存在显式迁移映射。

#### 3.3.3 当前嵌套组合、SLOT、visibility wiring 与 fixture

1. **`顶部栏` `19461:4154`**
   - 当前返回为 1160 宽 row、gap=24；标题 fixture=`标题文本`，文字样式为 Noto Sans SC Medium 500、18/28。
   - SLOT raw=`添加图标`，当前 visible wiring 指向 `显示图标`；这只是 Figma wiring 观测，不定义 slot 类型系统或运行时注入协议。
   - SearchInput 引用 `17755:8477`，当前 visible wiring 指向 `显示搜索框`。
   - 两个 Button 引用 `17054:16147`，当前分别由 `显示按钮 1`、`显示按钮 2` 控制；展示 fixture 均为 `上传技能`。
   - 当前 nested icon/component 引用包括 `LayoutSidebar` `9704:21308` 与 `Search` `9704:20371`。
2. **`二级页签顶部栏` `19461:4345`**
   - 当前复用 `顶部栏`，下层使用 section Tabs 引用 `13134:7791`；展示 fixture 包括 `标签名称 15` 与 `标签名称`。
   - medium SearchInput `17755:8435` 当前为 221×40，visible wiring 指向 `显示搜索`；Filter `9704:20390` 指向 `显示过滤图标`。
3. **`三级页签顶部栏` `19461:4734`**
   - 当前复用 `顶部栏`、section Tabs、medium SearchInput 与 Filter；第二行另含 local-outline Tabs `13134:7802` 和 small SearchInput `17755:8477`。
   - SLOT raw=`下拉按钮`，当前 visible wiring 指向 `显示下拉按钮`；slot 内两个 Button 引用 `16375:18677`，fixture=`我的数据`、`本年`，并引用 ChevronDown `9704:20842`。
   - **保留异常：**当前返回未给第二行 small SearchInput `17755:8477` 到 `显示搜索` 的 visibility wiring；禁止按第一行或其他组件模式自动补连。
4. **`详情页顶部栏` `19483:12205`**
   - 当前嵌套 `顶部栏` override 只令 `显示图标=true`，并令 `显示按钮 1=false`、`显示搜索框=false`、`显示按钮 2=false`；该实例 override 不改写 `顶部栏` 定义的默认值。
   - 返回按钮引用 ChevronLeft `9704:20840`（20×20），标题 fixture=`智能体`。
   - agent fixture 引用 `费用审核智能体` `9839:2688`，其 nested identity 为 `Agent_bule_48` `11592:808`；展示 copy 包括 `费用审核智能体`、`在岗73天` 与一段长描述。
   - 两个 action Button 的当前 visibility bindings 覆盖 raw `Show Button` 与 `显示按钮 1`；返回顺序不在本文升格为语义顺序。下层 local-outline Tabs 及其文本仍是展示 fixture，不得据此推断业务、权限、路由或 API。
5. **`分页顶部栏` `18515:13646`**
   - CSV `10831:1916` 为 24×24，当前 visible wiring 指向 `附件图标`。
   - 标题 fixture=`管理费用分析报告生成`，文字样式为 PingFang SC Medium 500、16/24。
   - SLOT raw=`操作图标2`；当前返回引用 ArrowDownToLine `9704:20839` 与 SquareArrowOutUpLeft `11340:1418`，但未据此定义点击、下载、外跳、权限或 tooltip 行为。

上述 `标题文本`、`上传技能`、`标签名称 15`、`标签名称`、`智能体`、`费用审核智能体`、`在岗73天`、长描述、`我的数据`、`本年`、`管理费用分析报告生成` 均为当前展示 fixture/example，不是跨页面产品默认文案或 production data contract。

#### 3.3.4 当前共享依赖引用（非完整 closure）

| 依赖 raw 名称 | node ID | 本节可声明范围 |
|---|---|---|
| SearchInput set | `15942:34115` | 仅证明当前 subtree 存在相关 SearchInput 引用；不证明 set 已完整读取 |
| Button set | `16375:18601` | 仅为当前嵌套按钮的共享组件身份线索；Button 自身有限学习边界仍见 §3.6.1 |
| Tabs set | `13134:7779` | 仅为当前 Tabs 组合依赖身份线索；Tabs 自身有限学习边界仍见 §3.6.26 |
| tabs-item-section | `13134:7772` | 当前 section tab item 依赖 identity |
| tabs-item-local-outline | `13134:7824` | 当前 local-outline tab item 依赖 identity |

这些引用不是 dependency closure。禁止由 nested instance/component ID 反推出完整 variant matrix、Token binding、事件、键盘模型或资产导出合同。

#### 3.3.5 证据边界与未关闭项

- `read_method=figma-mcp-section-and-canvas-cross-read-plus-legacy-root-probe`；SECTION 精确读取与 Canvas 返回中的 subtree 一致，但这是当前 live response 的有限交叉证据。
- `immutable_version_id` 未返回；没有锁定版本前后 probe、raw chunk 落盘、SHA-256、pagination/continuation 对账或完整递归覆盖证明，因此 **`direct_read_complete=false`**。
- 当前读取不能证明 5 个 COMPONENT 是 immutable file 中完整且唯一的顶部栏 catalog；也未闭合 variables/styles、nested dependency、asset、font、prototype/interaction、description/dev resource 与 override reference。
- 12 个 boolean defaults、3 个 raw SLOT、当前 visibility wiring 和实例 override 都不得升格为完整 API、合法组合矩阵或产品行为合同。
- 仍缺 default/hover/pressed/focus/disabled/loading/error 视觉，slot 内容约束，事件、键盘、tooltip、权限、溢出、吸顶/滚动、响应式与 a11y 合同。
- legacy root `20086:11753` 的 canonical/history 关系与第二行 small SearchInput wiring 均保持 unresolved；设计源或锁定版本证据裁决前不得猜测。
- 顶部栏属于全局/组合组件来源，不加入 §3.6 基础控件统计；§3.6 继续保持 36 项有限 live-read + Skeleton 1 项待学习（37/37）。本次学习不修改代码、README、Token 或 assets。

### 3.4 左导航组合组件与原子组件有限 live-read 证据

本节合并左导航 Canvas、新组合组件、原子组件与 legacy set 的当前有限证据。全家族生命周期仍为 `catalogued_not_contract_complete`（归一为 `catalogued`）；当前证据等级仅为 `variant-enumerated`，不是 `runtime-switch-ready`。以下 node、key、raw 名称、variant 与 formal property 只描述本次 connector 返回，不构成 immutable-version 快照、完整递归读取、dependency closure、交互/a11y 合同或运行时切换许可。

#### 3.4.1 身份拓扑与读取边界

| 层级 | raw identity / node / key | 几何与当前有限证据 |
|---|---|---|
| 文件 | `HXHbn9VT1RgPuJ70JI4tQ5` | connector 读取 live file；未返回 immutable version ID |
| Canvas | raw=`左导航`；`9659:23457` | Canvas subtree 中，新组合 COMPONENT_SET 与原子 SECTION 是直接 sibling |
| 新组合 set | type=`COMPONENT_SET`；raw=`1.Sidebar`；`22109:985`；key=`7f84bbc8a9d1927d5d30aaca70a3f4e6c5b242e1` | 1182×1188；直接枚举 3 个 280×1080、`scene=web` 组件变体 |
| 原子容器 | type=`SECTION`；raw=`左导航原子`；`22109:1090` | 2653×1830；white fill；1px `rgba(0,0,0,0.1)` stroke；包含 14 个直接 COMPONENT_SET、其下 50 个直接 COMPONENT，以及 3 个 SECTION 直接示例 INSTANCE |
| legacy set | type=`COMPONENT_SET`；raw=`Sidebar`；`9745:8380`；key=`3d9d9a3bc0534026f5757ff0ffb51e36d96c57fb` | 本次精确读取只返回 set identity、没有 descendants；旧十 node 仅为 `historical/current-revalidation-pending` |

Canvas subtree 与对 `22109:985`、`22109:1090` 的两次精确读取一致，当前可记录拓扑为 **Canvas `9659:23457` → 两个直接 sibling：新组合 set `22109:985` 与原子 SECTION `22109:1090`**。Canvas、新 set、SECTION、legacy set 的 node、key 与 type 不同，必须作为四个独立 identity 保存；不得按“左导航/Sidebar”名称或视觉相似性合并，也不得把 legacy set 静默替换为新 set。

#### 3.4.2 新组合 `1.Sidebar` 的三个直接变体

| raw variant tuple | component ID | component key | 尺寸 |
|---|---|---|---:|
| `state=chat, scene=web` | `22109:986` | `6bcc89adf3f65d9040401408746fb1003d21434d` | 280×1080 |
| `state=dev, scene=web` | `22109:1030` | `80c18db7a4bf6ccc38f4a68649579d7c0f12e46e` | 280×1080 |
| `state=Management, scene=web` | `22109:1054` | `e6204eaa71faf61e3641a814323bfa450353edde` | 280×1080 |

raw 大小写必须原样保留，尤其是 `Management`。当前只观测到 `scene=web`；不得补造 `Client`，不得把 `Management` 映射为 legacy 的 Work、CEO 或 CFO，也不得由旧十 node 反推新 set 的缺失状态。

#### 3.4.3 `左导航原子` 的 14 个 COMPONENT_SET 与 50 个 COMPONENT

14 个 direct COMPONENT_SET 的 canonical node URL 已逐项登记在 front matter `sidebar_spec_source.atomic_component_set_links[]`；以下 ID/key 表与该 URL 列表必须一一对账。

下表逐 set 保存 raw 名称、set ID、component key、全部当前返回的 raw variant/component ID 与 formal properties。14 个 set 合计 50 个直接 COMPONENT，但只有 49 个唯一 set+variant tuple；差异来自 `Component 1` 的重复 tuple，见表后异常说明。

| # | raw set 名称 | set ID / component key | 全部 raw variant / component ID | 本次返回的 formal properties |
|---:|---|---|---|---|
| 1 | `ConversationItem` | `22109:1091` / `a8fb8e90a79157df208165dcbead4e65cb611bb1` | `一级 default` `22109:1092`；`一级 hover` `22109:1095`；`一级 selected` `22109:1101`；`一级 active` `22109:1107`；`二级 default` `22109:1115`；`二级 hover` `22109:1118`；`二级 selected` `22109:1124`；`二级 active` `22109:1130` | `显示图标` boolean=`true`；`对话文本` text=`对话内容` |
| 2 | `NewTaskPanel` | `22109:1138` / `77cf791fad4b1a949b89a4e8493ec04c979d072f` | `level1-primary` `22109:1139`；`level2-secondary` `22109:1151`；`state3` `22109:1155` | 未返回；`state3` 语义未定义，不得猜测 |
| 3 | `History Panel` | `22109:1162` / `67d5d478f98b175a50f39263bfe9612b4d7acea9` | `has-data` `22109:1163`；`empty` `22109:1186` | 未返回 |
| 4 | `History Panel-dev` | `22109:1191` / `b480327cfe334f1f3e22e3f3001a784d64ee6b86` | raw `Default` `22109:1192`；`toast` `22109:1218` | 未返回 |
| 5 | `icon` | `22109:1243` / `9636c1944898c383aced82c4723e084d7fc47f5f` | `default` `22109:1244`；`hover` `22109:1246` | 未返回 |
| 6 | `NewTaskButton` | `22109:1248` / `7aead9f640430b266ebee5663b414f7ef6d4957e` | `default` `22109:1249`；`disabled` `22109:1252`；`hover` `22109:1255`；`selected` `22109:1258` | `text` text=`新任务` |
| 7 | `Room Navigation Item` | `22109:1261` / `69b32ed6ce43e5bbc21ca47632527ea6d859662c` | `default` `22109:1262`；`hover` `22109:1269`；`selected` `22109:1276` | `Label` text=`一级内容`；`Status` text=`限时使用`；`显示文字` boolean=`true` |
| 8 | `Partner Sessions` | `22109:1283` / `fb2aac9811e790766f6f5e546b355ddc07e54fb2` | `default` `22109:1284`；`hover` `22109:1287`；`selected` `22109:1292` | `sessionTitle` text=`二级内容`；`显示二级操作` boolean=`true`；`显示标题icon` boolean=`true` |
| 9 | `Partner Sessions`（独立同名 set） | `22109:1296` / `0130e4e50dfdf79cafba6433b7cde6a548fa6346` | `default` `22109:1297`；`hover` `22109:1300`；`selected` `22109:1305`；`active` `22109:1310` | `Session Title` text=`三级内容` |
| 10 | `Profile picture` | `22109:1318` / `754c72ba82054dfd341d9a87c01877267b6a9019` | `default` `22109:1319`；`hover` `22109:1322` | 未返回 |
| 11 | registry raw=`Component 1` | `22109:1326` / `9364efdefcb2347fffd24ce88d140cb06e3925fd` | `processing default` `22109:1327`；`processing hover` `22109:1335`；`processing selected` `22109:1343`；`warning default` `22109:1351`；`warning hover` `22109:1359`；`warning default` `22109:1367`；`success selected` `22109:1375`；`success default` `22109:1383`；`success hover` `22109:1391` | 未返回 |
| 12 | `Window Title Bar` | `22109:1399` / `00b4c0c0c08cef48582b8d5ea2f2513a0de00d4b` | `Type=Logo Only` `22109:1400`；`Type=Full Header` `22109:1418` | `Show Toolbar` boolean=`true` |
| 13 | `Conversation Group Header` | `22109:1440` / `9e5caba557685e3f0bf2f6c98e3984ed61da634f` | `State=Collapsed` `22109:1441`；`Collapsed No Icon` `22109:1452`；`Collapsed Icon` `22109:1460` | `显示前导图标` boolean=`true`；`标题` text=`标题文案`；`显示箭头` boolean=`true`；`显示操作按钮` boolean=`true`；`Show Leading Icon` boolean=`true`；`Title` text=`标题文案`；`Show Chevron` boolean=`true`；`Show Actions` boolean=`true` |
| 14 | registry raw=`Component 5` | `22109:1470` / `d2e845cee59b95700105400ce1838f96bf7f8ad7` | raw axis=`Property 1`：`Completed` `22109:1471`；`Pending` `22109:1474`；`In Progress` `22109:1477`；三者均为 16×16 | 未返回 |

必须保留以下 identity 与异常边界：

- 两个 raw 同名 `Partner Sessions` 是 set `22109:1283` 与 `22109:1296`，拥有不同 key、variant 数和 formal properties，禁止合并或按名称去重。
- registry raw=`Component 1` 有 9 个 component node，但只有 8 个唯一 tuple：`default+warning` 重复（`22109:1351`、`22109:1367`），同时缺少 `selected+warning`。在上游消除重复并补齐/裁决缺失组合前，这是状态切换 blocker。
- `Conversation Group Header` 的中英两套 properties 必须逐项保存，不能当作 alias 或互相覆盖；当前只观测到 `Collapsed` 命名族，不得补造 expanded/open 家族。
- 当前只有 set `22109:1091`、`22109:1248`、`22109:1261`、`22109:1283`、`22109:1296`、`22109:1399`、`22109:1440` 返回 formal properties，合计 19 项（11 boolean + 8 text）。其他 set 的“未返回”不等于“没有 property”，不得写成零或空合同。

#### 3.4.4 SECTION 直接示例 INSTANCE（不计入 14/50）

| instance ID | raw 名称 | componentId | 计数边界 |
|---|---|---|---|
| `22109:1161` | 未返回 | `22090:2446` | SECTION 直接示例；不计入 14 sets / 50 components |
| `22109:1242` | `Profile` | `22090:2545` | SECTION 直接示例；不计入 14 sets / 50 components |
| `22109:1469` | `内容分类` | `22090:2865` | SECTION 直接示例；不计入 14 sets / 50 components |

这三个 INSTANCE 只证明当前 SECTION 存在展示引用；不得将其 `componentId` 当作本节 14 个 set 的替代 identity，也不得据此宣称依赖闭包完整。

#### 3.4.5 legacy `Sidebar` 十 node 的历史登记

legacy set raw=`Sidebar` `9745:8380`、key=`3d9d9a3bc0534026f5757ff0ffb51e36d96c57fb` 本次精确读取只返回 set identity，未返回 descendants。下列十个 280×1080 node 继续保留为历史登记，但统一降级为 `historical/current-revalidation-pending`，不作为当前实时确认的 variant inventory：

| 历史 scene | 历史 state | node ID | 历史登记尺寸 | 当前证据状态 |
|---|---|---|---:|---|
| Web | Chat | `9745:8379` | 280×1080 | current revalidation pending |
| Web | Work | `9745:8378` | 280×1080 | current revalidation pending |
| Web | CEO | `9745:14648` | 280×1080 | current revalidation pending |
| Web | CFO | `9745:18075` | 280×1080 | current revalidation pending |
| Web | Dev | `9745:8377` | 280×1080 | current revalidation pending |
| Client | Chat | `14153:11280` | 280×1080 | current revalidation pending |
| Client | Work | `14153:11436` | 280×1080 | current revalidation pending |
| Client | CEO | `14153:11499` | 280×1080 | current revalidation pending |
| Client | CFO | `14153:11610` | 280×1080 | current revalidation pending |
| Client | Dev | `14153:11816` | 280×1080 | current revalidation pending |

历史内容仍禁止跨 scene/state 混合，但该禁令不证明旧 variant 当前存在，也不授权从 legacy 十 node 向新 `1.Sidebar` 推导映射。重验证前，任何 Page Manifest 若仍引用这些 node，必须明确标记 source revalidation blocker。

#### 3.4.6 状态切换硬 Gate

当前统一状态为：

```yaml
evidence_level: variant-enumerated
state_switch_readiness: blocked
direct_read_complete: false
immutable_version_id: pending
```

从 `variant-enumerated` 升级到 `runtime-switch-ready` 前，至少必须全部满足：

1. 为每个切换入口建立 **exact set ID + raw axis/value** 映射，保留大小写、空格和同名独立 set；不得仅按显示名或位置匹配。
2. 所有未知 set、axis、value、tuple 与缺失组合必须 fail closed；不得 fallback 到首项、`default`、相似名称或 legacy state，尤其不得猜测 `state3`、`Management`、重复 `default+warning` 或缺失 `selected+warning`。
3. pointer、selection、data、status、structure 必须分轴建模并分别定义允许转换；不得把 hover、selected、active、empty、toast、processing/warning/success、层级或折叠结构压成单一 `state` 字段。
4. 新组合父级 variant 与原子子级 state/structure 的双向映射必须同步、可追溯，并定义不一致时的失败动作；不得只切父层视觉或只切子层内容。
5. 必须补齐 keyboard 操作、focus 顺序/可见焦点、ARIA role/state/relationship，以及切换后的焦点归还和公告合同。
6. 每个登记 variant/tuple 都必须有锁定 source 下可复现的结构、视觉与行为测试；重复、缺失和 unsupported 组合必须有显式失败断言。

本次返回未提供 prototype reactions、事件迁移/transition、键盘、focus、a11y 或父子状态同步证据。connector 也未返回 immutable version、raw snapshot/hash、完整递归覆盖证明或 dependency closure。因此不得声称 full-read、`direct_read_complete`、`runtime-switch-ready`、`contract_complete` 或 verified；状态切换必须保持 `blocked`。

左导航是全局/组合来源，不加入 §3.6 基础控件统计；§3.6 必须继续保持 36 项有限 live-read + Skeleton 1 项待学习，即 36+1=37。本节更新不修改代码、README、Token 或 assets。

#### 3.4.7 用户已裁决的左导航视觉硬规则与来源迁移

以下规则来自用户对 Lingee 左导航的明确裁决，优先级按 §1.1 记录；它们立即成为生成合同要求，但在固定 Figma version 的 Variable/instance binding 复读完成前，仍不得虚报 `source_exact`：

1. **Selected icon 色彩：**左导航 nav item 在 selection axis=`selected` 时，icon 的目标语义 Token 必须是精确 path `fg-color/black-strong`。禁止使用相同 HEX 反推、直接全局色、`rgba(0,0,0,...)`、相邻 black Token 或 CSS literal 替代。
2. **组件 Token 消费：**依照 §3.8.2，Sidebar 组件实现不能直接消费 semantic Token。`components.json` 必须存在一个 Sidebar 自身命名空间的 selected-icon component Token，并以真实 `aliasData.targetVariableId` 指向 semantic `fg-color/black-strong`。具体 component Token path/Variable ID 必须从固定版本读取；在 alias 不存在或未验证时，该视觉字段 `block`，不得临时直接引用 semantic path 后声称合同完整。
3. **状态轴分离：**`selected` 属于 selection axis，不得与 pointer=`hover|pressed`、activity=`active`、availability=`disabled` 合并为单一 state。任何组合态的优先级必须由 legal tuple 和固定 baseline 明确；未登记组合 fail closed。
4. **图标身份：**每个左导航 icon 必须来自 §3.9 的固定 `lingee-icon` 包，并通过版本化 `icon-compatibility-map` 将页面/Figma 语义映射到一个大小写完全一致的 PascalCase `export_name`。运行时身份是 `lingee-icon + exact_version + export_name`；禁止名称首项、模糊/近似图标、Figma 临时导出、图标字体、emoji、CSS 手绘或模糊位图。
5. **图标着色：**`lingee-icon` 组件默认以 `currentColor` 消费颜色，selected 状态必须由 Sidebar selected-icon component Token 驱动。只有设计明确要求且已登记时才允许传 `fill`；禁止修改包内 path/fill、复制 SVG 后手工改色，或因最终 HEX 相同绕过 Token provenance。
6. **硬验收：**至少建立 selected/default/hover 及所有已批准 compound tuples 的 `package_version + export_name + size + computed color + data-icon` 与截图 baseline 断言。selected icon 的 computed token provenance 不指向 `fg-color/black-strong`，或 DOM `data-icon` 与 Manifest export 不一致，即使像素碰巧相同也不得通过 source audit。

旧规范文件与当前 AI 投喂版之间必须建立 lineage，防止“节点换了但规则是否迁移”不可证明：

| historical file/node | 历史用途 | 当前文件 canonical 对应 | 状态 |
|---|---|---|---|
| `c6v3V45f3zltmKeSNBgR1f` / [15974:17934](https://www.figma.com/design/c6v3V45f3zltmKeSNBgR1f/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83?node-id=15974-17934) | 左导航主规范 | `REQUIRED_EXACT_NEW_NODE_OR_EXPLICIT_SUPERSEDED` | historical link exists；mapping pending |
| `c6v3V45f3zltmKeSNBgR1f` / [13307:18812](https://www.figma.com/design/c6v3V45f3zltmKeSNBgR1f/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83?node-id=13307-18812) | 左导航对照规范 | `REQUIRED_EXACT_NEW_NODE_OR_EXPLICIT_SUPERSEDED` | historical link exists；mapping pending |
| `c6v3V45f3zltmKeSNBgR1f` / [19884:25161](https://www.figma.com/design/c6v3V45f3zltmKeSNBgR1f/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83?node-id=19884-25161) | 左导航对照规范 | `REQUIRED_EXACT_NEW_NODE_OR_EXPLICIT_SUPERSEDED` | historical link exists；mapping pending |
| `c6v3V45f3zltmKeSNBgR1f` / [20579:22340](https://www.figma.com/design/c6v3V45f3zltmKeSNBgR1f/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83?node-id=20579-22340) | 左导航调整证据 | `REQUIRED_EXACT_NEW_NODE_OR_EXPLICIT_SUPERSEDED` | historical link exists；mapping pending |
| `c6v3V45f3zltmKeSNBgR1f` / [19884:24731](https://www.figma.com/design/c6v3V45f3zltmKeSNBgR1f/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83?node-id=19884-24731) | 左导航调整证据 | `REQUIRED_EXACT_NEW_NODE_OR_EXPLICIT_SUPERSEDED` | historical link exists；mapping pending |
| `c6v3V45f3zltmKeSNBgR1f` / [9745:8380](https://www.figma.com/design/c6v3V45f3zltmKeSNBgR1f/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83?node-id=9745-8380) | legacy Sidebar set | `HXHbn9VT1RgPuJ70JI4tQ5` / [9745:8380](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9745-8380) 或经证据确认的新 set | partially registered; revalidation pending |

每一行必须补 `old version/new version、old/new node ID、变更摘要、迁移/废弃原因、Design owner、批准记录、视觉 diff`。只有 mapping 全部裁决，且 selected icon Token、固定 `lingee-icon package_version + export_name` 与 state tuple 在当前版本校验通过后，左导航才允许从 `variant-enumerated` 升级为 `runtime-switch-ready`。

### 3.5 组件 Canvas 目录

全目录状态统一为 `catalogued_not_contract_complete`；node 可用于后续深读定位，不可直接视为可实现组件合同。

| 目录 | node ID | Figma 链接 | 当前结论 |
|---|---|---|---|
| 全局 | `5:509` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=5-509) | 已登记，未证明完整深读 |
| Figma 图标视觉对照（非运行时读取源） | `22007:30176` | [打开 Figma 对照](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22007-30176) | 产品图标统一从 [Lingee UI 图标库](https://kingdee.github.io/lingee-ui/#/foundation/icon) / `lingee-icon@1.0.15` 读取；该 Figma 节点只用于页面实例语义和视觉映射，完整合同见 §3.9 |
| 顶部栏 Canvas | `9659:23458` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9659-23458) | 当前 live-read 在该 Canvas 下定位 SECTION `22090:14341`，其直接包含 5 个独立组合 COMPONENT；旧登记 `20086:11753` 本次返回 `Node not found`，不得静默合并或替换；见 §3.3 |
| 左导航 Canvas | `9659:23457` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9659-23457) | raw=`左导航`；当前 Canvas subtree 与新组合 set `22109:985`、原子 SECTION `22109:1090` 的两次精确读取一致，两者是 Canvas 直接 sibling。新 set 枚举 3 个 `scene=web` 组合变体；SECTION 登记 14 个直接 COMPONENT_SET、50 个直接 COMPONENT、49 个唯一 tuple、3 个直接示例 INSTANCE、19 项 formal properties（11 boolean + 8 text）。legacy set `9745:8380` 及十 node 为 historical/current revalidation pending；`state_switch_readiness=blocked`、`direct_read_complete=false`，见 §3.4 |
| 内容卡片 Canvas | `9667:19011` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9667-19011) | raw=`内容卡片`；用户 SECTION raw=`设置` `22125:5795`。当前 Canvas/SECTION 交叉读枚举 14 个直接 child（6 sets + 2 standalone components + 6 instances）、13 个 set variants、15 个 section-owned definitions 与本次返回的 32=24 boolean+8 text formal properties；四个 source root exact probe 均未返回 descendants；`runtime_contract_readiness=blocked`、`direct_read_complete=false`，见 §3.5.1 |
| AI 输入 | `9667:17533` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9667-17533) | raw=`对话输入框（ai）`；当前 Canvas response 定位 direct child SECTION raw=`输入框原子` `22130:12743`，但无 completeness proof。SECTION 当前枚举 22 直接 child=17 sets+3 standalone+1 instance+1 non-contract FRAME、57 variants、60 definitions、4=4 boolean+0 text formal properties；17/17 set roots + 3/3 standalone roots 共 20 个 direct definition roots 已 exact-read 并返回 current-live root subtree，另有分开计数的 source-root probe=1（`22130:13030`）；六个 imageRef identifier 未 export/hash；`runtime_contract_readiness=blocked`、`direct_read_complete=false`，见 §3.5.2 |
| Chart | `9659:18996` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9659-18996) | 已登记，数据/空态/a11y 未完成 |
| AI 意图 | `9667:14917` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9667-14917) | 已登记，未完成状态机 |
| 思考 | `9667:19712` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9667-19712) | 已登记，未完成状态机 |
| 对话 | `9667:19713` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9667-19713) | 已登记，未完成状态机 |
| 执行结果 | `9667:19397` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9667-19397) | 已登记，未完成异常/恢复合同 |
| 置顶气泡 | `17353:20240` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=17353-20240) | 已登记，未完成触发/关闭合同 |


#### 3.5.1 内容卡片 / 设置 SECTION 有限 live-read 证据

本节只合并内容卡片家族本次返回的有限 live-read 证据。全家族生命周期保持 `catalogued_not_contract_complete`（归一为 `catalogued`）；当前证据等级为 `section-enumerated-and-resolved-instance-observed`，不是 immutable-version 快照、full read、完整 descendants、dependency closure、运行时状态合同或 verified 证据。

##### 3.5.1.1 Source、拓扑与计数边界

| 层级 | raw identity / node | Figma 链接 | 当前有限证据 |
|---|---|---|---|
| 文件 | file key=`HXHbn9VT1RgPuJ70JI4tQ5` | [设计系统文件](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-) | connector 读取的是 live file，未返回 immutable version ID |
| Canvas | type=`CANVAS`；raw=`内容卡片`；`9667:19011` | [打开 Canvas](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9667-19011) | 当前 Canvas response 可定位下列 SECTION；Canvas 不是任一组件定义 |
| 用户指定容器 | type=`SECTION`；raw=`设置`；`22125:5795` | [打开用户 SECTION](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22125-5795) | 2066×3558；white fill；1px `rgba(0,0,0,0.1)` stroke；当前返回枚举 14 个直接 child |

对 SECTION `22125:5795` 的精确读取与 Canvas `9667:19011` 返回中的同一 SECTION subtree 一致。当前 Canvas response 显示该 SECTION 是 Canvas 的直接 child，但没有 pagination/completeness proof，故不得声称它是 immutable file 中唯一 child，也不得据此宣称 Canvas 或 SECTION 已完整读取。

| 对账项 | 本次返回计数 | 边界 |
|---|---:|---|
| SECTION 直接 child | 14 | `6 COMPONENT_SET + 2 standalone COMPONENT + 6 INSTANCE = 14` |
| 直接 COMPONENT_SET | 6 | 逐项登记于 §3.5.1.2 |
| 6 sets 下 variant COMPONENT | 13 | 只对本次返回枚举负责，不证明 immutable source 完整 |
| 直接 standalone COMPONENT | 2 | 逐项登记于 §3.5.1.3 |
| SECTION 直接示例 INSTANCE | 6 | 不计入 set、variant 或 standalone definition 数 |
| 当前 section-owned component definition nodes | 15 | `13 set variants + 2 standalone = 15` |
| 已返回 formal property definitions | 32 | `24 boolean + 8 text`；“未返回”不等于不存在 |
| exact source-root probes | 4 | probe IDs=`22125:6022`、`22125:6075`、`22125:6085`、`22125:6091`；均未返回 descendants |

##### 3.5.1.2 六个直接 COMPONENT_SET、13 个 variants 与 formal properties

六个 set 与 §3.5.1.3 两个 standalone 的 canonical node URL 已逐项登记在 front matter `content_card_spec_source.direct_definition_roots[]`；四个实例 source probe URL 则登记在 `exact_source_root_probe_urls[]`，两类角色不得混算。

| # | raw set / set ID / key | 本次返回的全部 raw variant / component ID / key | 当前几何与 formal properties |
|---:|---|---|---|
| A | `内容区`；`22125:5796`；key=`a57d5184934c0861f696328a1dfa134678984ac3`；824×204 | `Property 1=双行`：`22125:5797` / key=`89ae5e2f18e0c4cae4b95ef3e6ea33422efdcbd4`；`Property 1=单行`：`22125:5823` / key=`bf9ba2613e959b48189e5fe4cd8ac723210d2928` | 两者 width=784、padding=`16px 12px`、gap=16。formal 9 boolean：`显示标签=true`、`显示开关=true`、`显示操作按钮=true`、`显示描述文本=true`、`显示操作图标=true`、`显示分割线=true`、`显示输入框=false`、`显示可编辑文本=true`、`Show PPT=false` |
| B | raw 含一个前导 ASCII space 的 ` 2.列表内容卡片`；`22125:5969`；key=`28a3db1ea9d230f87508a4f2c6dc28893fdf6d40`；824×204 | `Property 1=双行`：`22125:5970` / key=`2ee3214055c8321b148349dd9835a9dabac81a4d`；`Property 1=单行`：`22125:5996` / key=`c2d0fa1da1acb48dc597f6707f0b294dccf81892` | 两者 width=784、padding=`16px 12px`、gap=16。formal 9 boolean：`显示标签=true`、`显示开关=true`、`显示操作按钮=true`、`显示描述文本=true`、`显示操作图标=true`、`显示分割线=true`、`显示输入框=false`、`显示可编辑文本=true`、`Show PPT=true` |
| C | `StepIndicator`；`22125:6110`；key=`05c336d3245498cc05e71547f0f0dad733b2473d` | `State=Pending`：`22125:6111` / key=`327527ca9532da20e7dd9b8d181057ded8f67ba0`；`State=Current`：`22125:6114` / key=`1ae70f08faf375d5797aaa4c6e516ad638f74227`；`State=Completed`：`22125:6119` / key=`d68d0c396171c4237bbc073ac9f6dee2a0a61553` | 三者均 18×18。formal：`ShowIcon` boolean=`true`；`Label` text=`6` |
| D | `FileListItem`；`22125:6121`；key=`0d0c0d0be0c60948de3dfc9a9569099c10d8bf0c` | `State=Default`：`22125:6122` / key=`34a331a34de8bbe496933daa13a699a1f9876fa1`；`State=Hover`：`22125:6130` / key=`7ae06de233364ea7cb79a4d018eec83d5c3b0260` | Default=400×54、padding=`8px 0`；Hover=368×54、padding=`6px 0`、fill=`rgba(0,0,0,.03)`、radius=12。formal：`FileName` text=`2026年合同审批归档报告`、`Description` text=`50.5kb · 2026/03/18`、`ShowTag` boolean=`true`、`ShowActions` boolean=`true`。400/368 宽度及 padding 差异是待裁决异常，禁止自动归一 |
| E | `More Button`；`22125:6138`；key=`cb706eaec2b06a3e51ad1fd5189a9a1fa7089518` | `State=Default`：`22125:6139` / key=`7b728a2740cdd4cf028c661eab64f7f0a0813673`；`State=Hover`：`22125:6141` / key=`f27a4c2f2815975587c8332717494b0108733973` | 两者 padding=6、radius=8；Hover fill=`rgba(0,0,0,.03)`。formal properties 未返回，不得写成不存在或零 |
| F | `CategoryLink`；`22125:6143`；key=`9a16f8f1b6b1d56a3b8af16d9eff505267082d88` | `Style=Default`：`22125:6144` / key=`af79f545c27b4a91c648777faa3a79edfa326483`；`Style=Filled`：`22125:6146` / key=`9146d1f1de02c0c6494abdd80e1296b433685a54` | 两者 368×34；Filled fill=`rgba(0,0,0,.03)`、radius=12。formal properties 未返回；raw `Style` 不是可自行解释的 pointer state |

六个 set 本次共返回 24 项 formal definitions（21 boolean + 3 text）：A/B 各 9 boolean，C 为 1 boolean+1 text，D 为 2 boolean+2 text；E/F 未返回 formal definitions。raw `Property 1` 的产品语义仍未定义；`单行`/`双行` 只是在 raw variant name 中观测到的命名，不得自行推导内容长度、截断、换行或 runtime axis 语义。

##### 3.5.1.3 两个直接 standalone COMPONENT

| raw component | node ID / key | 当前根几何 | 本次返回的 formal properties 与边界 |
|---|---|---|---|
| `分类标题` | `22125:5848` / key=`80927fdab60521967a33d36df6e3123da4981a8c` | 800×32；row；gap=12 | 3 boolean：`显示页签=true`、`显示搜索框=true`、`显示按钮=true`。当前 nested Tabs/input/button/slot 只属于 resolved subtree，不构成这些依赖的 source definition 或 closure |
| raw 含一个前导 ASCII space 的 ` 5.执行卡片` | `22125:6093` / key=`5977a1ae2625401b823f02e95cbc90429a097fec` | width=400；column；padding=12；gap=12；fill=`rgba(255,255,255,.82)`；radius=16 | 5 text：`Title=任务列表`、`Counter=1/3`、`Task1Text=使用 admin-expense-analysis skill 分析数据`、`Task2Text=使用 admin-expense-analysis skill 分析数据`、`Task3Text=使用 admin-expense-analysis skill 分析数据` |

两个 standalone components 共返回 8 项 formal definitions（3 boolean + 5 text），与六个 sets 的 24 项合计得到本节 32=24 boolean+8 text。` 5.执行卡片` 当前 subtree 只显示 `Title`、`Counter`、`Task3Text` wiring；`Task1Text`/`Task2Text` wiring 仍为 unresolved。当前三个 task fixture 使用 `Pending`、`Completed`、`Current`，这只是一组 resolved fixture，禁止当作合法流程顺序、状态转换或状态完备性证据。

##### 3.5.1.4 六个 SECTION 直接 INSTANCE 与四次 source-root exact probe

以下六项均为 SECTION 直接示例 INSTANCE，不计入 6 sets、13 set variants、2 standalone definitions 或 15 section-owned definitions：

| raw instance | instance ID | componentId / component key | 当前实例边界 |
|---|---|---|---|
| `1.设置页` | `22125:5865` | `22125:5954` / key=`04a966425a241278f90f32e93a08d70ee0d205f9` | current width=800；当前 instance `显示页签=true`；仅为示例 |
| `设置模块` | `22125:5968` | `22125:5935` / key=`8fb9084b398f502f2e7da9084ab9c873b45baa7e` | current width=800；仅为示例 |
| `3.技能卡片` | `22125:6021` | `22125:6022` / key=`d8edc65f15fa70bc7a66b3b7b24475383bd3e0fc` | resolved subtree 仅为 current fixture/reference evidence |
| `6.文件卡片` | `22125:6031` | `22125:6075` / key=`e26cdc30ed8f979c9331fe1eafd454776092b824` | resolved subtree 仅为 current fixture/reference evidence |
| raw 含一个前导 ASCII space 的 ` 7.输入框卡片` | `22125:6084` | `22125:6085` / key=`a8e41c0acfd6928678ac0aee5fe3d13b18e50e8d` | resolved subtree 仅为 current fixture/reference evidence |
| `4.加载卡片` | `22125:6090` | `22125:6091` / key=`cced53dbf177406101821bc0c95a7f3d0779c77e` | resolved subtree 仅为 current fixture/reference evidence |

对后四个 source component 的 exact probe 结果如下；`exact_source_root_probe_count=4`，且每一项的 `source_root_descendant_status=not-returned`：

| source root | exact probe 只返回的 identity/root 事实 | descendants / formal properties |
|---|---|---|
| `22125:6022` / key=`d8edc65f15fa70bc7a66b3b7b24475383bd3e0fc` | row；padding=16；gap=12；sizing=hug；fill=`rgba(255,255,255,.82)`；radius=24 | descendants 未返回；formal properties 未返回 |
| `22125:6075` / key=`e26cdc30ed8f979c9331fe1eafd454776092b824` | column；padding=8；gap=4；contextual designedWidth=400px；fill=`rgba(255,255,255,.82)`；radius=16 | descendants 未返回；formal properties 未返回 |
| `22125:6085` / key=`a8e41c0acfd6928678ac0aee5fe3d13b18e50e8d` | column；padding=12；gap=12；contextual designedWidth=400px；fill=`rgba(255,255,255,.82)`；1px `rgba(0,0,0,.08)` stroke；radius=16 | descendants 未返回；formal properties 未返回 |
| `22125:6091` / key=`cced53dbf177406101821bc0c95a7f3d0779c77e` | column；padding=12；gap=10；contextual designedWidth=400px；fill=`rgba(255,255,255,.82)`；radius=16 | descendants 未返回；formal properties 未返回 |

SECTION 中这些 INSTANCE 的 resolved subtree 可以登记为当前 fixture/reference evidence，但不能替代 source definition。实例中出现的标题、说明、文件名、日期、`合同管理`、`任务列表生成中...`、`admin-expense-analysis skill` 等均不得升格为产品默认数据、跨页面 fixture、API contract 或运行时状态语义。

##### 3.5.1.5 Identity、raw name 与同名冲突边界

必须逐字符保留 raw name：` 2.列表内容卡片`、` 5.执行卡片`、` 7.输入框卡片` 各含一个前导 ASCII space；禁止 trim、格式化或静默改名。以下同名节点拥有不同 ID/key，必须按 identity 独立保存，禁止 name-only merge、替换或去重：

| raw name | 本节直接 identity | registry/reference/dependency identity |
|---|---|---|
| `内容区` | set `22125:5796` / key=`a57d5184934c0861f696328a1dfa134678984ac3` | registry/reference set `22125:5883` / key=`fa7c9edecd5177a9138e1d3f7f55696613a7febf` |
| `分类标题` | component `22125:5848` / key=`80927fdab60521967a33d36df6e3123da4981a8c` | referenced component `22125:5866` / key=`63dba6059eeccc3df63a3b7e5c75eba18875665c` |
| `FileListItem` | set `22125:6121` / key=`0d0c0d0be0c60948de3dfc9a9569099c10d8bf0c` | dependency set `22125:6053` / key=`a1e8ba6cb19cb20a100103709e9aace0c4bdccba` |
| `More Button` | set `22125:6138` / key=`cb706eaec2b06a3e51ad1fd5189a9a1fa7089518` | dependency `22125:6048` / key=`2ac391928156ed61a7628c4c11a00c50a7f5e3a2` |
| `CategoryLink` | set `22125:6143` / key=`9a16f8f1b6b1d56a3b8af16d9eff505267082d88` | dependency `22125:6070` / key=`b6ccc4002cc301dbba604780720e08a7ec178c74` |

`Property 1` 必须保留为 raw axis；其语义仍未定义。`单行`/`双行` 是观测命名，不是已批准的内容模型；`CategoryLink` 的 `Style=Default|Filled` 也不是可自行解释的 hover/pressed/selected pointer state。

##### 3.5.1.6 Gate、blockers 与 runtime-ready 前置条件

当前统一状态为：

```yaml
read_method: figma-mcp-section-and-canvas-cross-read-plus-four-card-source-root-probes
evidence_level: section-enumerated-and-resolved-instance-observed
runtime_contract_readiness: blocked
direct_read_complete: false
immutable_version_id: pending
source_root_descendant_status: not-returned
lifecycle: catalogued_not_contract_complete
```

- 当前没有 immutable version、raw snapshot/hash、pagination/completeness proof、Variable/Style/Token bindings、complete reference/dependency closure、prototype reactions/transitions/events、loading/error/empty semantics、keyboard/focus/ARIA、responsive rules、四个 probe source component 的 descendants，或锁定 source 下可复现的 per-state tests。
- Variant enumeration 不等于 runtime switching，resolved instance subtree 不等于 source definition，formal defaults 不等于产品默认值或合法组合矩阵；禁止宣称 runtime 状态合同、full read、完整 descendants、`direct_read_complete`、`contract_complete` 或 verified。
- 升级到 runtime-ready 前，必须建立 exact set/component ID + raw axis/value mapping；未知 set/ID/key/axis/value/tuple 必须 fail closed，且必须保留前导空格与同名冲突，不得 fallback 到首项、相似名称或 name-only identity。
- 必须由设计源明确 legal combination matrix，并裁决 FileListItem Default 400×54、padding `8px 0` 与 Hover 368×54、padding `6px 0` 的几何差异；未经裁决禁止自动归一宽度或 padding。
- 必须将 event、data、status 与 pointer/selection/structure 分离建模，建立父子状态和 slot 的同步/失败动作，补齐 keyboard/focus/ARIA，并为每个合法状态与 unsupported 输入建立 locked-source 可复现测试。

内容卡片属于全局/组合来源，不加入 §3.6 基础控件统计。§3.6 必须继续保持 36 项有限 live-read + Skeleton 1 项仅注册待学习，即 36+1=37；本次合并不修改代码、README、Token、assets、配置或测试。

#### 3.5.2 AI 输入 / 输入框原子 SECTION 有限 live-read 证据

本节只登记 AI 输入家族本次 Canvas/SECTION 交叉读取、17 个 direct COMPONENT_SET root exact probes、3 个 direct standalone COMPONENT root exact probes，以及另行执行的 1 次 `问题引导` source-root probe 返回的有限事实。20 个 direct definition exact reads 均返回各自 **current-live exact-root subtree**；它们不与 source-root probe 合并计数，也不是 immutable/full-file/pagination-complete 证据。全家族生命周期保持 `catalogued_not_contract_complete`（归一为 `catalogued`）；当前证据等级仅为 `section-enumerated-and-all-direct-definition-roots-exact-cross-read-plus-resolved-instance-source-root-observed`，不是 immutable-version snapshot、full read、完整递归 descendants、asset/dependency closure、runtime behavior contract 或 verified 证据。

##### 3.5.2.1 Source、拓扑与计数边界

| 层级 | raw identity / node | Figma 链接 | 当前有限证据 |
|---|---|---|---|
| 文件 | file key=`HXHbn9VT1RgPuJ70JI4tQ5` | [设计系统文件](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-) | connector 读取 live file；未返回 immutable version ID |
| Canvas | type=`CANVAS`；raw=`对话输入框（ai）`；`9667:17533` | [打开 Canvas](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9667-17533) | 当前 Canvas response 可定位下列 SECTION；Canvas 不是任一组件定义 |
| 用户指定容器 | type=`SECTION`；raw=`输入框原子`；`22130:12743` | [打开输入框原子 SECTION](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-12743) | 5078×5684；white fill；1px `rgba(0,0,0,0.1)` stroke；当前返回枚举 22 个直接 child |

对 SECTION `22130:12743` 的精确读取与 Canvas `9667:17533` 当前返回中的同一 SECTION subtree 可交叉定位。当前 Canvas response 显示 SECTION 是 Canvas 的 direct child，但没有 pagination/completeness proof，故 `canvas_section_topology_status=current-direct-child-no-completeness-proof`。SECTION 是规范文档/展示容器，不是单个组件 API，也不能代表 Canvas 已完整读取。

| 对账项 | 本次返回计数 | 边界 |
|---|---:|---|
| SECTION 直接 child | 22 | `17 COMPONENT_SET + 3 standalone COMPONENT + 1 INSTANCE + 1 non-contract FRAME = 22` |
| 直接 COMPONENT_SET | 17 | 全部 set identity 与当前 variants 见 §3.5.2.2 |
| 17 sets 下 variant COMPONENT | 57 | 只对本次返回枚举负责，不证明 immutable source 完整 |
| 直接 standalone COMPONENT | 3 | 见 §3.5.2.3 |
| SECTION 直接示例 INSTANCE | 1 | 不计入 set、variant 或 standalone definition 数 |
| SECTION 直接 non-contract FRAME | 1 | raw=`Animated Grid 15×15`；[node `22130:13104`](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13104)；仅作 documentation scaffold，不计入组件定义、variant 或实例合同 |
| 当前 section-owned component definition nodes | 60 | `57 set variants + 3 standalone = 60` |
| 已返回 formal properties | 4 | 全部 boolean；`4 boolean + 0 text`；其他节点“未返回”不等于不存在 |
| direct definition exact-root probes | 20 | **17/17 COMPONENT_SET roots + 3/3 standalone COMPONENT roots**；每次均返回对应 current-live root subtree；不是 immutable/full-file/pagination-complete 证据 |
| exact source-root probe | 1 | `问题引导` source ID=`22130:13030`；与 20 个 definition probes 分开计数；只返回 root，descendants/formal properties 未返回 |
| 当前唯一 imageRef | 6 | 六个 Figma imageRef identifier 已逐项登记；未下载/export/hash，不构成 asset closure |

20 个 direct definition exact probe ID 与单独的 source-root probe 对账如下；前者严格等于 17 个 direct set roots 加 3 个 direct standalone roots，不得写成与 source probe 同类的“21 个 probes”。所有 20 个 definition root 与 1 个 source root 的可点击 URL 已注册在 front matter 的 `ai_input_spec_source.direct_definition_root_links[]` / `exact_source_root_probe_urls[]`；正文 ID、URL 与预期 type 必须逐项对账：

| probe 类别 | exact-read 对账 | 完整 probe IDs | 返回与边界 |
|---|---:|---|---|
| direct COMPONENT_SET roots | **17/17** | `22130:12744`、`22130:12768`、`22130:12773`、`22130:12880`、`22130:12991`、`22130:13017`、`22130:13024`、`22130:13034`、`22130:13039`、`22130:13079`、`22130:13330`、`22130:13342`、`22130:13357`、`22130:13402`、`22130:13415`、`22130:13425`、`22130:13456` | 每个 exact read 均返回对应 current-live exact-root subtree |
| direct standalone COMPONENT roots | **3/3** | `22130:12987`、`22130:12989`、`22130:13006` | 每个 exact read 均返回对应 current-live exact-root subtree |
| `问题引导` source root | **1** | `22130:13030` | 独立 source-root probe；root identity/geometry returned，descendants/formal properties `not-returned` |

上述 probe coverage 只提升 current-live direct-definition evidence；没有 immutable version、snapshot/hash 或 pagination/completeness proof，不能据此升级 lifecycle、runtime-ready、`contract_complete`、full read、asset closure、`direct_read_complete` 或 verified。

##### 3.5.2.2 十七个直接 COMPONENT_SET、57 个 raw variants 与 identity

17 个 set 与 §3.5.2.3 三个 standalone 的 canonical node URL 已逐项登记在 front matter `ai_input_spec_source.direct_definition_root_links[]`；下表 node ID 与 URL 列表必须一一对应，禁止按 raw name 重建链接。

下表逐 set 保存本次返回的 set ID/key 与全部 57 个 variant component ID/key。variant 名称只按 raw 返回登记；未返回 formal property 的 set 不得写成没有 property。

| # | raw set / set ID / key | 本次返回的全部 raw variant / component ID / key | 已返回 formal properties |
|---:|---|---|---|
| 1 | `功能`；`22130:12744`；key=`2db95dd8b8a8c357336717b00133930911a97da4` | `element=调用功能`：`22130:12745` / key=`1cb246fcb95c5d3821e5d16616927c76e05fb6a9`；`element=调用技能`：`22130:12747` / key=`e21d2356fb40db3baade82ff7e432b32d16cf916`；`element=element6`：`22130:12749` / key=`2788da2ea3e4999d0284372b234dc31f38fecd49`；`element=调用智能体`：`22130:12751` / key=`c33941993a7cbead97a94370c2079183ad335b22`；`element=引用知识库`：`22130:12753` / key=`2f24bb4c20184fbd9d1e5dc115b3f50b02709b9f`；`element=多层选择`：`22130:12755` / key=`f737cbc378b9a33bcdf15f6dcc68e62775cd1565` | 未返回（不等于不存在） |
| 2 | `功能选项`；`22130:12768`；key=`39a5963e175ac2c3f8ba755e0358778567dc6c28` | raw=`默认`：`22130:12769` / key=`10e49f73c147bfdd0380ca5e9de9f85e4e0f88d1`；raw=`悬停`：`22130:12771` / key=`f40568035373d71dad08aa3a176eff0000955cbf` | 未返回（不等于不存在） |
| 3 | `首页-对话内容`；`22130:12773`；key=`709ac52b155b0590c9017acfe3da352b84912b54` | raw=`上传图片`：`22130:12774` / key=`fd499783112308ec0feb6a3eb759d50e3427f295`；raw=`文本输入`：`22130:12790` / key=`fa6340b570cfa2d620dcedf8d22bdabdd2e21e7a`；raw=`上传文件`：`22130:12792` / key=`b4b12f917e2cfe8491758af41e0f9efb8a51d19d`；raw=`文件+功能+技能`：`22130:12807` / key=`da57f1f7072420fcc9ca3a063c63cc2bad3185f3`；raw=`调用功能`：`22130:12829` / key=`96c6153a87547eaf2ad9253cf3e09b97953be3a8`；raw=`上传超出`：`22130:12839` / key=`43a19fb8cd16e981394c90b46c7e15117aebcd52` | 未返回（不等于不存在） |
| 4 | `对话-对话内容`；`22130:12880`；key=`f608fb63df1b0abd47092120077ff8d4db826c3b` | raw=`上传图片`：`22130:12881` / key=`35865627d09e6d7e7b11dfa0df44eadefc987a2a`；raw=`文本输入`：`22130:12897` / key=`36d04f220f188930b1551537078731acb8f2f674`；raw=`上传文件`：`22130:12899` / key=`50dda00245dcc7423cec2a1c9bc0cd20db5c8848`；raw=`文件+功能+技能`：`22130:12914` / key=`58c8a568c6e474b826ff8fc58b7cdf4228760be2`；raw=`调用功能`：`22130:12938` / key=`0412ae493f71cdedac70ed8ccceec1c22542761d`；raw=`上传超出`：`22130:12946` / key=`7b9d4f6fb2d58d8f345decb7c11069872b291835` | 未返回（不等于不存在） |
| 5 | `功能切换`；`22130:12991`；key=`63853ae301bfc2f8dedaaa372346d81bdf9e85d6` | raw=`图标*16`：`22130:12992` / key=`b848034a4e0ca678c7db63c05d4892c1e35ec935`；raw=`问道阳明`：`22130:12996` / key=`17efee4f461ea1c461400648b3da09c1c9ee011e`；raw=`金钥财报`：`22130:13001` / key=`28bdfeccc392201b7ee144be238f477125c5c88b` | 未返回（不等于不存在） |
| 6 | `发送Button`；`22130:13017`；key=`a29fc6a7fbc8fe14e176f62059ef370f0745b4c4` | raw=`禁用`：`22130:13018` / key=`da3012077e21423bda2f565fc6f798699ed59f0f`；raw=`Variant3`：`22130:13020` / key=`74ece554fa1d0a9e71eaf866c74384c0e1660d94`；raw=`语音`：`22130:13022` / key=`082e2cf944f4db0c4b8066ccc1e6ac6a3aceebd4` | 未返回；`Variant3` 语义未知 |
| 7 | `操作选择`；`22130:13024`；key=`d6c76c8031f64ee4bd56195a21bf060853a526fa` | raw=`Default`：`22130:13025` / key=`4e68d779be61e2d355fb2b9ab6b5ab39b6661821`；raw=`hover`：`22130:13027` / key=`9da968470940cde72068cad31dee9e061f430567` | 未返回（不等于不存在） |
| 8 | `icon_button`；`22130:13034`；key=`4de60e1b0d8de01115474e9713c8e0d3deacc058` | raw=`默认`：`22130:13035` / key=`9875a1e42f6b599203a6f5ddd059fbce80480712`；raw=`悬停`：`22130:13037` / key=`db8222b6dcc29cba15b8bc91db4bd25ce0412159` | 未返回（不等于不存在） |
| 9 | `Slogan`；`22130:13039`；key=`e25be8e12c5717ba7b41f0cd9659c9dfecace52f` | `场景=智能体, 语言=中文`：`22130:13040` / key=`b6d9fa0ac9bc9f95f504c325e9020284e4b60ca4`；`场景=开发, 语言=中文`：`22130:13043` / key=`e2040ef9f9610da0b670e43d763bf528bb1cf063`；`场景=工作, 语言=中文`：`22130:13045` / key=`66c281cbd82ca1f8365677b1b8608d4d293cfa2c`；`场景=对话, 语言=中文`：`22130:13047` / key=`19498acb9d2cf4a752f32a37a411f41ed66ceea0`；`场景=对话, 语言=英文`：`22130:13049` / key=`bf39705dc98a285e15aacefc5a99a18a667b6722`；`场景=工作, 语言=英文`：`22130:13059` / key=`ab9a812c5902429d744a34f948f6c2e491149e68`；`场景=开发, 语言=英文`：`22130:13069` / key=`fcf1b026ac93a6087acb36c8d47177ffda1c7302` | 未返回；不得补造 `场景=智能体, 语言=英文` |
| 10 | `首页输入框`；`22130:13079`；key=`b55bc46c73bfb7a5f739f1d3019b7a69e45df820` | `Property 1=首页-默认`：`22130:13080` / key=`ff96a285ae59ff3664f3f8ad6984ee395f99ae75`；`Property 1=首页-选中`：`22130:13088` / key=`95df231878416e3cdc18a4e798c7967ea5ced6f1`；`Property 1=首页-输入`：`22130:13096` / key=`57c861ccf2673fd2521f404deac02e852409e915` | 未返回（不等于不存在） |
| 11 | `场景标题`；`22130:13330`；key=`eb9eea3766952de7f385ed46586155e714a0587e` | raw=`单个标题`：`22130:13331` / key=`c213b8e9722863401209565955854008c5ae295a`；raw=`带页签切换`：`22130:13335` / key=`4302c8ff87f0721e224d264a5a9bc2c55888f6e9` | 未返回（不等于不存在） |
| 12 | `推荐场景卡片`；`22130:13342`；key=`e178d87cb174680405cc845d076e0ada30962ff7` | raw=`场景推荐`：`22130:13343` / key=`89a0a260aae73ec4059a12251daa0aed128e2b39`；raw=`功能推荐`：`22130:13350` / key=`5a92fed43b10a025205b75c80456f6ba24087937` | 未返回（不等于不存在） |
| 13 | `推荐卡片`；`22130:13357`；key=`ac607ef8ade33207d0427a1e32d852e6d20e740f` | raw=`功能属性-灰底`：`22130:13358` / key=`f15d7a9d3e7fff9b4214c357a33703cba1700b92`；raw=`功能属性-白底`：`22130:13369` / key=`c399b9fd905b8a95e336204626929fb1cee9f43c`；raw=`场景属性-灰底`：`22130:13380` / key=`d9234f09b9395295e48001bb171fdacc2a59874d`；raw=`场景属性-白底`：`22130:13391` / key=`74e7959a334fdd3cfb3775a3bc80bfb4d5174d0f` | 未返回（不等于不存在） |
| 14 | local `Button`；`22130:13402`；key=`8b5335a102c2420790625d2b576d444c03c04f29` | raw=`Default`：`22130:13403` / key=`8aef866acd56a6468a6d29682adc40f2cf39275c`；raw=`hover`：`22130:13409` / key=`09eadec28f84c3ca4b145f45ee9c2b60ee39e20f` | 未返回（不等于不存在） |
| 15 | `tabs-glass`；`22130:13415`；key=`17ae52284711746501cd99093277842b88c49e45` | raw pair=`selected/Yes`：`22130:13416` / key=`d8287a2bd9c2e56821ce74fd4249487d3347fb97`；raw pair=`hover/No`：`22130:13419` / key=`e75b7495be74ddfc4b756b1161fa8737ec834aa5`；raw pair=`default/No`：`22130:13422` / key=`884435b054d04ce022193ffef0871a4e011c58a9` | boolean `txet=true`；boolean `icon=true`；必须保留 typo `txet` |
| 16 | raw 含一个前导 ASCII space 的 ` 1.首页-对话框`；`22130:13425`；key=`6e6e37b8eae8768e1c8cc7c34685036ac148b` | raw=`工作`：`22130:13426` / key=`1a7051858bb34ea8b85d66289093d451878e7f4f`；raw=`开发`：`22130:13441` / key=`034c7b1649a14170fb2277d221a7b51a6ea29ab8` | boolean `显示推荐卡=true` |
| 17 | raw 含一个前导 ASCII space 的 ` 2.对话页-对话框`；`22130:13456`；key=`54719b4bfd64cb3b54d38db23d6a99fbf3fdae15` | raw=`默认`：`22130:13457` / key=`c4ec027f041b68c2bf47faafa2591437c9d3a218`；raw=`输入`：`22130:13462` / key=`87493d761cfac7d6b3f16c44de12be14ff6fe6bf` | 未返回（不等于不存在） |

17 个 sets 当前共返回 57 个 variant COMPONENT。除 `tabs-glass` 的 2 项和 ` 1.首页-对话框` 的 1 项外，本次未从这些 sets 返回其他 formal properties；这只能写作 `connector-not-returned`，不得写成“没有”。

##### 3.5.2.3 三个 standalone COMPONENT 与 formal property 边界

| raw standalone component | node ID / key | 本次已返回 formal property / current-live exact-root wiring |
|---|---|---|
| `提示语-首页` | `22130:12987` / key=`1d8795f31764ad96b3f358139fa6a71f44dffeb3` | formal property 未返回（不等于不存在）；exact root subtree 已返回 |
| `提示语-对话页` | `22130:12989` / key=`afbf16c1f3f07fb39cdeb07f88f2a1cc17f7128a` | formal property 未返回（不等于不存在）；exact root subtree 已返回 |
| `对话操作` | `22130:13006` / key=`cc6aa304cdf6c629e1a26611762a8b79a431be7e` | boolean `显示页签=false`；当前 exact root subtree 确认该 property 绑定 **Tabs INSTANCE visibility** |

三个 standalone 与 §3.5.2.2 的 57 个 set variants 合计 **60 个 section-owned component definition nodes**。本次 formal property 总计严格为 **4=4 boolean+0 text**：`对话操作.显示页签=false`、`tabs-glass.txet=true`、`tabs-glass.icon=true`、` 1.首页-对话框.显示推荐卡=true`；不能把其他未返回项写成不存在。

20 次 direct-definition exact reads 在当前节点树中确认四条 formal visibility wiring：

| owner / 当前值 | current-live exact-root binding target | 证据边界 |
|---|---|---|
| `对话操作.显示页签=false` | Tabs INSTANCE visibility | 仅当前 standalone root subtree |
| `tabs-glass.txet=true` | TEXT visibility | 必须保留 raw typo `txet`；仅当前 set root subtree |
| `tabs-glass.icon=true` | PieChart INSTANCE visibility | 仅当前 set root subtree |
| ` 1.首页-对话框.显示推荐卡=true` | 推荐场景卡片 INSTANCE visibility | 必须保留 set raw name 的前导 ASCII space；仅当前 set root subtree |

这些 binding 是 formal wiring 的 current-live node-tree observation，不是 production default、合法 boolean 组合、runtime transition、事件状态机或完整 binding closure；当前 `true/false` 值不得从定义位置或 fixture 位置外推为产品默认值。

##### 3.5.2.4 `问题引导` 直接 INSTANCE 与 source-root probe

SECTION 直接 INSTANCE raw=`问题引导` `22130:13029` 指向 componentId=`22130:13030`、key=`51e85f571b9e1fbdc3a979a26307047ed116b797`；当前 resolved fixture=`营销海报生成`。该 INSTANCE 不计入 17 sets、57 variants、3 standalone 或 60 definitions。

`exact_source_root_probe_count=1`，与 §3.5.2.1 的 `direct_definition_exact_root_probe_count=20` 分开计数。对 source `22130:13030` 的 exact probe 只返回 root：row、padding=`0px 16px`、contextual `designedHeight=36px`、fill=`rgba(0,0,0,.04)`、radius=32；descendants 与 formal properties 均为 `not-returned`。实例 resolved subtree 只能作为 current fixture/reference evidence，不能替代 source definition，也不能证明 source API、依赖闭包或交互。不得把这 1 次 source-root probe 与 20 次 direct-definition probes 合并表述为 21 个同类 probe。

##### 3.5.2.5 Identity、raw name、fixture 与资产边界

- SECTION 是文档容器，不是单一组件；Canvas、SECTION、17 sets、3 standalone、INSTANCE 与 source component 必须按 type/ID/key 独立保存。
- 必须逐字符保留两个 set raw name 的一个前导 ASCII space：` 1.首页-对话框`、` 2.对话页-对话框`；也必须保留 nested icon raw=`arrow ` 的尾随 ASCII space。
- formal property raw typo `txet` 必须原样保留，不得改成 `text`。raw `Variant3` 语义未知，禁止猜成 enabled/sendable/可发送状态。
- `Slogan` 当前只有表中 7 个 tuple，不是完整 `场景 × 语言` 笛卡尔积；尤其不得补造 `场景=智能体, 语言=英文`。
- `首页-对话内容` 与 `对话-对话内容` 虽共享 `上传图片/文本输入/上传文件/文件+功能+技能/调用功能/上传超出` labels，但 set、component ID 与 key 全部独立，禁止按 variant label 合并。
- local `Button` `22130:13402` 不得与 `22125:3700` 或 §3.6 基础控件 Button `16375:18601` 按名称合并。direct `功能` set `22130:12744` 也不得与 referenced `22130:8871` 按名称合并。
- 本节出现的 slogan、提示语、文件、技能、智能体、功能、推荐卡、`营销海报生成` 与所有图片都只是 current fixture/example，不是 production defaults、业务枚举、数据/API contract 或跨页面规则。
- 当前返回含 6 个唯一 **Figma `imageRef` identifier**：`17d191423f23244e5dced613205855f762f78d4e`、`fdb8db15038ce2277f08deb1451bae7149b40150`、`8963a5beb1d3b082ca51e0381a19537811a5e974`、`880c21d5f4ec65c7a05284b030c4b72e1462cf2a`、`1c444169943c32827aabc78f8ab6645053a5c083`、`a91353ad96f1aff5e02ec119276e8cc10ed8f835`。这些值是 Figma imageRef，不是 SHA/content hash；其中 `8963a5beb1d3b082ca51e0381a19537811a5e974` 当前返回 `needsCropping=true` 与 crop transform，其余五项不得因未特别标注而推断 `needsCropping=false`。本次没有下载、export 或计算 hash，故 `embedded_unique_image_ref_count=6`、`image_export_and_hash_status=not-exported` 不变，不得声明 asset closure、asset-bound 或可投产资产。

##### 3.5.2.6 Gate、blockers 与禁止映射

当前统一状态为：

```yaml
read_method: figma-mcp-canvas-and-section-cross-read-plus-17-set-root-exact-probes-plus-3-standalone-root-exact-probes-plus-1-problem-guidance-source-root-probe
evidence_level: section-enumerated-and-all-direct-definition-roots-exact-cross-read-plus-resolved-instance-source-root-observed
direct_definition_exact_root_probe_count: 20
direct_definition_exact_root_probe_breakdown: 17-set-roots-plus-3-standalone-roots
exact_source_root_probe_count: 1
runtime_contract_readiness: blocked
direct_read_complete: false
immutable_version_id: pending
source_root_descendant_status: not-returned
image_export_and_hash_status: not-exported
lifecycle: catalogued_not_contract_complete
```

Variant enumeration 与 20 个 current-live exact-root subtree returns 都不等于 runtime behavior、immutable/full-file read 或 pagination completeness。升级前仍缺：immutable version；raw snapshot/hash；pagination/completeness proof；Variable/Style/Token bindings 及除 §3.5.2.3 四条 current wiring 外的完整 property/visibility binding closure；dependency/reference/asset closure；prototype/event/state transitions；IME/composition/paste/multiline/Enter-vs-newline、`@` mention 等输入合同；upload limit/type/progress/error/remove/retry/drop；voice permission/recording/error；send mapping；keyboard/focus/ARIA 等 a11y 合同；responsive/legal matrix；以及锁定 source 下的可复现 tests。20 个 exact definition probes 只提升 current-live direct-definition evidence，不得升级 lifecycle、runtime-ready、`contract_complete`、full read、asset closure、`direct_read_complete` 或 verified。

在上述缺口关闭前必须保持 `runtime_contract_readiness=blocked`、`direct_read_complete=false`。特别禁止：

1. 把 raw `Variant3` 猜成可发送态，或从位置/视觉推导 enabled/disabled。
2. 把 raw `selected`、`input`、`hover`、`voice` 或中文同义 label 自动映射为产品状态、事件或合法 transition。
3. 从任何历史页面、旧实现、README、磁盘资产、聊天上下文或缓存结果反向补齐本家族的 Enter、Shift+Enter、send、upload、voice、mention 或 error contract。
4. 把 formal boolean 当前值、resolved fixture、variant 数量或相同名称当作完整 public API、合法组合矩阵或 production default。

##### 3.5.2.7 Direct-definition exact-root 结构与几何观测（current-live only）

下表汇总 20 个 direct definition exact reads 中可复核的结构、几何与 appearance 观测；它补充而不取代 §3.5.2.2–§3.5.2.3 的 identity 表。所有值仅适用于本次返回的 current-live root subtree/current fixture，不是 immutable snapshot、Token binding、production default、runtime transition、responsive rule、upload/input/voice contract、dependency closure 或实现许可。

| direct root | current-live exact-root 结构/几何观测 | 禁止外推 |
|---|---|---|
| `首页输入框` `22130:13079` | 3 个 variants 均 width=714；outer column padding=`2px 0px 4px 2px`、gap=4、radius=30。default fill=`rgba(0,0,0,.04)`；selected/input fill=`rgba(109,128,255,.06)`。inner frame width=710、padding=`16px 10px 10px`、gap=12、white、shadow=`0px 2px 12px rgba(0,0,0,.03)`、radius=28；提示/内容区与 action 区的 contextual width 均为 690 | 只登记 observed geometry/appearance；raw `Property 1` 仍不是已定义 runtime axis |
| raw 含一个前导 ASCII space 的 ` 2.对话页-对话框` `22130:13456` | 2 个 variants 均 width=800；inner white frame padding=`16px 10px 10px`、gap=12、radius=28。raw=`默认` 为 1px `rgba(0,0,0,.06)` stroke；raw=`输入` 为 1px `rgba(0,0,0,.08)` stroke + shadow-small=`0px 3px 6px rgba(0,0,0,.04)` | 不能由 `输入` 名称、stroke 或 shadow 推导 focus contract |
| `首页-对话内容` `22130:12773` 与 `对话-对话内容` `22130:12880` | 两套独立 roots/IDs 的 exact root 均返回同构 6 labels：`上传图片`、`文本输入`、`上传文件`、`文件+功能+技能`、`调用功能`、`上传超出`。常规内容 width=690；`上传超出` width=684，内部展示 strip width=894，并有 x=598、width=86 的渐变遮罩；图片缩略 frame=56×56，文件 fixture group=170×48 | 只登记 current fixture/layout；不得合并两套 identity，也不得推导 upload limit、类型或溢出行为 |
| `发送Button` `22130:13017` | 3 个 variants 均 36×36、radius=28；`禁用` fill=`rgba(0,0,0,.03)`；`Variant3` 与 `语音` fill=`#495DFF`；语音图标=16×16 | 颜色相同不能证明 `Variant3=enabled/sendable`，也不定义 send/voice 状态机 |
| `icon_button` `22130:13034` | 两态均 36×36；default radius=28；hover fill=`rgba(0,0,0,.03)`、radius=999 | 保留 28/999 差异，禁止自动归一 |
| `对话操作` `22130:13006` | contextual `designedWidth=690px`；row；gap=20。左侧 fill 区包含可选 Tabs、plus、At；右侧包含 external Button/LightningCharge、Voice、`发送Button` | 仅登记当前 nested dependency/reference 观测，不称 dependency closure；`显示页签=false` wiring 边界见 §3.5.2.3 |
| `功能选项` `22130:12768` | default 使用 ChevronDown，hover 使用 ChevronUp；hover nested Button 返回 40px content height，而 set wrapper 仍为 hug | 该几何为待裁决观测；禁止直接写成 runtime dropdown behavior |
| `操作选择` `22130:13024` | default current fixture=`选择智能体` + ChevronRight；hover current fixture=`选择智能体` + ChevronDown | 仅为 label/variant observation，不定义选择、展开或事件语义 |
| `功能切换` `22130:12991` | variants height=36、padding=`8px 12px`、fill=`rgba(255,255,255,.64)`、1px `rgba(0,0,0,.06)` stroke、radius=999；`问道阳明` 使用 cropped imageRef fixture | 只登记 current fixture；imageRef/export 边界见 §3.5.2.5 |
| `tabs-glass` `22130:13415` | 3 个 variants height=32、padding=`0px 16px`、gap=4、radius=999；selected fill=`rgba(255,255,255,.82)`，hover fill=`rgba(255,255,255,.46)`，default 没有 returned fill | 保留 raw typo `txet`；“未返回 fill”不得改写为透明 Token 或状态合同 |
| `Slogan` `22130:13039` | current inventory 为 7 tuples。中文主要 width=714、Songti SC Bold 700/40；中文智能体 tuple 含 80×80 icon 且文字 centered。英文 width=710/714、PingFang SC Regular 400/28、line-height=48 | tuple 非笛卡尔积；仍缺 `场景=智能体, 语言=英文`，禁止补造 |
| `场景标题` `22130:13330`、`推荐场景卡片` `22130:13342`、`推荐卡片` `22130:13357` | 场景标题 variants width=714；推荐场景卡片 variants width=714；功能推荐卡 width=227.33、padding=12、radius=20；场景推荐卡 width=230、padding=8、radius=20；场景图片区=214×120 | 都只是 current recommendation fixture/layout，不得泛化为跨页面卡片、内容或数据合同 |

上述 observed values 保留 variant 间差异与 current fixture 形态，不执行归一、补全或状态语义映射。尤其是 `功能选项` 的 40px nested content、`icon_button` 的 28/999 radius、`发送Button.Variant3` 的颜色、两套内容 roots 的同构 labels 与 Slogan 缺失 tuple，都继续作为待裁决或 identity 边界，而不是 runtime-ready 证据。

AI 输入属于全局/组合来源，不加入 §3.6 基础控件注册表；§3.6 继续保持 36 项有限 live-read + Skeleton 1 项仅注册待学习，即 36+1=37。本节只更新规范登记，不修改实现、README、Token、assets、配置或测试。

### 3.6 基础控件实时 Figma 根节点注册表

下表本身是当前确认的实时 Figma 根节点注册表，**只登记控件名称与 node ID 可定位**；3.6.1–3.6.36 仅记录有限的 connector live-read 观测，均不构成深读或完整组件合同。除这三十六节明确列出的观测外，未对表中条目的组件定义、variant/property、状态、交互、响应式、资产或 a11y 做深读。所有条目的生命周期均为兼容显示状态 `catalogued_not_contract_complete`（归一为第 1.3 节的 `catalogued`），不得据此声称合同完整或可实现。

**A. 已完成有限 live-read（36 项，按 §3.6.1–§3.6.36 顺序）**

| 控件名称 | node ID | Figma 链接 | 学习证据 | 生命周期 |
|---|---|---|---|---|
| Button | `16375:18601` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=16375-18601) | §3.6.1 | `catalogued_not_contract_complete` |
| Checkbox | `22031:12715` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22031-12715) | §3.6.2 | `catalogued_not_contract_complete` |
| Colorpicker | `22035:1740` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22035-1740) | §3.6.3 | `catalogued_not_contract_complete` |
| DatePicker | `19818:6054` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=19818-6054) | §3.6.4 | `catalogued_not_contract_complete` |
| Divider | `14654:142` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=14654-142) | §3.6.5 | `catalogued_not_contract_complete` |
| Drawer | `18848:9085` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=18848-9085) | §3.6.6 | `catalogued_not_contract_complete` |
| Form | `18325:432` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=18325-432) | §3.6.7 | `catalogued_not_contract_complete` |
| Dropdown | `16980:2989` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=16980-2989) | §3.6.8 | `catalogued_not_contract_complete` |
| Empty | `18405:8760` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=18405-8760) | §3.6.9 | `catalogued_not_contract_complete` |
| Image Preview | `22064:1923` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22064-1923) | §3.6.10 | `catalogued_not_contract_complete` |
| Indicators | `14138:146` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=14138-146) | §3.6.11 | `catalogued_not_contract_complete` |
| Input | `9640:63861` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9640-63861) | §3.6.12 | `catalogued_not_contract_complete` |
| Number Stepper | `16338:4993` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=16338-4993) | §3.6.13 | `catalogued_not_contract_complete` |
| Popover | `17290:17715` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=17290-17715) | §3.6.14 | `catalogued_not_contract_complete` |
| Radio | `9659:15916` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9659-15916) | §3.6.15 | `catalogued_not_contract_complete` |
| RangePicker | `9659:15915` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9659-15915) | §3.6.16 | `catalogued_not_contract_complete` |
| ScrollArea | `9754:1315` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9754-1315) | §3.6.17 | `catalogued_not_contract_complete` |
| Search | `9640:64731` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9640-64731) | §3.6.18 | `catalogued_not_contract_complete` |
| Select | `13940:4020` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=13940-4020) | §3.6.19 | `catalogued_not_contract_complete` |
| Slider | `16671:21811` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=16671-21811) | §3.6.20 | `catalogued_not_contract_complete` |
| Spin | `14649:18225` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=14649-18225) | §3.6.21 | `catalogued_not_contract_complete` |
| Steps | `9659:17975` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9659-17975) | §3.6.22 | `catalogued_not_contract_complete` |
| Switch | `9640:66921` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9640-66921) | §3.6.23 | `catalogued_not_contract_complete` |
| Table | `9640:65189` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9640-65189) | §3.6.24 | `catalogued_not_contract_complete` |
| Dialog | `9640:64241` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9640-64241) | §3.6.25 | `catalogued_not_contract_complete` |
| Tabs | `9640:64818` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9640-64818) | §3.6.26 | `catalogued_not_contract_complete` |
| Tag | `9640:63706` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9640-63706) | §3.6.27 | `catalogued_not_contract_complete` |
| Textarea | `15443:3939` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=15443-3939) | §3.6.28 | `catalogued_not_contract_complete` |
| Time Picker | `9659:15034` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9659-15034) | §3.6.29 | `catalogued_not_contract_complete` |
| Toast | `14657:16548` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=14657-16548) | §3.6.30 | `catalogued_not_contract_complete` |
| Tooltip | `12299:14090` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=12299-14090) | §3.6.31 | `catalogued_not_contract_complete` |
| Progress | `17649:6904` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=17649-6904) | §3.6.32 | `catalogued_not_contract_complete` |
| Alert | `9640:63959` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9640-63959) | §3.6.33 | `catalogued_not_contract_complete` |
| Breadcrumb | `12456:15731` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=12456-15731) | §3.6.34 | `catalogued_not_contract_complete` |
| Pagination | `12456:13325` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=12456-13325) | §3.6.35 | `catalogued_not_contract_complete` |
| Avatar | `9640:65021` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9640-65021) | §3.6.36 | `catalogued_not_contract_complete` |

**B. 仅注册待学习（1 项）**

| 控件名称 | node ID | Figma 链接 | 学习证据 | 生命周期 |
|---|---|---|---|---|
| Skeleton | `9659:15003` | [打开 Figma](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=9659-15003) | 仅注册；未建立 §3.6.x live-read 主章节 | `catalogued_not_contract_complete` |

**链接语义审计：**以上 37/37 个 URL 都是 `catalog_entry`，用于进入对应规范页或目录，不自动等于可直接生成的组件定义根。当前直链目标中只有 Button、Divider、Drawer、Form、Indicators 5 项本身是 `COMPONENT_SET`；其余 32 项为 PAGE/FRAME/SECTION 包装入口，必须由各自 §3.6.x 证据继续解析并在正式 Component Contract 的 `figma.source_roots[]` 登记实际 COMPONENT_SET/COMPONENT 直链。Skeleton 当前仅有 PAGE 入口，因此是唯一必须由用户补充 exact definition root、或明确确认该 PAGE 内实际定义节点的基础控件；其他 31 项已在正文保存已观察到的 source ID，但在 materialize 合同时仍须把这些 ID 转成机器 URL 并完成 closure，不能只消费本表链接。

#### 3.6.1 Button live-read 观测证据（非完整组件合同）

本节只记录可复核的 live-read 观测，不构成 Button 组件合同：

- **Source 与读取方式**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；component set id=`16375:18601`；key=`c6d1f29cbee5591dd4de2f5795f42335dc692544`；name=`Button`；description 为空。读取方式仅为 connector `depth=1` live read，不是 immutable version read，也不是 full recursive read。
- **Component-set 容器**：观测尺寸为 6031×4160px，layout mode=`none`，stroke=`#7B61FF` / 2px / dash `8,8` / radius 5px。这些仅是组件集容器事实，不得作为 Button 实例的视觉合同。
- **`propertyDefinitions`**：Figma 返回内容仅有 `Icon Start` 与 `Icon End`；两者均为 boolean，`default=false`。
- **Icon exposure 生成硬规则**：`default=false` 只能作为组件定义的当前默认观测，不能自动决定所有页面实例。正式 Button contract 必须逐一保存 `Icon Start/Icon End` 到具体 child visibility 的 wiring、每个 legal variant tuple 的允许值、开启后的 exact `lingee-icon export_name`、可选 Figma instance evidence、顺序、gap/padding/尺寸变化和 state baseline。`Content=Icon Only` 与 `Icon Start/Icon End` 的关系未裁决前不得互相推导；生成器不得为了匹配示例自行打开图标。未知或非法组合必须 fail closed。
- **直接子 `COMPONENT` 名称中的 variant 轴和值**：`Type=Primary|Filled|Default|Text|Link-plain|Link`；`Size=Small|Default|Medium|Large`；`State=Default|Hover|Focused|Pressed|Disabled`；`Content=Basic|Icon Only`；`Ghost=True|False`；`Danger=True|False`；`Shape=Default|Round`。这些轴只来自直接组件名称，不是 `propertyDefinitions`；不得据此声明完整笛卡尔积或 variant 总数。
- **几何观测**：`Small` / `Default` / `Medium` / `Large` 的固定高度分别为 24 / 28 / 32 / 36px；`Icon Only` 同尺寸分别为 24 / 28 / 32 / 36px 方形；`Shape=Default` 观测 radius 8px，`Shape=Round` 观测 radius 999px；`Basic` 水平 padding 观测到 8px 或 12px，但组合映射尚未对账，不能形成实现规则。
- **Evidence boundary / blockers**：connector 未提供 immutable version；raw chunks、snapshot、IR、hash、source-map、Completeness Report；Variable / Style binding；递归 instance / override / reference closure；prototype / interaction、responsive、a11y；图标 identity / export / hash / license。因此 `direct_read_complete=false`，Button 状态保持 `catalogued_not_contract_complete`（归一 `catalogued`），不升级为 `extracted`。
- **禁止推断**：不得从上述观测推断 exposed API、交互状态机、响应式、a11y、Token 绑定、图标来源或组合完整性。

#### 3.6.2 Checkbox live-read 观测证据（非完整组件合同）

本节只记录用户指定 root 的可复核 connector live node read 观测，不构成 Checkbox 组件合同：

- **Source/root 与读取边界**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；用户 root id=`22031:12715`，节点类型=`SECTION`。本次仅为 connector live node read，不是 immutable-version read，也不得称为 full recursive/completeness-proven read。root 返回白色 fill 与 `rgba(0,0,0,0.1)` / 1px stroke；未返回可用于合同的 Section dimensions，不得推断尺寸。
- **直接结构**：component set `Checkbox Icons` id=`12299:13942`、key=`b2832e0f94464421a391117474d2735abb896e1a`、370×252px；component set 原始拼写 `Checkboxs` id=`12299:13970`、key=`4ac95bbf9ebdaee721928ba14a9a0c64bdc5ebec`、370×252px，必须保留原始拼写并标记 `canonical naming pending`，禁止静默改名；component `Checkbox Group` id=`13737:9227`、key=`0af49d30585490b67c710c4841eec15738c4114e`，布局为 row/center、gap 20px、height 22px，当前 specimen 含 5 个实例。该 5 仅为示例 fixture，不是 group cardinality 或 API。
- **`propertyDefinitions`**：本次返回仅在 `Checkboxs` set 上看到 `value`，type=`text`、default=`Option`；`Checkbox Icons` set 未返回 variant `propertyDefinitions`。下列 variant 轴只能称为直接子 `COMPONENT` 原始名称观测，不得称为 `propertyDefinitions`。
- **`Checkbox Icons` 直接组件名称观测**：当前 response 列出 12 个直接 `COMPONENT`，名称轴为 `element=unselected|selected|intermediate`、`State=Default|Hover|Pressed|Disabled`。可记录本次 response 观测到这 12 个排列，但不得据此声称 immutable source 中的完整 variant 总数或笛卡尔积。
- **`Checkboxs` sparse observed set**：当前 response 列出 12 个直接 `COMPONENT`；原始名称暴露 `size=default`、`checked=off|on`、`indeterminate=off|on`、`border=off`、`state=default|hover|Pressed`（保留大小写）、`disabled=off|on`。这是 sparse observed set：`indeterminate=on` 只在 `checked=on` 中出现，`disabled=on` 只与 `state=default` 出现，`size` 与 `border` 各只观测到一个值；不得补齐缺失组合或推断其合法性。
- **布局与文本**：`Checkboxs` 行为 row、center、gap 8px、hug；图标为 16×16px；文本引用 component property `value`，默认 `Option`。文本样式为 PingFang SC Regular 400、14px/22px，默认 fill=`rgba(0,0,0,0.82)`；disabled 文本返回 fill=`rgba(0,0,0,0.28)` 且 opacity=0.5。禁止自行合成最终 alpha 或声明 Token binding。
- **图标视觉观测**：图标为 16×16px、radius 4px；unselected/default 的本地矩形 stroke=`rgba(0,0,0,0.12)`、约 1.33px；selected/intermediate 的 default fill=`#495DFF`、hover fill=`#6D80FF` 且 opacity=0.8、Pressed fill=`#3B47F2`、Disabled fill=`#B7C1FF`；白色 check/minus mark stroke=1.5px。这些均为 resolved live values，不证明 Variable/Style Token binding。
- **引用/命名缺口**：返回中还出现同名 root 外 `Checkbox Icons` component set id=`11948:1848`、key=`fa62950a9d0d2c6a38e93ab96ab53182b2e6a514`，其 component id=`11948:1849`、key=`ee0eeeedb17b0a36e6217043ae7bccbe56960f68` 被部分 unselected 状态引用。两个同名 set 必须按 ID/key 区分，禁止 name-only lookup；引用闭包尚未完成，不能把这些状态视为完全本地解析。
- **Evidence boundary / 合同缺口**：connector 未提供 immutable version；raw chunks、snapshot、IR、hash、source-map、Completeness Report；Variable/Style binding；完整 instance/override/reference closure；prototype/interaction/transitions；keyboard/focus；ARIA/a11y；responsive；资产 export/hash/license。尤其未观测 focus 状态；`checked`/`indeterminate` 只能视为视觉名称，不能推断状态机或语义。因此 `direct_read_complete=false`，Checkbox 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不升级为 `extracted`。

#### 3.6.3 ColorPicker（注册名 Colorpicker）live-read 观测证据（非完整组件合同）

本节只记录用户指定 root 的可复核 connector live node read 观测，不构成 ColorPicker/Colorpicker 组件合同：

- **Source/root 与读取边界**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；用户 root id=`22035:1740`，节点类型=`FRAME`；root layout=row、gap=42px，horizontal/vertical 均为 hug。当前 response 未返回 root dimensions。本次仅为 connector live node read，不是 immutable-version/full-recursive/completeness-proven read。
- **两个直接子节点与 scaffold 边界**：a) component set 原始名 `ColorPicker /Trigger`，id=`18501:10997`、key=`c7fb12641851956495435887a1851dbf9d452aaa`、456×225px；b) component 原始名 `ColorPicker`，id=`18687:932`、key=`6cff725f4772099f259ecc167654c8bfa4650c10`、width 288px、height hug。root 只是规范页组合 scaffold，42px gap 不是 ColorPicker 产品内间距。
- **真实 `propertyDefinitions`**：Trigger set 返回 `Show Text`（boolean，default=`true`）、`Text`（text，default=`#1677FF`）、`Show Icon`（boolean，default=`true`）；ColorPicker component 返回 `Gradient`（boolean，default=`true`）、`Presets`（boolean，default=`true`）。Variant `State`/`Size` 只能称为直接组件名称观测，不得称为 `propertyDefinitions`；`Gradient`/`Presets` 只证明 visibility reference/default，不足以推断行为或公开 API 语义。
- **Trigger 名称/数量观测**：当前 response 列出 9 个直接 `COMPONENT`，原始名称轴为 `State=Default|Disabled|Active`、`Size=Small|medium|large`，必须保留 Size 大小写不一致。本次 response 恰好出现 3×3，但不得声称 immutable source 完整 variant 总数。
- **Trigger geometry/resolved values**：`Small`=111×32px、`medium`=119×40px、`large`=127×48px；`Color Block`=16/24/32px；row padding=8px、radius=12px；Default/Active gap=12px，Disabled gap=8px。Default 为白底、`rgba(0,0,0,0.08)` 1px border；Active border=`#495DFF` 1px；Disabled bg=`rgba(0,0,0,0.03)`。默认文本为 SF Pro Text Regular 400、14/22，fill=`rgba(0,0,0,0.82)`；Disabled text fill=`rgba(0,0,0,0.28)`。`Color Block` fill=`#495DFF`、border=`rgba(0,0,0,0.06)` 1px、radius=4px。Default/Disabled 使用 `ChevronDown` id=`9704:20842`、key=`fbb332d9134078158c2aef5c0a0bc688cbd14de4`；Active 使用 `ChevronUp` id=`9704:20841`、key=`cd05805145a3e8bafc2ea9b0dde3aece32d80a99`；均为 14×14px。这些只记录视觉状态，不推断点击/open-close 状态机。
- **面板 shell**：`ColorPicker` component 为 column、padding=16px、gap=12px、width=288px/height hug，白底、`rgba(0,0,0,0.06)` 1px border、radius=20px、shadow=`0 4px 12px rgba(0,0,0,0.08)`。这是 resolved live geometry，不证明 Token/Style binding 或 overlay positioning。
- **面板内容观测**：`Gradient=true` 的当前 specimen 返回“单色/渐变”Tabs 与 8px gradient slider；主 palette 高 160px，使用白→透明、透明→黑叠层及 base `#0083D4`；hue 与 alpha sliders 均高 8px；preview=28×28px、radius=8px；格式显示 `HEX`，颜色输入高 32px，透明度输入 70×32px 并显示 `35%`。`Presets=true` 的当前 specimen 显示 `Recommended` 的多枚 18×18px preset（wrap gap=6px 8px）和 `Recent`=`Empty`。这些都是当前 fixture，不是支持格式集合、默认模式、最近记录持久化、preset API 或输入验证合同；不得写完整 preset 数量。
- **示例值不一致边界**：Trigger/property 和输入文本显示 `#1677FF`，`Color Block`/preview 使用 `#495DFF`，alpha slider 终点出现 `#2970FF`，palette base 为 `#0083D4`。它们只能视为当前 scaffold/fixture 的独立 resolved values，不能合并成一个“当前选中色”、不能据值反推 Token 或自行选择其中之一。
- **命名/字体/引用边界**：保留 raw name 的空格与大小写差异，如 `ColorPicker /Trigger`、前导空格的 ` ColorPicker / Palette`、尾随空格的 `ColorPicker/Color Select `；注册名 `Colorpicker` 与组件名 `ColorPicker` 的 canonical mapping pending，禁止静默重命名。当前 response 同时出现 SF Pro Text、PingFang SC、Noto Sans SC；不得归一字体或声称 binding/license。嵌套引用包含 Tabs、input、Divider、Text、sliders、preset、Chevron 等 root 外组件；checkerboard imageRef=`eae313a48883a46e7a2a60ee806e73a8052191be` 需要原始尺寸。引用闭包和图片资产均未完成，不下载/修改资产。
- **Evidence boundary/专用缺口**：缺 immutable version、raw chunks/snapshot/IR/hash/source-map/Completeness Report、Variable/Style bindings、完整 instance/main/override/reference closure、image bytes/dimensions/export/hash/license、prototype/reactions；也缺 open/close/focus return、slider drag/keyboard、color-space/gamut/serialization、HEX/alpha parsing/validation、gradient-stop behavior、clear/preset/recent semantics、overlay collision/responsive、ARIA/a11y。故 `direct_read_complete=false`，Colorpicker 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不升级 `extracted`。

#### 3.6.4 DatePicker live-read 观测证据（非完整组件合同）

本节只记录用户指定 root 的可复核 connector live node read 观测，不构成 DatePicker 组件合同：

- **Source/root 与读取边界**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；用户 root id=`19818:6054`，节点类型=`FRAME`，layout=row、gap=166px，horizontal/vertical 均为 hug；当前 response 未返回 root dimensions。本次仅为 connector live node read，不是 immutable-version、full-recursive 或 completeness-proven read。
- **两个直接 `COMPONENT_SET` 与 scaffold 边界**：`Date Picker` id=`19547:9696`、key=`870e17a2df01a32d4e95990a8e75fd443c42e253`、332×2114px；`Multi Select - Weekdays、Days` id=`19547:9671`、key=`d8fb592b3ce29c0509181e26b9b2c6c1c702ced7`、337×1030px。二者 layout=`none`，均为紫色 dashed 规范容器；root 的 166px gap 及容器尺寸/描边都是 scaffold，不是产品布局。
- **`propertyDefinitions` 与直接名称观测边界**：当前 response 未给上述两个直接 set 返回 `propertyDefinitions`。`Date Picker` 当前列出 10 个直接 `COMPONENT` 名称：`State=Default Unselected`、`State=Validation`、`State=Selected Hover`、`State=Selected`、`State=Selected Disabled`、`State=Unselected Disabled`、`State=Unselected Hover`、`State=Dropdown Select`、`State=Re-select`、`State=Date Disabled`；`Multi Select - Weekdays、Days` 当前列出 6 个：`Property 1=Default Unselected`、`Property 1=Unselected Hover`、`Property 1=Multi Select - Weekdays`、`Property 1=Selected`、`Property 1=Selected Hover`、`Property 1=Multi Select - Days`。这些只来自名称，必须保留 `Property 1`；不得据此声称 `propertyDefinitions`、immutable source 中的完整总数或笛卡尔积。
- **单日期输入视觉 fixture**：观测 height=40px、padding=`8px 12px`、gap=8px、radius=12px；默认 border=`rgba(0,0,0,0.08)` / 1px，hover/open specimen border=`#495DFF` / 1px，disabled bg=`rgba(0,0,0,0.03)`。placeholder=`年/月/日`、selected fixture=`2026/04/12`，字体为 PingFang SC Regular 400、14px/22px；Validation border=`#F12234`，caption `校验提示信息` 为 PingFang SC 12px/18px、`#DA0B20`。`FieldTypeDate` id=`9704:21169`、key=`ce4853800bc0db3a2bd7c19a89d41d03815dbc4e`；`XCircleFill` id=`9704:20529`、key=`e5d9af8a021db4d47a0484025506010540c2f3bf`。以上只记录视觉 fixture，不推断 open 或 clear 行为。
- **展开单日期 specimen**：`State=Dropdown Select`、`State=Re-select`、`State=Date Disabled` 外框各观测为 292×436px，trigger y=0、popup y=44；popup `Date Picker` component id=`14525:19654`、key=`0000e183e682b438f69c2e53569c078b8f22d32b`，白底、`rgba(0,0,0,0.06)` / 1px border、radius=20px、shadow=`0 4px 12px rgba(0,0,0,0.08)`；内层 padding=`16px 16px 8px`、gap=12px；footer `Wrapper` 为 292×52px，含 28px 高的 `今天`。292×436px 仅是这些展开 specimen 的外框观测，不得作为所有 trigger 尺寸。
- **Calendar 视觉观测与 fixture 分离**：`Year & Month Toggle` id=`14292:14784`、key=`0b57da9ff1dddb2bbd41dc16d796043388e13773`；`Calendar` id=`13652:18407`、key=`9daf0aa378485a493996226fafb25c06b27939f2`；`Date Cell` set id=`13652:18384`、key=`0d2b05eebcf889a1cee4145a055485c92fc0ffd7`。cell=32×32px、radius=8px，row gap=6px、vertical gap=8px；当前引用名称含 `State=Other|Defaut|Selected|Today|Hover|Disabled`，必须保留 typo `Defaut`。resolved fixture 中 default text=`rgba(0,0,0,.82)`、other/disabled=`rgba(0,0,0,.28)`、selected bg=`#495DFF` 且 text=white、today border/text=`#495DFF`、hover bg=`rgba(109,128,255,.12)`；这些不是状态机。当前面板 header `2025年`/`4月` 与 trigger `2026/04/12` 或 `2026/04/22` 不一致，必须登记为独立 fixture，不得合并成当前日期/月或 disabled-date 规则。`Pointing hand` id=`11980:13115` 是规范演示 scaffold，不登记为产品资产或交互证据。
- **多选周几 fixture**：trigger=260×40px、padding=`8px 12px 8px 6px`、gap=8px、radius=12px；placeholder=`请选择周几开始生效（可多选）`。展开 specimen 的 dropdown x=66/y=44、width=128px、padding=4px、gap=4px、radius=20px，并具有与单日期 popup 同类的 border/shadow；当前列出 `周一`–`周日`。trigger tags 却显示 `选项一`/`选项二`/ellipsis，二者均为不一致 fixture，不推断默认选择、选项模型或 tag overflow 行为。
- **多选日期 fixture**：trigger=260×40px，fixture tags 为 `1`/`10`/`12`/`20`/ellipsis；panel x=0/y=44、292×288px、padding=16px、gap=12px、白底、`rgba(0,0,0,.06)` / 0.5px border、radius=20px、shadow=`0 4px 12px rgba(0,0,0,0.08)`。`Multi Select - Days` component id=`15420:14558`、key=`db679aba19c7cbe762097e27b86c40aba6d48c11`；`Date Cell Multiple` component set id=`15420:13646`、key=`9e0d94906f6dcff8f13170237c93ed76430f8ed3`，当前引用 `State=Selected|Defaut|Hover`，必须保留 typo `Defaut`。底部 `Checkboxs` fixture 文案为 `若无30和31日，将自动调整为最后一天`。这些仅是 fixture，不形成月份长度、fallback 或 recurrence 语义合同。
- **命名/引用/binding 边界**：必须保留 `Date Picker` 的空格、`Multi Select - Weekdays、Days` 的混合标点、`Property 1`、`Defaut`、`Checkboxs` 等 raw names。嵌套引用 select/Button/Dropdown/tag/Checkboxs/icons 等 root 外组件，reference/instance/override closure 未完成；`componentProperties` 是 specimen override，不等同 root public API；resolved colors 不证明 Variable/Style binding。
- **Evidence boundary/blockers**：缺 immutable version、raw chunks/snapshot/IR/hash/source-map/Completeness Report、Variable/Style binding、完整 reference closure、prototype/reactions；缺日期解析/格式化/locale/timezone/calendar、首周规则、年月导航、Today、min/max/disabled-date、selection commit/clear/open-close/focus-return、多选/标签/30-31 fallback、keyboard/focus、overlay collision/responsive、ARIA/a11y 合同。故 `direct_read_complete=false`，DatePicker 仍为 `catalogued_not_contract_complete`（归一 `catalogued`），不升级 `extracted`。

#### 3.6.5 Divider live-read 观测证据（非完整组件合同）

本节只记录用户指定 root 的可复核 connector live node read 观测，不构成 Divider 组件合同：

- **Source/root 与读取边界**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；root id=`14654:142`，节点类型=`COMPONENT_SET`，name=`Divider`，key=`80bb21a650a86ebf31fc1af573ec864a8fe554b1`，description 为空；layout=`none`、sizing 未给具体轴、dimensions 未返回。root stroke=`#9747FF` / 1px / dash `10,5` / radius 5px 是 component-set 规范容器 scaffold，不是 Divider 产品线条。本次仅为 connector live node read，不是 immutable/full-recursive/completeness-proven read。
- **`propertyDefinitions` 与直接组件名称观测边界**：当前 response 未返回 root `propertyDefinitions`。当前列出 5 个直接 `COMPONENT`：`style=Lightest` id=`14654:141`、key=`49c6f11ddd28f5b7aa0a3d963907cb3be7dfc316`；`style=Light` id=`14654:140`、key=`44792396a5e9c07effb75c67162c1b27a0392571`；`style=Default` id=`14654:139`、key=`ee8ed11bfdf16e2dee290aba14728a5258fdb4f6`；`style=Dark Bold` id=`14654:138`、key=`d52fdcf84bd9010086cb0dfc964f9129dd3ea5c8`；`style=Primary` id=`14654:137`、key=`37654a6e6eae576069dfd5f7f2f5b57f0481afa3`。这只是直接名称观测，不能称为 `propertyDefinitions`、immutable source 完整总数或支持枚举/API。
- **直接 `LINE` 观测**：每个组件当前只有一个直接 `LINE`：Lightest line id=`14635:32`（unnamed）、Light line id=`14635:30`（unnamed）、Default line id=`14635:24`（仅此 line 原始 name=`Divider`）、Dark Bold line id=`14635:25`（unnamed）、Primary line id=`14635:26`（unnamed）。全部 horizontal sizing=fill、strokeWeight=1px；当前 response 未见文本、图标、图片或实例。这只说明本次返回，不声称完整闭包。
- **Resolved line colors 与 binding 边界**：Lightest=`rgba(0,0,0,0.03)`、Light=`rgba(0,0,0,0.08)`、Default=`rgba(0,0,0,0.18)`、Dark Bold=`rgba(0,0,0,0.94)`、Primary=`#495DFF`。这些只是 resolved live values，不证明 Variable/Style binding，不得按值反推或新建 Token，也不得把样式名解释为主题/状态。
- **Wrapper geometry 差异边界**：Lightest/Light 为 row、fixed width=280px、vertical hug；其 `LINE` vertical=fixed、height=0。Default/Dark Bold/Primary 为 column、fixed width=300px、vertical hug、padding=10px、align stretch、gap=10px；Default/Dark Bold 的 `LINE` vertical=fill 且未返回明确 line height，Primary `LINE` vertical=fixed、height=0。不得归一 wrapper 宽度/布局/高度，也不得把 0px geometry+1px stroke 直接翻译成 CSS height/border 合同。`gap=10` 出现在单 child wrapper，不能解释成产品 child spacing。
- **Set scaffold 与 orientation 边界**：set 内 component locations x=20，y=20/56/92/148/204 与排列顺序仅为规范页 scaffold，不是使用时 margin、stack gap、优先级或默认样式。当前只观测 horizontal `LINE`，不推断 vertical orientation、inset、文字分隔线、虚线/点线、粗细变体、可交互状态或响应式规则。
- **Naming/semantic boundary**：保留 `style=Dark Bold` 空格、lowercase `style` 和仅 Default line 命名 `Divider` 的不一致；不得静默规范化。没有公开 prop、默认 variant、semantic role 或 decorative/semantic usage 证据。
- **Blockers**：缺 immutable version、raw chunks/snapshot/IR/hash/source-map/Completeness Report、Variable/Style bindings、完整 node/reference closure 与 browser rendering evidence；缺 orientation、logical length/inset、thickness/pixel snapping、theme/high-contrast、spacing ownership、decorative vs semantic、`role=separator`/`aria-orientation`、responsive contracts。故 `direct_read_complete=false`，Divider 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不升级 `extracted`。

#### 3.6.6 Drawer live-read 观测证据（非完整组件合同）

本节只记录用户指定 root 的可复核 connector live node read 观测，不构成 Drawer 组件合同：

- **Source/root 与读取边界**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；root id=`18848:9085`，type=`COMPONENT_SET`，name=`Drawer`，key=`9b184f7fb5d0c940dbee745de35a5904ee2604da`，description 为空；layout=`none`、sizing 未返回具体轴、dimensions 未返回。root stroke=`#6F00FF` / 1px / dash `10,5` / radius 5px 是 component-set scaffold，不是产品 Drawer 边框。本次仅为 connector live node read，不是 immutable-version、full-recursive 或 completeness-proven read。
- **真实 `propertyDefinitions` 与名称边界**：当前 response 只返回两个 boolean：`Show SearchInput`，default=`true`；`Show Help Icon`，default=`true`。`Position` 未作为 `propertyDefinition` 返回，只能按直接组件 raw name 观测。
- **直接 `COMPONENT` identity**：当前 response 列出 4 个直接 `COMPONENT`，必须保留 casing：`Position=up` id=`18848:9083`、key=`ff2a0be472c7c5ba9a66d9a253ca6ab23d3986f7`；`Position=down` id=`18848:9360`、key=`fee6ad863044fef29f9899a9a347b5f11d3f56a9`；`Position=right` id=`18848:9084`、key=`5972f60400f37683a339020bf8c3fac590e3a0c5`；`Position=Left` id=`18848:9324`、key=`f379ddd9b8ff415ead2bfdb97b1a8f5f05a70bcf`。`Left` 首字母大写不得改写；不得据此声明 immutable source 完整总数、支持枚举或公开 API。
- **Shell geometry/resolved values**：四者均为白底、column、padding=`12px 24px 0`、align stretch。up/down 固定为 1930×480px，未返回 parent gap；up shadow=`0 6px 16px rgba(0,0,0,.18)`，down shadow=`0 -6px 16px rgba(0,0,0,.18)`。right/Left fixed width=480px、vertical hug、gap=20px，高度未返回；right shadow=`-6px 0 16px rgba(0,0,0,.18)`，Left shadow=`6px 0 16px rgba(0,0,0,.18)`。不得把 1930 规范化为 1920、把 480 推为通用尺寸、从 shadow 推断动画或 placement，也不得补造本 response 未返回的 shell border/radius。
- **Set scaffold 边界**：set 内 locations 为 up x=650/y=67、down x=618/y=1861、right x=2548/y=664、Left x=198/y=664；这些位置及排列顺序只是规范页 scaffold，不是 viewport anchor、offset、z-index 或布局合同。
- **Header resolved fixture**：Header 为 row、horizontal fill/vertical hug、space-between、center；`Title Container` padding right=24px、gap=8px。fixture title=`抽屉标题`，Noto Sans SC Medium 500、18px/28px、fill=`rgba(0,0,0,.94)`。Help icon=`QuestionCircle` id=`9704:20526`、key=`aa8abc556fdaa25c5e81017625c1ec0f8c229ae8`，16×16px。文案、字体与颜色只是当前 resolved fixture，不证明产品 copy、font license 或 Token binding。
- **Search/close nested fixture**：`Search Container` 为 row/flex-end/gap=12px。SearchInput set id=`15942:34115`、key=`ef2d0a682334d09f57257112385b127d057b8680`；referenced component 只登记 id=`17755:8477`、key=`fe691b0b2584a79d7ca5c69197779c1c9f7ca955` 与 raw name=`Size=small, State=Default`。SearchInput 观测为 220×32px、padding=`12×16px`、border=`rgba(0,0,0,.08)` / 1px、radius=24px；placeholder=`搜索项目`，PingFang SC Regular 400、14px/22px、fill=`rgba(0,0,0,.28)`。Search icon id=`9704:20371`、key=`9b1c63b53b1d15ebe2a5a274f718245b8dc419cc`，16×16px；close container=36×36px，`XLg` id=`9704:20548`、key=`d0ca92c75b49960ce717bf7bfd9d6e4f69935b01`，20×20px。以上均为 nested fixture，不是 Drawer API、行为或资产闭包。
- **Property wiring 不一致（原样保留）**：up 的 Help Icon `18848:9125` visible→`Show SearchInput`，Search Container `18848:9126` visible→`Show Help Icon`；down 的 Header `18848:9361` visible→`Show SearchInput`，Title Container `18848:9362` visible→`Show Help Icon`；right 的 Title Container `18848:9142` visible→`Show Help Icon`，SearchInput `18848:9709` visible→`Show SearchInput`；Left 的 Header `18848:9325`、Title Container `18848:9326`、Help Icon `18848:9328` visible→`Show Help Icon`，SearchInput `18848:9716` visible→`Show SearchInput`。两个 defaults 都为 `true`，当前 fixture 无法裁决 intended wiring；不得按 property 名称自动重连，也不得声称合法组合已知。
- **Body/scroll 边界**：四个 specimen 当前 body frame 均为空；up/right/Left body 使用 vertical fill、gap=8px，down body 使用 explicit height=432px、gap=8px。不得推断 slot、内容 cardinality、内边距、滚动 owner 或空态；right/Left parent vertical hug 与 body vertical fill 的关系也不得自行解析为最终高度规则。
- **Naming/reference/binding 边界**：保留 raw name `Position=Left` 的 casing；nested SearchInput/QuestionCircle/Search/XLg 都是 root 外引用，完整 main/instance/override/reference closure 未完成；resolved values 不证明 Variable/Style bindings。当前 root 未返回 backdrop、mask 或 reaction。
- **Blockers**：缺 immutable version、raw chunks/snapshot/IR/hash/source-map/Completeness Report、完整 bindings/reference closure/prototype；缺 property wiring 裁决、open/close trigger、direction/placement/size constraints、portal/z-index/backdrop、modal vs non-modal、body/internal scroll/scroll lock、animation/easing、close button/Escape/outside-dismiss、focus trap/initial focus/focus return/tab order、Search/Help behavior、responsive/safe-area/RTL、ARIA role/name/description。故 `direct_read_complete=false`，Drawer 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不升级 `extracted`。

#### 3.6.7 Form live-read 观测证据（非完整组件合同）

本节只记录用户指定 root 的可复核 connector live node read 观测，不构成 Form 组件合同：

- **Source/root 与读取边界**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；root id=`18325:432`，type=`COMPONENT_SET`，key=`e86883593f164c324223e08547f8ff682f2d09b0`，description 为空。Figma raw name 必须保留为 `from`（不是 `Form`）；`Form` 仅为用户语义名/注册名，canonical mapping pending，禁止静默修正原始拼写。本次仅为 live read，不是 immutable-version、full-recursive 或 completeness-proven read。
- **Component-set scaffold 边界**：root layout=`none`，designed dimensions=1123×1045px，stroke=`#9747FF` / 1px / dash `10,5` / radius 5px；这些只属于 component-set scaffold，不是产品 Form 的边框、尺寸或布局。
- **`propertyDefinitions`/名称/API 边界**：当前 response 未返回 root `propertyDefinitions`。下列直接组件 raw name 中的 `类型`、`尺寸` 只允许作为名称观测，不得称为 `propertyDefinitions`、公开 API 或完整 variant 轴。

| direct `COMPONENT` raw name | id | key |
|---|---|---|
| `类型=input, 尺寸=sm` | `18240:8840` | `04832fb78d73552f1bf4a3748e139815c9d581d8` |
| `类型=input, 尺寸=md` | `18848:5519` | `d9be9366eec9f51c8e0c9b455d361408a68ef736` |
| `类型=input, 尺寸=lg` | `18848:7370` | `c95c73f993d3113462b8591ce9854d6e1bff70e3` |
| `类型=Textarea, 尺寸=sm` | `18325:433` | `e34a840d3670cb28cea47386c07ea4d3f56652a2` |
| `类型=Textarea, 尺寸=md` | `18848:7629` | `db56a8b4d22c0796577a2fca03f216a23e968a1d` |
| `类型=Textarea, 尺寸=lg` | `18848:7883` | `df782bb49c128a02949be79e50053ab72e7a06df` |
| `类型=Switch, 尺寸=sm` | `18337:271` | `197c4d561a4a3012069ccac8a8e50a43b95e9105` |
| `类型=Switch, 尺寸=md` | `18848:7632` | `fa2b1059118049ea762d66b9fd6fd5e928bb4c05` |
| `类型=Switch, 尺寸=lg` | `18848:7886` | `a618f7ee1b3ad8fb95aede03c03fcb71cda539ff` |
| `类型=select, 尺寸=sm` | `18337:2093` | `ee2ba856c8671801462b5b954065a62928b69db6` |
| `类型=select, 尺寸=md` | `18848:7636` | `bd749e3b3be4ec7a263d368aa3a93e6d1bc88fe5` |
| `类型=select, 尺寸=lg` | `18848:7890` | `d9806747c1bbca6220bec8b1890dcb625b370faf` |
| `类型=Date Range Picker, 尺寸=md` | `18848:7639` | `1dc2141140895ae5bde44fe54dd60bcfb4d50cc0` |
| `类型=Time Picker, 尺寸=md` | `18848:7642` | `2f96b38e155629d2cee1a0cf4a28f2647c4bae16` |
| `类型=Radios, 尺寸=md` | `18848:7645` | `66d0aa1c348b34fc4cd9d77e482295af9e710a6b` |
| `类型=Checkboxs, 尺寸=md` | `18848:7648` | `4e4bcdf86e7e4b2dc578f7dc754ecab405560167` |
| `类型=ColorPicke, 尺寸=sm` | `18721:7175` | `5eecefe381c591ca8d9757f972e27d2c0fc34d72` |
| `类型=ColorPicke, 尺寸=md` | `18848:7651` | `fba37f16e5ed4a9c6c3e00e64883093b2af904ff` |
| `类型=ColorPicke, 尺寸=lg` | `18848:7905` | `bea213de70a5c6ccc6232e3e8930f185b6d4b3dc` |

- **直接 identity 数量/稀疏组合边界**：19 只是当前 response count，不是 immutable source total，也不是完整笛卡尔积。仅 `input`/`Textarea`/`Switch`/`select`/`ColorPicke` 在当前 raw names 中暴露 `sm|md|lg`；`Date Range Picker`/`Time Picker`/`Radios`/`Checkboxs` 当前只有 `md`。必须保留混合 casing `input`/`Textarea`/`select`、plural `Radios`、typo `Checkboxs` 与 typo `ColorPicke`，禁止补齐、纠错或推断缺失组合。
- **Common field wrapper/scaffold 边界**：直接 specimens 使用 column、gap=8px；多数为 horizontal/vertical hug，Textarea wrappers 则为 fixed width=260px、vertical hug。set 内 x/y locations 仅为 spec-page scaffold，不是产品 spacing、grid 或 order。
- **Nested `input Label` identity/overrides**：每个 specimen 均引用 `input Label` component id=`13629:6959`、key=`36fd0686b3dfb6732353928800dc260b472bd750`；当前 instance overrides 为 `info=true`、`required=true`。label internals 为 row、gap=2px；fixture labels=`普通文本|多行文本|开关|选择器|日期选择器|时间选择器|单选项|多选项|颜色选择`，文本为 PingFang SC Regular 400 14/22、`rgba(0,0,0,.64)`；`QuestionCircle` id=`9704:20526` 为 16×16px；required `*` 为 PingFang SC Medium 500 14/22、`#F12234`。`info`/`required` 只是 nested label instance 的 properties/references，root 未将其返回为 Form `propertyDefinitions` 或 API；labels 是 fixture copy，不是产品要求。
- **Input fixture**：`sm|md|lg` control heights=32/40/48px；row、padding=`8px 12px`、gap=8px、stroke=`rgba(0,0,0,.08)` / 1px、radius=12px；placeholder=`请输入`，PingFang SC Regular 14/22、`rgba(0,0,0,.28)`。当前 nested components 依次为 `15190:7457`/`13464:7816`/`13563:8060`，来自 input set `13464:7839`；当前 overrides 均将 left/right icon、maxlength、caption 设为 false。response 未返回 width，禁止补造。
- **Select fixture/visibility 边界**：`sm|md|lg` 当前 control heights=32/40/48px，沿用 padding=`8px 12px`、gap=8px、stroke=`rgba(0,0,0,.08)` / 1px、radius=12px，placeholder=`请选择`；nested components 依次为 `14981:3534`/`14023:17008`/`14991:4385`，来自 select set `14023:17042`。当前 instance overrides 为 `Show Right icon=false`、`Show Left icon=false`、`show caption=false`，但 returned descendant structure 仍列出 `ChevronDown` id=`9704:20842`；没有 visibility evidence 时不得裁决 resolved visibility，也不得声称 icon 已显示或隐藏。
- **Textarea fixture**：三个 raw size specimens 均引用 textarea component `15392:3082`（set `15392:3094`），当前呈现相同的 260×95px control geometry、padding=`8px 12px`、column/flex-end、gap=4px、stroke=`rgba(0,0,0,.08)` / 1px、radius=12px，overrides=`maxlength=true`、`caption=true`。placeholder=`请输入`；text-area content region height=66px；fixture caption=`说明描述文字` 位于 x=0/y=95、72×18px，count=`0/100` 位于 x=215/y=69、33×18px；caption/count typography 为 PingFang SC 12/18，fill/alignment 仅按本次 response 返回的 fixture resolved attributes 保留。本观测不得推断 intended size differentiation、maxlength semantics、validation、DOM positioning、final wrapper height 或 caption ownership。
- **Switch fixture**：`sm|md|lg` 分别引用 on-state components `11773:6775`/`11773:6777`/`11773:6770`，来自 raw set `Switch开关` id=`11773:6781`；当前 tracks=28×16/36×20/44×24px、padding=2px、right-justified、radius=999px、fill=`#495DFF`，knobs=12/16/20px、white、radius=100px；surrounding specimen control frame height=40px。这些只证明当前 on-state visuals，不是 default state、toggle behavior、disabled/focus/animation contract 或 Token binding。
- **Date/time fixtures**：`Date Range Picker` 当前只有 md，wrapper 引用 component `15638:18129`（set `15638:18130`），raw variant=`Property 1=Default Unselected`；当前 nested trigger 使用 40px template，placeholder=`年/月/日 ～ 年/月/日`，`FieldTypeDate` id=`9704:21169`。`Time Picker` 当前只有 md，wrapper 引用 component `14937:17762`（set `14937:17763`），raw variant=`State=Default Unselected`；当前 nested trigger 使用 40px template，placeholder=`小时:分钟`，`Clock` id=`9704:21174`。两者均不定义 parsing、selection、range ordering、locale/timezone、open/close、overlay 或 validation behavior。
- **Radios/Checkboxs SLOT fixtures**：两个 md specimens 均引用 `checkbox-Slot` component id=`18472:255`、key=`6fc87601ccfc1f45d1ffe4577fa60bc614ff439e`；returned tree 含真实 `SLOT` named `Slot`，row/fill、height=40px、gap=20px。Radios 当前 fixture 含 3 个 `Option` instances，视觉选择为 off/on/off；Checkboxs 当前 fixture 含 3 个 `Option` instances，视觉选择为 on/off/off。相关 set identities 为 Radios `12299:13778`、Checkboxs `12299:13970`；不得把 3 解释为 cardinality、options model、default value、validation、group API 或 runtime slot semantics 的证明。
- **ColorPicke fixture**：必须保留 raw typo `ColorPicke`；`sm|md|lg` 引用 `ColorPicker /Trigger` set `18501:10997` 的 components `18501:11008`/`18501:11364`/`18501:11414`。trigger sizes=111×32/119×40/127×48px；padding=8px、gap=12px、white fill、border=`rgba(0,0,0,.08)` / 1px、radius=12px；Color Block=16/24/32px、fill=`#495DFF`、stroke=`rgba(0,0,0,.06)` / 1px、radius=4px；fixture text=`#1677FF`，`Show Text=true`、`Show Icon=true`，ChevronDown=14×14px。这些仅为当前 fixture；不得统一 `#1677FF` 与 `#495DFF`，也不得推断 selected color、open/close behavior、supported formats 或 Token binding。
- **Naming/reference/binding/prototype 边界**：保留 raw `from`、`ColorPicke`、`Checkboxs`、casing、混合语言及所有 raw set/component names，禁止静默 normalization。root response 含大量 root-external nested references，包括 input Label、input、textarea、Switch、select、date、time、radio、checkbox、ColorPicker 与 icons；完整 main/instance/override/reference closure 及 Variable/Style bindings 均未证明。当前 resolved fixture styles 混用 PingFang SC/SF Pro Text，不构成 font、license 或 binding contract。当前 response 未返回 prototype/reactions；这不证明 source 中不存在。
- **Blockers/生命周期**：缺 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 bindings/reference closure/prototype；Form public properties、variant legality、slot/value model；label alignment/layout/width/responsive rules；required/optional/help/caption/error ownership；validation timing/error association；submit/reset；disabled/read-only/loading；field dependencies/dynamic lists；keyboard/focus；autofill/i18n；ARIA/a11y；deterministic browser evidence。故 `direct_read_complete=false`，Form 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.8 Dropdown live-read 观测证据（非完整组件合同）

本节只按用户指定 root 的 connector live response 登记可复核观测，不构成 Dropdown 完整组件合同：

- **Source/root 与读取边界**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；用户 root id=`16980:2989`，type=`FRAME`，raw name=`Dropdown`。root layout=`none`、white fill、radius=48px；root sizing 未给具体轴、dimensions 未返回，且 `FRAME` 无 component key，禁止补造。本次只是 connector live read，不是 immutable-version、full-recursive 或 completeness-proven read。
- **Documentation scaffold**：`标题` frame `16980:2990` 位于 x=0/y=40、width=1444px，padding=`0 64px`、gap=24px；其页面标题 `Dropdown` 为 PingFang SC Semibold 600、72/108，另含 `web / 组件名称`。Footer `16980:3008` 位于 y=1265、尺寸 1444×72px，含 `@ Lingee 2026` 与设计师 placeholder。header/footer/logo、页面坐标、root radius 以及这些 padding/gap 均属于规范页 scaffold，不是 Dropdown 产品尺寸、内容、branding、间距或容器圆角。
- **缺失字段边界**：root response 未返回 root `propertyDefinitions`、prototype 或 reactions；不得由字段缺失断言源中不存在。

当前 response 中 8 个规范页直接产品节点 identity 如下；它们只是 current direct product-node observations，不是 complete immutable inventory 或 public architecture。各 component set 的 x/y 与 dimensions/stroke 均为规范页 scaffold，不得转成产品合同。

| node kind | raw name | id | key |
|---|---|---|---|
| `COMPONENT` | `Dropdown/Dropdown-Group title` | `14732:6215` | `67793b1ae340d3fa6c88e8627d3049d5408cf267` |
| `COMPONENT` | `Dropdown/Dropdown-Divider` | `14732:6281` | `cc1788d75c0c2c5bcc48041f2b007f0fb7902c6c` |
| `COMPONENT_SET` | `Dropdown-item` | `14246:5130` | `cd4e456b630995f35ab8d3b4a96d7c284e8a8c17` |
| `COMPONENT_SET` | `dropdown-multi-select option` | `14732:3950` | `1fd07801e0e9c6692555a21d0b8e5d2da80cbbcc` |
| `COMPONENT_SET` | `dropdown-option` | `20868:3306` | `53fc9f853575df4a583098ebe1e0e1d814449a30` |
| `COMPONENT` | `action area` | `20733:7829` | `fcd6d498af02f492f29ea24ddff94b60281830c1` |
| `COMPONENT_SET` | `Dropdown-Trigger` | `14246:3797` | `ba68ccb03cb3f857552622663e0ad0ad326f2a11` |
| `COMPONENT_SET` | `Dropdown` | `14246:5742` | `1166c221eb1ffd389837aeffe74069db850e1437` |

- **Returned `propertyDefinitions` 精确边界**：`Dropdown/Dropdown-Group title` `14732:6215` 返回 `Show Account Details`（boolean，default=`true`）；`Dropdown/Dropdown-Divider` `14732:6281` 返回同名、同类型、同默认值定义；`Dropdown-item` 返回 `icon=true`、`Secondary=true` 两个 boolean；`dropdown-multi-select option` 返回 boolean `checkbox=true`；`dropdown-option` 返回 boolean `single-select=false`、`icon=true`；`Dropdown-Trigger` 返回 boolean `Show icon=true`、`Show font=true`；Dropdown panel set `14246:5742` 返回 boolean `Show Account Details=true`、`search=false`。`action area` 与 document root 未返回 `propertyDefinitions`。只可声明这些 returned definitions 与可见 reference；不得推断 public JavaScript API 或属性语义。Group title/Divider 暴露同一个命名异常的 `Show Account Details`，但 response 未返回 visible wiring，必须原样保留，禁止“修正”或补连。
- **Group title / Divider fixture**：Group title 当前 fixture width=120px，row，padding=`7px 8px`、gap=12px、radius=12px；文本=`分组标题`，PingFang SC Regular 400、12/18，fill=`rgba(0,0,0,.46)`。Divider 当前 width=120px，column，padding=`2px 8px`；直接 `LINE` geometry height=0，stroke=`.5px rgba(0,0,0,.08)`。wrapper width 与 zero-height line 都不能泛化为 universal menu width、CSS border 或 semantic separator contract。
- **`Dropdown-item` set / scaffold**：set 容器 252×502px、purple dashed，仅为 scaffold。当前 response 有 10 个直接 `COMPONENT`：`type=Default` 的 `state=Default|Hover|Warning|Disabled|Loading` ids 依次为 `14246:5129`、`14434:2383`、`14434:3931`、`14434:2390`、`14434:3923`；`type=With helper text` 的相同五个 state ids 依次为 `14246:5138`、`14434:3938`、`14434:3947`、`14434:3956`、`14434:3974`。必须保留 lowercase raw `state`/`type` 及每个值的 casing；10 只是 current response，不是 immutable total。
- **`Dropdown-item` geometry/fixture**：Default type 当前 width=120px，helper type width=200px；fixed specimens height=32px，而 Hover 使用 vertical hug，禁止归一 hug/fixed。通常 padding=`0 8px`，Hover padding=`5px 8px`；gap=12px、radius=20px。fixture title=`分组依据`、helper=`Data`；default text=`rgba(0,0,0,.82)`、disabled=`rgba(0,0,0,.28)`、loading=`rgba(0,0,0,.46)`；Hover bg=`rgba(0,0,0,.03)`；Warning bg=`#FFF0F1`，title=`退出登录`/`#F12234`，helper warning `Data`=`#FF9EA6`。Share `9704:20356` visible→`icon`，ChevronRight `9704:20838` visible→`Secondary`；Warning 使用 Export `9704:20821`，Loading 使用 icon raw typo `loding` id=`13137:8723`。名称、图标和文案均为 fixture，不证明 action semantics 或 state machine。
- **`dropdown-multi-select option` set**：set 当前 scaffold width=228px、padding=`22px 18px`、gap=14px。只返回 3 个 raw name/ID：`state=Default` `14732:3961`、`state=Hover` `14732:3965`、`state=Disabled` `14732:3979`；不得写成 immutable total。item row padding=`5px 8px`、gap=12px、radius=20px；fixture text=`内容选项`、14/22；Hover bg=`rgba(0,0,0,.03)`，disabled text=`rgba(0,0,0,.28)`。checkbox visible reference 使用 `checkbox`；当前 tree 引用 `Checkbox Icons` set `12299:13942`，disabled chain 又到达同名 set `11948:1848`，必须按 ID/key 区分，不能 name-only lookup；reference closure 仍不完整。
- **`dropdown-option` set / observations**：set 当前 scaffold=228×560px、padding=`22px 18px`、gap=14px。9 个 raw name observations 为：`type=Default` 的 Default/Hover/Disabled ids `20868:3307`/`20868:3312`/`20868:3317`；`type=With helper text` 的 Default/Hover/Disabled ids `20906:2885`/`20906:3130`/`20914:1442`；`type=Sub-option with helper text` 的 Default/Hover/Disabled ids `20926:1644`/`20926:1653`/`20926:1662`。rows 为 fill、padding=`5px 8px`、gap=12px；normal option radius=20px，helper/sub-option radius=16px；Hover bg=`rgba(0,0,0,.03)`。
- **`dropdown-option` fixture/visibility 边界**：Default fixture text=`内容选项`；helper title/description=`快速`/`快速响应，适合轻量任务内`；sub-option title 在 set fixture 中可能为 `快速`，而 panel override 为 `标准`，description=`常规推理速度，点数正常消耗`，两套 fixture 必须分开。Check icon `9704:20536` wired to `single-select`，LightningCharge `9704:20965` wired to `icon`。虽然 default `single-select=false`，returned descendants 仍可出现；没有 visibility evidence 时不得声称 resolved visibility 或 selected state。
- **`action area` fixture composition**：component `20733:7829` 为 row、padding=`10px 8px`、gap=12px、width=192px、radius=20px；fixture `全部产物` 加 nested primary/small Button `16375:18622`，height=24px、label=`操作`。这只是 fixture composition，不证明 footer ownership、count、callback、submit 或 sticky behavior。
- **`Dropdown-Trigger` set / names**：set scaffold width=161px、padding=20px、gap=20px。6 个 raw name observations：`type=Default, state=Default` `14246:3796`、`type=Default, state=Hover` `14246:4106`、`type=Default, state=click` `14246:4113`；`type=Content available, state=Default` `14246:4498`、`type=Content available, state=click` `14246:4518`、`type=Content available, state=Hover` `14246:5076`。必须保留 lowercase `click`；这些名称不是 proven state machine。
- **Trigger fixture/visibility 边界**：Default trigger 当前 height=28px、padding=`3px 8px`、gap=4px、radius=8px；fixture 使用 Effect icon `9704:20949`、label=`选择智能体`、ChevronDown 14px。Hover bg=`rgba(0,0,0,.03)`；click descendant 改为 ChevronUp `9704:20841`。Content-available fixture height=28px、padding=`0 6px`、bg=`rgba(77,137,255,.08)`，label=`报销审核专员`/`#2970FF`；Default 使用 ChevronDown，click 使用 ChevronUp，Hover 返回 XLg `9704:20548`。`Show icon`/`Show font` 只作为 returned boolean definitions/references；不得推断 clear/open/toggle behavior、trigger-panel association、selection persistence 或 events。
- **Dropdown panel set / direct identities**：set `14246:5742` scaffold=276×515px，不是 universal panel dimensions。当前只返回 5 个直接 `COMPONENT`：`type=Default` id=`14246:5296`、key=`4303c05bc9ff64e892fcb568d5f862bcf898f9d5`；`type=dropdown panel` id=`14246:5743`、key=`1553c01a293500daa20cc9388fc55a5c2507fcbc`；`type=With helper text` id=`20914:1478`、key=`b47d12fd5a2771e0e43b1cb8998423a3408d7505`；`type=Sub-option with helper text` id=`20926:1695`、key=`f01108cc3d39f900d28f006d8eadceb3239dab9a`；`type=multi-select dropdown` id=`20733:7782`、key=`3422996ac985a8fdeca32ac3ceda6ab4606a2fff`。
- **Panel shell/width 边界**：五个 current shell 均为 column、padding=4px、gap=4px、white fill、stroke=`1px rgba(0,0,0,.08)`、radius=20px、shadow=`0 4px 12px rgba(0,0,0,.08)`。`type=dropdown panel` width=128px；helper/sub-option widths=196px；Default 与 multi-select 在当前 response 为 hug，禁止从任一 specimen 泛化统一 width。
- **Panel contents/search/SLOT**：Default fixture 有 conditional `Account Details` visible→`Show Account Details`，title=`Janice`、subtitle=`ERP顾问总监`、Divider，随后是真实 `SLOT`，其中一个 Dropdown-item fixture=`退出登录`；这是 account fixture，不是 required content 或 logout behavior。其余四个 panel specimens 均含 SearchInput component `17755:8477` / set `15942:34115`，height=32px、placeholder=`搜索项目`，且 visible→`search`；response 未返回可信 panel-search width。default `search=false` 时 descendants 仍被返回，因此不得声称 runtime visibility。standard dropdown SLOT 使用 `dropdown-option`，helper/sub-option SLOT 使用对应 `dropdown-option` variants，multi-select SLOT 使用 `dropdown-multi-select option`；returned content nodes 是真实 `SLOT`，但一个 returned item 只是 fixture，不证明 slot cardinality、options model 或 runtime semantics。
- **Raw naming/content/style/reference boundaries**：必须原样保留 `Dropdown-item`、`dropdown-multi-select option`、`dropdown-option`、`Dropdown-Trigger`、`type=dropdown panel`、`type=multi-select dropdown`、`state=click`、`loding`、`Secondary`、`Show font` 等 raw name/casing/hyphen，禁止静默 normalization。`Janice`、`ERP顾问总监`、`退出登录`、`分组依据`、`Data`、`快速`、`标准`、`内容选项`、`报销审核专员`、`全部产物`、`操作` 都是 current fixtures，不是 product copy/API。混用 PingFang SC 与 Geist，以及所有 resolved colors/shadows，均不证明 Variable/Style/font/license binding。root external references 包括 icons、Checkbox sets、SearchInput、Button 和 nested option/item sets；完整 main/instance/override/reference closure、asset export/hash 与 bindings 仍不完整。
- **Blockers/生命周期**：仍缺 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 bindings/reference/asset/prototype closure；public API 与 legal variant combinations；trigger-panel association；menu vs listbox/combobox semantics；selected/multi-select model；nested submenu behavior；open/close/dismiss/outside/Escape；placement/anchor/portal/z-index/collision/scroll；hover/click/loading/warning/disabled behavior；search/filter/no-results；account/action-area ownership；keyboard arrows/Home/End/Enter/Space/Tab；focus entry/return；roles/ARIA/announcements；motion；responsive/touch/safe-area/RTL；text truncation/i18n/virtualization/performance；deterministic rendering evidence。故 `direct_read_complete=false`，Dropdown 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.9 Empty live-read 观测证据（非完整组件合同）

本节只按用户 supplied connector live response 登记可复核观测，不构成 Empty 完整组件合同，禁止超出返回字段推断：

- **Source/root 与读取边界**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；用户 root id=`18405:8760`，type=`FRAME`。NODES 返回该 FRAME 时无 raw name；`Empty` 仅为用户语义名/注册名，不得虚报 root name 或 component key。本次只是 live read，不是 immutable-version、full-recursive 或 completeness-proven read；字段未返回不证明源中不存在。
- **Root/scaffold**：root layout=row、gap=49px、horizontal/vertical 均为 hug；未返回 fill、stroke、dimensions、`propertyDefinitions`、prototype 或 reactions。49px gap 与三个 set 的并排顺序只是规范页 scaffold，不是产品 Empty 组合布局。

三个直接 `COMPONENT_SET` identity 如下；三者 description 均为空，均未返回 `propertyDefinitions`。raw name 中的 `type`/`Layout`/`category` 只允许作为名称观测，不是 returned property definitions、公开 API 或 complete axes。

| raw name | id | key |
|---|---|---|
| `Empty-icon` | `13944:9761` | `5615be1a691d8492d46f59e5feddba94fdf1b9ef` |
| `Empty-local` | `13988:10513` | `b13eaecea4e7a4b27573a319a841c2dce6206a22` |
| `Empty` | `13988:10484` | `aebf9d05ef5c4a2d3f1f5217b36ce50ca981b7c4` |

- **`Empty-icon` set scaffold**：当前 set grid=210×622px，padding=`16px 20px`，2 columns×8 rows，gap=`12px 44px`，紫色 dashed 1px/radius=5px；全部只是规范页 scaffold，不是 usage grid、产品 spacing 或 illustration size。

当前 response 的 16 个直接 `COMPONENT` identity 如下，raw punctuation/casing 必须原样保留：

| # | raw name | id | key |
|---:|---|---|---|
| 1 | `type=Connection failed.` | `13944:9760` | `594d84c8b9d186ff2b5bdeb30f2242d2e758d5b9` |
| 2 | `type=No search results` | `13944:9846` | `dec2d2b0fafe788a3374665dbd92fb9912a3d71c` |
| 3 | `type=type16` | `16708:3995` | `97a2e0469cddc91833a180d1b64eef72c4a1fb23` |
| 4 | `type=Preview File` | `13944:9762` | `4e64e472ab2be51355232560302ba52d3cd81a07` |
| 5 | `type=No meetings scheduled` | `13944:9849` | `06e496e2a93db379cb82272af495ce5b7be08a79` |
| 6 | `type=500` | `13944:9768` | `30fbc4580a3746988530c82a55bdef8ead71b6c2` |
| 7 | `type=No permission` | `13944:9866` | `bdc214c3daac0ca9540b0d43362f8f27f21f7abf` |
| 8 | `type=Preview not supported.` | `13944:9840` | `957e5b3c36ab3241e8b2ba420e113e2af23fc8ef` |
| 9 | `type=Delete` | `13944:9869` | `9890ba48a10a2af546eb2097d5675fb0c0129964` |
| 10 | `type=No content to display` | `13944:9843` | `a1a484469198743bfee66b371ae44a694a4951e8` |
| 11 | `type=Encryption key` | `13944:9872` | `8d42988fa86ed42e4ffe86ee7e9c6dd6bde25f1d` |
| 12 | `type=No conversations` | `13988:10432` | `1ab54ca9697e50ecfc2d8f32778fcba41d1ed1a6` |
| 13 | `type=No tasks` | `13988:10429` | `afe369a79bd47f7f5a7d15487cb0bbcb0b79dd4a` |
| 14 | `type=No group announcements` | `13988:17593` | `7bec0b4054e317ec9885415ad95f79d84286699e` |
| 15 | `type=Confirm Login` | `13988:17596` | `2e8ec01ba035733f3cedd33c05ddf2f9e8e6f2ba` |
| 16 | `type=Go to Web` | `13988:17590` | `0336c1e6fa91b6c32385a952b796a7399a7e8d98` |

- **Identity count/naming boundary**：16 只是 current response count，不是 immutable source total 或 supported enum；opaque `type16` 与 `Connection failed.`、`Preview not supported.` 的句点必须保留，不得纠正、展开或静默归一。
- **`Empty-icon` geometry boundary**：多数 wrapper 为 horizontal=fill、vertical=fixed、height=63px；`Preview File` wrapper 固定 63×63px。许多当前 illustration instance 为 63×63px，但 internals 各异：CalendarClock 为 56×56px、x=4/y=4；`No permission` 的本地 `Union` 为 49.16×60px、x=7/y=2.5；`type=500` 以 63×63px wrapper 包裹 WindowX，其 vector 约 52.5×53.81px；其余节点保留各自 transform。禁止归一内部 geometry，亦不得声明 63px 是 universal export size 或 viewBox。
- **Illustration reference boundary**：外部 identity 包含 WifiOff `9704:20570`、legacy/search `75:420`、file-earmark-play `84:3963`、CalendarClock `9704:21166`、WindowX `9704:20692`、file-earmark-x `84:3951`、Trash `9704:20379`、document-library `2:884`、SecurityLock `9704:21100`、Dialog `9704:20568`、Inbox `9704:20599`、Easel1 `9704:20907`；`No permission` 使用本地 `Union`，`Confirm Login` 使用本地 `Index`，`Go to Web` 使用本地 `Display`，三者均无 returned stable `componentId`。`No search results` 与 opaque `type16` 都引用 search component `75:420`，不得去重或推断 alias。WindowX/Union 返回的 gradient `linear 180deg rgba(0,0,0,.29)→rgba(0,0,0,.18)` 只作为 resolved paint，不证明 Token binding；reference/export/hash closure 不完整。
- **`Empty-local` set scaffold**：set 为 column、padding=`20px 19px`、center、gap=21px、width=106px、紫色 dashed；只作规范页 scaffold，不是产品 dimensions 或 spacing。

| `Empty-local` direct raw name | id | key |
|---|---|---|
| `Layout=Vertical` | `13988:10471` | `5d00396bf8a3640026b8594014c2eb914ba9e987` |
| `Layout=Horizontal` | `13988:10514` | `95cd0101f4a55518050990a73475d2fd9d600aa7` |

- **`Empty-local` current fixtures**：Vertical 当前为 column/center/gap=4px/hug；`Empty-icon` instance 引用 `type=No tasks` `13988:10429`，尺寸 24×24px；文本=`暂无任务`，PingFang SC Regular 14/22、center、`rgba(0,0,0,.46)`。Horizontal 当前为 row、horizontal=fill、center、gap=4px、vertical=hug；同一 No tasks icon 为 16×16px；文本相同，但为 PingFang SC 12/18、center、`rgba(0,0,0,.46)`。`Layout` 仅来自 raw names；未返回 property definition/default，当前 text/icon 都是 fixture，不是 mandatory copy 或 semantic mapping。
- **`Empty` set scaffold**：set 为 column、padding=20px、center、gap=32px、horizontal/vertical 均 hug、紫色 dashed；只作规范页 scaffold，不是产品 spacing。

| `Empty` direct raw name | id | key |
|---|---|---|
| `category=Empty-page` | `13988:10381` | `f1a67bc49ea1e38df7534a2f02b0f069a679c1d3` |
| `category=Empty-local` | `13988:10485` | `f307f3792246c823b2e1d1df7384420b4fcc8298` |
| `category=Empty-System error` | `13988:10576` | `eec165071cf63d2a6100d002fdd5a4b2cb4fce70` |
| `category=Empty-Network error` | `13988:11132` | `6d4ea08249ab5f1718a3a4a14b7a2d309e7a5942` |

- **Category axis boundary**：`category` 只来自上述 raw names，不是 returned `propertyDefinitions`、公开 API 或 complete enum。
- **`category=Empty-page` fixture**：当前 shell 为 column/stretch/center/gap=8px；icon instance=64×64px；title=`连接失败`，Noto Sans SC Medium 500、16/24、center、`rgba(0,0,0,.46)`。这些只作 fixture；category raw name 与 copy 即使看似语义不一致也不得修复。
- **`category=Empty-local` fixture**：当前嵌套 Vertical `Empty-local` fixture，含 No tasks icon 与 `暂无任务`；这不证明 Vertical 是 default。
- **`category=Empty-System error` fixture**：column/center/gap=8px、width=322px；`type=500` icon instance=64×64px；content frame width=250px、gap=4px；title=`500：服务器内部错误`，Noto Sans SC Medium 16/24、`rgba(0,0,0,.46)`；description=`系统服务异常，暂时无法访问页面。`，PingFang SC 14/22、`rgba(0,0,0,.28)`。
- **`category=Empty-Network error` fixture**：当前 title 同为 `连接失败`，description=`无法访问页面，请检查网络连接或代理设置后重试。`；error-code box 为 row/fill，padding=`15px 14px`、gap=10px、background=`rgba(0,0,0,.03)`、radius=16px；returned code raw typo=`ERR_CONNCTION_RESET`，必须保留。Button instance `16375:18807` height=36px、border=`#495DFF` 1px、radius=8px、label=`重新加载`。error-code row 中 code 前还返回一个无 characters 的红色 text node，不得发明其 label；不得推断 retry callback、network detection、HTTP status semantics、error-code source/redaction、button state 或 navigation。
- **Copy/style/reference boundaries**：Empty-page 与 Empty-Network error 当前共享 `连接失败` fixture，只登记 duplication，不导出 canonical category copy。必须保留 `Empty-icon`、`Empty-local`、`Layout=...`、`category=Empty-System error`、`category=Empty-Network error`、`Connection failed.`、`Preview not supported.`、`type16`、`ERR_CONNCTION_RESET` 的原始 casing/punctuation/typo，禁止静默 normalization。所有 fixture text 都不是 product copy/API；混用 Noto Sans SC/PingFang SC 及 resolved colors/gradient 不证明 Variable/Style/font/license binding。root external references 包含 icon-library/legacy components 与 Button；本地 Union/Index/Display vectors 无 returned stable `componentId`，完整 main/instance/override/reference 与 asset/export/hash closure 均未证明。本次不下载 image，也不修改资产。
- **Blockers/生命周期**：仍缺 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；bindings/reference/asset/prototype closure；public properties 与 legal type/layout/category mapping/defaults；illustration export/viewBox/hash/license/theming/high-contrast；content ownership/i18n/truncation；empty/loading/error transition rules；retry/navigation/action behavior；network/HTTP/error-code semantics/redaction；responsive/container sizing；live-region/status/alert/role semantics；decorative vs informative image alternative；keyboard/focus/button behavior；motion；deterministic browser evidence。故 `direct_read_complete=false`，Empty 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.10 Image Preview live-read 观测证据（非完整组件合同）

本节只按用户指定 root 的 connector live response 登记可复核观测，并严格区分产品定义观测、documentation/component-set scaffold 与当前 fixture；不构成 Image Preview 完整组件合同，禁止从未返回字段推断：

- **Source/root 与读取边界**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；用户 root id=`22064:1923`，type=`FRAME`，本次未返回 raw name。`Image Preview` 仅为该 root 的用户语义名/注册名，不得虚报 root name 或 key。本次只是 connector live read，不是 immutable-version、full-recursive 或 completeness-proven read；字段未返回不证明源中不存在。
- **Root/scaffold**：root 为 column、align center、gap=149px，horizontal=`contextual`、vertical=hug，`designedWidth=1920px`；未返回明确 root dimensions、`propertyDefinitions`、prototype 或 reactions。root gap 与三个直接节点的排列顺序仅为 spec-page scaffold，不是产品 spacing；`designedWidth` 也不得与下方 fill/fixed fixture 拼成通用 1920×1080 合同。

当前 response 只返回以下三个直接产品定义节点；它们不是经 immutable version 证明的完整、不可变 inventory。三者均未返回 `propertyDefinitions`，不得由缺失字段断言源中不存在：

| node kind | raw name | id | key | returned description |
|---|---|---|---|---|
| `COMPONENT` | `Image Preview` | `20006:15002` | `89d9aa288fea4ec9fcaf0e8ef98de66a3ec56079` | 未返回 |
| `COMPONENT_SET` | `Image Operation Icon` | `20006:5158` | `2af5ead9573dfa0314fd70f3890a4b832f336d84` | 空字符串 |
| `COMPONENT` | `Image Toolbar` | `20006:7051` | `49c71c0148e5a69e41e74d5f8ce765486cee3f3a` | 未返回 |

- **Main Image Preview fixture**：当前 component 为 column/stretch、padding=`28px 0`、gap=12px、horizontal fill、vertical fixed height=1080px；fill=`rgba(0,0,0,0.46)`，returned `backdropFilter=blur(6px)`。这些是当前 fixture 的 resolved values，不证明 Token binding，也不得与 root `designedWidth=1920px` 合并成 universal 1920×1080 contract。
- **Header/close fixture**：Header fill-width、padding right=20px、flex-end。close wrapper 当前 geometry=40×40px、padding=16px、fill=`rgba(0,0,0,0.12)`、blur=6px、radius=24px；`XLg` id=`9704:20548`、key=`d0ca92c75b49960ce717bf7bfd9d6e4f69935b01`，当前 24×24px。40×40 wrapper 与 16px padding/24×24 icon 看似紧或不一致，必须原样保留，不得修复或推导 hit target。
- **Image region/navigation fixture**：region 为 row/stretch、padding=`12px 48px`、space-between、center。left/right wrapper 当前均为 48×48px、padding=16px、fill=`rgba(0,0,0,0.12)`、blur=6px、radius=24px；`ChevronLeft` id=`9704:20840`、key=`df0ee81aee9349cc19945aa7a1ccb35cdb55d467`，`ChevronRight` id=`9704:20838`、key=`0ee15397f3b1c8458467bf6d80ca0723890d855a`，当前均为 24×24px。该 geometry 只属 fixture，不证明 navigation behavior 或 hit-target contract。
- **Image fixture/asset boundary**：raw `Image with Fixed Ratio` frame 当前为 804×804px，IMAGE fill 的 imageRef=`350089d144ba5e82c8dc7277bbcbde88de39a3bd`、scaleMode=`FILL`，returned `needsCropping=false`、`requiresImageDimensions=false`。嵌套 raw layer names 为 `Aspect ratio keeper # Additionally 45º rotated Auto Layout` 与 `Aspect ratio keeper # Rotated Auto Layout`；必须保留 `45º` 与完整名称，但不得推断 rotation 或 aspect algorithm。imageRef 不是经验证 content hash；本次未取得 bytes、source dimensions、export、hash 或 license，也不下载/修改图片或其他资产。
- **Footer indicator fixture**：当前依次渲染 Text override `1`、separator `/`、Text override `2`，即 fixture `1 / 2`。Text instance component id=`15942:35083`、key=`cbb3b5198f1a1937b6dfeb91a30bc6b6fce7b036`，来自 set raw name=`Text`、id=`15942:35082`、key=`2af652ed75e42ec12e447d9d7811c83d44c55bbf`；resolved typography 为 SF Pro Text Regular 400、14/22、white。不得据此建立 current-index/total model、pagination API、localization 或 live-announcement 合同。
- **Image Toolbar fixture/SLOT**：component 与 instance 当前均为 row、padding=`0 24px`、align center、gap=12px、hug；fill=`rgba(0,0,0,0.64)`、radius=`999999px`。其包含真实 `SLOT` raw name=`Slot4`，但下列四个 returned children 只证明当前 fixture 的 cardinality/order，不证明 runtime slot 或 public API。
- **Toolbar operation fixture identities**：四个 current default-state operation instances 均为 row、padding=12px，并含当前 16×16px icon：Download id=`9704:20823`、key=`484b9fbe7de2b8e51068162cc48f63d7b94702ee`；ArrowCounterclockwise id=`9704:20827`、key=`c91a5a015cbf11b66a34c8d34d730e9435591dd1`；ZoomIn id=`17220:1408`、key=`1cfd1f88261532818ec2afc8273c7e63bf81d2b3`；ZoomOut id=`9704:20365`、key=`d35a0893f58a237e14391dc95f6033b3932ce9a4`。不得推断 operation behavior、labels、required order、shortcut 或 availability。
- **Image Operation Icon set scaffold**：set 当前为 182×82px、layout=`none`、fill=`rgba(0,0,0,0.64)`、purple dashed stroke=`#9747FF` / 1px / dash `10,5`、radius=5px。set locations、背景与描边均为 documentation/component-set scaffold，不是 operation button container contract。

| current direct `COMPONENT` raw name | id | key |
|---|---|---|
| `state=Default` | `20006:5157` | `c10a30578e0312d4f483861b2e97b0dca76010a6` |
| `state=hover` | `20006:5156` | `d0e696885fdbce0dfd239e8d5369ef4c3be413d2` |
| `state=Disabled` | `20006:5155` | `c190f469cdbebc1b6d11006d54a8c6e4e8d860e1` |

- **Operation state boundary**：必须保留 lowercase `hover` 与 uppercase `Default`/`Disabled`。每个 returned specimen 当前均使用 Download 且 padding=12px；`state` 仅来自 raw names，不是 returned `propertyDefinitions`、public API 或 complete state machine。response 未建立 visual deltas、default semantics、focus/pressed/loading states 或 legal combinations。
- **Naming/reference/binding boundary**：必须原样保留 `Image Preview`、`Image Operation Icon`、`Image Toolbar`、`Image with Fixed Ratio`、`Aspect ratio keeper # Additionally 45º rotated Auto Layout`、`Aspect ratio keeper # Rotated Auto Layout`、`Slot4`、`state=Default`、`state=hover`、`state=Disabled`、`ArrowCounterclockwise`、`ZoomIn`、`ZoomOut` 的 casing/punctuation，禁止静默 normalization。root-external references 包括 Text、XLg、chevrons 与 operation icons；完整 main/instance/override/reference closure 以及 Variable/Style/font binding 均未证明。resolved rgba/font/blur/radius values 不证明 Tokens 或 licensing。
- **Blockers/生命周期**：仍缺 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 bindings/reference/asset/prototype closure；public properties/legal variants/defaults；image collection/index 与 loading/error/unsupported lifecycle；open/close/dismiss 及 portal/layer/z-index/scroll lock；previous/next boundaries/wrap/preload；zoom min/max/steps/fit/original 与 pan；rotate increment/orientation/EXIF；download filename/format/security/CORS；toolbar visibility/action/tooltip；image source dimensions/crop/color profile；keyboard/focus return/ARIA/live announcements；touch/wheel/pinch/gesture conflicts；motion；responsive/safe-area/RTL/high contrast；deterministic browser evidence。故 `direct_read_complete=false`，Image Preview 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.11 Indicators live-read 观测证据（非完整组件合同）

本节只按用户指定 root 的 connector live response 登记可复核观测，并严格区分 component-set documentation scaffold、当前 fixtures 与产品合同；不构成 Indicators/指标卡片完整组件合同，禁止超出返回字段推断：

- **Source/root identity 与读取边界**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；root type=`COMPONENT_SET`、id=`14138:146`、key=`d39bc172b3b65e72eb61d1b33aa75c04ad165378`，raw name 精确为 lowercase `indicators`，description 为空字符串。`Indicators`/`指标卡片` 仅为注册语义名/用户标签，raw lowercase 必须保留。来源身份必须由 file key + node ID + component key 共同区分；相同 node ID 不代表跨文件的同一稳定身份。本次只是 connector live read，不是 immutable-version、full-recursive 或 completeness-proven read。
- **Root component-set scaffold**：root layout=row、padding=20px、justify=center、align=center、gap=40px，horizontal/vertical 均为 `contextual`，designed 684×140px；stroke=`#8A38F5` / 1px / dash `10,5` / radius 5px。上述 root geometry、stroke 与 direct-component order 只作 component-set documentation scaffold，不是产品卡片合同。prototype/reactions 未返回；字段缺失不证明源中不存在。
- **精确 returned `propertyDefinitions`**：本次只返回以下六个定义，type 均为 boolean；raw names、大小写、空格与默认值必须原样保留。

| exact raw property name | type | default |
|---|---|---|
| `Show Unit` | boolean | `true` |
| `Show Subtitle 2` | boolean | `false` |
| `Show tag` | boolean | `false` |
| `Show Icon` | boolean | `true` |
| `Show Subtitle` | boolean | `true` |
| `Show Subtitle  Icon` | boolean | `true` |

  `Show Subtitle  Icon` 在 `Subtitle` 与 `Icon` 之间精确包含两个空格；不得规范化属性名、推断 JavaScript/API 名称，或把六项定义声明为完整 public API、legal combinations。
- **Current direct `COMPONENT` identities**：当前 response 返回 raw `Alignment=Left`，id=`14138:96`、key=`b5ba6bf0b86a9e1596c9fd1cc6b411c439c96724`；raw `Alignment=Center`，id=`14138:119`、key=`498f1985e9eb936d868835d44a3aa17f8dd6fbb5`。`Alignment` 只来自 direct-component raw names，不是 returned property definition；二者只代表 current response，不证明 immutable total、完整 enum/default、legal set，且禁止补造 `Right`。
- **Shared current layout fixture**：两者均为 column、padding=`8px 16px`、justify=center、gap=16px，horizontal/vertical 均为 hug，returned `fills=[]`、radius=24px。`fills=[]` 不得翻译成未获支持的 background contract；上述值只作 current observations。
- **Left/Center current layout differences**：Left response 未返回 component `alignItems`，Center 为 `alignItems=center`；Left `Content` 为 column/gap 2px/hug，Center `Content` 另外返回 justify/align center；Left `Header` 为 fill-width/align center/gap 4px，Center `Header` 另有 justify center；Left `Title Row` 为 fill，Center 为 hug；Left `Metric Value` 为 fill/baseline/gap 8px，Center 为 hug/justify center/baseline/gap 8px；Left subtitle wrapper 为 hug row/gap 8px，Center 另有 justify/align center。这些 fill-vs-hug 与 center 差异只作 current layout observations，不是 responsive behavior 或 complete alignment semantics。
- **Exact nested visibility wiring**：tag instance visible→`Show tag`；`Calendar2Check` icon visible→`Show Icon`；unit text visible→`Show Unit`；outer subtitle row visible→`Show Subtitle`，且第一个 `Subtitle 3` 也 visible→`Show Subtitle`；trend icon visible→精确属性 `Show Subtitle  Icon`；第二个 `Subtitle 4` visible→`Show Subtitle 2`，且嵌套在由 `Show Subtitle` 控制的 outer row 内。只登记该 nested wiring；不得声称 `Subtitle 4` 可独立 runtime visibility、修复连线或推断 intended combinations。
- **Nested tag fixture**：tag set id=`15039:45871`、key=`555841bdfea758ded4cd02386bf93a73166e00c8`，raw name=`tag`、description 为空；current instance component id=`15039:45745`、key=`71fafefedb8dbf2f549dc4a2b83e7e0447cb1e0d`，raw name=`Type=Processing, Size=Default, Shape=Default, Style=tint`。当前 layout=row、padding=`3px 6px`、justify/align center、gap=2px、height=24px/hug、fill=`rgba(77,137,255,.08)`、radius=6px；nested `Icon End=false`/`Icon Start=false` 不是 root properties。tag text raw fixture 精确为 ` 实时`（含前导空格），PingFang SC Regular 400、12/18、`#2970FF`；不得去除空格或把文案解释为 mandatory product copy/status semantics。
- **Header/metric fixtures**：`Calendar2Check` id=`9704:21168`、key=`c615fe46e653b6bd8c2752bdd8e12ed525bd5090`，当前 16×16px，visible wired to `Show Icon`。title fixture=`订阅收款`，Noto Sans SC Medium 500、12/18、`rgba(0,0,0,.64)`；metric value fixture=`¥10000.28`，Noto Sans SC Medium 500、28/42、`rgba(0,0,0,.94)`；unit fixture=`亿`，PingFang SC Regular 400、14/22、`rgba(0,0,0,.64)`，visible wired to `Show Unit`。这些字符串、yen sign、decimals 与 unit 都是相互独立的 fixture data，不构成 value schema、currency/large-number formatting、precision、locale 或 calculation contract。
- **Subtitle/trend fixtures**：subtitle text fixture=`完成率 87.3%`，PingFang SC Regular 400、12/18、`rgba(0,0,0,.46)`；trend icon component id=`2:1521`、key=`39ac2c66673234eaee9ba33c6f8724d62c2bb5a4`，raw name 精确为 `arrow `（含尾随空格），当前 12×12px，visible wired to 精确属性 `Show Subtitle  Icon`；trend text fixture=`+8%`，Noto Sans SC Medium 500、12/18、`#04B545`。`Subtitle 3`/`Subtitle 4` 当前重复相同 text/trend fixture，只登记 duplication；不得推断业务、格式、趋势、计算、方向、颜色、icon、cardinality 或 semantic difference。
- **Typography/style boundary**：returned textStyle labels 包含 `Body/font-scale-body-12`、`Title/font-scale-title-12`、`Title/font-scale-title-28`、`Body/font-scale-body-14`。本次 resolved family 明确区分为 Body labels=`PingFang SC Regular`、Title labels=`Noto Sans SC Medium`；不得沿用其他文件的字体结论。resolved typography 不证明 stable Text Style ID、Variable/Token binding、font binary 或 license；28/42 fixture 不得静默扩展或覆盖另行批准的 typography composite-role whitelist。
- **Raw naming/reference catalog boundary**：必须精确保留 `indicators`、`Alignment=Left`、`Alignment=Center`、上述六个 property names、`tag`、`Type=Processing, Size=Default, Shape=Default, Style=tint`、前导空格 ` 实时`、`Subtitle 3`、`Subtitle 4` 与尾随空格 `arrow ` 的 casing/whitespace。returned `COMPONENTS` catalog 另列 Compass id=`9704:20952`、key=`0b96de9a9305e2388e66a1e26e0bfb84d1b2399c` 及 XLg id=`9704:20548`、key=`d0ca92c75b49960ce717bf7bfd9d6e4f69935b01`，但 root `NODES` tree 未证明二者是 current rendered descendants，不能据 catalog presence 补入。完整 main/instance/override/reference/asset closure 未证明。
- **Blockers/生命周期**：仍缺 immutable version；raw snapshot/chunks/IR/hash/source-map/Completeness Report；完整 Variable/Style/text-style/font/main/instance/override/reference/asset/prototype closure；API/property/default `Alignment`/legal combinations；metric schema/formatting；trend/tag/subtitle semantics；content/i18n；loading/empty/error/stale/permission/refresh；interaction；responsive；theme/high contrast；icon export/hash/license；keyboard/focus；ARIA/live update/read order；motion；deterministic browser evidence。故 `direct_read_complete=false`，Indicators 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.12 Input live-read 观测证据（非完整组件合同）

本节只按用户指定节点及其 parent connector live responses 登记可复核观测，并严格区分 spec-page scaffold、实际 component set、当前 fixtures 与产品合同；不构成 Input 完整组件合同，禁止从未返回字段推断：

- **Source/read topology**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`。用户 URL node `14425:7243` 实际 type=`GROUP`、raw name=`备注`；直接读取只返回注释 labels，不是 Input component/component-set。父 Canvas 复核使用既有注册 root `9640:63861`，type=`CANVAS`、raw name=`Input-输入框`，不得把 `14425:7243` 或其他 ID 替换为注册 root。
- **Canvas/annotation scaffold**：Canvas 下 `SECTION` `14425:7223`，raw name=`Light Mode`，current dimensions=1912×3130px、white fill、`rgba(0,0,0,0.1)` / 1px stroke；这些值连同页头、标题与坐标都属于 spec-page scaffold。注释 GROUP 在 parent response 中 location x=43/y=297、dimensions=1542×2617px，仅是 matrix annotation scaffold，不是 Input 产品 geometry。
- **实际 set identity 与读取边界**：实际 Input component set 为 `13464:7839`，raw lowercase name=`input`，key=`8c8ce9d2538d1c6fcdad76a605c373a438aa355e`，description 为空字符串。必须区分注册名 `Input`、Canvas `Input-输入框`、注释 `备注` 与 set raw `input`，禁止 name-only 合并或静默 normalization。本次是 connector live reads，不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Component-set scaffold**：set layout=`none`、dimensions=980×848px；stroke=`#9747FF` / 1px / dash `10,5`、radius=24px。它们只属于 component-set documentation scaffold，不是产品 Input 容器的尺寸、边框或圆角。

当前 response 只返回以下四个 set-level `propertyDefinitions`；raw names、大小写与空格必须原样保留：

| exact raw property name | type | default |
|---|---|---|
| `show right icon` | boolean | `true` |
| `Show caption` | boolean | `false` |
| `Show maxlength` | boolean | `false` |
| `show left icon` | boolean | `false` |

`size`、`filled`、`state` 只来自 direct-component raw names，不得冒充 returned property definition、public API 或 legal combinations/default。另有独立 `input Label` component 的 `required=true`/`info=true`，不得并入 Input set 的上述四项 properties。

- **Current returned direct inventory boundary**：当前 set NODES tree 返回 30 个 direct `COMPONENT`，raw names 观测到 `size=Small|Medium|Large`、`filled=off|on`、`state=default|hover|focus|disabled|error` 的 3×2×5 排列。只可登记 current response 的 30 项与该排列，不得据此声明 immutable total、完整合法 variant 集或默认值；annotation 的 `size:md\(default\)` 也只是注释 fixture。

| # | direct `COMPONENT` raw name | id | key |
|---:|---|---|---|
| 1 | `size=Small, filled=off, state=default` | `15190:7457` | `8d8afdb2569eb0655dad1fd58aeb9648032dcb7b` |
| 2 | `size=Small, filled=off, state=hover` | `15190:7503` | `24c2eedef4827196d2092bcf79c70137dcecfc1d` |
| 3 | `size=Small, filled=off, state=focus` | `15190:7517` | `29782bd0086c1a379c5d732d67f25f80be0a336d` |
| 4 | `size=Small, filled=off, state=disabled` | `15190:7497` | `7b49f778287f6097f878161b89f8d696f11fce74` |
| 5 | `size=Small, filled=off, state=error` | `15190:7510` | `02686f2c1802338446a6080dafc84c03776f35d2` |
| 6 | `size=Small, filled=on, state=default` | `15190:7463` | `13a69cd59548cce483ccf093846e544daa6cbf1c` |
| 7 | `size=Small, filled=on, state=hover` | `15190:7470` | `3bbaa8c8d01beba2f1aa9974242bd29b8944f2d2` |
| 8 | `size=Small, filled=on, state=focus` | `15190:7483` | `819b583b260fe53cf58254007a5e23f79f1ac1ca` |
| 9 | `size=Small, filled=on, state=disabled` | `15190:7477` | `3cdd4dd162b9210a81dd536885d36a8d5d24d7cb` |
| 10 | `size=Small, filled=on, state=error` | `15190:7490` | `759360e491277d7784ea207c82d55d835d911803` |
| 11 | `size=Medium, filled=off, state=default` | `13464:7816` | `db122925019d5e357d7cc28a33986350181fb762` |
| 12 | `size=Medium, filled=off, state=hover` | `13464:7837` | `21093dcb58ff3e21b7b715aa599f829ef1a9c376` |
| 13 | `size=Medium, filled=off, state=focus` | `13464:7838` | `b8e07e39003d64241f1069ffdfc392d5b646169d` |
| 14 | `size=Medium, filled=off, state=disabled` | `13464:8438` | `1953340d5bc616d665e895274483712646c288cd` |
| 15 | `size=Medium, filled=off, state=error` | `13464:8445` | `b7f61ab6cf96803f2dc33216bc9abe86a2b361da` |
| 16 | `size=Medium, filled=on, state=default` | `13464:9163` | `f92b840c0d28e102daf1f213ecf34f81949620ea` |
| 17 | `size=Medium, filled=on, state=hover` | `13464:9522` | `8695a20fb0fcd31d3aa10c5b4e8a652c90b1c969` |
| 18 | `size=Medium, filled=on, state=focus` | `13464:9529` | `b9c5eb778472db5331aef728b3010a11e2011802` |
| 19 | `size=Medium, filled=on, state=disabled` | `13464:9543` | `81350a43b8e05a2cef0822d5fdfe778d826d4a92` |
| 20 | `size=Medium, filled=on, state=error` | `13464:9618` | `10b2ecabc44bb44173183bd6267f9fa78ce77169` |
| 21 | `size=Large, filled=off, state=default` | `13563:8060` | `b63840be44162ce0e3f9d05250ff3c17d285bf5a` |
| 22 | `size=Large, filled=off, state=hover` | `13563:8100` | `eef6c12ad85f73ee636473a7cd0b9975f083c857` |
| 23 | `size=Large, filled=off, state=focus` | `13563:8112` | `5dd1700aef6f79afb6490261492e0983a02c335c` |
| 24 | `size=Large, filled=off, state=disabled` | `13563:8095` | `b9718d4b7b5d915e0eaef5e0ce5f1f70b28120b4` |
| 25 | `size=Large, filled=off, state=error` | `13563:8106` | `a4c19806a666f83bc4e9e38248c0cefa4b7c8967` |
| 26 | `size=Large, filled=on, state=default` | `13563:8066` | `7e2beaf3bdf79f38c070b29d99be1764779675a1` |
| 27 | `size=Large, filled=on, state=hover` | `13563:8072` | `1d7ecacd446192f66c60850200b68d316e393d30` |
| 28 | `size=Large, filled=on, state=focus` | `13563:8083` | `e88b44d88d8c594bfa939f014363acbb0f31ae73` |
| 29 | `size=Large, filled=on, state=disabled` | `13563:8078` | `8c978a950b8cb6b818b24ed8ac093cc68ff07b26` |
| 30 | `size=Large, filled=on, state=error` | `13563:8089` | `f6d5b9159838be41ef8e51cebd97932bb72697f9` |

- **Current direct layout observations**：direct variants 当前均为 row、padding=`8px 12px`、alignItems=center、gap=8px、horizontal hug/vertical fixed、radius=12px；Small/Medium/Large heights 分别为 32/40/48px。response 不提供 fixed width contract，禁止补造宽度。
- **Current resolved visual observations**：default stroke=`rgba(0,0,0,0.08)` / 1px；hover/focus stroke=`#495DFF` / 1px；error stroke=`#F12234` / 1px；disabled 当前 fill=`rgba(0,0,0,0.03)`，且未返回 stroke。以上均为 resolved values，不证明 Token/Variable bindings，也不是完整 visual state contract。
- **Exact visibility/reference wiring**：Envelope `9704:20598`、key=`3cc1618ae3ca519e3f68faa18659a6340da94ffa`、raw name=`Envelope`，visible→`show left icon`；FieldTypeDate `9704:21169`、key=`ce4853800bc0db3a2bd7c19a89d41d03815dbc4e`、raw name=`FieldTypeDate`，visible→`show right icon`；maxlength text visible→`Show maxlength`，returned fixtures=`0/20` 与 `2/20`；caption text visible→`Show caption`，fixture=`说明描述文字`。XCircleFill `9704:20529`、key=`e5d9af8a021db4d47a0484025506010540c2f3bf` 当前出现在 filled hover/focus descendant，但没有 returned property reference/action；不得推断 clear behavior。
- **Text/date/error fixtures**：当前返回包含 `请输入`、`内容`、`内容|`、connector-styled raw `'{ts2}|{/ts2}请输入'`、`年/月/日 ～ 年/月/日`、`必填提示`、`校验错误提示`、`0/20`、`2/20`、`说明描述文字`；必须保留原始标点与间距，全部只作 fixture，不是 product copy、data 或 validation contract。`内容|` 中的 pipe 只是 current raw caret-like fixture，不是交互、selection 或 caret behavior 证明。
- **Text-style/font boundary**：returned textStyle labels 包含 `Body/font-scale-body-14`、`Body/font-scale-body-12`、`Body/font-scale-body-14 (392:5964)`；resolved font/color values 不证明 stable style/Token binding、font binary 或 license。
- **Annotation matrix boundary**：selected `备注` group 当前 labels 观测到 sizes `size:sm`、`size:md\(default\)`、`size:lg`；states `default|hover|focus|disabled|error` 在 filled off/on 中重复；columns 为 `default`、`maxlength`、`right icon`、`caption`。这只是 current spec-page annotation matrix，不是 public API、exhaustive runtime states、default/legal combinations 或 behavior。
- **Separate `input Label` boundary**：独立 `COMPONENT` `input Label` id=`13629:6959`、key=`36fd0686b3dfb6732353928800dc260b472bd750`，当前 row/gap=2px fixture；其自身 booleans 为 `required=true`、`info=true`，current fixtures 包含 `技能名称`、QuestionCircle `9704:20526` key=`aa8abc556fdaa25c5e81017625c1ec0f8c229ae8` 与 required marker。它未被证明是 Input 必需 descendant、slot 或 label association，其 properties 不得并入 Input set。
- **Out-of-scope fixture**：`pause` component `14:1890` 是 Input descendants 之外的 spec-page fixture，不得登记为 Input asset。
- **Blockers/生命周期**：仍缺 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/text-style/font/main/instance/override/reference/icon/prototype closure；public API 与合法/默认 size/filled/state combinations；`filled` semantics；value/defaultValue/placeholder/readOnly/input type；controlled/uncontrolled/events；validation/error/caption/required ownership；maxlength counting/truncation；left/right/clear icon semantics 与 actions；label/help association；IME/composition/autofill/selection/caret；keyboard/focus-visible；responsive width/min/max/overflow；theme/dark/high contrast/RTL；ARIA/role/name/description/invalid/required；motion与 deterministic browser evidence。因此 `direct_read_complete=false`，Input 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.13 Number Stepper live-read 观测证据（非完整组件合同）

本节只按用户指定节点及其 parent 的两次 connector live responses 登记有限、可复核观测，并严格区分 Canvas/spec-page scaffold、实际 component set、当前 fixtures 与产品合同；不构成 Number Stepper/数字步进器完整组件合同，禁止超出返回字段推断：

- **Source/read topology 与身份边界**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；注册 Canvas id=`16338:4993`、raw name=`Number Stepper-数字步进器`。用户 URL 实际指向 `COMPONENT_SET` id=`18177:1561`、key=`f8e32e7bde4d0dee5fd469047893ca013aa53d9f`、raw name 精确为 lowercase `input`、description 为空字符串。用户语义名 Number Stepper/数字步进器不改变 raw name；来源身份必须以 file key + Canvas ID + set ID + component key 共同区分。不得因 raw name 同为 `input`，将其与 §3.6.12 Input 的 set `13464:7839` / key `8c8ce9d2538d1c6fcdad76a605c373a438aa355e` 合并。两次读取都只是 live connector reads，不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Canvas/spec-page 与 component-set scaffold**：Canvas 中 raw `组件库` frame 当前 dimensions=838×957px、white fill、radius=48px；标题 fixtures 为 `web  / Number Stepper`（`web` 后精确两个空格）与 `数字步进器`，annotation labels 精确为 lowercase `default|hover|focus|disabled|error`。这些值连同位置、页头与 footer 都只是 documentation scaffold，不是组件内容、状态或产品文案合同。set 在 parent read 中 location x=126/y=275、dimensions=584×415px；set layout=`none`、stroke=`#9747FF` / 1px / dash `10,5` / radius 5px，也仅为 component-set scaffold，不是 Number Stepper 产品 geometry 或视觉合同。
- **Set property/状态边界**：本次 response 未返回任何 set-level `propertyDefinitions`。以下 raw names 中的 `Status` 只来自 direct component raw names，不得宣称为 returned property、public API、完整 enum/default 或 legal combinations。当前只返回 6 个 direct `COMPONENT`：

| # | direct `COMPONENT` raw name | id | key |
|---:|---|---|---|
| 1 | `Status=Default` | `18177:1559` | `6979c466a008b84419593cfed85741ef2a0d5e91` |
| 2 | `Status=disabled` | `18177:1594` | `28bb8571fa8c8671b013e1b6474f62fbf317bd97` |
| 3 | `Status=error` | `18177:1598` | `20e519c45048afceacda4d3b2d60da9563deb1e5` |
| 4 | `Status=hover1` | `18177:1560` | `f16e86495861a2a32b9ad86295f0e14dffe9cf6f` |
| 5 | `Status=focus` | `18177:1572` | `bd2d3c8adf2ab08f7d7835c9329f41a13f559174` |
| 6 | `Status=hover2` | `18177:1563` | `3977175931b68f8f5ab5e65a95cc6884bffdb82d` |

  raw casing 必须原样保留。annotation 的单个 `hover` 与 direct raw `Status=hover1` / `Status=hover2` 不得合并、重命名或解释为完整状态机。
- **Current layout/visual observations**：六者当前均 height=32px、row、alignItems=center、white fill、radius=12px。`Status=Default` 为 padding=`8px 12px`、gap=12px、fixed×fixed、width=260px、stroke=`rgba(0,0,0,.08)` / 1px；`Status=disabled` 为 padding=`8px 12px`、gap=8px、horizontal hug/vertical fixed、stroke=`rgba(0,0,0,.08)` / 1px；`Status=error` 与 disabled geometry 相同，stroke=`#F12234` / 1px；`Status=hover1`、`Status=focus`、`Status=hover2` 均为 padding=`8px 0px 8px 12px`、gap=12px、fixed×fixed、width=260px，其中 hover1 stroke=`#6D80FF` / 1px，focus 与 hover2 stroke=`#495DFF` / 1px。以上只作 current resolved observations；不得从 resolved paints 推断 Token/Variable binding、interaction precedence 或完整 disabled semantics。
- **Current Stepper descendants 与引用边界**：只有 `Status=hover1`、`Status=focus`、`Status=hover2` 的当前 returned trees 列出 `Stepper` column、hug×hug，并含 `Up` / `Down` frames。`Up` 与 `Down` 都引用 `ChevronUp` component id=`9704:20841`、key=`cd05805145a3e8bafc2ea9b0dde3aece32d80a99`、raw name=`ChevronUp`，当前 16×16px。`Up` 当前为 row、padding=`0px 9px`、alignItems=center、gap=8px、stroke=`rgba(0,0,0,.08)` / 1px；`Down` 使用同模板，但 returned strokeWeight=`0px 1px 1px`；focus 的 `Up` 另有 fill=`rgba(0,0,0,.03)`。不得因 `Up`/`Down` 引用同一 ChevronUp 推断 Down rotation/transform，相关字段未返回；也不得推断 click、increment/decrement、pressed/hover ownership。`Status=Default`、`Status=disabled`、`Status=error` 的当前返回树未列出 Stepper descendant，只能登记“当前返回树未列出”，不能写成已证明隐藏或不存在。
- **Text fixtures 与 connector-local alias 边界**：`请输入` 当前使用 `Body/font-scale-body-14`，resolved typography 为 PingFang SC Regular 400、14/22，color=`rgba(0,0,0,.28)`。error 当前含 leading pipe styled segment + `请输入`，并有 absolute hint `必填提示`：Body 12 Regular 400、12/18、`#F12234`，x=0/y=32、48×18px；focus 的 leading pipe styled segment 当前为 `rgba(0,0,0,.82)`。两次 read 的 connector-local alias 名发生位移：root read 中 error/focus 分别显示 `ts1` / `ts2`，parent read 中分别为 `ts2` / `ts3`；`ts*` 只是 response-local alias，不是 stable Figma Text Style ID。pipe、当前 placeholder 与 hint 全部只作 fixture，不得解释为真实 caret、number value、validation ownership、产品文案或 numeric schema。
- **Numeric model 明确未返回**：本次 response 没有返回任何真实 numeric fixture，也未证明 `value`、`min`、`max`、`step`、`precision`、parser、formatter、clamping 或 wrapping；不得从控件语义名、pipe 或 Stepper scaffold 补造数字模型。
- **Blockers/生命周期**：仍缺 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/text-style/font/main/instance/override/reference/icon/prototype/reaction closure；public API、status enum/default/legal combinations；number model/value/defaultValue/min/max/step/precision/parser/formatter/locale；increment/decrement、clamp/wrap、mouse/touch/press-and-hold/wheel/keyboard；controlled/uncontrolled/events；disabled/readOnly/error/validation；focus order/visible；responsive/theme/high contrast/RTL；ARIA spinbutton/name/value now/min/max、button names 与 announcements；motion；deterministic browser evidence。故 `direct_read_complete=false`，Number Stepper 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.14 Popover live-read 观测证据（非完整组件合同）

本节只按用户指定 `COMPONENT_SET` 与注册 Canvas 的两次 connector live responses 登记有限、可复核观测，并严格区分 Canvas/spec-page/component-set scaffold、current variants/fixtures/resolved values 与产品合同；不构成 Popover/弹出菜单完整组件合同，禁止超出返回字段推断：

- **Source/read topology 与身份边界**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；注册 `CANVAS` id=`17290:17715`、raw name=`Popover-弹出菜单`。用户 URL 实际指向 `COMPONENT_SET` id=`18523:39840`、key=`075d900d7eba800d690dae3bf3338701c33f313b`、raw name=`Popover`、description 为空字符串。来源身份必须以 file key + Canvas ID + set ID + component key 共同区分。两次响应都只是 live connector reads，不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Canvas/spec-page scaffold**：Canvas 中 `组件库` frame 当前 dimensions=838×1954px、white fill、radius=48px；标题 fixtures 精确为 `web  / Popover`（`web` 后两个空格）与 `弹出菜单`；footer fixtures 为 `@ Lingee 2026` / `组件设计师：xxx`。这些值及其位置、页头、footer 都只作 documentation scaffold，不是组件内容、产品 geometry 或产品文案合同。
- **Component-set documentation scaffold**：set 在 parent read 中 location x=156/y=228、dimensions=252×1614px；root layout=`none`、stroke=`#9747FF` / 1px / dash `10,5` / radius 5px。这些只属于 component-set documentation scaffold，不是 Popover 产品 geometry 或边框合同。
- **Annotation scaffold 与 inventory mismatch**：annotation frame 当前 x=48/y=298/width=75px、column、alignItems=`flex-end`、gap=107px，只列 12 个 labels：`Right Top|Top Left|Top|Top Right|Bottom Left|Bottom|Bottom Right|Left Top|Left|Left Bottom|Right|Right Bottom`。annotation labels 与位置仅作 scaffold；其中没有 `Placement13` label。annotation 只有 12 labels，而 direct inventory 有 13 variants；本节只登记 mismatch，不裁决哪个正确，也不把 annotation 当作 enum。
- **Returned property 边界**：set 只返回一个 `propertyDefinitions`：精确 lowercase `arrow`，type=`boolean`，default=`true`。每个 current `Arrow` node 的 `visible` 都引用 `arrow`。这只证明当前 returned property/default/wiring，不证明 `arrow=false` 的 rendered geometry、动画或所有 legal combinations。`Placement` 只来自 direct component raw names，不是 returned property definition；不得声明 Placement API、默认值、完整 enum 或 legal combinations。

当前返回顺序下的 13 个 direct variants 与 Arrow geometry 如下；raw name、ID、key 与异常命名必须原样保留：

| # | direct `COMPONENT` raw name | component id | key | current Arrow node id | x | y | dimensions |
|---:|---|---|---|---|---:|---:|---|
| 1 | `Placement=Right Top` | `18523:39830` | `1b01921fcb7f835c154a25cb48eeb62d83da3316` | `18523:39810` | -8 | 20 | 8×16 |
| 2 | `Placement=Top Left` | `18523:39841` | `6be195edf8f983e7734039acf07224d96cf2ce4d` | `18523:39844` | 151 | 106 | 16×8 |
| 3 | `Placement=Top` | `18523:39861` | `9d7d28b4d02f296a00d81e79baf30c5c6d4eb499` | `18523:39864` | 86 | 106 | 16×8 |
| 4 | `Placement=Top Right` | `18523:39865` | `1fa6aba91c59723c6197ee12ee50e342e4480653` | `18523:39868` | 20 | 106 | 16×8 |
| 5 | `Placement=Bottom Right` | `18523:39869` | `31fccc866e14a6271c84fd9d23b84fb5618a86d4` | `18523:39872` | 20 | -8 | 16×8 |
| 6 | `Placement=Placement13` | `19584:5447` | `4779f90cd423bf4eb977147195dcfd1a9def389b` | `19584:5450` | 20 | -8 | 16×8 |
| 7 | `Placement=Bottom Left` | `18523:39873` | `aa9489eab3faad3d7e8168fe5cc928934b24d758` | `18523:39876` | 152 | -8 | 16×8 |
| 8 | `Placement=Bottom` | `18523:39877` | `82a01cf153e2b61e933f0ed8bffe94d715054084` | `18523:39880` | 86 | -8 | 16×8 |
| 9 | `Placement=Left Top` | `18523:39881` | `e69390ca6569166c0306239c26150a6d83fa1c73` | `18704:250` | 188 | 70 | 8×16 |
| 10 | `Placement=Left` | `18523:39885` | `bc20893e142b248e13056070e43488692c9253ff` | `18704:246` | 188 | 45 | 8×16 |
| 11 | `Placement=Left Bottom` | `18523:39889` | `9c27dbee66d5708820c7efcc0d19464d70956b0b` | `18523:39892` | 188 | 20 | 8×16 |
| 12 | `Placement=Right` | `18523:39893` | `e2f527e78909ba83f00114b1a6958a567ac0d528` | `18704:244` | -8 | 45 | 8×16 |
| 13 | `Placement=Right Bottom` | `18523:39897` | `6d1ffe5413877b4e5f8c843094caaa6d0d2b40ac` | `18523:39900` | -8 | 70 | 8×16 |

- **异常命名与重复观测边界**：`Placement=Placement13` 必须保留，不得修正、删除或映射为标准 placement。它与 `Placement=Bottom Right` 的 current Arrow geometry 都是 x=20/y=-8/16×8；这只能登记为重复观测，不得声明语义等价、alias 或 duplicate。
- **Arrow current geometry 边界**：所有 current `Arrow` 都是 absolute、white fill、radius=`0px 0px 0px 0px`；表中 positions/dimensions 只作 current geometry。不得从 raw name 或坐标推断 anchor-side semantics、offset algorithm、transform 或 collision behavior。
- **Shared component observations**：13 个 current components 均为 column、padding=16px、gap=8px、horizontal fixed width=188px、vertical hug、white fill、radius=8px；resolved effect label `shadow-medium`=`0px 4px 12px 0px rgba(0,0,0,.08)`。该 resolved label/value 不证明 stable Effect Style、Variable 或 Token binding。
- **Text/content fixtures**：title fixture 精确为 `Popover title`，textStyle label=`Title/font-scale-title-14`，resolved typography 为 PingFang SC Medium 500、14/22、`rgba(0,0,0,.82)`，hug×hug。body fixture 精确为 multiline `Content\nContent`，textStyle label=`Body/font-scale-body-14`，resolved typography 为 PingFang SC Regular 400、14/22、`rgba(0,0,0,.82)`，horizontal fill/vertical hug。title、body 与 line break 都只是 fixtures，不是 required product copy、slot/cardinality 或 content model；本次未返回 close/action/footer/interactive content semantics。
- **Arrow asset boundary**：`Arrow` 是 returned `IMAGE-SVG` nodes，但没有 returned reusable component identity/key/export/hash/license；禁止虚报为已登记 asset contract，也不下载或修改资产。
- **Blockers/生命周期**：仍缺 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/effect-style/text-style/font/main/instance/override/reference/asset/prototype/reaction closure；Placement property/API/default/legal combinations；`arrow=false` rendered evidence；trigger/content/title/slot/cardinality；open/close/controlled state/events；click/hover/focus/context-menu triggers 与 delay；outside click/Escape/dismiss；portal/layer/z-index/stacking/clipping/scroll lock；anchor/reference geometry、offset、collision/flip/shift/boundary/viewport/scroll/resize；placement/RTL semantics；focus entry/order/trap/return；keyboard/touch；ARIA role/name/description（popover/menu/dialog/tooltip semantics 未裁决）；responsive/mobile/theme/dark/high contrast；motion；deterministic browser evidence。故 `direct_read_complete=false`，Popover 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.15 Radio live-read 观测证据（非完整组件合同）

本节只按用户指定 `SECTION` 与注册 Canvas 的两次 connector live responses 登记有限、可复核观测，并严格区分 Section/component-set spec-page scaffold、current sparse variants、fixtures/resolved values 与产品合同；不构成 Radio/单选完整组件合同，禁止超出返回字段推断：

- **Source/read topology 与身份边界**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；注册 `CANVAS` id=`9659:15916`、raw name=`Radio-单选`。用户 URL node id=`22065:2810`、type=`SECTION`；两次 response 均未返回该 Section 的 raw name，因此不得虚报其名称或 component key。Section 不是 Radio component 或 component set；其 current contents 包含两套同名 `Radio Icons`/`Radios` sets 和一个 `Radio Group` component。身份必须以 file key + Canvas ID + Section ID + set/component ID + key 区分。两次响应都只是 live connector reads，不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Section/spec-page scaffold**：Section parent read 当前 dimensions=622×957px、layout=`none`、white fill、stroke=`rgba(0,0,0,.1)` / 1px；这些只属于 spec-page scaffold，不是 Radio 产品 geometry、layout、背景或边框合同。
- **四个 component-set scaffold 与重复名称边界**：当前返回的四个 sets 如下；四者 description 都为空字符串，四个 set root 均为 layout=`none`、stroke=`#9747FF` / 1px / dash `10,5` / radius 5px。

| scaffold pair | direct set raw name | set id | key | current x/y/dimensions | current set fill |
|---|---|---|---|---|---|
| upper | `Radio Icons` | `12299:13751` | `df15a42774934b65ad9ad3d2129fc548b67a37bc` | x=100 / y=100 / 190×122.25 | not returned |
| upper | `Radios` | `12299:13778` | `0b12617717731d3580f8851742d5599a1aff1ccd` | x=332 / y=100 / 190×122.25 | not returned |
| lower #212121 scaffold | `Radio Icons` | `17296:3886` | `3d52b6d419b84ff206012dc81fbb7f9f44d1cacd` | x=100 / y=635 / 140×222 | `#212121` |
| lower #212121 scaffold | `Radios` | `17296:3908` | `177eb950f6cb2ffba648a8f6c90143331838431f` | x=282 / y=635 / 221×222 | `#212121` |

  上述 set fills、尺寸、位置与描边只作 documentation scaffold；不得凭 `#212121` 或 black-vs-white resolved paint 宣称 Light/Dark theme identity、theme API 或 mapping。同 raw names 必须按 ID/key 区分，禁止 name-only lookup 或 merge。
- **Returned properties 与 raw naming 边界**：两个 `Radios` sets 都只返回 exact lowercase `value`，type=`text`，default=`Option`；current text 的 visible/reference 使用 `value`。两个 `Radio Icons` sets、Section 与 `Radio Group` 均未返回 `propertyDefinitions`。`Selected`/`Style`/`State` 以及 `size`/`checked`/`state`/`disabled` 只来自 direct component raw names，不能虚报为 returned properties、public API、默认值、完整 enums 或 legal combinations。
- **`Radio Icons` 双套 current direct inventory**：以下八行分别列出 lower set `17296:3886` 与 upper set `12299:13751` 当前返回的 paired identity；raw name 与 casing 原样保留。

| # | exact direct `COMPONENT` raw name | lower component id | lower key | upper component id | upper key |
|---:|---|---|---|---|---|
| 1 | `Selected=No,Style=Circle,State=Default` | `17296:3887` | `5de873657dd0363773ec962504ff214e559f3682` | `12299:13752` | `104a79c6fd2ea0d81b7e3a6d9ce230d69cdd0be0` |
| 2 | `Selected=Yes,Style=Circle,State=Default` | `17296:3889` | `ca03f7db6b9c8365397adff0b361b3ddd98428ef` | `12299:13754` | `ab022638e8d0500d3a1b3fef3b170ac7dd1c626b` |
| 3 | `Selected=Yes,Style=Circle,State=Hover` | `17296:3892` | `80b48b34b8a83e3b26b80bfa78a7f09efbea3242` | `12299:13757` | `673d65a690649d7bde3c2cb6a8c7efb30a77c692` |
| 4 | `Selected=Yes,Style=Circle,State=Pressed` | `17296:3895` | `f6c3ce10802f35b3275159681f5f1c667e4bf8d9` | `12299:13759` | `f201e4e7be53d97761b421caf9134deedcd247f1` |
| 5 | `Selected=Yes,Style=Circle,State=Disabled` | `17296:3898` | `0a1907b381001379f99589e8278c5e425135147f` | `12299:13761` | `2000541a9d883e17ef3ff83bf4ceb040e0ad8599` |
| 6 | `Selected=No,Style=Circle,State=Disabled` | `17296:3902` | `1707c68e37f7e850b5d179b3ff12792d89fb9d2f` | `12299:13772` | `e66178adbae49f5bfa012da7c80fe0611fc25152` |
| 7 | `Selected=No,Style=Circle,State=Hover` | `17296:3904` | `a8a04d2c691c267626c580260166d0fd9d336156` | `12299:13774` | `3f4ea61cc907c543f70f1bc37bf18483120d659e` |
| 8 | `Selected=No,Style=Circle,State=Pressed` | `17296:3906` | `5ab2ddd740d9128bb62fff22a2ffd2676c87ec8c` | `12299:13776` | `928fa829dfd4a13c131ac4e3213ac54464765b1b` |

  每套八个名称只是 current response inventory，不是 immutable total 或已证明的 Cartesian product。当前未返回 Focus variant，但 not returned 不等于不存在。
- **`Radios` 双套 current sparse inventory**：以下八行分别列出 lower set `17296:3908` 与 upper set `12299:13778` 当前返回的 paired identity；lowercase dimensions、uppercase `Pressed` 及含空格的 `checked=on Circle` 均原样保留。

| # | exact direct `COMPONENT` raw name | lower component id | lower key | upper component id | upper key |
|---:|---|---|---|---|---|
| 1 | `size=default, checked=off, state=default, disabled=off` | `17296:3909` | `938d683947e3d28d6d81c11f607252666c2aa299` | `12299:13779` | `57a3c8eebc046be3315ad2e3dafcfeeaae428a31` |
| 2 | `size=default, checked=off, state=default, disabled=on` | `17296:3912` | `cfd7977681a783b155f974404c860bbfaec6836f` | `12299:13782` | `bb6d7e6652eb1000ab272678af185c9c303172d7` |
| 3 | `size=default, checked=off, state=hover, disabled=off` | `17296:3915` | `131c1078fa076fd51c0d6f42aad17e2ca965097c` | `12299:13785` | `a9594ecd63a6d9bc8041da12f46ed4de94472a5f` |
| 4 | `size=default, checked=off, state=Pressed, disabled=off` | `17296:3918` | `b6a8d0c912674db33bc7d3c9c41502f2141b6e1f` | `12299:13788` | `0fe6ebdf7adc5f3995ed6771fd4712f7c750e07f` |
| 5 | `size=default, checked=on Circle, state=default, disabled=off` | `17296:3921` | `f334238eefa8fa08c2cb807d35e8cf0aabc3975c` | `12299:13791` | `abc1ad3900d9dd853ee858b029a5a65cef488fd7` |
| 6 | `size=default, checked=on Circle, state=default, disabled=on` | `17296:3924` | `482a200271b3f0e308bb2ae6396fe4c849894efc` | `12299:13806` | `32811e0fa245d9e52e042db5f2110d039d745f31` |
| 7 | `size=default, checked=on Circle, state=hover, disabled=off` | `17296:3927` | `3da2da1ee19ff9adc5347fb12cccadc455e0a656` | `12299:13809` | `a6df0b02d08765bcf5b79d6c40c9d2ac3e6fa3d8` |
| 8 | `size=default, checked=on Circle, state=Pressed, disabled=off` | `17296:3930` | `d2c081502340902e20db10fc6a9e035eede6f56a` | `12299:13812` | `49d159da80909b8da28904895dc976736a453569` |

  该 current inventory 是 sparse：只出现 `size=default`；`disabled=on` 只与 `state=default` 同时出现；没有 `checked=on Circle` 以外的 checked-on value。不得补全组合，也不得推断 legality、defaults 或 state machine。
- **Icon current visual observations**：所有 icon components 当前均为 16×16px。两套 `Selected=Yes,Style=Circle,State=Default` 的 outer 均为 `#495DFF`，inner white ellipse 均为 x=4.7/y=4.7/6.6×6.6；Selected Pressed outer 为 `#3B47F2`。Unselected Hover stroke=`#495DFF`，Unselected Pressed stroke=`#3B47F2`；相关 strokes 的 weight 精确为 `1.3300000429153442px`。upper `12299` pair 的 Unselected Default stroke=`rgba(0,0,0,.12)`，Selected Hover=`#6D80FF` 且 opacity=`0.800000011920929`，Unselected Disabled fill=`rgba(0,0,0,.06)`、stroke=`rgba(0,0,0,.12)`；lower `17296` #212121-scaffold pair 的 Unselected Default stroke=`rgba(255,255,255,.18)`，Selected Hover=`#2F37C7` 且 opacity=`0.800000011920929`，Unselected Disabled fill=`rgba(255,255,255,.06)`、stroke=`rgba(255,255,255,.18)`。每套 Selected Disabled 都返回一个 `IMAGE-SVG` descendant，但这些 responses 未解析其 internal paint 或 component identity；不得虚构颜色/vector，也不得虚报 asset identity、export、hash 或 license。所有 paints 都只是 resolved observations，不是 Variable/Token/theme binding；不得将 opacity 预合成进颜色。
- **Radio row/text fixture**：所有 current `Radios` components 均为 row、alignItems=`center`、gap=8px、hug×hug，并含 16×16px icon。text fixture=`Option`，textStyle label=`Body/font-scale-body-14`，resolved typography 为 PingFang SC Regular 400、14/22，text references `value`。upper pair text default=`rgba(0,0,0,.82)`，disabled=`rgba(0,0,0,.28)` + opacity=`0.5`；lower pair text default=`rgba(255,255,255,.82)`，disabled=`rgba(255,255,255,.28)` + opacity=`0.5`。不得预合成 alpha，也不得推断 theme binding。`Option` 只是 fixture/default text，不是 required product copy、options model 或 value serialization。
- **Independent `Radio Group` observation**：独立 `COMPONENT` raw name=`Radio Group`、id=`13652:12654`、key=`f3d332a262a5cfb1114b6bcc66e048ea7333c06f`。current layout 为 row、alignItems=`center`、gap=20px、fixed 422×122.25px，位于 Section x=100/y=318.25；这些 position、dimensions 与 gap 只作 current fixture/scaffold。current tree 精确列出五个 `Radios` instances，ids=`13652:12632|13652:12637|13652:12641|13652:12645|13652:12649`；五者都引用 upper component `12299:13779`（`size=default, checked=off, state=default, disabled=off`），value fixture 均为 `Option`。五个实例不是 group cardinality 或 options contract；没有 selected member 也不证明 valid empty selection 或 default semantics。本次未返回 Group property、value 或 selection API。
- **Blockers/生命周期**：仍缺 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/text-style/font/main/instance/override/reference/`IMAGE-SVG` asset/prototype/reaction closure；duplicate same-name set 的 canonical/theme mapping；public API/default/legal combinations 与 Selected-vs-checked mapping；value/name/options/current/defaultValue/controlled/uncontrolled/events/form serialization/validation；mutual exclusion/allow-empty/dynamic options；hover/pressed/disabled/focus-visible state model（focus 未返回）；label click/hit target；keyboard arrow navigation/Space/Tab/roving tabindex/focus order；responsive/wrap/orientation/RTL；theme/dark/high contrast；ARIA radiogroup/radio/name/checked/disabled/error/description/announcements；motion/touch；deterministic browser evidence。故 `direct_read_complete=false`，Radio 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.16 RangePicker live-read 观测证据（非完整组件合同）

本节只按用户指定 `COMPONENT_SET` 与注册 Canvas 的两次 connector live responses 登记有限、可复核观测，并严格区分 component-set scaffold、current sparse inventory、nested references、fixtures/resolved values 与产品合同；不构成 RangePicker/日期范围选择器完整组件合同，禁止超出返回字段推断：

- **Source/read topology 与身份边界**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；注册 `CANVAS` id=`9659:15915`、raw name=`RangePicker-日期范围选择器`。用户 node 为 `COMPONENT_SET` id=`15638:18130`、key=`dacf1250eb9f3ae9a9606d1cbeb8e725f5d5aa0e`、raw name=`Date Range Picker`、description 为空字符串。两次响应只作 live connector reads，不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在，身份必须以 file key + Canvas ID + set ID + component key 区分。
- **Component-set scaffold 与命名边界**：set 当前 layout=`none`、dimensions=624×1424px、stroke=`#9747FF` / 1px / dash `10,5` / radius 5px；这些只作 documentation/component-set scaffold，不是 RangePicker 实例 geometry 或视觉合同。本次未返回 set `propertyDefinitions`；`Property 1` 仅来自 direct `COMPONENT` raw names，不能上提为 returned property、public API、default、完整 enum 或 legal combinations。`Property 1` 与 nested Select raw names 中 `style`/`size`/`filled`/`state`/`search` 两套 naming dimensions 的 canonical mapping 未裁决。
- **9 个 current direct components（按 y 顺序）**：

| # | exact direct `COMPONENT` raw name | component id | key | current x/y/layout/dimensions | current nested Select/popup references |
|---:|---|---|---|---|---|
| 1 | `Property 1=Default Unselected` | `15638:18129` | `fd26931e40398e440b4fbc27f9e1037dc697dd8e` | x=20 / y=20 / row / hug×hug | instance `15627:15743` → Select `14023:17008` / `c7499b774bc15215db6646087c12fdb60094b975`; raw `style=single, size=md, filled=off, state=default, search=off` |
| 2 | `Property 1=Unselected Hover` | `15638:18126` | `bf5e0684a1e8080dd99d9568d6db91bd268bf129` | x=20 / y=100 / row / hug×hug | instance `15627:15754` → Select `14023:17041` / `3c38363d9c843bbb8812b1fe2a85069da1c1418e`; raw `style=single, size=md, filled=off, state=hover, search=off` |
| 3 | `Property 1=Dropdown Select` | `15638:18122` | `cd2076da99067021745876cb8534085635a68638` | x=20 / y=180 / layout none / 584×392 | field `15627:15768` → Select `14023:17041` / `3c38363d9c843bbb8812b1fe2a85069da1c1418e`; popup instance `15638:16095` → component `15638:16094` / `f0af70183fe203b6dba84cb1fb87c2505bf12a94`, raw `Date Range Picker` |
| 4 | `Property 1=Unselected Disabled` | `15638:18124` | `9eed971f0a11e99614bfb2562f86a3a05ff63c37` | x=20 / y=612 / row / hug×hug | instance `15638:16441` → Select `14023:17052` / `692c043e60f693dbd130e5909934d2ebb1cd88a7`; raw `style=single, size=md, filled=off, state=disabled, search=off` |
| 5 | `Property 1=Selected` | `15638:18125` | `bd14a1a8d6f0609150cbc227611a1814ca917dd0` | x=20 / y=692 / row / hug×hug | instance `15638:16396` → Select `14023:17102` / `cb0363ed649f24786334365d0e54a34b1ecc12c8`; raw `style=single, size=md, filled=on, state=default, search=off` |
| 6 | `Property 1=Selected Hover` | `15638:18128` | `32c49947a796fd768913a4ce4db3d2fa9c017074` | x=20 / y=772 / row / hug×hug | instance `15638:16411` → Select `14023:17110` / `5bde9cd0d0f473ae50c9b5aa1acb3f847596ffb1`; raw `style=single, size=md, filled=on, state=hover, search=off` |
| 7 | `Property 1=Re-select` | `15638:18121` | `0c5ccdaf8d961240681aa419e4096d21bfd73e55` | x=20 / y=852 / layout none / 584×392 | field `15638:16456` → Select `14023:17110` / `5bde9cd0d0f473ae50c9b5aa1acb3f847596ffb1`; popup `15638:16457` → component `15638:16094` / `f0af70183fe203b6dba84cb1fb87c2505bf12a94`, raw `Date Range Picker` |
| 8 | `Property 1=Validation` | `15638:18127` | `8f3bf1c23dbe7034898d59ddf2f14f0fb65abee7` | x=20 / y=1284 / row / hug×hug | instance `15638:16946` → Select `14023:17061` / `1fc8d9a216b4fd3d598df24ca1f5bf9df144f3fa`; raw `style=single, size=md, filled=off, state=error, search=off` |
| 9 | `Property 1=Selected Disabled` | `15638:18123` | `b4d83f2cca7bcba690f6f0709b3340e0f89cbd96` | x=20 / y=1364 / row / hug×hug | instance `15638:16427` → Select `14023:17126` / `eb6d14333e2d33dc4dc7103003890b34fff297b9`; raw `style=single, size=md, filled=on, state=disabled, search=off` |

  上表只是 sparse/current response inventory，不是 immutable total 或完整 state model；Focus/Pressed 未返回不能解释为不存在，也不得补齐未返回组合。两套 naming dimensions 的映射仍未裁决。
- **Field current observations 与 fixture 边界**：current fields 均为 row、padding=`8px 12px`、alignItems=`center`、gap=8px、height=40px、horizontal hug、radius=12px。默认 selected/unselected stroke=`rgba(0,0,0,.08)` / 1px；hover/open stroke=`#495DFF` / 1px；disabled fill=`rgba(0,0,0,.03)`，当前未返回 stroke；Validation stroke=`#F12234` / 1px。placeholder 精确为 `年/月/日 ～ 年/月/日`，textStyle label=`Body/font-scale-body-14`，resolved typography=PingFang SC Regular 400、14/22、`rgba(0,0,0,.28)`；Selected fixture=`2026/04/12 ～ 2026/04/22`、color=`rgba(0,0,0,.82)`；Re-select field=`2026/04/12 ～ 2026/05/06`；Selected Disabled 与首个 selected 值相同，但 color=`rgba(0,0,0,.46)`。Validation 还返回 absolute x=0/y=40/48×18 的 `必填提醒`，textStyle label=`Body/font-scale-body-12`，resolved typography=PingFang SC Regular 400、12/18、`#DA0B20`。这些均为 current fixtures/resolved observations，不是格式、默认值、文案或 Token/font binding。
- **Instance componentProperties mismatch**：current instance properties 多数返回 `Show Right icon=true`、`Show Left icon=false`、`show caption=false`；Selected Hover 返回 `Show Right icon=false` 且显示 `XCircleFill`。Validation 在 `show caption=false` 的同时仍返回 `必填提醒`；这是未裁决的 current response mismatch，不得修正、隐藏文案或推断 property semantics。
- **图标 identity/观测边界**：`FieldTypeDate` id=`9704:21169`、key=`ce4853800bc0db3a2bd7c19a89d41d03815dbc4e`，为 `IMAGE-SVG` 16×16px，visible references=`Show Right icon`；Selected Hover 使用 `XCircleFill` id=`9704:20529`、key=`e5d9af8a021db4d47a0484025506010540c2f3bf`，为 `IMAGE-SVG` 16×16px。Re-select 虽引用 selected-hover Select component，却在当前 resolved tree 中显示 `FieldTypeDate` 且 `Show Right icon=true`；只按观测登记，不据此裁决 variant/property mapping。不得虚构 SVG internal vector/paint、export/hash/license 或 stable asset contract。
- **Open variants/popup current observations**：`Dropdown Select` 与 `Re-select` 的 field 均位于 x=0/y=0，popup 分别位于 x=0/y=44；两者 popup 都解析到 component `15638:16094` / key=`f0af70183fe203b6dba84cb1fb87c2505bf12a94` / raw `Date Range Picker`。popup 当前为 row、alignItems=`center`、hug×hug、white fill、stroke=`rgba(0,0,0,.06)` / 1px、radius=20px；resolved `shadow-medium`=`0px 4px 12px 0px rgba(0,0,0,.08)`，不证明 stable Effect Style/Token binding。双面板 current fixture 各为 padding=16px、center、gap=12px，显示 `2025年` 的 `4月`、`5月`，weekday 精确为 `日 一 二 三 四 五 六`。Date cells 为 32×32px/radius 8px；date rows gap=6px，calendar container 为 column/gap 8px；Body 14 centered。上述 layout、文案与月份只作 current fixture。
- **Date Cell nested reference 边界**：相关 set id=`13652:18384`、key=`0d2b05eebcf889a1cee4145a055485c92fc0ffd7`、raw name=`Date Cell`、description 为空；current returned references 包括 `State=Other` `13652:18393` / `4068597ab3c4cad193fa269eb544e64edf7d424f`、精确保留 typo `State=Defaut` `13652:18391` / `e576ee0465aadd5602f192c2674585e13430e9c4`、`State=Today` `13652:18389` / `e0053fffacadf4615e8caf2304e715982ecab479`、`State=Selected` `13652:18385` / `87a9bb90683930738ec01aafa0155c869f90a36e`。default text=`rgba(0,0,0,.82)`，Other=`rgba(0,0,0,.28)`，Today stroke/text=`#495DFF`，Selected fill=`#495DFF`/white，range backing=`rgba(109,128,255,.12)`；这些只是 resolved fixtures，不是完整 state model、Token 或 theme binding。
- **Range fixtures、年份 mismatch 与 reference/annotation 边界**：Dropdown Select 当前第一月以 `12`/`22` 为 selected endpoints 并显示 range backing；Re-select 当前展示从 `12` 到次月 `6` 的 spanning fixture。Re-select 字段值年份为 2026，但双月 headers 为 2025；必须显式保留为 fixture mismatch/未裁决，禁止改写年份或推断数据绑定。Dropdown Select tree 还返回 `Pointing hand` `IMAGE-SVG` id=`11980:13115`、key=`606799257faa9353d83394511dea48c5f848cf97`、32×34px、x=53/y=187、shadow color=`rgba(16,22,26,.4)`；它只作演示 annotation，不是 hover/click/hit-target evidence。`Year & Month Toggle`、Button/navigation，以及 nested Select/Date Cell 均只作为 references，不能视为本轮已完整提取的独立合同。
- **Blockers/生命周期**：仍缺 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；Variable/Style/effect/text-style/font/main-instance-override/reference/prototype/reaction/asset closure；nested dependency completeness；`Property 1` 与 Select dimensions 的 canonical mapping、API/default/legal combinations；value/start/end/defaultValue/open/controlled/events/form serialization/validation；date format/parser/timezone/locale/calendar/week-start/min/max/disabled dates/range order/same-day/partial/invalid/clear/reselect；open-close/dismiss/portal/layer/z-index/collision/scroll；month/year navigation；hover/pressed/disabled/focus-visible；keyboard Tab/Escape/arrows/Home/End/PageUp/PageDown/Enter/Space、focus entry/order/return；hit target；responsive/mobile/orientation/RTL/theme/dark/high contrast；ARIA combobox/dialog/grid/gridcell/name/value/error/description/live announcement；motion/touch；deterministic browser evidence。故 `direct_read_complete=false`，RangePicker 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.17 ScrollArea/Scrollbar live-read 观测证据（非完整组件合同）

本节只按用户指定 `COMPONENT_SET` 与注册 Canvas 的两次 connector live responses 登记有限、可复核观测，并严格区分 component-set/documentation scaffold、current sparse inventory、resolved paint/geometry 与产品合同；不构成 ScrollArea/Scrollbar 完整组件合同，禁止超出返回字段推断：

- **Source/read topology 与身份边界**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；注册 `CANVAS` id=`9754:1315`、raw name=`ScrollArea-滚动条`。用户 node 为 `COMPONENT_SET` id=`14654:1219`、key=`90a9687ff267112e707e795acd605858c048a94e`、raw name=`Scrollbar`、description 为空字符串。两次 response 的 set/children 一致，但它们只作 connector live reads，不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在，身份必须以 file key + Canvas ID + set ID + component key 区分。
- **Component-set scaffold 与命名边界**：set 当前 layout=`none`、dimensions=147×210px、stroke=`#9747FF` / 1px / dash `10,5` / radius 5px；这些只作 component-set/documentation scaffold，不是运行时 scroll area 的尺寸或边框。本次未返回 set `propertyDefinitions`；direct `COMPONENT` raw name 中 lowercase `state` 只能登记为 direct naming dimension，不得上提为 returned property、public API、default、完整 enum 或 legal combinations。
- **2 个 current direct components（按 x 顺序，保留原始 casing）**：

| # | exact direct `COMPONENT` raw name | component id | key | current x/y/layout/sizing | 唯一 returned `RECTANGLE` |
|---:|---|---|---|---|---|
| 1 | `state=Default` | `14654:1217` | `28af79e76934940581ba43fe478fcbadc24deb7c` | x=20 / y=20 / row / alignItems=`stretch` / gap=`10px` / horizontal hug / vertical fixed / height=170px | id=`14654:1208`；width=4px；vertical fill（current resolved height=170px）；fill=`rgba(0,0,0,.12)`；radius=4px |
| 2 | `state=Hover` | `14654:1218` | `3ce388a749f454bad8ff11d53da2343a1c385bac` | x=101 / y=20 / row / alignItems=`stretch` / gap=`10px` / horizontal hug / vertical fixed / height=170px | id=`14654:1209`；width=6px；vertical fill（current resolved height=170px）；fill=`rgba(0,0,0,.12)`；radius=4px |

  该 current inventory 的精确视觉结论仅为：Default 与 Hover 共享 170px height、resolved fill=`rgba(0,0,0,.12)` 与 radius=4px，宽度分别为 4px 与 6px。单子节点 row 的 gap 仍按返回值登记，不推断可见间距。
- **Sparse inventory 与状态边界**：上表只是 sparse/current response inventory，不是 immutable total 或完整 state model。当前未返回 Pressed、Dragging、Disabled、Focus、Horizontal 等 variant，但不能解释为这些 variant 不存在；不得补齐任何未返回组合，也不得从两个 raw names 推断状态转换或合法性。
- **Geometry 与轴向边界**：current geometry 是竖向矩形观测，但不能上提为仅支持 vertical 的 orientation API。170px 不能解释为 thumb length、track length、viewport/content ratio、minimum thumb size 或滚动进度；组件 x/y 与 set dimensions 都只是 scaffold，不能用作运行时定位或容器尺寸。
- **Tree/架构未返回边界**：本次 tree 在每个 direct component 下只返回一个 `RECTANGLE`，没有返回 track、viewport、content、buttons 或 ScrollArea container；只能记录“本次 tree 未返回”，不能推断产品中不存在。不得据此判断 native vs custom scrollbar、overlay vs reserved-gutter，或 always-visible vs auto-hide。
- **Paint 与 visual delta 边界**：`rgba(0,0,0,.12)` 只是 current resolved paint，不是 Variable/Token/theme binding。4px→6px 只是两个 current states 的几何差异，不得宣称 hover trigger、transition、duration、easing、layout reservation、pointer hit target 或 animation。
- **Blockers/生命周期**：仍缺 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；Variable/Style/main-instance-override/reference/prototype/reaction closure；property/API/default/legal state combinations；track/viewport/content ownership 与 geometry；thumb size/position/scroll ratio/minimum size；axis/orientation/horizontal variants；native/custom/overlay/gutter/visibility/auto-hide delay；wheel/track click/page jump/thumb drag/pointer capture/touch；keyboard arrows/PageUp/PageDown/Home/End/Space；hover/pressed/dragging/disabled/focus-visible；nested scroll/scroll chaining/overscroll/snap；programmatic scroll/events/controlled state；responsive/mobile/RTL/theme/dark/high contrast/reduced motion；browser/OS scrollbar differences；hit target；ARIA scrollbar role/name/orientation/valuemin/valuemax/valuenow/controls 与 announcements；deterministic browser evidence。故 `direct_read_complete=false`，ScrollArea/Scrollbar 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.18 Search live-read 观测证据（非完整组件合同）

本节只按注册 Canvas 与用户 node 的两次 connector live responses 登记有限、可复核观测，并严格区分 documentation scaffold、三组不同身份、current rendered inventory、resolved geometry/content 与产品合同；不构成 Search、SearchInput 或 SearchBar 完整组件合同，禁止超出返回字段推断：

- **Source/read topology 与 documentation frame 边界**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；注册 `CANVAS` id=`9640:64731`、raw name=`Search-搜索框`。用户 node `16651:3653` 实际为 `FRAME`、raw name=`组件库`，不是 Search component/component set，且未返回 component key。Canvas read 返回该 frame 为 792×1883px、layout=`none`、white fill、radius=48px；其内部 x=40/y=40 的 column 使用 padding=`0px 40px`、gap=80px。标题 fixtures 包含 connector-styled `web  / 组件名称`（`web` 后保留两个空格）与 `搜索框`，Footer fixtures 为 `@ Lingee 2026`、`组件设计师：xxx`。这些全部只是 documentation scaffold，不是 Search geometry、copy 或 API。两次读取只作 connector live responses，不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **三组身份必须分离，禁止 name-only merge**：

| identity role | exact current identity | returned scaffold/instance boundary |
|---|---|---|
| 主 `SearchInput` set | `COMPONENT_SET` id=`15942:34115`；key=`ef2d0a682334d09f57257112385b127d057b8680`；raw name=`SearchInput`；description 为空 | layout=`none`；horizontal/vertical fixed；562×994px；stroke=`#9747FF` / 1px / dash `10,5` / radius 5px；仅为 component-set scaffold |
| `SearchBar` set | `COMPONENT_SET` id=`15942:34323`；key=`c4316b0ed402cf1b17adbf3732c59a116bcdbf4b`；raw name=`SearchBar`；description 为空 | layout=`none`；horizontal/vertical fixed；352×255px；stroke=`#9747FF` / 1px / dash `10,5` / radius 5px；仅为 component-set scaffold |
| 文档 frame 外独立同名实例 | `INSTANCE` raw name=`SearchInput` id=`10387:1935`，引用 component id=`10387:1873`、key=`f0807fd8126079b46bf5fa18723d41a002b36b34`、raw name=`state=default, size=small`；其另一同名 set id=`10387:1881`、key=`d8a37e633e7199d23ea92fe5a8ed55916cf0876c`、raw name=`SearchInput`、description 为空 | current instance=180×32px、row、padding=`8px 12px`、center、gap=8px、stroke=`rgba(0,0,0,.08)` / 1px、radius=999px，fixture 为 placeholder `搜索项目` + Search icon；它不是主 set `15942:34115` 的 variant，canonical/legacy mapping 未返回 |

- **`propertyDefinitions` 与 direct naming dimensions 边界**：所有上述 set 与用户 frame 均未返回可用于本合同的 `propertyDefinitions`。下列 `Size`、`State`、`Type` 等只来自 exact direct `COMPONENT` raw names，不能上提为 public properties/API/default、完整 enum 或 legal combinations。
- **主 `SearchInput` set 的 18 项 current direct inventory（保留 raw casing）**：

| exact direct `COMPONENT` raw name | component id | key | current x/y | current w×h |
|---|---|---|---|---|
| `Size=Large, State=Default` | `15942:34098` | `2d09b68f85533c18bde5837501a7830432e2e011` | x=22 / y=20.26 | 220×48px |
| `Size=Large, State=Hover` | `15942:34112` | `5faffb7897662f7afc196b2aef180c1ced62ada8` | x=322 / y=20 | 220×48px |
| `Size=Large, State=Active` | `15942:34097` | `ec91f148d37ea90c61b8549e76440c8d3a39cef7` | x=22 / y=108 | 220×48px |
| `Size=Large, State=Filled` | `15942:34107` | `6636ec24e041a0eaf1a7603163f416eeb07924bf` | x=322 / y=108 | 220×48px |
| `Size=Large, State=Focus` | `15942:34095` | `aa7c65964f8a32cf2582d37a03a984bc868f7725` | x=22 / y=196 | 220×48px |
| `Size=Large, State=Blur` | `15942:34104` | `7844740b8d9bc1fddc841f32f3ac7f3c18b5e24f` | x=322 / y=196 | 220×48px |
| `Size=medium, State=Default` | `17755:8435` | `ca9b81455b1f0757dfb7c5ba559e00c8688a9426` | x=20 / y=351.26 | 220×40px |
| `Size=medium, State=Hover` | `17755:8431` | `2ca663ffc09eb15c80017df9da1f409ee1031048` | x=320 / y=351.26 | 220×40px |
| `Size=medium, State=Active` | `17755:8440` | `670f61d5e11383a9e157ebf7a723af74ffcec877` | x=20 / y=439.26 | 220×40px |
| `Size=medium, State=Filled` | `17755:8446` | `dfaaa73803b7cb7abdb2e74c23399522609bd637` | x=320 / y=439.26 | 220×40px |
| `Size=medium, State=Focus` | `17755:8451` | `4b475784eb797a2b7c992659ee311df2cc16c1dc` | x=20 / y=527.26 | 220×40px |
| `Size=medium, State=Blur` | `17755:8458` | `b353d4bb34e3b8f4ad906d24bec1dddb21faa986` | x=320 / y=527.26 | 220×40px |
| `Size=small, State=Default` | `17755:8477` | `fe691b0b2584a79d7ca5c69197779c1c9f7ca955` | x=22 / y=724.26 | 220×32px |
| `Size=small, State=Hover` | `17755:8482` | `b74418788a864472a1c09eae398d102fa04c6c88` | x=322 / y=724.26 | 220×32px |
| `Size=small, State=Active` | `17755:8486` | `a107cdae74e19d1676fe8d9e5b6b65659978d114` | x=22 / y=812.26 | 220×32px |
| `Size=small, State=Filled` | `17755:8492` | `87994d458bf530635b65faf215258fb5ed2036f6` | x=322 / y=812.26 | 220×32px |
| `Size=small, State=Focus` | `17755:8497` | `799ee51a0fff88bafd8a80667478103000f6653e` | x=22 / y=900.26 | 220×32px |
| `Size=small, State=Blur` | `17755:8504` | `4bb132a5b0b48bdd080a9ad59b8967864be4c7bb` | x=322 / y=900.26 | 220×32px |

  该表仅是 current 3×6 rendered inventory，不是 immutable total 或已批准 API。全部 current specimens width=220px、radius=24px，returned padding=`12px 16px`；Large/medium/small 高度分别为 48/40/32px。Default 与 Filled stroke=`rgba(0,0,0,.08)` / 1px；Hover stroke=`rgba(0,0,0,.18)` / 1px；Active、Focus、Blur stroke=`#495DFF` / 1px。Blur 的蓝边必须按返回值保留，不得修正、重命名或据此推断浏览器 focus/blur state machine。不同 size/state 的 root row/column 与内部 frame shape 有差异，只按 current tree 登记，不得规范化。
- **主 `SearchInput` current content/typography fixtures**：Default/Hover 为 exact placeholder `搜索项目` + Search icon；文本为 `Body/font-scale-body-14`、PingFang SC Regular 400、14/22、`rgba(0,0,0,.28)`。Active 为 exact caret-like fixture `｜`（full-width vertical bar），fixed width=8px、PingFang SC Regular 400、14/20、center、`#495DFF`，并有 clear + Search icons。Focus 的 connector-styled raw 为 `'{ts2}用户体验部{/ts2}{ts3}｜{/ts3}'`，textStyle exact `Body/font-scale-body-14 (392:5964)`，ts2=`rgba(0,0,0,.82)`、ts3=`#495DFF`，并有 clear + search。Blur 分别返回 `用户体验部` 与 `｜`，并有 clear + search；Filled 返回 `用户体验部` + clear + search。所有文本都是 fixture；pipe/caret-like glyph 不证明真实 caret、selection 或 IME 行为。
- **主 `SearchInput` icon identities 与行为边界**：Search icon component id=`9704:20371`、key=`9b1c63b53b1d15ebe2a5a274f718245b8dc419cc`、raw name=`Search`、`IMAGE-SVG` 16×16px；clear icon `XCircleFill` id=`9704:20529`、key=`e5d9af8a021db4d47a0484025506010540c2f3bf`、`IMAGE-SVG` 16×16px。它们只证明 current descendant identity，不证明 click action、visibility rule、hit target 或 focus retention；不得虚构 SVG vector/paint/export/hash/license。
- **`SearchBar` set 的 3 项 sparse/current direct inventory**：

| exact direct `COMPONENT` raw name | component id | key | current x/y | current outer geometry |
|---|---|---|---|---|
| `Type=Tab, State=Default` | `15942:34322` | `0ebfe23c33075dabd239e84a4aec663395460f4f` | x=20 / y=20 | row；padding=`4px 16px 4px 4px`；center；gap=71px；hug×hug |
| `Type=Bar, State=Active` | `15942:34320` | `e260272ff83d4ef52c4994260c31330c45be3d1b` | x=20 / y=100 | row；padding=`4px 16px 4px 4px`；center；gap=8px；hug×hug |
| `Type=Bar, State=Filled` | `15942:34319` | `052b19d04a1863239f85093f23313189fd782b94` | x=22 / y=190 | row；padding=`4px 16px 4px 4px`；center；gap=8px；hug×hug |

- **Tab specimen 与 nested Tabs references**：`Type=Tab, State=Default` 的 current Tabs instance `16651:1160` 引用 component `13134:7802`、key=`6070fa9db3b00da8020e6e6c1f1bb4724557d869`、raw name=`type=local-outline, size=Default`，instance property 为 `line=true`，row gap=4px。fixture selected `全部` 使用 item component `13134:7825`、key=`feb05914df3fdd42651cde74d20729e4b5cf0039`、raw exact `state=selected,selected=Yes`，stroke/text=`#495DFF`、radius=999px；unselected `ABI` / `数据云` 使用 component `13145:7695`、key=`f322e86e7d643e134a095b409c3dae50a06e954e`、raw exact `state=default, selected=No`，text=`rgba(0,0,0,.46)`。Tabs set `13134:7779` / key=`56576903851f443271846c4f805620b834c61825` 与 item set `13134:7824` / key=`1ef51013bd47d366a781efe8e5f710ca7b87ddef` 只作 nested references；Search icon id=`15530:16890`、key=`7ea685327f24e2190197a206578a11a4dbccd7c5`、raw name=`Search`、`IMAGE-SVG` 16×16px。
- **Bar Active specimen**：inner=256×32px、row、padding=`0px 12px`、gap=4px、stroke=`#495DFF` / 1px、radius=999px；包含 lowercase `search` icon id=`141:1069`、key=`2ce12df9af5e922a07cbb3ff1149bfc99cb68d21` 与 exact `｜`（`#495DFF`）。outer `x-lg` id=`14:1925`、key=`85dcfce571147106ed0f4c198bbb218d42b757ba`、`IMAGE-SVG` 16×16px。
- **Bar Filled specimen**：outer/inner geometry 与 Active 相同，inner stroke=`rgba(0,0,0,.08)` / 1px；fixture `电商` 为 `rgba(0,0,0,.82)`，internal `x-circle-fill` id=`14:1892`、key=`896d84120d501aae50c57f231d41b5ad4fc0c0dc`，并包含同一 lowercase `search` 与 outer `x-lg`。
- **SearchBar/架构边界**：上述 3 项只是 sparse/current inventory，不证明 `Type`/`State` 完整组合、Tab 与 Bar 切换、Tabs 对 query scope 的语义或任何搜索行为。所有 nested Tabs/icon 都只是 references，不是本轮已完整提取的独立合同；`SearchInput` 与 `SearchBar` 也不得合并为单一 API。
- **Blockers/生命周期**：仍缺 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；Variable/Style/text-style/font/main-instance-override/reference/prototype/reaction/asset closure；重复 `SearchInput` 与多个 Search icon 的 canonical/legacy mapping；property/API/default/legal `Size`/`State`/`Type` 组合及 Active/Focus/Blur/Filled 语义；value/defaultValue/placeholder/controlled/uncontrolled/onInput/onChange/onSearch/onClear/submit；Enter/Escape、IME/composition、debounce/throttle、query normalization；clear/search action、visibility、hit target、focus retention；disabled/readOnly/error/loading；autocomplete/autofill；suggestions/results dropdown/empty/error；Tabs scope 与 selection；keyboard/focus order；responsive width/long text/truncation/mobile/RTL/theme/dark/high contrast；ARIA search/searchbox/combobox/textbox/button/tablist/tab/name/description/results/live announcements；motion/touch；deterministic browser evidence。故 `direct_read_complete=false`，Search 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.19 Select live-read 观测证据（非完整组件合同）

本节只按注册 Canvas 与用户 component set 的两次 live connector response 登记 current inventory、documentation scaffold、resolved value 与 identity 事实，并与正式合同严格分离；不构成 Select/选择器完整组件合同，禁止超出返回字段推断：

- **Source topology / identity**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；注册 `CANVAS` id=`13940:4020`、raw name=`Select-选择器`。用户 node 本身是同一 Canvas 内的 `COMPONENT_SET` id=`14023:17042`、key=`a449432aca004b0f537e507a0bd76128ef0f3d6e`、raw name 精确为 lowercase `select`、description 为空字符串。两次 read 对该 set 的 id/key/name 返回一致；Canvas 与 set 必须保持为两个不同 node，禁止合并身份，也禁止 name-only lookup/merge。两次响应都只是 live connector responses，不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Canvas documentation scaffold**：Canvas 当前 `SECTION` raw name=`Light Mode`、id=`15042:9007`，尺寸=4300×3600px、white fill；页头 fixture 精确为 `web  / 选择器`（`web` 后两个空格），标题 fixture=`选择器组件`。documentation labels 包含 exact `filled:off`、`filled:on`、`search=off`、`search=on`、`Single Select`、connector 返回的 `Multiple Select\_`、`size:sm`、`size:md\\(default\\)`、`size:lg` 及 `default/hover/focus/disabled/error`。上述 Section、页头、标题和 labels 全部只属于 documentation scaffold，不是 public API、default、完整 enum、运行时状态模型或产品 copy。
- **Component-set scaffold**：set current dimensions=1300×2520px、layout=`none`、stroke=`#9747FF` / 1px / dash `10,5`、radius=48px；这些只属于 current component-set scaffold，不是 runtime geometry、边框、尺寸或布局合同。

当前 response 只返回以下 3 个 formal `propertyDefinitions`；raw casing、空格与默认值必须原样保留：

| exact raw property name | type | default |
|---|---|---|
| `show caption` | boolean | `false` |
| `Show Left icon` | boolean | `false` |
| `Show Right icon` | boolean | `false` |

`style`、`size`、`filled`、`state`、`search` 仅来自 direct `COMPONENT` raw names 或 documentation labels，不是 connector-returned `propertyDefinitions`，不得上提为 public API、default、完整 enum 或 legal runtime state model。

- **120 项 current direct inventory**：两次 read 一致返回 120 个属于 set `14023:17042` 的 direct `COMPONENT` current inventory；raw names 精确采用 `style=single|multiple, size=sm|md|lg, filled=off|on, state=default|hover|focus|disabled|error, search=off|on`，当前 response 对 2×3×2×5×2 的 120 个组合均返回 specimen。该计数和 naming matrix 只证明 live/current rendered inventory，不是 immutable total、正式 API、默认值或运行时合法组合证明；Pressed/Open/Loading 等未返回不能解释为不存在。为避免 120 行转录误差，本节只保存 compact matrix 与代表 identity anchors：

| raw naming dimension | current returned values | count |
|---|---|---:|
| `style` | `single`、`multiple` | 2 |
| `size` | `sm`、`md`、`lg` | 3 |
| `filled` | `off`、`on` | 2 |
| `state` | `default`、`hover`、`focus`、`disabled`、`error` | 5 |
| `search` | `off`、`on` | 2 |
| current specimen matrix | `2×3×2×5×2` | 120 |

| representative exact direct `COMPONENT` raw name | id | key |
|---|---|---|
| `style=single, size=md, filled=off, state=default, search=off` | `14023:17008` | `c7499b774bc15215db6646087c12fdb60094b975` |
| `style=single, size=sm, filled=off, state=default, search=off` | `14981:3534` | `b72fea2a9788412906b102b12b9ba4a8707f6b54` |
| `style=single, size=lg, filled=off, state=default, search=off` | `14991:4385` | `e48245566f2913bf9af30658405124bf0bd9eb6e` |
| `style=multiple, size=md, filled=off, state=default, search=off` | `14310:19988` | `6ed3e9f2780980f4ea2c0f1cc62ddacf104f4256` |
| `style=multiple, size=md, filled=off, state=default, search=on` | `14991:5036` | `65403575e3266297ce6aea72d1532370d3dd084e` |
| `style=single, size=md, filled=on, state=default, search=off` | `14023:17102` | `cb0363ed649f24786334365d0e54a34b1ecc12c8` |
| `style=multiple, size=md, filled=on, state=default, search=off` | `14310:7184` | `75003bddb6f0e023a169c16b6c902a3c973bb1df` |
| `style=multiple, size=md, filled=on, state=default, search=on` | `14991:5159` | `1b49980732d12c57357eb5572964d81293ef49e7` |
| `style=single, size=md, filled=off, state=hover, search=off` | `14023:17041` | `3c38363d9c843bbb8812b1fe2a85069da1c1418e` |
| `style=single, size=md, filled=off, state=focus, search=off` | `14023:17043` | `f8bf6a01400d29f0b875633f21c76f2eb2b12211` |
| `style=single, size=md, filled=off, state=disabled, search=off` | `14023:17052` | `692c043e60f693dbd130e5909934d2ebb1cd88a7` |
| `style=single, size=md, filled=off, state=error, search=off` | `14023:17061` | `1fc8d9a216b4fd3d598df24ca1f5bf9df144f3fa` |

- **Current geometry / sizing boundary**：`sm|md|lg` current heights 分别为 32/40/48px；root row generally 为 padding=`8px 12px`、alignItems=`center`、gap=8px、radius=12px。`filled=on, style=multiple` 的 current selected-value specimens 固定 width=260px，通常 padding=`8px 12px 8px 6px`；必须保留异常 component `14991:5271`（raw `style=multiple, size=md, filled=on, state=disabled, search=on`）返回 padding=`8px 12px`，而不是通常的 left=6px。其他 single 与 `filled=off` specimens 只是 hug-width observations，不构成 width API。
- **Current resolved visual observations**：default stroke=`rgba(0,0,0,.08)` / 1px；hover/focus stroke=`#495DFF` / 1px；error stroke=`#F12234` / 1px；disabled current root fill=`rgba(0,0,0,.03)`，且未返回 stroke。focus 与 `ChevronUp` 相关，而其他 shown states 多数使用 `ChevronDown`；filled multiple hover 使用 `XCircleFill`。这些只作 current resolved correlations，不证明 Variable/Style binding，不得推断 open/closed transition、trigger、animation，也不得断言 focus 总表示 popup open。
- **Typography / caption / copy fixtures**：Body14 为 PingFang SC Regular 400、14/22；caption Body12 为 12/18。placeholder exact `请选择` resolved color=`rgba(0,0,0,.28)`；selected `选项`/`内容` 一般为 `rgba(0,0,0,.82)`；disabled selected `选项` 为 `rgba(0,0,0,.46)`。normal caption exact `说明描述文字` 为 `rgba(0,0,0,.46)`；`filled=off` error fixture exact `必填提醒`，`filled=on` error fixture exact `校验错误提示`，prompt paint=`#DA0B20`。Captions 按 size absolute 位于 y=32/40/48，current width=48px 或 72px、height=18px。所有文案、字色、位置均只作 current fixture/resolved observation，不是产品 copy、validation 或 layout API。
- **Search/caret-like fixture 边界**：`search=on` 的 focus fixtures 包含 pipe-like `|`，位置可在 `请选择` 前、`内容` 后，或 multiple tags 后；这不证明真实 caret、text input、filtering、IME 或 selection behavior。必须保留 current inconsistency：`filled=on, style=single, state=disabled, search=on` 返回 `选项` 而不是 `内容`。`show caption` reference 出现在 normal description text 上，而 current error/required texts 未返回同一 property reference；不得推断一个 boolean 控制全部 helper/error content。
- **Multiple selected-value/tag fixtures**：multiple filled specimens 含 selected-value tag fixtures `选项一`/`选项二` 与 overflow `Threedots`。current active tag root fill=`rgba(0,0,0,.03)`、radius=6px，通常 height=24px、padding=`3px 6px`；labels 为 Body12、`rgba(0,0,0,.64)`，close icon=14px；overflow specimen current dimensions=24×22px。disabled tags 使用 `rgba(0,0,0,.46)` text。上述都是 selected-value/chip fixtures，不是 popup options、选项 inventory 或 tag 行为合同。
- **Optional/nested icon identities**：optional left fixture `Envelope` id=`9704:20598`、key=`3cc1618ae3ca519e3f68faa18659a6340da94ffa`，visibility ref=`Show Left icon`；optional right fixture `FieldTypeDate` id=`9704:21169`、key=`ce4853800bc0db3a2bd7c19a89d41d03815dbc4e`，visibility ref=`Show Right icon`。这些 raw names 只作 current fixture identity，不是 mandated semantics。`ChevronDown` id=`9704:20842` / key=`fbb332d9134078158c2aef5c0a0bc688cbd14de4`；`ChevronUp` id=`9704:20841` / key=`cd05805145a3e8bafc2ea9b0dde3aece32d80a99`；`XCircleFill` id=`9704:20529` / key=`e5d9af8a021db4d47a0484025506010540c2f3bf`。
- **Nested tag identities / reference boundary**：nested tag set id=`15039:45871`、key=`555841bdfea758ded4cd02386bf93a73166e00c8`、raw name=`tag`。current normal tag component id=`15039:45703`、key=`2a20a6f29fb72dd7a715e8866b919f994f901d78`、raw name=`Type=Paused, Size=Default, Shape=Default, Style=tint`；disabled tag component id=`15039:45706`、key=`0b4cfca55bc1019be46d8bfa226a6b9e08af46d9`、raw name=`Type=Expired, Size=Default, Shape=Default, Style=tint`。nested `XLg` id=`9704:20548` / key=`d0ca92c75b49960ce717bf7bfd9d6e4f69935b01`；`Threedots` id=`9704:20399` / key=`cb52ad5c041f1d2a60d9c60ff1ed5c41ba7e2b25`。这些都只作 references，不是已完整提取的 Tag/Icon contracts；`Paused`/`Expired` raw names 不得解释为 Select semantics。
- **Popup/options not returned boundary**：两次 tree 都未返回 dropdown popup/overlay/listbox/menu、option item component、option rows/checkmark/groups、search panel/results、empty/loading/scroll container/portal/placement geometry。tags `选项一`/`选项二` 是 selected-value fixtures，不是 options inventory；`not returned` 不等于不存在，focus + `ChevronUp` 也不证明 popup tree 或 open state。
- **Blockers / lifecycle**：仍缺 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；Variable/Style/text/font/main-instance/override/reference/prototype/reaction/asset closure；formal variant property definitions/default/legal combinations；Select API、value/defaultValue/options/label-value schema、controlled/uncontrolled、open/onOpenChange/onChange；single/multiple selection、tag remove/clear/overflow/maxTagCount；search input/filter/IME；popup portal/anchor/placement/collision/z-index/scroll/virtualization/loading/empty/error；pointer/touch/outside-click/Escape；keyboard arrows/Home/End/PageUp/PageDown/Enter/Space/Tab/typeahead；focus-visible/order/return；disabled/readOnly/error/helper semantics；responsive/long text/truncation/mobile/RTL/theme/dark/high contrast/reduced motion；ARIA combobox/listbox/option/multiselectable/expanded/controls/activedescendant/name/description/live announcements；deterministic browser evidence。故 `direct_read_complete=false`，Select 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.20 Slider live-read 观测证据（非完整组件合同）

本节只按注册 Canvas 与用户 FRAME 的两次 live connector response 登记 current direct inventory、documentation/component-set scaffold、resolved appearance/fixture 与 identity 事实，并与正式组件合同严格分离；不构成 Slider/数值滑块完整组件合同，禁止超出返回字段推断：

- **Source topology / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；注册节点为 `CANVAS` id=`16671:21811`、raw name=`Slider-数值滑块`。用户节点是该 Canvas 内 `FRAME` id=`18020:1719`、raw name=`Slider`，不是 `COMPONENT`/`COMPONENT_SET`，没有 component key。Canvas read 返回 current dimensions=1444×1370px、layout=`none`、white fill、radius=48px。两次响应都只是 live connector reads，不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在，Canvas 与 FRAME 必须保持分离身份。
- **Documentation frame boundary**：文档 header raw name=`标题`，current x=0/y=40、width=1444px、column、padding=`0px 64px`、gap=24px；breadcrumb fixture 返回 `web  / 组件名称`，必须保留 connector 返回的 spacing/styled-text 边界，title fixture=`Slider`。Footer current x=0/y=1289、dimensions=1444×72px，copy fixtures 精确为 `@ Lingee 2026`、`交互设计师：xxx`、`视觉设计师：xxx`。header/footer 的名称、位置、尺寸、布局、文案与 Canvas 白底/radius 全部只作 documentation scaffold/copy fixture，不是 Slider runtime geometry、branding、spacing 或 API。
- **用户 FRAME 的五个 direct set identity**：FRAME `18020:1719` 的直系产品节点是五个不同的 `COMPONENT_SET`：`Slider / Slider Mark` `18320:6441`、`Slider / Slider Handle` `18020:5475`、`Slider / Slider Rail` `18020:5592`、`Slider / Slider Track` `18320:4466`、主 `Slider` `18471:3419`。五者必须与注册 Canvas、用户 FRAME 分离身份；下述 `4+4+4+12+6=30` 只称两次 current response 中该 FRAME 的 direct inventory，不是 immutable total 或完整合同。

- **`Slider / Slider Mark` set 与 formal properties**：set id=`18320:6441`、key=`a2c8f24b38e193147edccb1bccef38c43ccdfb9b`、current dimensions=241×126px。connector-returned formal `propertyDefinitions` 只有 `Value`（text，default exact `'100'`）与 `Label`（boolean，default=`true`）。current 4 个 direct components：

| exact direct `COMPONENT` raw name | id | key |
|---|---|---|
| `Layout=Vertical, Active=True` | `18320:6442` | `0b238d2c32d8d3fe58f424bd78ea42f9bfd7811a` |
| `Layout=Vertical, Active=False` | `18320:6445` | `07f353502002002505cbf88bd17f79f3acaa017f` |
| `Layout=Horizontal, Active=True` | `18320:6448` | `1e488afeaa16ebe15013f461a80ce6f77dea5676` |
| `Layout=Horizontal, Active=False` | `18320:6471` | `88f344ae944be441143f09ff4fa8e88854cd75a9` |

  `Layout`/`Active` 只来自 raw names，不是 returned formal variant definitions；不得由四项 current dimensions 或名称推断公开 axes、default 或合法组合。current binding 还存在方向差异：horizontal text 返回 `visible: Label` + `text: Value`，vertical text 只返回 `visible: Label`；必须原样保留，不能据属性名称补连或推断统一 API。

- **`Slider / Slider Handle` set 与 typo-preserved formal property**：set id=`18020:5475`、key=`e48eb195bcecb636d864fee5449990bc89c2d8b6`、current dimensions=239×187px；唯一 returned formal property 是精确 lowercase typo `lable`（boolean，default=`false`）。current sparse direct inventory：

| exact direct `COMPONENT` raw name | id | key |
|---|---|---|
| `State=Default, Vertical=False` | `18020:5476` | `2da2f5c452d00b5f8008e0c7f9a44b409932d56f` |
| `State=Disabled, Vertical=False` | `18222:4234` | `f351c03519987f89966c74de1a55965561cfcb81` |
| `State=Hover, Vertical=true` | `18222:4182` | `c0dafddf1128f35b4c93c65b074ad13f373606ad` |
| `State=Hover, Vertical=False` | `18222:4250` | `a2f7d296c5911c9eaeba05cd035d4f44bb1373bc` |

  `State`/`Vertical` 只来自 raw names；必须保留 `true` 与 `False` 的原始 casing，不得规范化、补全缺失组合或推断 formal enum/default/legal combinations。

- **`Slider / Slider Rail` set**：set id=`18020:5592`、key=`ad9282ad72d3564f4a599ce8e98cd5df3dc3e47b`、current dimensions=181×101px；本次未返回 `propertyDefinitions`。current 4 项 direct inventory：

| exact direct `COMPONENT` raw name | id | key |
|---|---|---|
| `Vertical=False, Hover=Yes` | `18020:5593` | `8622d3710a762b2e91d7443d3f92afc0439e191c` |
| `Vertical=True, Hover=No` | `18020:5602` | `5a88917cd3fa78a5ccd44315ea3ce61288d01727` |
| `Vertical=True, Hover=Yes` | `18020:5619` | `2a5e7a62dde9638329a34cfa6033090a09551c13` |
| `Vertical=False, Hover=No` | `18020:5610` | `c4aaa39cc6ef6fbc44e0dbb9f4d4762badaaa77b` |

  `Vertical`/`Hover` 只作 current raw-name dimensions，不是 formal properties、API、default 或完整/合法 variant 证明。

- **`Slider / Slider Track` set**：set id=`18320:4466`、key=`74b31ae254673d4e31485b3de037a955afd8c1f9`、current dimensions=301×279px；本次未返回 `propertyDefinitions`。current direct inventory 恰为 raw lowercase `state=Default|Disabled|Hover`、`Layout=Horizontal|Vertical`、lowercase `range=true|false` 的 3×2×2 共 12 项；该 compact matrix 只描述 current response，不证明 formal axes、default、immutable total 或 legal combinations：

| `state` | `Layout` | `range` | component id | key |
|---|---|---|---|---|
| `Default` | `Horizontal` | `true` | `18320:4465` | `d6a1cc8419436f8f65769548a258de15b1709e22` |
| `Default` | `Horizontal` | `false` | `18320:5157` | `b7b91ad9fc0c4f149e87f21ee8bad60f07d1426d` |
| `Default` | `Vertical` | `true` | `18320:4622` | `3a59d8c6fe91761666146ad000a52ecda12e8448` |
| `Default` | `Vertical` | `false` | `18320:5161` | `da7c87db1419a2a134efab2282a3cc9da88fde6e` |
| `Disabled` | `Vertical` | `true` | `18320:4654` | `df34f6ee25f25331652c6b882156920240caacdd` |
| `Disabled` | `Vertical` | `false` | `18320:5165` | `3ebfb2ac0a0bc2107bc01aec2440585a5e87433e` |
| `Hover` | `Vertical` | `true` | `18320:4682` | `8df81f65b392d8e5732b054fb53f8fd39f508c49` |
| `Hover` | `Vertical` | `false` | `18320:5169` | `a867cc97f1d983152e40d1a4f9a51d7622da7dac` |
| `Hover` | `Horizontal` | `true` | `18320:4602` | `6dc36a80d6a703895e4ceeb123e19583675ea293` |
| `Hover` | `Horizontal` | `false` | `18320:5173` | `20a600dc836c79df882d81416a80737e117bdf56` |
| `Disabled` | `Horizontal` | `true` | `18320:4574` | `7aba861cdec9f8e156e3968dae52d8fdcb9e319d` |
| `Disabled` | `Horizontal` | `false` | `18320:5217` | `c6492e092181e5c58755864eb23121c7c8c1f56a` |

- **主 `Slider` set**：set id=`18471:3419`、key=`29cd0f78a76a6816eaea3dc66e64a5ef82920669`、current dimensions=572×324px；本次未返回 `propertyDefinitions`。current sparse direct inventory 必须逐项保留 exact typo/casing：

| exact direct `COMPONENT` raw name | id | key |
|---|---|---|
| `type=Default, Vertical=false` | `18471:3418` | `725ce6e97f30d9ce0c02219d812a372c0c8e0769` |
| `type=Default, Vertical=true` | `18471:3896` | `224863a30fd4672c5715a39d86eb92ff498086bc` |
| `type=range, Vertical=true` | `18471:3974` | `498895128a7829fc6174ee6d03a43c75e32a5871` |
| `type=maks, Vertical=true` | `18471:4000` | `3c983c07966803f7aa9fe55640b76898d824847e` |
| `type=range, Vertical=false` | `18471:3420` | `bb6b5fef79e56b11786ceb2269e502858034901d` |
| `type=marks, Vertical=false` | `18471:3537` | `8f17a70a1ba834e26b3001837b35dd4d3f88ef96` |

  `type`/`Vertical` 只来自 raw names；exact typo `maks` 不得修正、合并或映射成 `marks`，也不得由六项 raw names 推断 main Slider public props、default、完整 enum 或 legal combinations。

- **Direct-set scaffold boundary**：上述五个 direct sets 均返回紫色 `#8A38F5` 1px dashed `10,5` component-set scaffold；Mark/Handle/Rail 的 returned radius=`0px 5px 0px 5px`，Track/主 Slider radius=5px。这些 stroke/radius、set dimensions 与排列只作 documentation/component-set scaffold，不是 runtime border、圆角或布局。
- **同名 duplicate identity boundary**：metadata 另返回同 raw name `Slider / Slider Mark` set id=`18020:4343`、key=`c5ec53fda8ebc37e188749641d326041a2cd4a8f`，及其四个 component ids=`18020:4344`、`18020:4347`、`18020:4350`、`18020:4353`。该 set 未作为用户 FRAME `18020:1719` 的 direct set 在 NODES 中展开；不得与 `18320:6441` name-only merge，不得把其四项计入 FRAME 的 30 项，也不得虚报其 direct inventory 或完整合同。
- **Canvas sibling/reference boundary**：Canvas read 比 FRAME read 额外返回 FRAME 外 sibling instance `18048:3792`，其 component id=`18020:5079`、key=`c9b8ade466842b91944aae36852a1d490b7d7a59`、raw name=`Layout=Vertical, Active=True`，所属 set id=`18020:5072`、key=`4bbb5dfeb7fbdb0e03db1217797cfdfbcb8b07e1`、raw name=`Slider / Slider Mark`。它只作 Canvas sibling/reference boundary，不属于用户 FRAME 的五组/30项，也不得与两个其他同名 Mark set 合并或推断 canonical/legacy mapping。
- **Nested Tooltip reference boundary**：nested set id=`15749:2527`、key=`dd66284ed100c8ef0c8492f1dd387b9b58acc704`、raw name=`Tooltips`；本次只返回被 Slider fixtures 引用的 Top component id=`15749:2552`、key=`e7268671dac94c95b6505d766ee7b2335d79fd85` 与 Right component id=`15749:2576`、key=`317df3f186e1c46e24b181572914159b055040f3`。不得据此声称 Tooltip set direct inventory、variants 或 contract 完整。
- **Current geometry boundary**：main horizontal specimens current dimensions=280×16px，vertical=16×280px；track/rail 视觉厚度通常为 6px，returned radius 为 4px 或 200px；handle=16×16px，mark dot=12×12px。全部只作 current/resolved geometry，不能上提为 responsive、hit-target 或 public sizing contract。
- **Rail/track current resolved appearance**：default vertical rail fill=`rgba(0,0,0,.06)`，hover rail=`rgba(0,0,0,.28)`；horizontal `Hover=No` 的 `IMAGE-SVG` returned fill array 为空，必须保持 unresolved，不得用 vertical 值统一补齐。track current default=`#6D80FF`、hover=`#3B47F2`、disabled=`rgba(0,0,0,.06)`。这些值不证明 Variable/Style/Token binding或完整 state behavior。
- **Handle current resolved appearance**：default 为 white fill + `#B7C1FF` 2px stroke；disabled 为 white + `rgba(0,0,0,.18)` 2px stroke；hover inner 为 white + `#495DFF` 2px stroke，并有 current outer 3px `#B7C1FF` ring/radius=8px；frame effect=`0 3px 6px rgba(0,0,0,.04)`。这些只作 current appearance correlations，不证明 hover trigger、focus/pressed 等状态映射或 Token binding。
- **Mark current appearance/typography**：active/inactive white dots 分别使用 `#B7C1FF` / `rgba(0,0,0,.06)` 2px stroke；label 为 Body14、PingFang SC Regular 400、14/22，active text=`rgba(0,0,0,.82)`、inactive text=`rgba(0,0,0,.46)`。这些只作 resolved values，不证明 font/style/Variable binding、active semantics 或 label API。
- **Main current value/range geometry fixtures**：Default horizontal track current width=158.61/280px，Default vertical track current height=168/280px；range horizontal region x=81.48/width=74.07px（inner x=12/width=50px，handles x=0/x=58）；range vertical region y=59.12/height=110.44px（inner y=11/height=87px，handles y=0/y=94）。这些 current geometries不证明 min/max/value/percentage mapping、range tuple 或 thumb ordering。
- **Marks fixtures / binding anomaly**：marks fixture exact values=`0,20,40,60,80,100`。horizontal instances 存在 visible text override 与 returned `Value='100'` property data 不一致的 current fixture/binding anomaly；不得选择其中之一作为权威值，也不得据此定义 marks、step 或 value API。
- **Nested tooltip fixture correlation**：Handle `State=Hover, Vertical=true` current nests Top/Center Tooltip at x=-16/y=-49；`State=Hover, Vertical=False` nests Right/Center Tooltip at x=22/y=-12。tooltip content exact=`50`、background=`#171717`、white text 12/16、padding=`12px 16px`、radius=8px；arrow current dimensions 为 10×5px 或 5×10px。只作 nested fixture correlation，不证明 hover trigger、delay、format、placement algorithm、portal 或 Tooltip contract。
- **Not-returned blockers / lifecycle**：两次 live response 未证明 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；Variable/Style/text/font/main-instance/override/reference/prototype/reaction/asset closure；canonical/legacy duplicate mapping；formal main Slider properties/default/legal combinations；min/max/step/value/defaultValue/range tuple/marks schema、controlled/uncontrolled、`onChange`/`onChangeEnd`、precision/rounding/clamp、track click/jump、drag/pointer/touch capture、range thumb crossing/pushable/min distance、orientation/inversion/RTL、disabled/readOnly、hover/active/pressed/focus-visible、tooltip visibility/format/placement/portal/delay、keyboard Arrow/Home/End/PageUp/PageDown、focus order/return、responsive/theme/dark/high contrast/reduced motion、ARIA slider name/orientation/valuemin/valuemax/valuenow/valuetext、touch target 与 deterministic browser evidence。因此 `direct_read_complete=false`，Slider 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.21 Spin live-read 观测证据（非完整组件合同）

本节只按注册 Canvas 与用户 FRAME 的两次 live connector response 登记 current inventory、documentation/component-set scaffold、resolved SVG geometry/paint 与 identity 事实，并与正式组件合同严格分离；不构成 Spin/加载中完整组件合同，禁止超出返回字段推断：

- **Source topology / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；注册节点为 `CANVAS` id=`14649:18225`、raw name=`Spin-加载中`。用户节点是该 Canvas 内 `FRAME` id=`18020:5772`、raw name=`Spin`，不是 `COMPONENT`/`COMPONENT_SET`，没有 component key。两次返回对 FRAME 内节点树及 set/component identities 一致，但都只是 live connector responses，不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在，Canvas 与 FRAME 必须保持分离身份。
- **Canvas/documentation scaffold boundary**：Canvas read 返回 current dimensions=1444×1367px、layout=`none`、white fill、radius=48px。header raw name=`标题`，current x=0/y=40、width=1444px、column、padding=`0px 64px`、gap=24px；breadcrumb fixture=`web  / 组件名称`，必须保留 connector spacing/styled-text 边界，title fixture=`Spin`。Footer current x=0/y=1265、dimensions=1444×72px，copy fixtures 精确为 `@ Lingee 2026`、`交互设计师：xxx`、`视觉设计师：xxx`。上述 Canvas/header/footer 的名称、位置、尺寸、布局、fill、radius 与文案全部只作 documentation scaffold/copy fixture，不是 Spin runtime layout、branding、spacing 或 API。
- **FRAME direct-set identity boundary**：FRAME `18020:5772` 中两个直系 `COMPONENT_SET` 分别为主 `Spin` set `18020:5986` 与 `Partial Loading` set `18020:6051`。二者必须彼此区分，也必须与注册 Canvas 和用户 FRAME 分离身份；不得按名称或 documentation 层级合并。

- **主 `Spin` set identity/scaffold**：set id=`18020:5986`、key=`335124e763369ea8ea6e34ab17f65cc6a1fb9d32`、raw name=`Spin`、description 精确为空字符串；current dimensions=251×174px，stroke=`#8A38F5` / 1px / dash `10,5` / radius=5px。上述 geometry/stroke 只作 component-set scaffold，不是运行时 Spin 边框、尺寸或布局。
- **主 set property boundary**：本次没有返回 `propertyDefinitions`。下列 lowercase `type` 仅来自 direct `COMPONENT` raw names，不得上提为 formal property、公开 API、default、完整 enum 或 legal combinations。

| # | exact direct `COMPONENT` raw name | id | key | current geometry/layout |
|---:|---|---|---|---|
| 1 | `type=Partial Loading` | `18020:5985` | `c5f233bc50c94ce5ad6e206bb7459f8d2cf6b73c` | 48×48px；row；align=`stretch`；gap=10px |
| 2 | `type=Page Loading` | `18020:5987` | `d7da46b751fd7b1389afda2008ea5dd1fbd05366` | 200×61px；column |

- **Nested rendered-reference correlation**：`type=Partial Loading` 的 child 是 connector-returned `IMAGE-SVG` id=`18020:6071`、raw name=`Partial Loading`，带 `componentId=18020:6058`，current sizing fill parent、resolved 48×48px；这里只用于与下述 large partial component 建立 rendered/nested reference correlation。必须保留 connector type=`IMAGE-SVG`，不得改写为 `INSTANCE`，也不得推断 instance override、公开 API 或完整 reference closure。
- **Page-loading static fixture boundary**：`type=Page Loading` 的 child 是 `IMAGE-SVG` raw name=`Union`、id=`18020:6008`，current dimensions=200×61px、resolved fill=`rgba(0,0,0,.12)`。它只作静态 current SVG/fixture，不证明页面遮罩、骨架、进度、内容结构、透明度动画或页面布局。

- **`Partial Loading` set identity/scaffold**：set id=`18020:6051`、key=`56d840d1f4baeee4040ca3fbcc2c8e65c023c263`、raw name=`Partial Loading`、description 精确为空字符串；current dimensions=88×258px，stroke=`#8A38F5` / 1px / dash `10,5` / radius=5px。上述 geometry/stroke 同样只作 component-set scaffold，不是运行时产品边框或布局。
- **Partial set property boundary**：本次没有返回 `propertyDefinitions`。下列 lowercase `size` 仅来自 direct `COMPONENT` raw names，不是 formal property、公开 API、default、完整 enum 或 legal combinations。

| # | exact direct `COMPONENT` raw name | id | key | current dimensions |
|---:|---|---|---|---:|
| 1 | `size=small` | `18020:6050` | `409068071524f6c4ba7f8c05d9cca2b83a2ed077` | 16×16px |
| 2 | `size=medium` | `18020:6052` | `79d9277c07d1157f186c027726c3da97218c86c1` | 32×32px |
| 3 | `size=large` | `18020:6058` | `44fd6a94b11e4942715a759a28759ee7b9c31d12` | 48×48px |

- **Current inventory count boundary**：两个 direct sets 合计 `2+3=5` 个 current direct components；这只称两次 live response 的 current inventory，不是 immutable total、正式 API、完整 enum 或合法矩阵证明。

- **Partial-loading current SVG geometry / base layer**：每个 Partial Loading component 都包含 connector-returned `IMAGE-SVG` raw name=`Subtract`；current bounds 与共同 resolved fill 如下，只作当前矢量 fixture 观测：

| size fixture | `IMAGE-SVG` id | current x/y | current dimensions | resolved fill |
|---|---|---:|---:|---|
| small | `18020:6048` | 0 / 0.1 | 16×15.9px | `rgba(109,128,255,.08)` |
| medium | `18020:6053` | 0 / 0.19 | 32×31.81px | `rgba(109,128,255,.08)` |
| large | `18020:6059` | 0 / 0.29 | 48×47.71px | `rgba(109,128,255,.08)` |

- **Partial-loading current SVG geometry / foreground layer**：每个 component 的第二层是 connector-returned `IMAGE-SVG` raw name=`Ellipse 33119 (Stroke)`；current bounds 与共同 resolved fill 如下：

| size fixture | `IMAGE-SVG` id | current x/y | current dimensions | resolved fill |
|---|---|---:|---:|---|
| small | `18020:6049` | 7.41 / 0 | 8.56×9.8px | `#495DFF` |
| medium | `18020:6054` | 14.83 / 0 | 17.13×19.6px | `#495DFF` |
| large | `18020:6060` | 22.24 / 0 | 25.69×29.4px | `#495DFF` |

- **Geometry/appearance inference boundary**：上述尺寸与位置只是 current SVG bounds，resolved fills 不证明 Token、Variable 或 Style binding。不得由 raw name、圆环/弧段外观或 bounds 推断 stroke width、角度、起点、旋转方向、帧序列、duration、easing、loop、initial phase、GPU/CSS/SVG 实现或任何 animation contract。`Page Loading` Union 的 200×61px 与 `rgba(0,0,0,.12)` 也只作静态 fixture，不得推断图形语义、内容结构、透明度动画或页面布局。
- **Not-returned blockers / lifecycle**：仍缺 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；Variable/Style/vector/path/stroke/text/font/main-instance/override/reference/prototype/reaction/asset/export/hash closure；formal `type`/`size` definitions、default 与 legal combinations；animation rotation/direction/duration/easing/loop/frame/initial phase；loading boolean/delay/min-display/debounce/concurrency/cancel/async lifecycle；partial/page usage semantics；overlay/backdrop/container/position/z-index/scroll lock/pointer blocking；label/message/progress/determinate/indeterminate/error/timeout；show/hide transition；responsive/theme/dark/high contrast/reduced motion；ARIA status/progressbar/aria-busy/live region/name；keyboard/focus/touch；deterministic browser/motion evidence。因此 `direct_read_complete=false`，Spin 仍为 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.22 Steps live-read 观测证据（非完整组件合同）

本节只按注册 Canvas 与用户 SECTION 的两次 live connector response 登记 current identity/inventory、documentation/component-set scaffold、resolved appearance/fixture 与 binding anomaly，并与正式组件合同严格分离；不构成 Steps/步骤条完整组件合同，禁止超出返回字段推断：

- **Source topology / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；注册节点为 `CANVAS` id=`9659:17975`、raw name=`Steps-步骤条`。用户节点是该 Canvas 内 `SECTION` id=`14605:4717`、raw name 精确为 `Steps  -原子`（`Steps` 与 `-` 之间两个空格），不是 `COMPONENT`/`COMPONENT_SET`，没有 component key。两次返回对 SECTION 内节点树及 set/component identities 一致，但都只是 live connector responses，不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在，Canvas 与 SECTION 必须保持分离身份。
- **SECTION/documentation scaffold boundary**：Canvas response 中 SECTION 的 current dimensions=1202×1530px、layout=`none`、white fill、stroke=`rgba(0,0,0,.12)` / 1px。header raw name=`标题`，current x=0/y=40、width=1202px、column、padding=`0px 64px`、gap=24px，title fixture 精确为 `步骤条-light`。Footer current x=0/y=1458、dimensions=1202×72px，copy fixtures 精确为 `@ 2026`、`组件设计师：明慧`。上述名称、位置、尺寸、布局、fill/stroke、padding/gap 与文案全部只作 documentation scaffold/copy fixture，不是 Steps runtime layout、branding、spacing、产品 copy 或 API。
- **SECTION 的四个 direct set identity**：SECTION 当前包含四个彼此独立的 direct `COMPONENT_SET`：`Steps Item` `14689:2787`、`Steps Node` `14689:3278`、`Steps line` `15176:1006`、主 `Steps` `14826:8163`。四者必须彼此区分，也必须与注册 Canvas/用户 SECTION 分离；禁止 name-only merge。

| direct `COMPONENT_SET` raw name | set id | current x/y | current dimensions | scaffold |
|---|---|---:|---:|---|
| `Steps Item` | `14689:2787` | 70 / 830 | 424×117px | `#9747FF` / 1px / dash `10,5` / radius 5px |
| `Steps Node` | `14689:3278` | 520 / 830 | 657×360px | `#9747FF` / 1px / dash `10,5` / radius 5px |
| `Steps line` | `15176:1006` | 70 / 999 | 132×112px | `#9747FF` / 1px / dash `10,5` / radius 5px |
| `Steps` | `14826:8163` | 70 / 269 | 757×362px | `#9747FF` / 1px / dash `10,5` / radius 5px |

上述位置、尺寸、stroke/dash/radius 与 set 排列都只作 documentation/component-set scaffold，不是运行时边框、圆角、尺寸、间距或组件组合合同。

- **Formal `propertyDefinitions` 精确边界**：四个 set 中，本次只返回两项 formal property。`Steps Item` 未返回 `propertyDefinitions`；`Steps Node` 只返回 `Description`（boolean，default=`true`）；`Steps line` 只返回 `Text`（text，default 精确为 `页面级`）；主 `Steps` 未返回 `propertyDefinitions`。`Level`、`Type`、`icon`、`Status`、`Style`、`Steps direction`、`Text Direction` 均只来自 direct `COMPONENT` raw names，不得上提为 formal properties、public API、defaults、完整 enum 或 legal combinations。

- **`Steps Item` identity**：set id=`14689:2787`、key=`35ae95393264a474dc77ce0188a8e1cc85cda322`、raw name=`Steps Item`、description 精确为空字符串。current response 返回 12 个 direct `COMPONENT`，全部为 32×32px：

| # | exact direct `COMPONENT` raw name | id | key |
|---:|---|---|---|
| 1 | `Level=Secondary, Type=Error, icon=true, Status=false` | `14689:3275` | `716405fff95fb21e60829265ea1792c0deb3f533` |
| 2 | `Level=Secondary, Type=Completed, icon=true, Status=true` | `14689:3270` | `18b4114d1d24505bd3b712028afdcd0e4f675afd` |
| 3 | `Level=Secondary, Type=Pending, icon=false, Status=false` | `14689:3219` | `356138c9d8847951ab788faca570dab9c1e23ec9` |
| 4 | `Level=Secondary, Type=Active, icon=false, Status=false` | `14689:3259` | `ab3147b5bd66bda416cba8f0bcae17bfb4457af1` |
| 5 | `Level=Primary, Type=Error, icon=true, Status=false` | `14689:3224` | `80c7a2d8d26a2070328413556ba7bbeac607146f` |
| 6 | `Level=Primary, Type=Completed, icon=true, Status=true` | `14689:3215` | `bd2d887b433d1c7e5d7d18203ed4c48d3b2f3647` |
| 7 | `Level=Primary, Type=Pending, icon=false, Status=false` | `14689:2785` | `48c5eaea5615a98f967a3f8ca2c7fd4c3b13a973` |
| 8 | `Level=Primary, Type=Active, icon=false, Status=false` | `14689:2786` | `2656a1f94d6b93dc9ecfecc09374fcfefa4898fb` |
| 9 | `Level=Secondary, Type=Pending, icon=true, Status=false` | `14875:943` | `c2615dca418ecc971dc75d0a84e83aa9bd322900` |
| 10 | `Level=Secondary, Type=Active, icon=true, Status=false` | `14875:941` | `873118c9352534b873f9d06a3bbce00081276680` |
| 11 | `Level=Primary, Type=Pending, icon=true, Status=false` | `14875:951` | `6430b0a0d45102cf6b3c5c32411f51be207185d5` |
| 12 | `Level=Primary, Type=Active, icon=true, Status=false` | `14875:949` | `227ee42ce709349248b9bae7b1df3962a163b43e` |

- **`Steps Item` sparse/correlation boundary**：上述 12 项只称 sparse/correlated current inventory，不得补成 `Level×Type×icon×Status` 全矩阵。current correlation 为：Error/Completed 始终 `icon=true`；Completed 的 `Status=true`，其余 shown specimens 的 `Status=false`；Active/Pending 各自同时出现 `icon=true|false`。这些相关性不证明 formal axes、default、legal combinations 或运行时状态模型。
- **`Steps Item` current appearance**：Primary current radius=32px；Active fill=`#495DFF`、Pending fill=`rgba(0,0,0,.06)`、Completed fill=`rgba(109,128,255,.08)`、Error fill=`rgba(255,41,59,.08)`。Secondary current radius=20px、strokeWeight=1px；Active/Completed stroke=`#6D80FF`、Pending stroke=`rgba(0,0,0,.12)`、Error stroke=`#F12234`。Secondary Error 的 current padding 异常精确为 `8px 12px 8px 11px`，必须保留。上述都只作 resolved current correlations，不证明 Token/Variable/Style binding、状态行为或最终实现规则。
- **`Steps Item` nested icon references**：只登记 connector tree 中的 `IMAGE-SVG` reference identity：`x-lg` component id=`14:1925`、key=`85dcfce571147106ed0f4c198bbb218d42b757ba`；`Check` id=`84:3769`、key=`011fb4f0a39b8d516379fcb13f45fa740d2a5634`；`ClockHistory` id=`9704:21173`、key=`7a5928e619a36fe64d6b62ca7320079d75decf9f`。不得据此虚报完整 Icon contract、internal paint/vector、export/hash/license、action 或完整 reference closure。

- **`Steps Node` identity/property**：set id=`14689:3278`、key=`b7b3f278c9c8b73ddef546045b41f7904433603e`、raw name=`Steps Node`、description 精确为空字符串；唯一 returned formal property 是 `Description`（boolean，default=`true`）。current direct inventory 的 raw names 恰好呈现 `Level=Primary|Secondary × Status=Active|Pending|Completed|Error × Style=Vertical|Horizontal` 的 2×4×2=16 项，但只称 current rendered matrix：

| exact direct `COMPONENT` raw name | id | key |
|---|---|---|
| `Level=Primary, Status=Active, Style=Vertical` | `14689:3308` | `8e4881048f1e05f1a1078a4b06afc367b2e43156` |
| `Level=Primary, Status=Active, Style=Horizontal` | `15176:1240` | `b3f55009705c322b33df4ec7896cd4b5a261b165` |
| `Level=Secondary, Status=Active, Style=Vertical` | `14689:3373` | `71cc0ba1581330b5becc57c5060bdb81287cedad` |
| `Level=Secondary, Status=Active, Style=Horizontal` | `15176:1276` | `53dcf035ac9bcfc250dcd86e8d52fe47a7ad65e8` |
| `Level=Primary, Status=Pending, Style=Vertical` | `14689:3341` | `217037fdc10d6649b7c42a0a39a92d1796db6528` |
| `Level=Primary, Status=Pending, Style=Horizontal` | `15176:1245` | `4e3a4e9552f220aa9c8666cd7a1cad658e176ab5` |
| `Level=Secondary, Status=Pending, Style=Vertical` | `14689:3376` | `2687b59a2b20c04771e28108ab0484ba90619c04` |
| `Level=Secondary, Status=Pending, Style=Horizontal` | `15176:1279` | `02535299fd84532ff7a52e16419a8fcc222defe1` |
| `Level=Primary, Status=Completed, Style=Vertical` | `14689:3360` | `427f59d903b5719a6641943c31928ab96bb70305` |
| `Level=Primary, Status=Completed, Style=Horizontal` | `15176:1250` | `0f18bb6533de0c9951fdaaeef7761a3bf429790c` |
| `Level=Secondary, Status=Completed, Style=Vertical` | `14689:3379` | `7e16eb320fbc5b65955cad10e372bc84f728d8e7` |
| `Level=Secondary, Status=Completed, Style=Horizontal` | `15176:1282` | `7b71535d536442bbd17ed627e8ac74895fdf428c` |
| `Level=Primary, Status=Error, Style=Vertical` | `14689:3366` | `4d420a9f0e2b544fc3931a696c8b30181cc03d00` |
| `Level=Primary, Status=Error, Style=Horizontal` | `15176:1255` | `7ea386203c584a3de731c273151f46c8b59a138f` |
| `Level=Secondary, Status=Error, Style=Vertical` | `14689:3382` | `047a5c301fccc619e2d9712b2cd5f2652bf53ef2` |
| `Level=Secondary, Status=Error, Style=Horizontal` | `15176:1285` | `42e76298c6bbed5090400604831e04ac2b940990` |

- **`Steps Node` current geometry**：Vertical specimens current width=64px、column、gap=8px；Horizontal specimens current row、gap=8px、hug sizing。上述只作 current geometry，不是 responsive、width、orientation 或 placement contract。
- **`Description` binding anomaly**：formal `Description=true`，但 returned description text children 只在 Primary Vertical specimens 中明确出现；Horizontal 与 Secondary trees 未返回 description child，即使主 Steps instances 传入 `Description:true`。该差异必须保持为 binding/usage anomaly，不得推断统一可见性、统一布局、property wiring 或 intended behavior。
- **`Steps Node` copy/typography/color fixtures**：current fixture copies 包含 `页面级`、`次级步骤条`、`错误节点`、`成功辅助信息`、`默认辅助信息`、`失败辅助信息`。主要 current typography 为：Primary title 16/24（依 specimen 为 Noto Sans SC Medium 或 PingFang SC Regular）；Secondary title 12/18；description 为 PingFang SC 12/18。resolved colors 包含 strong `rgba(0,0,0,.94)`、muted `rgba(0,0,0,.64)` / `rgba(0,0,0,.46)`、active `#495DFF`、error `#F12234`、success description `#04B545`。以上全部只作 fixture/resolved observations，不是产品 copy、数据 binding、字体/Token 合同或完整状态视觉规则。

- **`Steps line` identity/property**：set id=`15176:1006`、key=`7a4fa6a7fac4fb0ff9cc366e538784190ca9774d`、raw name=`Steps line`、description 精确为空字符串；唯一 returned formal property 是 `Text`（text，default 精确为 `页面级`）。current direct inventory 只有两项：

| exact direct `COMPONENT` raw name | id | key | current root geometry |
|---|---|---|---|
| `Type=Solid` | `14826:8284` | `a4717b6c53e30786aabd26af5b4d60463e7b7be3` | width=100px；column；padding=`16px 0px` |
| `Type=Dashed` | `15176:1005` | `bb6c9e07f1cf06f3a355b7ed47a869c3a37be4c2` | width=100px；column；padding=`16px 0px` |

- **`Steps line` current fixture/binding anomaly**：每项 child 都是 raw name=`Link` 的 `IMAGE-SVG`、0-height、fill-width line。Solid child id=`14826:8282`，stroke=`rgba(0,0,0,.12)` / 1px；Dashed child id=`15176:1004`，同一 stroke/weight，dash=`2,2`。这些只作 current line fixture，不证明 line state、progress 或实现方式。returned direct component trees 没有 text child，尽管 set formal `Text='页面级'` 且主 Steps instances 传入 `Text`；必须保留为 binding/usage anomaly，不得推断 line label、Text API 语义或运行时可见性。

- **主 `Steps` identity/property**：set id=`14826:8163`、key=`e806f7ddf4a94fb6187d449ed0ec65589980d069`、raw name=`Steps`、description 精确为空字符串；本次未返回 `propertyDefinitions`。current sparse direct inventory 必须逐项保留：

| # | exact direct `COMPONENT` raw name | id | key | current width |
|---:|---|---|---|---:|
| 1 | `Steps direction=horizontal, Text Direction=Vertical, Level=Primary` | `14826:8222` | `35a5d3da138e89ad463d54f7a608bfa2a3bea578` | 580px |
| 2 | `Steps direction=horizontal, Text Direction=Horizontal, Level=Primary` | `15176:1298` | `23d0e440c911a24f375e08c1596a5e69923f30b4` | 725px |
| 3 | `Steps direction=horizontal, Text Direction=Vertical, Level=Secondary` | `14826:8478` | `8eb676500ba57f560b79ccaf76e3f1064623decf` | 580px |
| 4 | `Steps direction=horizontal, Text Direction=Horizontal, Level=Secondary` | `15176:1353` | `7fa6502cbb6ade9654d59101045069bac30e2f10` | 725px |

  四个 current roots 均为 row、gap=4px、hug height。当前只返回 `Steps direction=horizontal`，不得解释为 vertical direction 不存在；`Steps direction`、`Text Direction` 与 `Level` 只来自 raw names，不是 formal API、default、完整 axis 或 legal matrix。
- **Main SLOT/composition fixture**：每项都含 connector-returned `SLOT`。`Text Direction=Vertical` 的 current slot 为 row、gap=4px；`Text Direction=Horizontal` 的 current slot 为 row、gap=20px。四个 current slot fixtures 均由 4 个 Steps Node + 3 个 Steps line 组成；该结构只证明当前 fixture，不得推断 public slot contract、cardinality、任意 children 支持或固定步数。
- **Main content/state fixture**：当前 fixture 第一节点为 Active、后 3 节点为 Pending；numbers 精确为 `1` / `2` / `3` / `4`，titles 精确为 `选择产品`、`确认订单`、`付款`、`等待开通`。Primary 使用 Solid line，Secondary 使用 Dashed line。以上全部只是 current fixture，不是业务流程、默认数据、状态算法、transition/completed/error/retry 规则或 line semantics。
- **Current inventory count boundary**：四组 direct sets 合计 `12+16+2+4=34` 个 current direct components；该数字只称两次 live response 一致返回的 current inventory，不是 immutable total、正式合同、完整 enum 或合法组合证明。

- **Not-returned blockers / lifecycle**：两次 live response 仍未证明 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；Variable/Style/text/font/vector/path/icon/main-instance/override/reference/prototype/reaction/asset/export/hash closure；formal raw axes/default/legal combinations；steps/items data schema、key/title/description/icon/status、current/index/base、controlled/uncontrolled、`onChange`；linear/non-linear navigation、clickability、disabled、visited、skipped、loading；status transition/completed/error/retry/async semantics；line state/color/progress；dynamic count/add/remove、slot/cardinality；horizontal/vertical direction、text placement、overflow/wrap/truncation/responsive/mobile/RTL；keyboard/focus/ARIA list/listitem/progress/current step/live announcements；theme/dark/high contrast/motion/touch target；deterministic browser evidence。因此 `direct_read_complete=false`，Steps 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.23 Switch live-read 观测证据（非完整组件合同）

本节只按注册 Canvas 与用户 component set 的两次 live connector response 登记 current identity/inventory、documentation/component-set scaffold、resolved geometry/appearance 与明确的推断边界；不构成 Switch/开关完整组件合同，禁止超出返回字段推断：

- **Source topology / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；注册节点为 `CANVAS` id=`9640:66921`、raw name=`Switch-开关`。用户节点是该 Canvas 的 documentation `FRAME` 内 `COMPONENT_SET` id=`11773:6781`、key=`f3e7a5e3840b21a31860964afce8a27ff6563dbc`、raw name 精确为 `Switch开关`（无连字符或空格）、description 精确为空字符串。分别读取用户 node `11773:6781` 与注册 Canvas `9640:66921` 时，两次 response 对 set/component identities 与 subtree 返回一致；但二者都只是 live connector responses，不是 immutable-version、full-recursive 或 completeness-proven read，not returned 不等于不存在。
- **Canvas / FRAME / set identity boundary**：Canvas 内 documentation `FRAME` id=`17182:2447`、raw name=`Switch`，current dimensions=1444×1367px、layout=`none`、white fill、radius=48px。注册 Canvas、documentation FRAME 与 component set 是三个不同 node，必须以 file key + 各自 node ID + set key 分离，禁止 name-only lookup、merge 或以语义名互相覆盖。
- **Documentation scaffold / copy fixture**：header raw name=`标题`，current x=0/y=40、width=1444px、column、padding=`0px 64px`、gap=24px；breadcrumb fixture 精确为 `web  / 组件名称`，必须保留 connector spacing/styled-text 边界，title fixture=`Switch`。Footer current x=0/y=1265、dimensions=1444×72px，copy fixtures 精确为 `@ Lingee 2026`、`交互设计师：xxx`、`视觉设计师：xxx`。上述 header/footer 的位置、尺寸、布局、文案以及 FRAME 白底/radius 全部只作 documentation scaffold/copy fixture，不是 Switch runtime layout、branding、spacing 或 API。
- **Component-set scaffold boundary**：set 在 FRAME 中 current x=72/y=268、dimensions=420×208px；stroke=`#9747FF` / 1px / dash `10,5` / radius=5px。这些值只作 component-set documentation scaffold，不是 runtime border、尺寸或布局。

- **Formal property / current inventory boundary**：set 本次没有返回 `propertyDefinitions`。lowercase `size`、`state` 只来自 direct `COMPONENT` raw names，不得上提为 formal properties、public API、defaults、完整 enums、legal combinations 或交互状态机。两次 read 一致返回 12 个 current direct components，raw naming matrix=`size=28|36|44 × state=on|on-disabled|off|off-disabled`；可称 3×4 current inventory，但不是 immutable total 或正式 API 证明。

| # | exact direct `COMPONENT` raw name | id | key |
|---:|---|---|---|
| 1 | `size=28, state=on` | `11773:6775` | `61c0f89ea2d3ebe282063d5b7ecafd11ebcfd5a3` |
| 2 | `size=28, state=on-disabled` | `11773:6779` | `70d633fcc4ec4f52906aeec5a6dbed5446595830` |
| 3 | `size=28, state=off` | `11773:6778` | `73becca4c9dc0f55a3d2d4e418e5d4b9fd88220a` |
| 4 | `size=28, state=off-disabled` | `11773:6780` | `593c2cf3f2431d00aa197209312f77c89f570366` |
| 5 | `size=36, state=on` | `11773:6777` | `4e5fb10c047f7153f95011e1fd950309f86ef28e` |
| 6 | `size=36, state=on-disabled` | `11773:6776` | `a8f438e6586e81504671b08b26cc8eedfcab053d` |
| 7 | `size=36, state=off` | `11773:6774` | `6e9e353729e089c8406710ff248cfa2e7818793a` |
| 8 | `size=36, state=off-disabled` | `11773:6772` | `7411db9b8ad21fcae35a2ed5ea0a669753645713` |
| 9 | `size=44, state=on` | `11773:6770` | `7b380cb324e5d591f6221e932631ae3a5f83979f` |
| 10 | `size=44, state=on-disabled` | `11773:6773` | `6e521582da1fea25b85ec318f3f1b0145ccf07ef` |
| 11 | `size=44, state=off` | `11773:6771` | `79f513c2d51cf432105b18012ddde000c91782e8` |
| 12 | `size=44, state=off-disabled` | `11773:6769` | `725b0de476cfde6061bd98de80a4974e988e0527` |

- **Current shared layout**：每项 root 当前均为 row、padding=2px、alignItems=`center`、gap=10px、radius=999px。gap 出现在 current 单 child tree 中，只可登记返回值，不证明实际可见间距或 runtime spacing API。
- **Current size geometry**：`size=28` root=28×16px、thumb=12×12px；`size=36` root=36×20px、thumb=16×16px；`size=44` root=44×24px、thumb=20×20px。这三档只作 current geometry，不证明 formal size property、responsive sizing 或 hit-target contract。
- **Current alignment correlation**：`state=on` 与 `state=on-disabled` current 使用 `justifyContent=flex-end`；`off` 与 `off-disabled` 未返回 `justifyContent`，current child 位于 start。该差异只作 current alignment correlation，不得推断 transition、RTL behavior、checked model 或逻辑方向 API。
- **Root resolved fills / thumb appearance**：on=`#495DFF`；on-disabled=`rgba(109,128,255,.12)`；off=`rgba(0,0,0,.12)`；off-disabled=`rgba(0,0,0,.08)`。thumb 当前均为 white、radius=100px。上述均只是 resolved observations，不证明 Token/Variable/Style binding，也不证明 disabled opacity algorithm。
- **Thumb node-type difference（必须保留）**：size=28 的 thumb 是 connector-returned `IMAGE-SVG` raw name=`Path`；size=36 与 size=44 的 thumb 是 `RECTANGLE` raw name=`Path`。精确 current identity 如下：

| size | state | thumb node type | raw name | thumb node id |
|---:|---|---|---|---|
| 28 | `on` | `IMAGE-SVG` | `Path` | `11773:6746` |
| 28 | `on-disabled` | `IMAGE-SVG` | `Path` | `11773:6748` |
| 28 | `off` | `IMAGE-SVG` | `Path` | `11773:6750` |
| 28 | `off-disabled` | `IMAGE-SVG` | `Path` | `11773:6752` |
| 36 | `on` | `RECTANGLE` | `Path` | `11773:6754` |
| 36 | `on-disabled` | `RECTANGLE` | `Path` | `11773:6756` |
| 36 | `off` | `RECTANGLE` | `Path` | `11773:6758` |
| 36 | `off-disabled` | `RECTANGLE` | `Path` | `11773:6760` |
| 44 | `on` | `RECTANGLE` | `Path` | `11773:6762` |
| 44 | `on-disabled` | `RECTANGLE` | `Path` | `11773:6764` |
| 44 | `off` | `RECTANGLE` | `Path` | `11773:6766` |
| 44 | `off-disabled` | `RECTANGLE` | `Path` | `11773:6768` |

  禁止把 size=28 改写成 `RECTANGLE`、把 size=36/44 改写成 SVG，或由 connector node type 推断资产、矢量、DOM/CSS 实现合同。
- **State / interaction inference boundary**：raw `on`/`off`/`*-disabled` 与当前 thumb 对齐/颜色只证明 current named specimens，不证明 checked/unchecked、boolean API、default state、disabled semantics、事件或可交互性。hover、pressed、focus/focus-visible、loading、readOnly、error、indeterminate 本次均未返回，但不得解释为不存在。
- **Content / accessible-name boundary**：set 当前 tree 没有返回 label、text 或 icon descendants；不得据此声明产品禁止 label、accessible name 或内容 slot，也不得从空 descendant 集推断无障碍名称策略。
- **Not-returned blockers / lifecycle**：两次 live response 仍未证明 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；Variable/Style/vector/path/main-instance/override/reference/prototype/reaction/asset/export/hash closure；formal size/state definitions、defaults 与 legal combinations；`checked`/`defaultChecked`/`disabled`/`readOnly`/`loading`/`name`/`value`/`required`、controlled/uncontrolled、`onChange`/`onClick`；pointer/touch/drag/swipe、keyboard Space/Enter、focus-visible/focus order；state transition、thumb motion/duration/easing、optimistic/async/error rollback；form submit/reset；label/description/hit target；RTL alignment；responsive/theme/dark/high contrast/reduced motion；ARIA `role=switch`/checked/disabled/name/description；deterministic browser/motion evidence。因此 `direct_read_complete=false`，Switch 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.24 Table live-read 观测证据（非完整组件合同）

本节只按用户节点与注册 Canvas 的两次 live connector response 登记 Table 的 current identity/inventory、documentation/component-set scaffold、resolved geometry/appearance、嵌套依赖与明确推断边界；不构成 Table/表格完整组件合同，禁止超出返回字段推断：

- **Source / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；本次分别读取用户节点 `16803:7480` 与注册 `CANVAS` `9640:65189`。两次 response 对 Table subtree、component-set 与 direct-component identities 一致，但均不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Source topology（身份必须分离）**：注册 `CANVAS` id=`9640:65189`、raw name 精确为 `Table-表格--从这开始`；documentation `FRAME` id=`16803:7479`、raw name=`组件库`、current dimensions=2528×6226px、white fill、radius=48px；用户 `FRAME` id=`16803:7480` 的 raw name 本次未返回，current x=40/y=40、column、padding=`0px 40px`、gap=80px、hug。用户 FRAME 不是 `COMPONENT` 或 `COMPONENT_SET`，没有 component key；Canvas、两个 FRAME、主 Table set 与下列 child sets 禁止按名称合并或互相覆盖。
- **Documentation scaffold / copy fixture**：header raw name=`标题`；breadcrumb fixture 精确为 `web  / 组件名称`。title fixture 精确为 `搜索框`，与 Table 页面语义明显不一致，必须保留为 documentation fixture mismatch，禁止静默改成“表格”。Footer current x=40/y=6113.74、dimensions=2448×72px，copy fixtures 精确为 `@ Lingee 2026`、`组件设计师：xxx`。这些布局、颜色、圆角和文案只属于规范页 scaffold/fixture，不是 Table runtime shell、品牌、API 或默认内容。

- **主 Table set identity / formal-boundary**：`COMPONENT_SET` id=`16803:7684`、key=`70541924ec0be03fd1fb8affb6b7bfa58ed8b9fa`、raw name=`Table`、description 精确为空字符串；current dimensions=2368×732px、radius=5px。本次没有返回 `propertyDefinitions`；`Bordered` 只来自 direct `COMPONENT` raw names，不是 formal property、public API、default、完整 enum 或 legal combinations。

| exact direct `COMPONENT` raw name | id | key | current root observation |
|---|---|---|---|
| `Bordered=False` | `16803:7685` | `759c06bdb224f6afa84e34b1ba4841fee4a6e89d` | width=906px、column、gap=12px、`justifyContent=center` |
| `Bordered=True` | `16803:7745` | `eea9a6aebd9a03f9d3a7118a7ccfac654e08434a` | width=906px、column、gap=12px、`justifyContent=flex-end` |

  两项各含 connector-returned `SLOT`，raw name 精确为 `Content Columns`，current white fill、stroke=`rgba(0,0,0,.06)` / 1px、radius=16px。该 SLOT 只证明 current composition fixture，不证明 public slot API、cardinality、任意 children 或动态列能力。
- **Current column/row composition fixture 与异常**：`Bordered=True` 当前由 7 列组成；`Bordered=False` 当前由 8 列组成，其中最后一列 width=1px，仍包含 1 个 header + 6 个 body cells。该 1px trailing column 必须按 live response 保留为 geometry anomaly，不得删除、扩宽或解释为 intended spacer。其余常规列也都是 current fixture 中的 1 header + 6 body cells；不得由此推断固定/动态 row count、数据 cardinality、column schema 或 add/remove 行列规则。
- **Nested Pagination 只作 Table fixture/dependency**：`Bordered=False` 内 instance=`16803:7744`，`Bordered=True` 内 instance=`16803:7804`；两者当前引用 component=`15835:2178`、raw name=`Style=Complex, ShowPage=True, ShowPageNum=7`。可见 fixture 精确为 `共 1,000 条相关记录`，页码 `1` / selected `2` / `3` / `4` / `5` / `6` / `...` / `50`，并含 `20条/页` 与 `跳至 999 页`。这里只登记 Table 嵌套构成，不建立或恢复独立 Pagination live-read 章节、Pagination 合同、默认数据或控制 API。

- **Header Item set identity / current inventory**：`COMPONENT_SET` id=`15942:47946`、key=`91b3205e7b09b87ccbb99c03431fa5332310454e`、raw name=`Table / Table Item / Header Item`。current direct components 仅为下列两项；current inventory 不等于 immutable total。

| raw name | id | key |
|---|---|---|
| `Bordered=False` | `15942:47960` | `aa50ef6c8a4e834c52a358ff608c0ec0c0561794` |
| `Bordered=True` | `15999:22250` | `c8c1cc80bf49818d12176454bfea8b27097ca15f` |

- **Header Item formal `propertyDefinitions`**：仅以下返回字段可称 formal property；不得补写未返回 enum、default 或组合。

| property | type | returned default |
|---|---|---|
| `Text` | text | `表头标题` |
| `Icon-QuestionCircle` | boolean | `false` |
| `Icon-Filter` | boolean | `false` |
| `Icon-Sort` | boolean | `false` |
| `Icon-time` | boolean | `false` |

  两项 current height=48px、padding=`12px 0px`、gap=8px、fill=`rgba(0,0,0,.03)`；False current bottom stroke=1px，True current stroke=0.5px。**Wiring anomaly 必须保留**：FieldTypeDate `9704:21169` 与 QuestionCircle `9704:20526` 当前都引用 `Icon-QuestionCircle` visibility；本次未见 descendant wired to `Icon-time`。不得擅自把前者改接 `Icon-time`，也不得据未见 wiring 宣称属性无效。

- **Header Control set identity / current inventory**：`COMPONENT_SET` id=`15942:48916`、key=`c55435326ee13a7419561831779d074d5dc8df12`、raw name=`Table / Table Item / Header Control`；本次未返回 `propertyDefinitions`。raw `Type`、`Size`、`Bordered` 只属于命名维度，不是 formal props/API/default/legal matrix。

| current raw name shorthand | id | key | current geometry |
|---|---|---|---|
| Checkbox / False | `15942:48917` | `3fe8f8ef8e4007d4d21ac2432613a750e1077a9c` | h=48px |
| Checkbox / True | `15942:48919` | `ea3e8f1e9e61762ef3c35a62b1157974c299a952` | h=54px |
| Empty / False | `15942:48959` | `a526fa04d2c15ba61378cf136dad177097c2f29a` | 48×54px |
| Empty / True | `15942:48961` | `d121d4e065844603fea50d7cc6d9eaae8ff7eaaa` | 48×54px |

  Checkbox False/True 高度 48/54px 的差异及 Empty 两项 48×54px 均保留为 current geometry anomaly，不得自动归一。

- **Table cell set identity / formal properties**：`COMPONENT_SET` id=`15942:48451`、key=`d16bfd0d7eba4d95deffb7f468814b7acd88d2b9`、raw name=`Table / Table cell`、description 精确为空字符串。formal `propertyDefinitions` 仅为：`Text Content`（text，default=`单元格标题`）、`Text 2 Content`（text，default=`说明文本`）、`Text 2`（boolean，default=`true`）、`icon`（boolean，default=`true`）。
- **54 项 current cell inventory boundary**：raw direct-component naming matrix 为 `Type=Text|Tag|Link|Input|Switch|Avatar|Icon|Number|多选 × Bordered=False|True × (Hover=No,Sort=No | Hover=Yes,Sort=No | Hover=No,Sort=Yes)`，即当前 response 中的 `9×2×3=54` 项。`Type`、`Bordered`、`Hover`、`Sort` 未出现在上述 formal definitions 中，只可称 raw naming dimensions；不得据此宣称 formal axes、defaults、完整 enums、legal matrix 或交互状态机。下表 N=`Hover=No, Sort=No`、H=`Hover=Yes, Sort=No`、S=`Hover=No, Sort=Yes`，每项均列 `id / key`：

| raw `Type` | raw `Bordered` | N / H / S current direct `COMPONENT` identity |
|---|---|---|
| `Text` | `False` | N `15942:48578` / `abcf305c945f367188e21c47a01e136c60082ca9`<br>H `15942:48583` / `69bee2eb3a5f0429d547be5595803a6d6ab77aa6`<br>S `15942:48588` / `6bd6eea7555938cd23f703e5ddc76084ff772839` |
| `Text` | `True` | N `15942:48641` / `9b5f287355a985020bae196ed5e13f2d40f666f1`<br>H `15942:48646` / `d0936ef3d7cc9f2ff5a2dbcd43a4101933747dfd`<br>S `15942:48651` / `dd75b659d2f9796b1718517917a6069d2d75b26c` |
| `Tag` | `False` | N `15942:48599` / `7b8bf7a3c09f7943f82caaf32e833646079457b9`<br>H `15942:48602` / `9bada68fb7b090d65bba6bf2b18997bcdb18a730`<br>S `15942:48605` / `07f5101b6af58d9ec52ef355e3a463484cfaa047` |
| `Tag` | `True` | N `15942:48662` / `9ce1878d8d96e13d7f97f72afde6d06bb21436e5`<br>H `15942:48665` / `05fd8af45119c4b3cc57eda9b86c91d6ed4cdaca`<br>S `15942:48668` / `e653a0e1e0409e379339d052091a7a77eced5041` |
| `Link` | `False` | N `15942:48608` / `44038ca4f4f9d119a2b946d38c41dd365d8b2817`<br>H `15942:48611` / `c4b61a3a2c44a1d110445d5357b6b1227544ea34`<br>S `15942:48614` / `a6f796c41cf4b028985be58da671cad041facf11` |
| `Link` | `True` | N `15942:48671` / `d67996e10863a7e6347b33c303b0750b07cd7a39`<br>H `15942:48674` / `6ff7a8ccdeff3bc416166da1a0c7d6d947bc9401`<br>S `15942:48677` / `a76c98e6abc89c064fb4787ca9b28c82e652645f` |
| `Input` | `False` | N `15942:48617` / `9ed5f20965d69541101224d9608921c093814c95`<br>H `15942:48619` / `e2bda67783a8ddebea7e0d4766a2a8057f14f4d1`<br>S `15942:48621` / `838a23e023cf159153519b63ba4f786383b08c3f` |
| `Input` | `True` | N `15942:48680` / `7ece6a9932567f87811b47aae18998912a9622f4`<br>H `15942:48682` / `4281a59d52761ebb398f9425ad2e4b3943166d5f`<br>S `15942:48684` / `9f8eae924f87c3f73add235eda9b1f75d2543926` |
| `Switch` | `False` | N `15995:21037` / `f404048e77c5b0d9db1c94ea8720dd83bd124cd6`<br>H `15995:21039` / `58149de5cefda07723535eef1d444091d1ebdb8e`<br>S `15942:48633` / `99d863adeb9a590d126c5537aaf3dbfe9242a369` |
| `Switch` | `True` | N `15995:20143` / `0c25b89bf9a5154f782dd3ff419e21c550cf55e9`<br>H `15995:20148` / `5cfeaa0e39b70ff388a6ceb02ed031288438a872`<br>S `15942:48696` / `c43cb09af27024a0231d50a529426fd30122f15f` |
| `Avatar` | `False` | N `15995:20017` / `7c47765daa6ab8971be8db2063894ca032b2250b`<br>H `15995:20020` / `501fff8633d3cb5871f5236f98b50bcf4c356a5b`<br>S `15995:20023` / `9dcd19fed4f61d22fd681cb3db4b7b82fd201471` |
| `Avatar` | `True` | N `15995:20026` / `cb75fb45607f73f7296aac7a21194db10b01fed3`<br>H `15995:20029` / `e532b48f52270340eb5beac1ec935bdd874d8e9e`<br>S `15995:20032` / `528726b4fec09c019b24d255036db1ad6efc4a60` |
| `Icon` | `False` | N `15995:21080` / `b21e54c82913971f56d4b598a2639a53766f0188`<br>H `15995:21082` / `4846e9d7bb09399bc6545345f089d442209c0a80`<br>S `15995:21084` / `34839758debffc53f23173c99ee715710cfb3e0d` |
| `Icon` | `True` | N `15995:21086` / `591bac668b33503315397e570a9d7ce2eb2ca785`<br>H `15995:21088` / `a3f10ca1ad659a351fc8c3610358523204197fbe`<br>S `15995:21090` / `86d0109eee28544daa97d5100272cc55e4bacf0f` |
| `Number` | `False` | N `15999:11505` / `4a9bab1124dd3cb1ea19bbae5f625a6c9c448d83`<br>H `15999:11507` / `2834bd9395354bd861e82458e825e3a042a508b5`<br>S `15999:11509` / `6a37bc5365ddde0b514e3d6431e1c5a97b56aa93` |
| `Number` | `True` | N `15999:11511` / `835d92770d3abc16f5b5cf56288a8ccef497ef9e`<br>H `15999:11513` / `ac59835bcb3c8fc1a0cbb0b67362a5b18914f99d`<br>S `15999:11515` / `8f311ede55a8ff6c3fd0dbb1b3b0b3a9ca5ab48c` |
| `多选` | `False` | N `15999:12149` / `53b02d19ec3d4f8bf07f36a64c988fc023239bfa`<br>H `15999:12147` / `cf79166a963e769fbf510606447bd7f5ae87ba61`<br>S `15999:12151` / `49b2b3c1ace87e8dfa4078dc68f9bfc553d03cae` |
| `多选` | `True` | N `15999:12153` / `b773f8a96730c07057cf39a47210db5fbbbb32a9`<br>H `15999:12155` / `1b19c13e463dc37057c0275dc33e7391080a0342`<br>S `15999:12157` / `0c1f9e0e2c63425d75144bb6ba2436f8f597efff` |

- **Current body-cell geometry**：全部 body cells current height=56px；以下宽度/padding/gap 只是 resolved specimens，不是 min/max/fill/响应式合同。

| raw Type | current geometry observation |
|---|---|
| `Text` | w=180px；padding=`12px 36px 12px 16px` |
| `Tag` | hug，或 w=180/184px |
| `Link` | w=108px |
| `Input` | w=312px |
| `Switch` | w=96px |
| `Avatar` | w=76px；Bordered=True + Hover current w=72px、padding-left=12px，为 anomaly |
| `Icon` | w=124px、gap=24px |
| `Number` | w=54px |
| `多选` | w=48px |

  Hover/Sort specimens 的 resolved fill 差异只作 current correlation，不证明 hover/sort 状态机、优先级、事件或 Token/Variable/Style binding。
- **Nested component identities（只作当前依赖定位）**：Checkbox set `12299:13942` / `b2832e0f94464421a391117474d2735abb896e1a`；FieldTypeDate `9704:21169` / `ce4853800bc0db3a2bd7c19a89d41d03815dbc4e`；QuestionCircle `9704:20526` / `aa8abc556fdaa25c5e81017625c1ec0f8c229ae8`；Filter `9704:20390` / `26a094775487e92ebf9a16453913a44382516653`；Sort `9704:20825` / `ca6857e038963a5be2334207f8a20a13b1fffc63`；FiletypeRar `9704:20659` / `666228dcf51979d0bf6d4f2ad60c88b92b35d7bc`；tag set `15039:45871` / `555841bdfea758ded4cd02386bf93a73166e00c8`；Pagination set `15835:1970` / `0dcff03621266543df7d8fc2ba3d5d45eb839dac`；Pagination Item set `15835:1140` / `1a3df26993dc32e501fca4d43390b0cb1421180d`；input set `13464:7839` / `8c8ce9d2538d1c6fcdad76a605c373a438aa355e`；Switch set `11773:6781` / `f3e7a5e3840b21a31860964afce8a27ff6563dbc`；Avatar set `14909:7012` / `b277336f9694c78d6a702f16325b86c2060768fe`；Search `15530:16890` / `7ea685327f24e2190197a206578a11a4dbccd7c5`；Eye `9704:20359` / `a53092a0fb5c938496130ac30876fc0abd1c1a44`。这些 identity 不证明引用闭包完整、公共依赖 API 或可替换性。
- **Content / typography fixtures only**：可见文字 `表头标题`、`单元格标题`、`说明文本`、`Table cell text`、`状态标签`、`链接内容`、`请输入` 均只作 current fixture。nested Switch 当前引用 component `11773:6777`（raw specimen `size=36, state=on`）；不得据此固定 cell 默认开关状态。Typography 包含 PingFang SC 14/22、12/18，且一个 Link specimen 使用 SF Pro Text 14/22；该 mixed typography 必须保留为 resolved fixture/anomaly，不是字体或 Text Style binding。
- **Data / behavior inference boundary**：本次没有返回 row/column/data schema、稳定 keys、动态 add/remove、width/min/max、span、sticky/frozen columns/header、horizontal/vertical scroll、virtualization、loading/empty/error、sorting/filtering/resizing/reordering、selection model、row actions、pagination control/API、controlled/uncontrolled 或 events；不得从 fixture、raw names、数量、颜色或嵌套组件补写这些合同。
- **Not-returned blockers / lifecycle**：两次 live response 仍未证明 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/font/main-instance/override/reference/prototype/reaction/asset/export closure；formal Table `Bordered`、column、cell `Type/Hover/Sort` definitions/default/legal combinations；pointer/keyboard/focus、responsive/mobile/RTL/theme/high-contrast、ARIA table/grid/row/columnheader/cell/rowheader/sort/selection semantics；deterministic browser evidence。因此 `direct_read_complete=false`，Table 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.25 Dialog live-read 观测证据（非完整组件合同）

本节只按用户节点与注册 Canvas 的两次 live connector response 登记 Dialog/弹出窗的 current identity/inventory、documentation/component-set scaffold、formal-property 边界、resolved geometry/appearance、嵌套依赖与明确推断边界；不构成 Dialog、Modal 或 Message-Modal 的完整组件合同，禁止超出返回字段推断：

- **Source / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；本次分别读取用户 `FRAME` `16355:10798` 与注册 `CANVAS` `9640:64241`。两次 response 对返回的 subtree、两个 component sets、六个 direct components 与嵌套 identity 一致，但均不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Source topology（身份必须分离）**：注册 `CANVAS` id=`9640:64241`、raw name=`Dialog-弹出窗`；documentation `FRAME` id=`16355:10797`、raw name=`组件库`、current column、padding=40px、gap=80px、white fill、radius=48px；用户 `FRAME` id=`16355:10798` 的 raw name 本次未返回，current column、stretch、padding=`0px 40px`、gap=80px、vertical hug。用户 FRAME 不是 `COMPONENT` 或 `COMPONENT_SET`，没有 component key。Canvas、documentation/user FRAME、`Modal` set 与 `Message-Modal` set 是不同 node，禁止按 Dialog/Modal 语义名称合并或互相覆盖。
- **Documentation scaffold / copy fixture**：header raw name=`标题`；breadcrumb fixture 精确为 `web  / 组件名称`，title fixture 精确为 `弹出窗`。title current typography=PingFang SC Semibold 600 72/108；breadcrumb=PingFang SC Regular 400 16/24。Footer `16355:14178` current height=72px，copy fixtures 精确为 `@ Lingee 2026`、`组件设计师：xxx`，其 Geist 14/20 也只属于 documentation scaffold。以上布局、文案和字体不是 runtime Dialog shell、默认标题、品牌或字体绑定。

- **`Modal` set identity / scaffold**：`COMPONENT_SET` id=`11070:2993`、key=`f04d1e5c74805fc7f8e403bfb0ff3008e770fa95`、raw name=`Modal`、description 精确为空字符串；current set dimensions=794×1267px、stroke=`#9747FF` / 1px / dash `10,5` / radius=5px。set 内 current locations 为 small x=20/y=309、medium x=40/y=646.26、large x=20/y=1057；这些只作 component-set scaffold，不是 runtime placement、间距或尺寸合同。
- **`Modal` formal `propertyDefinitions`**：仅下列四项可称 formal property，名称大小写与空格必须原样保留：

| property | type | returned default |
|---|---|---|
| `help` | boolean | `true` |
| `Close selection` | boolean | `false` |
| `Close` | boolean | `true` |
| `Search` | boolean | `true` |

  本次没有返回 title/content/footer/button text、size、open/state 或 instance-swap property definitions；不得从 descendants、文案或 direct-component names 补写 public API。
- **`Modal` current direct-component inventory**：raw `size` 只来自 direct `COMPONENT` names，未出现在 formal definitions 中；下列 3 项只能称 current inventory，不是 immutable total、formal size property、default、完整 enum 或 legal matrix。

| exact raw name | id | key | current set location |
|---|---|---|---|
| `size=small` | `11070:2992` | `8424ef0e3ee52c1c1c1a0c4e9543401fd4c0b5ac` | x=20/y=309 |
| `size=medium` | `17516:33562` | `929640152d8b62c12c37c3618903a2e89d6a2e62` | x=40/y=646.26 |
| `size=large` | `11070:2989` | `bb5d49b6120a945efdeca04c4f054d1d940ceeaa` | x=20/y=1057 |

- **`Modal` shared current root geometry**：三项均为 column、horizontal hug、vertical fixed、height=186px、padding=`20px 20px 0px`、gap=20px、white fill、radius=24px、shadow=`0px 6px 16px rgba(0,0,0,.18)`。connector 未返回三个 root 的 resolved width；内部 raw `Content` FRAME current width=420px 不得被加 padding 后冒充已读 root width，也不得推断 min/max/responsive sizing。
- **Header / property wiring fixture**：三项 current Header 都是 fill-width row、`justifyContent=space-between`。Title Container 使用 right padding=24px、gap=8px；title fixture=`对话框标题`，current typography=Noto Sans SC Medium 500 18/28、fill=`rgba(0,0,0,.94)`。QuestionCircle `9704:20526` current visibility 引用 formal `help`；SearchInput instance current visibility 引用 `Search`；两个 36×36 close containers 分别引用 `Close` 与 `Close selection`。selected close container current fill=`rgba(0,0,0,.03)`、radius=12px。该 wiring 只证明 current property references；`Close selection` 不得解释为 hover/pressed/focus/active state，两个 close container 同时出现在返回 tree 也不证明同时可见。
- **Search fixture / anomaly**：current SearchInput instance 引用 component `17755:8477`，raw name=`Size=small, State=Default`；resolved dimensions=220×32px、padding=`12px 16px`、stroke=`rgba(0,0,0,.08)` / 1px、radius=24px，placeholder fixture=`搜索项目`，PingFang SC Regular 14/22、fill=`rgba(0,0,0,.28)`，内部 Search icon=`9704:20371`。32px fixed height 与 returned vertical padding/line-height 的组合只作 resolved geometry anomaly，禁止自行修正或推断 input hit-area/box-sizing 合同。
- **Content / footer composition boundary**：current `Content Container` 是 column、fill、`justifyContent=flex-end`；其 child raw `Content` 是普通 `FRAME`、current width=420px，并非 connector-returned `SLOT`。Footer Container current padding=`10px 0px 20px`、bottom radius=`0px 0px 24px 24px`，fill 为 `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.82) 20%, #FFFFFF 100%)`，内部 Button Group 为 right-aligned row、gap=12px。不得把普通 FRAME 或 current gradient 上提为 public slot、sticky-footer、scroll-fade 或遮罩合同。
- **Current action fixtures / geometry anomaly**：取消 action 当前引用 Button component `16375:19853`，raw name 含 `Type=Text, Size=Large, State=Default, Content=Basic, Ghost=False, Danger=True, Shape=Default`，label fixture=`取消`；确定 action引用 `16375:18822`，raw name 含 `Type=Primary, Size=Large, State=Default, Content=Basic, Ghost=False, Danger=False, Shape=Default`，label fixture=`确定`、fill=`#495DFF`、radius=8px。两者 `Icon Start=false`、`Icon End=false`。Button instance current fixed height=36px，但 returned nested Content FRAME height=40px，必须保留为 geometry anomaly。取消按钮 raw `Danger=True` 也不得被静默改名或推断 destructive semantics。

- **`Message-Modal` set identity / scaffold**：`COMPONENT_SET` id=`15974:16368`、key=`b2083f6f27489dd01bda732d0003dfac294b1de9`、raw name=`Message-Modal`、description 精确为空字符串；current set dimensions=360×723px、stroke=`#8A38F5` / 1px / dash `10,5` / radius=5px。本次未返回 `propertyDefinitions`；raw `Type` 只来自 direct-component names，不是 formal property、public API、default 或 legal enum。
- **`Message-Modal` current direct-component inventory**：

| exact raw name | id | key | current set location |
|---|---|---|---|
| `Type=Delete` | `16355:8952` | `3f996947f6e5e9097242d891c5859253ef22562d` | x=20/y=33.26 |
| `Type=Delete-Instruction` | `15974:16366` | `b2ba6cf1bd38ae20e3bb223d55e9363a30c83cc8` | x=20/y=252 |
| `Type=Confirm` | `15974:16367` | `0220a92a0ea3013a33b09d233db9ef3f8ac5f144` | x=20/y=500 |

  三项 current root 均为 column、hug、padding=20px、gap=20px、white fill、radius=24px、shadow=`0px 6px 16px rgba(0,0,0,.18)`；set location 与排列顺序只作 scaffold。
- **Message composition / copy fixtures**：三项 body current column gap=8px，header row gap=8px，icon container top padding=4px。`Type=Confirm` fixture 为 icon ExclamationCircleFill1 `9704:20530`、title=`退出登录`、description=`请确认是否退出登录？`，actions 使用取消 Button `16375:19853` 与 primary Button `16375:18822`；后者当前 label 精确为 `Button`，必须保留为 fixture mismatch，禁止静默改成“确定”。`Type=Delete` 与 `Type=Delete-Instruction` fixture 均为 icon ExclamationCircleFill `9704:20540`、title=`删除该条定时任务`、description=`删除后不可恢复，确定删除？`，actions 使用取消 Button `16375:19853` 与 danger Button `16375:19753`、label=`删除`。
- **Delete-Instruction checkbox fixture / typo boundary**：只有 current `Type=Delete-Instruction` tree 返回 Checkboxs instance `12299:13971`，component property `value` 与可见 label 都精确为 `不在显示提示`，内部 Checkbox Icons component=`12299:13943`。该文案必须原样保留为 fixture/疑似错字，禁止静默改成“`不再显示提示`”；也不得由该单一 specimen 推断 remember-choice persistence、storage、scope、default checked、indeterminate、validation 或事件合同。
- **Message typography boundary**：message title current 使用 Noto Sans SC Medium 500 18/28；description 使用 Microsoft YaHei Regular 400 14/22；button/checkbox labels 使用 PingFang SC Regular 14/22。混合字体与 resolved fills 只作 current fixture/anomaly，不证明 Text Style、Variable、Token 或字体二进制绑定。

- **Returned nested identities（只作当前定位/依赖线索）**：

| identity | node id | key | current role boundary |
|---|---|---|---|
| QuestionCircle | `9704:20526` | `aa8abc556fdaa25c5e81017625c1ec0f8c229ae8` | Modal help icon |
| SearchInput set | `15942:34115` | `ef2d0a682334d09f57257112385b127d057b8680` | nested set；description empty |
| SearchInput current component | `17755:8477` | `fe691b0b2584a79d7ca5c69197779c1c9f7ca955` | `Size=small, State=Default` |
| Search icon | `9704:20371` | `9b1c63b53b1d15ebe2a5a274f718245b8dc419cc` | current SearchInput descendant |
| XLg | `9704:20548` | `d0ca92c75b49960ce717bf7bfd9d6e4f69935b01` | current close icon |
| Button set | `16375:18601` | `c6d1f29cbee5591dd4de2f5795f42335dc692544` | nested dependency |
| cancel/text Button | `16375:19853` | `2a3a013848c71b4ee9dcc8433c320a3bfc653662` | current cancel action |
| primary Button | `16375:18822` | `fdedbfe8164f35e6950e84ca548d5ee189778f87` | current confirm action |
| danger Button | `16375:19753` | `dcfee02d570086f5238b828f81ce755732ee550f` | current delete action |
| ExclamationCircleFill1 | `9704:20530` | `3e68a771e46131d7d3022f28b2286dd831b37158` | Confirm fixture icon |
| ExclamationCircleFill | `9704:20540` | `9a68efabcdb42f21c4d520c96c17a2aa7c922772` | Delete fixtures icon |
| Checkboxs set | `12299:13970` | `4ac95bbf9ebdaee721928ba14a9a0c64bdc5ebec` | nested dependency；description empty |
| Checkboxs current component | `12299:13971` | `bfc8363b5210051ecedac9a5cc33d90798d4a4e5` | long raw state name retained |
| Checkbox Icons set | `12299:13942` | `b2832e0f94464421a391117474d2735abb896e1a` | nested dependency；description empty |
| Checkbox Icons current component | `12299:13943` | `a65dbf8f4dcb90d4f9bd2fec27df6482988ab5f4` | `element=unselected, State=Default` |

  response-level `COMPONENTS` inventory 还返回 Search `15530:16890` / `7ea685327f24e2190197a206578a11a4dbccd7c5` 与 ChevronDown `9704:20842` / `fbb332d9134078158c2aef5c0a0bc688cbd14de4`；本次 shown NODES 未建立它们到当前可见 Dialog descendant 的精确 mapping，只能保留为返回的依赖线索，不得声称当前必用。
- **Fixture / API separation**：`弹出窗`、`对话框标题`、`搜索项目`、`取消`、`确定`、`Button`、`退出登录`、`请确认是否退出登录？`、`删除该条定时任务`、`删除后不可恢复，确定删除？`、`删除`、`不在显示提示` 均为 current documentation/component fixtures，不是产品默认文案、业务流程、公共 API 或跨页面规则。
- **Behavior / layout inference boundary**：本次没有返回 Dialog trigger、open/defaultOpen/controlled state、modal/modeless choice、overlay/backdrop geometry/color/blur、portal/mount owner、stacking/z-index、viewport placement、safe area、body scroll lock、content schema/slot/cardinality、dynamic title/description/actions、width/min/max/height、content overflow/scroll、sticky footer、loading/empty/error、confirm/delete async progress/error rollback、close reason、beforeClose、afterOpen/afterClose 或事件合同；不得从 current names/fixtures/gradient 推断。
- **Interaction / a11y / responsive blockers**：未返回 pointer/touch、close-icon hit behavior、backdrop click、Escape、Enter、Tab/Shift+Tab focus trap、initial focus、focus restore、nested-dialog stacking、motion/duration/easing/reduced motion；responsive/mobile/RTL/theme/dark/high contrast；`role=dialog|alertdialog`、`aria-modal`、labelledby/describedby、background inert/hidden、announcement 与 destructive confirmation semantics。Figma 未定义与 connector 未返回必须分开补证，禁止按行业惯例自动补写。
- **Not-returned blockers / lifecycle**：两次 live response 仍未证明 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/text/font/vector/path/main-instance/override/reference/prototype/reaction/asset/export/hash closure；formal `size`/`Type` definitions/default/legal combinations；完整 hidden-layer/instance-property/variant/slot closure；deterministic browser、keyboard、screen-reader 与 visual evidence。因此 `direct_read_complete=false`，Dialog、Modal 与 Message-Modal 均保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.26 Tabs live-read 观测证据（非完整组件合同）

本节只按用户节点与注册 Canvas 的两次 live connector response 登记 Tabs/页签的 current identity/inventory、documentation/component-set scaffold、formal-property 边界、resolved geometry/appearance、真实 SLOT、嵌套依赖与明确推断边界；不构成 Tabs、Tab Item 或 tab-panel 行为的完整组件合同，禁止超出返回字段推断：

- **Source / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；本次分别读取用户 `FRAME` `17005:12817` 与注册 `CANVAS` `9640:64818`。两次 response 对返回 subtree、6 个 component sets、主 set 7 项、5 个 item sets 18 项及嵌套 identities 一致，但均不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Source topology（身份必须分离）**：注册 `CANVAS` id=`9640:64818`、raw name=`Tabs-页签`；用户/documentation `FRAME` id=`17005:12817`、raw name 精确为 lowercase `tabs`、current dimensions=1444×1367px、layout=`none`、white fill、radius=48px。该 FRAME 不是 `COMPONENT` 或 `COMPONENT_SET`，没有 component key；FRAME、主 `Tabs` set 与五个 item sets 是不同 node，禁止按名称合并或用某个 item set 覆盖 Tabs identity。
- **Documentation scaffold / copy fixture**：header `17005:12818` raw name=`标题`，current x=0/y=40、width=1444px、padding=`0px 64px`、gap=24px；breadcrumb fixture 精确为 `web  / 组件名称`，title fixture 精确为 lowercase `tabs`，必须保留大小写。title current typography=PingFang SC Semibold 600 72/108。Footer `17005:12836` current x=0/y=1265、dimensions=1444×72px，copy fixtures 精确为 `@ Lingee 2026`、`交互设计师：xxx`、`视觉设计师：xxx`；`❖ 组件`、`❖ 灵基实例` 也是文档分组标签。以上均不是 runtime Tabs shell、默认文案、层级或字体绑定。

- **主 `Tabs` set identity / scaffold**：`COMPONENT_SET` id=`13134:7779`、key=`56576903851f443271846c4f805620b834c61825`、raw name=`Tabs`、description 精确为空字符串；current x=886/y=348、dimensions=216×514px、stroke=`#9747FF` / 1px / dash `10,5` / radius=16px。这些只作 component-set scaffold，不是 runtime border、placement 或尺寸合同。
- **主 set formal property**：本次只返回 `line`（boolean，default=`true`）。raw `type`、`size` 只来自 direct `COMPONENT` names，未出现在 formal `propertyDefinitions` 中，不是 public API、default、完整 enum 或 legal combinations。
- **主 `Tabs` current direct-component inventory**：下列 7 项只称两次 live response 一致返回的 current inventory，不是 immutable total。

| exact raw name | id | key | current set location / root observation |
|---|---|---|---|
| `type=global, size=Default` | `13134:7780` | `39ac65b607d3a8297dfc9d95471525a0b23b0f54` | x=20/y=20；row、gap=4px、hug |
| `type=section, size=Default` | `13134:7791` | `4aac3f0a82fca15ce3f1c7341402efcec5e9b6a5` | x=20/y=92；row、padding=4px、gap=4px、bg=`rgba(0,0,0,.03)`、radius=999px |
| `type=section, size=small` | `17017:14125` | `6385a382fda4eb67f95ac6a47251224ff9e024af` | x=20/y=157；row、h=32px、padding=4px、gap=4px、radius=999px |
| `type=local-outline, size=Default` | `13134:7802` | `6070fa9db3b00da8020e6e6c1f1bb4724557d869` | x=20/y=235；row、gap=4px、hug |
| `type=local-fill, size=Default` | `13134:7813` | `587b43f885224e3a6fec410edbc04e6043e494bb` | x=20/y=307；row、gap=4px、hug |
| `type=line, size=Default` | `13134:7162` | `80a6e8341a694f04edd817b5cdb7452f16a5b3cc` | x=20/y=386；column、hug |
| `type=line, size=large` | `17017:12512` | `d06446d3d5227ecf59eae103bc2950108ed53988` | x=20/y=442；column、hug |

- **真实 SLOT / current composition boundary**：7 个主 direct components 都含 connector-returned `SLOT`，raw names 分别为 `Slot`、`Slot 2`、`Slot 3`、`Slot 4`、`Slot 5`；每个 current specimen 都由一个 selected item + SLOT 内一个 default item 组成。global/section/local SLOT current gap=4px，line 的 group/SLOT current gap=20px。该结构只证明 current two-item fixture 与真实 SLOT 存在，不证明固定两个 tabs、public cardinality、任意 child 类型、动态 add/remove 或排序能力。
- **主 `line` wiring boundary**：两次 response 中的 documentation example instances 均传入 `line=true`；current line variants 含 Divider component `13134:7983`，其 visibility 引用 formal `line`。其他主 variants 的 shown descendants 未建立同等 wiring，禁止据此宣称 `line` 对全部 `type` 的效果、关闭后的 geometry 或 selected-indicator semantics。

- **Item-set identity / formal-property inventory**：五个 item sets 的 description 均精确为空字符串；set 容器均为 `#9747FF` 1px/dash `10,5`/radius=16px 的文档 scaffold。

| item set | id | key | current dimensions/location | returned formal properties |
|---|---|---|---|---|
| `tabs-item-global` | `13134:7762` | `e13d9a30cee8a0cda0053ba430f6d16a4ad99335` | 124×176px；x=115/y=389 | `Show icon`: boolean, default=`true` |
| `tabs-item-line` | `13134:7142` | `197986ee426d624cb263a0d537c5f25679f28b20` | 121×176px；x=610/y=389 | 本次未返回 `propertyDefinitions` |
| `tabs-item-section` | `13134:7772` | `7c5bd85341024d971340fcc951903a47b7bba38b` | 97×176px；x=259/y=389 | `txet`: boolean, default=`true`; `icon`: boolean, default=`true` |
| `tabs-item-local-outline` | `13134:7824` | `1ef51013bd47d366a781efe8e5f710ca7b87ddef` | 97×176px；x=376/y=389 | 本次未返回 `propertyDefinitions` |
| `tabs-item-local-fill` | `13134:7831` | `6d49cc1b214df1be6d4210d9e84a949664fac4d4` | 97×176px；x=493/y=389 | 本次未返回 `propertyDefinitions` |

  `txet` 是 connector 返回的正式 property 拼写，必须原样保留，禁止静默修正为 `text`。除表中四个 boolean properties（主 `line`、global `Show icon`、section `txet`/`icon`）外，本次没有返回 item text/content、value/key、disabled、closable、badge 或 icon-swap formal properties。
- **五个 item sets 的 18 项 current direct-component inventory**：raw `state`、`selected`、`size` 只来自 names，不是 formal axes/defaults/state machine/legal matrix。

| item set | exact raw name | id | key |
|---|---|---|---|
| `tabs-item-global` | `state=selected,selected=Yes` | `13134:7766` | `920ab03c76814e9f508a21b6baeffc74ce895aad` |
| `tabs-item-global` | `state=hover, selected=No` | `13145:7447` | `510024502492a6007006c5c18c8293021adcd987` |
| `tabs-item-global` | `state=default, selected=No` | `13145:7455` | `17de51ec00c77e23bfd1c1fbf52179ef66d67f87` |
| `tabs-item-line` | `state=selected, selected=Yes, size=small` | `13134:6950` | `815cbe52d9171ac62c22c1faab0a4d04ac5a6aa2` |
| `tabs-item-line` | `state=selected, selected=Yes, size=large` | `19894:8202` | `8b6298b9d2fddae85ed94f7fa3c4d5dc0580108f` |
| `tabs-item-line` | `state=hover, selected=No, size=small` | `13145:7882` | `744226662883e36549f7d365340630115c061cd5` |
| `tabs-item-line` | `state=hover, selected=No, size=large` | `19894:8205` | `11e77dbb2f222385570767e955ae06b061e4e792` |
| `tabs-item-line` | `state=default, selected=No, size=small` | `13145:7898` | `284b208d0bfdb4dd2d70adb9787f5edf8b16f447` |
| `tabs-item-line` | `state=default, selected=No, size=large` | `19894:8208` | `1ad4df69b867ae0936577ffd493501822449f19b` |
| `tabs-item-section` | `state=selected,selected=Yes` | `13134:7777` | `2e587dc2993fc94e0465aae26acd09aaff06dfdb` |
| `tabs-item-section` | `state=hover, selected=No` | `13145:7607` | `882c5374ea1244c0be32818b98b3fa2ec320e3f3` |
| `tabs-item-section` | `state=default, selected=No` | `13145:7611` | `51f7c3efd887ae5dd9ebea525dded6001d78dab3` |
| `tabs-item-local-outline` | `state=selected,selected=Yes` | `13134:7825` | `feb05914df3fdd42651cde74d20729e4b5cf0039` |
| `tabs-item-local-outline` | `state=hover, selected=No` | `13145:7691` | `a4a78610ad0311663063d4cb000c45938a3c91f4` |
| `tabs-item-local-outline` | `state=default, selected=No` | `13145:7695` | `f322e86e7d643e134a095b409c3dae50a06e954e` |
| `tabs-item-local-fill` | `state=selected,selected=Yes` | `13134:7836` | `a45b87428ebb4d9221a216077149a57dfe1c6d80` |
| `tabs-item-local-fill` | `state=hover, selected=No` | `13145:7800` | `89f51597c4d800786a35fc5349786e6721a8216c` |
| `tabs-item-local-fill` | `state=default, selected=No` | `13145:7804` | `5a6dbbfd0cdf43ed97ec50a124f1478bd66ca7f8` |

- **Global item current geometry/appearance**：三项均 h=32px、padding=`4px 16px`、gap=4px、radius=999px。selected current white fill + shadow=`0px 3px 6px rgba(0,0,0,.04)`；hover current fill=`rgba(0,0,0,.03)`；default transparent。current icon 20×20，visibility 引用 `Show icon`；selected text=PingFang SC Medium 500 14/22、unselected=Regular 400 14/22。以上只是 resolved state-name correlation，不证明 interaction transitions或 Token binding。
- **Section item current geometry/property wiring**：三项均 h=32px、padding=`0px 16px`、gap=4px、radius=999px；selected white、hover `rgba(0,0,0,.03)`、default transparent。text visibility 引用 formal typo `txet`，PieChart instance visibility 引用 `icon`。主 `type=section, size=Default` current composition 使用 `icon=false, txet=true` 的 text-only items；主 `type=section, size=small` 使用 `icon=true, txet=false` 的 icon-only items。该差异不证明 formal main size mapping或 icon-only API 组合完整性。
- **Local outline/fill current geometry/appearance**：两组均 h=32px、padding=`6px 16px`、gap=10px、radius=999px。outline selected stroke=`#495DFF`/1px，hover stroke=`rgba(0,0,0,.08)`/1px，default 本次未返回 stroke；fill selected bg=`#495DFF`、white text，hover bg=`rgba(0,0,0,.03)`，default transparent。selected text current PingFang SC Medium 14/22，default current Regular 14/22、fill=`rgba(0,0,0,.46)`；不得据此推断 focus/pressed/disabled 或主题算法。
- **Line item current geometry/appearance**：small h=28px、selected/default/hover typography=Noto Sans SC Medium 12/18；large h=32px、typography=PingFang SC Medium 14/22。selected item current column、gap=4px，含 height=0 的 1px bottom line；default/hover current bottom padding=4px。small/large current set matrix各有 selected/hover/default 3 项，但只是 current inventory。主 `type=line, size=large` 的 selected child 仍引用 component `13134:6950`（raw `size=small`），通过 current instance layout/text override 呈现 32px/large typography，而非引用现存 selected-large component `19894:8202`；该 wiring anomaly 必须保留，禁止静默换成“更合理”的组件。其 groups current height=33px、children h=32px 也是 geometry anomaly。
- **Resolved typography/color boundary**：除 line-small 的 Noto Sans SC 12/18 外，item specimens 主要使用 PingFang SC 14/22；selected/unselected resolved fills 包含 `rgba(0,0,0,.94/.82/.64/.46)`、white、`#495DFF`。这些只作 current appearance，不证明 Variable/Style/Token binding、contrast 合规或跨主题算法。

- **Documentation example instances（fixtures only）**：

| instance | current component | location/geometry | exact visible fixture |
|---|---|---|---|
| `14247:15438` | `13134:7780` global | x=83/y=949、hug | selected `对话` + default `工作` |
| `13145:7660` | `13134:7791` section | x=83/y=1005、padding=4px | selected `我的团队` + default `我的协作（3）` |
| `13145:7728` | `13134:7802` local-outline | x=83/y=1069、hug | selected `全部主题` + default `财务云` |
| `13145:7841` | `13134:7813` local-fill | x=83/y=1125、hug | selected `全部主题` + default `财务云` |
| `13145:7966` | `13134:7162` line | x=83/y=1181、width=231px | selected `历史对话` + default `定时任务` |

  这些实例均 current `line=true`；文本、数量、顺序、selected item 与位置都是文档 fixture，不是产品默认 tabs、业务导航、选中算法或固定两项合同。
- **Returned nested identities（只作当前定位/依赖线索）**：Dialog icon `9704:20568` / `e7ce1d75895ddc909de03192ea6535f0d6367295`、List1 `9704:21259` / `2721081e621d120989f0a28dbda1bd9ca6461e42`、PieChart `9704:21134` / `64d7d262f658dd9c509edd9f677c5ef3511615dd`、Divider `13134:7983` / `905161c9f146fc1cf1e23d3957ace269dfa451fc`。当前 global example 对 icon 做了 Dialog/List1 fixture override；PieChart current root=16×16、内部 vector≈14.67×14.67 at .67/.67。上述 identity 不证明 instance-swap API、资产导出/hash 或引用闭包完整。
- **Fixture / API separation**：`tabs`、`Tab`、`对话`、`工作`、`我的团队`、`我的协作（3）`、`全部主题`、`财务云`、`历史对话`、`定时任务` 均为 current documentation/component fixtures，不是产品默认文案、路由、业务分类、Tab value/key 或公共 API。
- **Data / behavior inference boundary**：本次没有返回 item value/key、selected index/value、default selection、single/multi-select constraint、controlled/uncontrolled、onChange/onSelect、orientation、activation mode、tab-panel identity/content/visibility/lazy mount/keep-alive、URL/deep-link sync、disabled/closable/addable/reorder、badge/count、overflow/scroll/wrap/more-menu、width/fill/equal-width、dynamic cardinality 或 empty/error/loading；不得从 raw names、SLOT 或 fixtures 补写。
- **Interaction / a11y / responsive blockers**：未返回 pointer/touch、hover/press/focus/focus-visible transitions、Arrow/Home/End/Enter/Space、automatic/manual activation、roving tabindex、focus order/restore、drag/reorder、scroll buttons；responsive/mobile/RTL/theme/dark/high contrast/reduced motion；`tablist`/`tab`/`tabpanel` roles、`aria-selected`、`aria-controls`/`aria-labelledby`、orientation、accessible name 与 panel announcement。Figma 未定义与 connector 未返回必须分开补证，禁止按行业惯例自动补写。
- **Not-returned blockers / lifecycle**：两次 live response 仍未证明 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/text/font/vector/path/main-instance/override/reference/prototype/reaction/asset/export/hash closure；formal raw `type/size/state/selected` definitions/default/legal combinations；完整 SLOT/cardinality/override closure；deterministic browser、keyboard、screen-reader 与 visual evidence。因此 `direct_read_complete=false`，Tabs 及五个 item sets 均保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.27 Tag live-read 观测证据（非完整组件合同）

本节只按用户节点与注册 Canvas 的两次 live connector response 登记 Tag/标签相关节点的 current identity/inventory、component-set scaffold、formal-property 边界、raw-name matrix、resolved geometry/appearance、嵌套依赖、Badge fixtures 与明确推断边界；不构成 Tag、HintBadge、LevelBadge 或业务状态体系的完整组件合同，禁止超出返回字段推断：

- **Source / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；本次分别读取用户 `SECTION` `22073:9897` 与注册 `CANVAS` `9640:63706`。两次 response 对返回 subtree、3 个 component sets、312 个 direct components、formal properties、geometry/appearance 与嵌套 identities 一致，但均不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Source topology（身份必须分离）**：注册 `CANVAS` id=`9640:63706`、raw name=`Tag-标签`；用户节点是未命名 `SECTION` id=`22073:9897`、current dimensions=6630×1178px、white fill、stroke=`rgba(0,0,0,.1)`/1px。Canvas 与 SECTION 都不是 `COMPONENT_SET`，没有 component key；它们与 `tag`、`HintBadge`、`LevelBadge` 三个 sets 是不同 node，禁止按“标签”或 Badge 语义合并身份。

- **Component-set identities / scaffold**：三个 set 的 description 均精确为空字符串；set 容器 current stroke 均为 `#9747FF`/1px/dash `10,5`/radius=5px，只作设计稿 scaffold，不是 runtime border、placement、尺寸或圆角合同。

| exact set raw name | id | key | current location / dimensions | current direct components | returned formal properties |
|---|---|---|---|---:|---|
| `tag` | `15039:45871` | `555841bdfea758ded4cd02386bf93a73166e00c8` | x=100/y=100；6430×770px | 306 | `Icon Start`: boolean, default=`false`; `Icon End`: boolean, default=`false` |
| `HintBadge` | `9839:3658` | `b64e248bf3f4f03d84c3f93a84327e6496cccc54` | x=462/y=1014；294×64px | 3 | 本次未返回 `propertyDefinitions` |
| `LevelBadge` | `11842:12949` | `f5698b652295e5567a98c3e176fd942b8d7a0c63` | x=115/y=1014；237×64px | 3 | 本次未返回 `propertyDefinitions` |

  本次 current direct-component inventory 对账为 `306+3+3=312`；312 个 direct component IDs 与 returned component keys 均唯一。该计数只是两次一致 live response 的 current inventory，不是 immutable total。

- **主 `tag` raw-name matrix（不是 formal API）**：direct component name 模板精确为 `Type={Type}, Size={Size}, Shape={Shape}, Style={Style}`。本次返回的 raw-name values 与笛卡尔覆盖如下：

| raw-name axis | current values |
|---|---|
| `Type` | `Expired`, `Paused`, `Error`, `Processing`, `primary`, `Success`, `Warning`, `amber`, `teal`, `emerald`, `lime`, `cyan`, `purple`, `indigo`, `violet`, `fuchsia`, `pink` |
| `Size` | `Small`, `Default`, `Large` |
| `Shape` | `Default`, `Radius` |
| `Style` | `text`, `tint`, `filled` |

  返回 inventory 当前完整覆盖 `17×3×2×3=306` 个 raw-name combinations。`Type/Size/Shape/Style` 只来自 component raw names，未出现在 formal `propertyDefinitions` 中；不得升格为 public API、defaults、完整 enum、业务状态集合或 legal matrix。
- **ID namespace inventory / 18 项例外**：306 项中 288 个 direct component IDs 位于 `15039:*`；另 18 个位于 `19366:*`，必须保留真实身份而不能按矩阵“补齐”成另一 namespace：

| raw combination group（均覆盖 3 Size × 2 Shape） | exact six ids in returned order |
|---|---|
| `Processing × text` | `19366:24252`, `19366:24256`, `19366:24260`, `19366:24265`, `19366:24269`, `19366:24273` |
| `primary × tint` | `19366:24292`, `19366:24296`, `19366:24300`, `19366:24305`, `19366:24309`, `19366:24313` |
| `Processing × filled` | `19366:24351`, `19366:24355`, `19366:24359`, `19366:24364`, `19366:24368`, `19366:24372` |

- **Current Tag composition / formal wiring**：306 项的 visible text fixture 均为 `状态标签`。Compass instance component id=`9704:20952`、key=`0b96de9a9305e2388e66a1e26e0bfb84d1b2399c`，其 visibility 引用 formal `Icon Start`；XLg instance component id=`9704:20548`、key=`d0ca92c75b49960ce717bf7bfd9d6e4f69935b01`，其 visibility 引用 formal `Icon End`。本次未返回 text/content property、真实 `SLOT` 或 icon-swap property；XLg 的图形和位置也不证明 close/delete/remove 行为。
- **Current size geometry / typography**：

| raw `Size` | current root height | predominant padding / gap | current icon | current text | composition observation |
|---|---:|---|---:|---|---|
| `Small` | 20px | `0px 4px` / 2px | 12×12px | PingFang SC Regular 400 12/18 | 通常 start icon、text、end icon 为 direct children |
| `Default` | 24px | `3px 6px` / 2px | 14×14px | PingFang SC Regular 400 12/18 | 通常 start icon、text、end icon 为 direct children |
| `Large` | 32px | `7px 8px` / 通常 6px | 16×16px | PingFang SC Medium 500 14/22 | current inner `FRAME`/`left-content` 包裹 start icon + text |

  上表是 predominant resolved observation，不是归一化约束；下列异常必须优先于上表保留。对有背景的 `tint`/`filled`，`Shape=Default` current radius 随 Size 为 Small=4px、Default=6px、Large=12px，`Shape=Radius` current radius=999px。`Style=text` 无背景且 returned radius 不一致，因此不能从它推断完整 Shape 效果。
- **Resolved palette（非 Token binding）**：下表仅记录 current resolved colors。`text` foreground 与 `filled` background 使用“主色”列；`filled` foreground current 均为 white；除 Success 的明确例外外，`tint` foreground 与主色一致。

| raw `Type` | current main color | current `tint` background | current `tint` foreground exception |
|---|---|---|---|
| `Expired` | `rgba(0,0,0,.46)` | `rgba(0,0,0,.03)` | — |
| `Paused` | `rgba(0,0,0,.64)` | `rgba(0,0,0,.03)` | — |
| `Error` | `#F12234` | `rgba(255,41,59,.08)` | — |
| `Processing` | `#2970FF` | `rgba(77,137,255,.08)` | — |
| `primary` | `#495DFF` | `rgba(109,128,255,.08)` | — |
| `Success` | `#04B545` | `rgba(8,204,80,.08)` | `#078E3B` |
| `Warning` | `#FF7700` | `rgba(255,119,0,.08)` | — |
| `amber` | `#E28800` | `rgba(255,178,0,.08)` | — |
| `teal` | `#00BFB8` | `rgba(0,229,229,.08)` | — |
| `emerald` | `#009D72` | `rgba(8,199,135,.08)` | — |
| `lime` | `#5FBA04` | `rgba(116,215,11,.08)` | — |
| `cyan` | `#0083D4` | `rgba(0,163,244,.08)` | — |
| `purple` | `#7F2AF3` | `rgba(143,64,255,.08)` | — |
| `indigo` | `#4343F5` | `rgba(81,85,246,.08)` | — |
| `violet` | `#572FF7` | `rgba(120,88,249,.08)` | — |
| `fuchsia` | `#ED1DB9` | `rgba(248,88,208,.08)` | — |
| `pink` | `#ED1165` | `rgba(255,36,109,.08)` | — |

  这些 hex/rgba 只是 connector 返回的 resolved appearance，不证明 Variable/Style/Token identity、主题算法、contrast 合规或跨模式映射。
- **必须保留的 geometry/scaffold anomalies**：`15039:45593`（`Paused/Small/Default/text`）current padding=`68px 4px`，同排 peers 多为 `0px 4px`；`15039:45849`（`cyan/Large/Default/filled`）current gap=4px，同组通常为 6px；上述六个 `Processing × filled` components 在 set scaffold 的 current y 依次为 `33/154/294/427/552/669`，对应常见行 y 为 `32/153/293/426/551/668`。这些都是 source evidence，禁止静默改成“合理值”或抹平 1px 偏移。

- **`HintBadge` current inventory（fixtures only）**：raw-name level values 未作为 formal properties 返回，copy 也不是业务默认值。

| raw level value | id | key | exact visible copy / main color | nested icon identity |
|---|---|---|---|---|
| `high` | `9839:3656` | `5c038684d40334a9ca1504547a2dafe8dd693211` | `警告` / `#F12234` | ExclamationCircle `9704:20531` |
| `medium` | `9839:3657` | `72d400e73477859ceb760bf3ec212e9b14ba57ce` | `建议` / `#FF7700` | Lightbulb `9704:20996` |
| `low` | `9839:3655` | `91af3eb3c942915edffa1a512020f37c16c8f1f1` | `提示` / `#FFB200` | Information `9704:20537` |

  三项 current root h=24px、padding=`0px 10px 0px 8px`、gap=4px、radius=8px；high icon=16px，medium/low icon=14px。背景为对应主色的 current 135deg gradient，alpha 从 12% 到 3%。这些值不证明 severity enum、告警语义、默认 copy、Token/gradient style binding 或交互。

- **`LevelBadge` current inventory（fixtures only）**：raw-name level values 未作为 formal properties 返回。

| raw level value | id | key | exact visible copy / resolved color |
|---|---|---|---|
| `diamond` | `11842:12948` | `7c53a09ce5d8dbcc0f84bbfa6b4f237d84837f89` | `钻石` / `#7F2AF3` |
| `gold` | `11842:12947` | `dec9b8c91aa80f2e8e8e2e1eae696b50080e3dbf` | `黄金` / `#A67802` |
| `platinum` | `11842:12946` | `d5aa3f6917fcc74a2a79b4d276054316c84e3605` | `铂金` / `#0068AB` |

  三项 current root h=24px、gap=10px、radius=12px，text=PingFang SC Medium 500 12/18；内部含 decorative SVG 与 3px/4px blur effects。上述 decoration、copy 与颜色不证明会员/等级业务枚举、排序、权益、状态、可点击行为、资产导出或 Token binding。

- **Returned nested identities（只作当前定位/依赖线索）**：Compass `9704:20952` / `0b96de9a9305e2388e66a1e26e0bfb84d1b2399c`；XLg `9704:20548` / `d0ca92c75b49960ce717bf7bfd9d6e4f69935b01`；Lightbulb `9704:20996` / `1e5f19194ae438d15e97e0bf358f98e8d1d8efec`；ExclamationCircle `9704:20531` / `560eaaca7715da05e97ad7e01a8ed0485f12ccfe`；Information `9704:20537` / `20bb293f1616534ed86ddf016feb1e448572f9f6`。这些 identities 不证明 public instance-swap API、资产 bytes/export/hash 或引用闭包完整。
- **Fixture / API separation**：`状态标签`、`警告`、`建议`、`提示`、`钻石`、`黄金`、`铂金`，以及 raw `Type`/level names 都是 current component/documentation fixtures；不是产品默认文案、服务端状态码、业务分类、会员模型、可提交 value 或公共 API。唯一 connector-returned formal properties 是主 `tag` set 的 `Icon Start` 与 `Icon End` 两个 boolean。
- **Data / behavior inference boundary**：本次没有返回 text/value/id、controlled/uncontrolled、dismissible/closable、onClick/onClose、link/navigation、selection、disabled、loading、tooltip、overflow/truncation、copy localization、dynamic icon/content、Badge ranking 或业务状态转换；不得从 icon 图形、raw names、颜色或 fixtures 补写。
- **Interaction / a11y / responsive blockers**：未返回 pointer/touch、hover/press/focus/focus-visible、keyboard activation、focus order/restore；responsive/mobile/wrap/max-width、RTL、theme/dark/high contrast/reduced motion；role、accessible name、状态/等级 announcement、contrast 结果或 decorative SVG 的 accessibility handling。Figma 未定义与 connector 未返回必须分开补证，禁止按行业惯例自动补写。
- **Not-returned blockers / lifecycle**：两次 live response 仍未证明 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/text/font/vector/path/main-instance/override/reference/prototype/reaction/asset/export/hash closure；formal raw `Type/Size/Shape/Style/level` definitions/default/legal combinations；完整 hidden-layer/instance-property/variant/slot closure；deterministic browser、keyboard、screen-reader 与 visual evidence。因此 `direct_read_complete=false`，`tag`、`HintBadge` 与 `LevelBadge` 三个 sets 均保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.28 Textarea live-read 观测证据（非完整组件合同）

本节只按用户 component-set 节点与注册 Canvas 的两次 live connector response 登记 Textarea/多行文本框的 current identity/inventory、双外观 set、documentation scaffold、formal-property wiring、raw-name matrix、resolved geometry/appearance、fixture 与明确推断边界；不构成原生 textarea、表单校验、主题切换或输入行为的完整组件合同，禁止超出返回字段推断：

- **Source / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；本次分别读取用户 `COMPONENT_SET` `15392:3094` 与注册 `CANVAS` `15443:3939`。Canvas response 中的 light-appearance set 与用户 response 对 10 个 direct component IDs/keys、formal properties、raw names、geometry/appearance 和 shown descendants 一致；Canvas 另返回 documentation、30 个 light-set instances 与第二个 dark-appearance set。两次均不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Source topology（同名身份必须分离）**：注册 `CANVAS` id=`15443:3939`、raw name=`Textarea-多行文本框`；其 `SECTION` id=`15443:4052`、raw name=`原子`、current dimensions=3000×2036px、white fill、stroke=`rgba(0,0,0,.1)`/1px。SECTION 内有两个 raw name 都为 lowercase `textarea` 的 `COMPONENT_SET`；它们拥有不同 id/key，Canvas/SECTION/两个 sets 不能按同名合并，也不能把 resolved 深浅外观擅自升格为 formal theme axis。

- **Component-set identities / scaffold**：两个 set 的 description 均精确为空字符串，current dimensions 均为 820×731px，scaffold 均为 `#9747FF`/1px/dash `10,5`/radius=24px；dark-appearance set 另有 current fill=`#212121`。这些是 set/documentation scaffold，不是 runtime border、背景、placement 或控件圆角合同。

| appearance label（仅按 resolved evidence 描述） | set id | key | direct components | returned formal properties |
|---|---|---|---:|---|
| light appearance / 用户节点 | `15392:3094` | `20bef7a0e750b0fb3028aedac6233a8e9a649afa` | 10 | `caption`: boolean, default=`true`; `maxlength`: boolean, default=`true` |
| dark appearance / Canvas-only additional set | `17386:26151` | `11816edca7992cdeb8552513081d7bc864dcd9e1` | 10 | `caption`: boolean, default=`true`; `maxlength`: boolean, default=`true` |

  本次 current set inventory 对账为 `10+10=20` 个 direct components。formal definitions 仅有两个 boolean；raw `filled` 与 `state` 没有出现在 `propertyDefinitions` 中，两个同名 sets 之间也没有 connector-returned theme/mode formal property。

- **Current raw-name matrix / exact component identities**：每个 set 当前各覆盖 raw `filled={off,on}` × `state={default,hover,focus,disabled,erro}` 的 `2×5=10` 项；跨两个 sets 共 20 项。`erro` 是 component raw name 的精确拼写，必须原样保留；Canvas 左侧文档标签写作 `error`，两者不能静默互换。首项 raw name 还包含前导空格且逗号后无空格，其他项逗号后有空格，这些 identity details 也不得清洗。

| exact raw name | light component id / key | dark component id / key |
|---|---|---|
| ` filled=off,state=default` | `15392:3082` / `ae08af9cf24c9bbb6c361ad62f2ca2c4b873d830` | `17386:26152` / `5f25b3d7fc1348867bd0befcdb872244b6fb0aed` |
| `filled=on, state=default` | `15418:4494` / `f206b637e04241832df0e1b22fd2bb521f1b148e` | `17386:26157` / `6ebe7c0356bc7d0b7a3fde419e2a82831cb3d339` |
| `filled=off, state=hover` | `15392:3093` / `5cbe00cdbd9eb4f2cf312cdb757e8163d32196aa` | `17386:26192` / `3964cad3eb5c17dbd4bf7c9b6f1fcfd9fb0c93eb` |
| `filled=on, state=hover` | `15418:4504` / `03b3a1946a03e941581ac7fa1b5c5ad8fb10a6e4` | `17386:26162` / `950a568f7fb1282611cf66e6b543b8378cc27a7a` |
| `filled=off, state=focus` | `15397:3024` / `6c9d66f4ed03ba1f8b611dc72179a69bac1bb858` | `17386:26197` / `6324554529787c9a73f7deb35b3dc7c05d8ee1e3` |
| `filled=on, state=focus` | `15418:4514` / `1df0ba40cafafba2af6f96edbab7932efeef9f8a` | `17386:26167` / `b1baf8d1d4f64212a6925fffacbc59367a7d090c` |
| `filled=off, state=disabled` | `15397:3029` / `9ba93559729fd8bfe2c5d101f57f5f5bd4ac8ffd` | `17386:26187` / `158b82b70e3a44987d61b9e66573b366c5b88408` |
| `filled=on, state=disabled` | `15418:4541` / `9724c57fe31d0c5160d35f02f1ceb5a6efa4e5a2` | `17386:26177` / `1a1714296ba12d77e94506383b452f53d3ecbf76` |
| `filled=off, state=erro` | `15397:3075` / `ca199b4334b436f3d90c1d6c1cb846d323a4d99e` | `17386:26182` / `f6568742e61ce8373f02c1d2d9191bcdb2ffb627` |
| `filled=on, state=erro` | `15418:6338` / `c1040ee8fe6afa9d065387dfcbdbe321a0c52790` | `17386:26172` / `812c895c8befdae2e360dd7be3a520d4cfe4a80e` |

  该 current Cartesian coverage 只描述 raw names，不证明 public `filled/state` API、default value、state machine、legal transitions，或两个 sets 是同一组件的正式 theme variants。

- **Root geometry / composition**：light set 的 10 个 direct components current root 均为 360×104px；通常为 column、padding=`8px 12px`、align-items=`flex-end`、gap=4px、radius=12px。dark set peers 返回相同布局；但 `17386:26152` 明确为 vertical hug 且未返回 root height，不能静默补成 104px。default placeholder main text current height=66px；filled content 使用 fill sizing。360px、104px 与 66px 都只是 current specimen geometry，不是 min/max width、rows 或响应式合同。
- **Caption / maxlength formal wiring**：descriptive caption fixture=`说明描述文字`，current PingFang SC Regular 12/18；其 shown non-error layer visibility 引用 formal `caption`。counter fixtures=`0/100` 或 `10/100`，current 12/18 right-aligned；其 visibility 引用 formal `maxlength`。source components 通常把 caption 绝对定位在 x=0/y=104、72×18px，即 root 下方；counter 常位于 x=315/y=78、33×18px，filled counter 为 x=310/y=78、38×18px。root height 不含外置 caption，禁止把 104px 误报为含 helper 的完整 occupied height。
- **Error-helper wiring anomaly**：raw `state=erro` 的 off fixture=`必填校验`、on fixture=`校验错误提示`，current x=0/y=104、PingFang SC Regular 12/18、fill=`#DA0B20`。returned error helper 没有 `visible → caption` reference；Canvas 中 `caption=false` 的 error instances仍保留 helper。因此 formal `caption` 不能解释为“控制所有 helper/error text”，也不能据此推断 validation message API。
- **Placeholder/content/caret fixtures**：`filled=off` shown copy=`请输入`，`filled=on` shown copy=`内容内容内容内容内容`；focus variants把 literal/rich-text `|` 放入 fixture（如 `内容内容内容内容内容|`、`{ts2}|{/ts2}请输入`、dark `{ts3}|{/ts3}请输入`）。这些只证明 current visual fixture，不证明实际 value/placeholder binding、编辑态、浏览器 caret、selection 或 blinking behavior。

- **Resolved state appearance（非 Token binding）**：

| raw state | light current root appearance | dark current root appearance |
|---|---|---|
| `default` | stroke=`rgba(0,0,0,.08)`/1px | stroke=`rgba(255,255,255,.12)`/1px |
| `hover` | stroke=`#495DFF`/1px | stroke=`#495DFF`/1px |
| `focus` | stroke=`#495DFF`/1px | stroke=`#495DFF`/1px |
| `disabled` | fill=`rgba(0,0,0,.03)`，本次未返回 stroke | fill=`rgba(255,255,255,.03)`，本次未返回 stroke |
| `erro` | stroke=`#F12234`/1px；helper=`#DA0B20` | stroke=`rgba(255,41,59,.28)`/1px；helper=`#DA0B20` |

  main text current typography=PingFang SC Regular 14/22。light placeholder/counter=`rgba(0,0,0,.28)`、content=`rgba(0,0,0,.82)`、caption=`rgba(0,0,0,.46)`；dark placeholder/counter=`rgba(255,255,255,.28)`、content=`rgba(255,255,255,.82)`、caption=`rgba(255,255,255,.46)`。hover 与 focus 当前边框相同，不能据此推断完整 interaction；所有颜色均是 resolved values，不证明 Variable/Style/Token identity、contrast 或主题算法。
- **Set-scaffold anomalies**：light on-error `15418:6338` current x=438/y=601，而同列常见 x=440、off-error `15397:3075` 为 x=20/y=596；dark peers复用相应布局。该 2px/5px 偏移与 dark default-off 缺失 root height 都必须作为 source evidence 保留，禁止“对齐修正”。

- **Canvas documentation scaffold / copy fixtures**：page title fixture=`Textarea`，current x=64/y=124、PingFang SC Semibold 600 72/108；breadcrumb fixture=`web  / 多行文本框`。左侧 group labels=`filled:off`/`filled:on`，row labels=`default`/`hover`/`focus`/`disabled`/`error`，column labels=`default`/`maxlength`/`caption`；这些紫色 labels/brackets 和坐标只是文档说明，不是 runtime UI、formal axes 或用户可见默认文案。
- **30 个 light-set documentation instances**：每个 raw filled/state row 都展示三列：`default` 列传 `maxlength=false, caption=false`，`maxlength` 列传 `maxlength=true, caption=false`，`caption` 列传 `maxlength=false, caption=true`。当前文档没有展示 formal defaults 对应的 `true/true` 组合；缺席不证明该组合非法，也不证明 caption 与 maxlength 互斥。

| raw fixture row | `default` instance | `maxlength` instance | `caption` instance |
|---|---|---|---|
| `filled=off / default` | `15444:5477` | `15444:5577` | `15444:5663` |
| `filled=on / default` | `15444:5527` | `15444:5618` | `15444:5664` |
| `filled=off / hover` | `15444:5482` | `15444:5582` | `15444:5665` |
| `filled=on / hover` | `15444:5528` | `15444:5619` | `15444:5666` |
| `filled=off / focus` | `15444:5487` | `15444:5587` | `15444:5667` |
| `filled=on / focus` | `15444:5529` | `15444:5620` | `15444:5668` |
| `filled=off / disabled` | `15444:5492` | `15444:5592` | `15444:5669` |
| `filled=on / disabled` | `15444:5530` | `15444:5621` | `15444:5670` |
| `filled=off / error` | `15444:5497` | `15444:5597` | `15444:5671` |
| `filled=on / error` | `15444:5531` | `15444:5622` | `15444:5672` |

  30 项都引用 light set direct components，不是第三个 set。绝大多数 current instance root=360×104px；off/default 的无 maxlength 实例 `15444:5477` 与 caption-only `15444:5663` 为 360×82px，后者 caption 位于 y=82 的 root 外；off/default maxlength instance仍为 360×104px。该 instance override geometry 不得反向改写 source component 的统一尺寸。
- **Peripheral documentation fixture（不属于 Textarea composition）**：`input Label` instance id=`15443:4385`、component id=`13629:6959`、key=`36fd0686b3dfb6732353928800dc260b472bd750`，current properties=`info:true, required:true`，copy=`技能名称`；内含 QuestionCircle component id=`9704:20526`、key=`aa8abc556fdaa25c5e81017625c1ec0f8c229ae8` 与 required `*`。它位于 x=1716/y=296，是旁置文档 fixture；本次没有返回它与 textarea 的结构、label-for 或 aria wiring。pause component `14:1890` / `635c386fc44b511dbd42567674b165806e33316c` 也是文档 annotation。
- **Returned but unwired nested identity**：两次 response 的 component registry 还返回 Envelope `9704:20598` / `3cc1618ae3ca519e3f68faa18659a6340da94ffa`，但 shown textarea subtree 没有可见 Envelope node、property reference 或 instance-swap wiring；不得把它写成 Textarea 默认图标/API。
- **Fixture / API separation**：`请输入`、`内容内容内容内容内容`、`说明描述文字`、`0/100`、`10/100`、`必填校验`、`校验错误提示`、`技能名称`、literal `|` 以及所有 documentation labels 都是 current fixtures；不是产品默认 copy、长度规则、错误策略、字段 schema、主题名或公共 API。唯一 formal properties 是每个 set 的 `caption` 与 `maxlength`。
- **Data / behavior inference boundary**：本次没有返回 value/defaultValue、placeholder/content text properties、onInput/onChange/onBlur、controlled/uncontrolled、rows/minRows/maxRows、min/max height、auto-grow、resize handle/direction、scroll/overflow、wrap/newline、selection/caret、IME/composition、copy/paste、undo/redo、spellcheck/autocomplete、maxlength enforcement 或 counter 的 grapheme/UTF-16/byte 算法；不得从 raw names、literal caret、counter fixtures 或 frame geometry补写。
- **Validation / form / interaction blockers**：未返回 required/minLength/maxLength/pattern/custom validation、error trigger/priority/clear timing、server error、form submit/reset、label association、helper/error coexistence；pointer/touch、hover/focus/blur/disabled transitions、keyboard Tab/shortcut、readOnly；light/dark switching、responsive width/height、mobile、RTL、high contrast、reduced motion。Canvas 的两套 resolved appearance 不等于主题合同。
- **A11y blockers**：未返回 native `<textarea>` semantics、accessible name、`aria-describedby`、`aria-invalid`/`aria-errormessage`、required/readOnly/disabled exposure、counter/error live-region announcement、focus order、screen-reader behavior 或 contrast evidence。Figma 未定义与 connector 未返回必须分开补证，禁止按行业惯例自动补写。
- **Not-returned blockers / lifecycle**：两次 live response 仍未证明 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/text/font/vector/path/main-instance/override/reference/prototype/reaction/asset/export/hash closure；formal raw `filled/state/theme` definitions/default/legal combinations；完整 hidden-layer/property/variant/slot closure；deterministic browser、IME、keyboard、screen-reader 与 visual evidence。因此 `direct_read_complete=false`，两个 `textarea` sets 均保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.29 Time Picker live-read 观测证据（非完整组件合同）

本节只按用户 documentation FRAME 与注册 Canvas 的两次 live connector response 登记 Time Picker/时间选择器的 current identity/inventory、三组顶层 component sets、cell/panel/input composition、nested dependency、resolved geometry/appearance、fixture 与明确推断边界；不构成时间数据模型、弹层交互、滚动选择、表单校验或无障碍行为的完整组件合同，禁止超出返回字段推断：

- **Source / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；本次分别读取用户 `FRAME` `15236:1909` 与注册 `CANVAS` `9659:15034`。Canvas response 包含同一 FRAME subtree；两次对 shown node IDs、component/set identities、nested instances、raw names、geometry/appearance 与 fixtures 一致，Canvas 额外明确 FRAME current dimensions=1444×2568px。两次均不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Source topology（身份必须分离）**：注册 `CANVAS` id=`9659:15034`、raw name=`Time Picker-时间选择器`；documentation `FRAME` id=`15236:1909`、raw name=`原子`、current 1444×2568px、white fill、radius=48px。FRAME 不是 `COMPONENT_SET`，没有 component key；它与 Time Cell、panel set、Time Picker set 及 referenced select/Button/Scrollbar sets 都是不同 identities，禁止按“时间选择器”语义合并。
- **Documentation shell / copy fixture**：header current x=0/y=40、width=1444px、padding=`0px 64px`、gap=24px；breadcrumb fixture=`PC  / Time Picker`，title fixture=`Time Picker`、PingFang SC Semibold 600 72/108。Footer current x=0/y=2478、1444×72px，copy=`@ Lingee 2026`。分组标题 `❖ Default Time`、`❖ Hour & Minute Picker`、`❖ Hour & Minute & Second Picker` 都是文档标签，不是 runtime headings、默认模式或产品 copy。

- **Top-level set identities / count boundary**：三个 set 的 description 均精确为空字符串，scaffold 均为 `#9747FF`/1px/dash `10,5`/radius=5px，只作设计稿边界；本次均未返回 `propertyDefinitions`。

| set raw name | id | key | current location / dimensions | current inventory boundary |
|---|---|---|---|---|
| `Time Cell` | `13652:18709` | `a0231b70e4354d6ee516982bfe03a68d8387512b` | x=64/y=385；168×272px | 3 shown direct COMPONENT nodes + 1 registry-only component identity |
| `Component 1` | `15638:9427` | `4ae9bde81c88a747f43075376d217818366618b1` | x=422/y=385；673×394px | 2 shown direct panel components |
| `Time Picker` | `14937:17763` | `9d4588259d7fdf994ab6bd85241d1c021e51f3aa` | x=64/y=850；332×1482px | 9 shown direct components |

  因此 current evidence 是 `3+2+9=14` 个 shown direct nodes，外加一个只在 component registry 出现的 Time Cell Disabled identity，共 15 个 associated component identities；不能把 registry-only 条目虚报为已读取 geometry 的 shown node。raw `State` 与 `Property 1` 只来自 component names，不是 formal API、defaults、完整 enums 或 legal combinations。

- **Time Cell identity inventory / shown-node boundary**：

| exact raw name | id | key | current shown observation |
|---|---|---|---|
| `State=Default` | `13652:18712` | `7440a85cffdfc9438e68ac6474a298e1a2ed8ebb` | shown；x=20/y=39；128×32px；transparent；radius=8px |
| `State=Hover` | `13652:18710` | `7e8b377f216e16d454687b2c1428da9665961abe` | shown；x=20/y=111；128×32px；fill=`rgba(0,0,0,.03)`；radius=8px |
| `State=Selected` | `13652:18716` | `aecdda626c0db8096e57a28d570b19ee9e137ea1` | shown；x=20/y=183；128×32px；fill=`rgba(109,128,255,.12)`；radius=8px |
| `State=Disabled` | `13652:18714` | `8bd70e7ab00d67f47603e29b5f1f8b17480bff8d` | registry-only；本次 NODES 未返回其 direct node/geometry/appearance |

  shown cell fixture text=`24`。Default/Hover current text=PingFang SC Regular 14/22、`rgba(0,0,0,.82)`；Selected=Medium 500 14/22、`#495DFF`。documentation labels 精确为 `Defaut`、`Hover`、`Selected`；`Defaut` 是 source typo，禁止静默修成 `Default`。registry-only Disabled 不能按惯例补写颜色、opacity 或交互。

- **Panel set inventory（raw `Property 1` 不是 formal property）**：

| exact raw name | id | key | current root / composition |
|---|---|---|---|
| `Property 1=Hour & Minute Picker` | `14849:18024` | `a29ceb233e1ad9562952506eae84bd0cb43a42e1` | width=292px、vertical hug、padding=`12px 12px 0px`、gap=4px、white fill、0.5px `rgba(0,0,0,.06)` stroke、radius=20px、shadow=`0px 4px 12px rgba(0,0,0,.08)`；2 cell columns + footer |
| `Property 1=Hour & Minute & Second Picker` | `14871:32255` | `591f4db132468077dbdc7496036008f245ab3598` | width=292px、vertical hug、padding=`12px 12px 0px`、gap=4px、returned white/`rgba(0,0,0,.06)` strokes、radius=20px、同 shadow；3 cell columns + footer |

- **Panel cell-group geometry / fixtures**：Hour+Minute group current h=264px、row gap=12px；每列为 column gap=2px，cell instance h=32px。source Hour fixtures为 `09,10(selected),11,12,13,14,15,16`；Minute fixtures为 `00,01(selected),02,03,04,05,06,07,08`。Hour+Minute+Second panel current三列；Hour同样展示 09–16 且 10 selected，Minute/Second各展示 `00,01(selected),02,03,04,05,06,07`。这些可见序列、selected 值和列表长度只是 current fixtures，不证明完整 0–23/0–59 domain、步长、滚动窗口或默认时间。
- **Scrollbar evidence / anomaly**：referenced Scrollbar component=`14654:1217` / `28af79e76934940581ba43fe478fcbadc24deb7c`，set=`14654:1219` / `90a9687ff267112e707e795acd605858c048a94e`；shown thumb current width=4px、height=62px、fill=`rgba(0,0,0,.12)`、radius=4px。双列面板 scrollbars current x/y=`130/42` 与 `282/121`；三列面板为 `83.33/45`、`176.67/108`、`282/116`。不同 y 与小数 x 必须原样保留，不能“对齐修正”；Scrollbar presence 不证明 wheel/drag/touch/keyboard mechanics、range 或同步算法。
- **Panel footer / nested Button boundary**：Wrapper component=`14849:18793` / `78ad02b91de7acb2707def6ca4b200bc59e8df0f`，current 292×52px，inner padding=12px、top stroke=0.5px、bottom radius=20px。包含 h=28px 的 `现在` link-plain Button `13702:17137` / `d48df9ff426e8f8576fa03992c8a18c4683c2f8e` 与 `确定` primary Button `13702:16857` / `f4c5b245abce67d780e0d6df477a4cbbe2166db1`。nested `Icon Start/Icon End/Button Text` instance properties属于 referenced Button，不是 Time Picker set 的 formal API；本次没有返回 now/confirm click semantics。

- **Time Picker set current direct-component inventory**：raw names 只描述 current specimens，不构成 state machine。simple input descendants主要引用 `select` set 的 specific components；open specimens另嵌 panel。

| exact raw name | id | key | current set location / root fixture | nested select component |
|---|---|---|---|---|
| `State=Default Unselected` | `14937:17762` | `c88802131f81f8d17b85a5be9df97b8a6e47df3f` | x=20/y=20；placeholder=`小时:分钟` | `14023:17008` |
| `State=Unselected Hover` | `14937:17755` | `40cab62ffab43f152478ecb8b03fee7baeb0ce7e` | x=20/y=100；placeholder=`小时:分钟` | `14023:17041` |
| `State=Dropdown Select` | `14937:17757` | `a7bc979016858833f0eecfbc34b97bfe5e3f3713` | x=20/y=180；292×332px；unselected input + open Hour/Minute panel + pointing-hand fixture | `14023:17043` |
| `State=Unselected Disabled` | `14937:17759` | `3bfc41da0dd46c65fb32d78950515f056fb14800` | x=20/y=662；placeholder=`小时:分钟` | `14023:17052` |
| `State=Selected` | `14937:17754` | `1a73a24951e2ac1c023cb100bab26e95fe62990f` | x=20/y=742；value fixture=`10:30` | `14023:17102` |
| `State=Selected Hover` | `14937:17761` | `a83d65b129badd4d02d81574e0450755b156aa7e` | x=20/y=822；value=`10:30`；shown XCircleFill | `14023:17110` |
| `State=Re-select` | `14937:17760` | `aec6408887140ff7b44f75c0f28eb54accaaa493` | x=20/y=902；292×332px；value=`10:30` + open overridden panel | `14023:17118` |
| `State=Validation` | `14937:17756` | `cf13cd86c7bd2c2b7af33cd3230f436da7d5758c` | x=20/y=1304；placeholder + error helper | `14023:17061` |
| `State=Selected Disabled` | `14937:17758` | `aa6acb7d859d9283ea9eb5b6c8317f992ba9f80a` | x=20/y=1384；value fixture=`10:01` | `14023:17126` |

- **Input geometry / resolved state appearance**：shown select roots current h=40px、padding=`8px 12px`、gap=8px、radius=12px。Default/Selected stroke=`rgba(0,0,0,.08)`/1px；Hover/Dropdown/Re-select/Selected Hover stroke=`#495DFF`/1px；Validation stroke=`#F12234`/1px；Disabled fill=`rgba(0,0,0,.03)` 且本次未返回 stroke。placeholder current PingFang SC Regular 14/22、`rgba(0,0,0,.28)`；selected text 14/22、`rgba(0,0,0,.82)`，Selected Disabled=`rgba(0,0,0,.46)`。这些都是 resolved appearance，不证明 Token binding、interaction transitions、contrast 或主题算法。
- **Nested select-property boundary**：shown select instances传 `Show Left icon=false`、`show caption=false`；大多数传 `Show Right icon=true` 并显示 Clock，Selected Hover传 `Show Right icon=false` 却显示 XCircleFill。上述 properties属于 referenced `select` set `14023:17042` / `a449432aca004b0f537e507a0bd76128ef0f3d6e`，不是 Time Picker set formal properties。XCircleFill 图形也不证明 clear action。
- **Validation wiring anomaly**：Validation nested select明确传 `show caption=false`，但 returned subtree仍含 x=0/y=40、96×18px 的 error text fixture=`校验相关提示信息`，fill=`#DA0B20`、PingFang SC Regular 12/18。不得把 `show caption` 解释为控制所有 error/helper text，也不得据此推断 validation timing、message API 或 occupied height。
- **Open-panel positioning / overlay boundary**：Dropdown/Re-select roots current 292×332px；input at x=0/y=0，panel instance at x=0/y=44，形成 current 4px gap。panel white fill、0.5px border、radius20px、medium shadow只证明 inline specimen geometry；未返回 portal/container、z-index、anchor、collision/flip、viewport clipping、outside-click 或 focus trap。
- **Fixture inconsistencies / override evidence**：unselected Dropdown input显示 `小时:分钟`，其 panel source fixture却已有 10/01 selected；Re-select input显示 `10:30`，override panel Hour sequence精确为 `7,8,9,10(selected),11,12,13,16`，Minute为 `27,28,29,30(selected),31,32,33,07,08`。这些非连续值与 selected mismatch 是 current documentation evidence，不是合法 time range、默认值、循环滚动或数据算法，禁止清洗成连续序列。

- **Relevant nested identities（只作定位/依赖线索）**：Clock `9704:21174` / `9c2f098c87163fc7ce3f644c2665e7b3fa9ad0a2`；XCircleFill `9704:20529` / `e5d9af8a021db4d47a0484025506010540c2f3bf`；Pointing hand `11980:13115` / `606799257faa9353d83394511dea48c5f848cf97`。Pointing hand current 32×34px at x=96/y=109、带 shadow，是 interaction illustration fixture，不是 runtime pointer asset。
- **Returned but unwired registry identities**：response registry 还包含 Search `15530:16890`、Envelope `9704:20598`、ChevronUp `9704:20841`、FieldTypeDate `9704:21169`、ChevronDown `9704:20842` 以及多项 `11954:*` components/sets，但 shown Time Picker subtree没有对应 visible node/property wiring；不得据此补写搜索、日期模式、上下箭头、checkbox/tag/switch 或其他公共能力。
- **Fixture / API separation**：`24`、`09–16`、`00–08`、`10:30`、`10:01`、`小时:分钟`、`现在`、`确定`、`校验相关提示信息`、non-contiguous override lists、Pointing hand 和全部 documentation labels 都是 current fixtures；不是时间 domain、locale format、默认值、按钮行为、错误策略或公共 API。本次三个顶层 sets 均没有 connector-returned formal properties。
- **Data / behavior inference boundary**：未返回 value/defaultValue、hour/minute/second model、12/24-hour mode、AM/PM、timezone/UTC、locale/calendar、format/parser、step/interval、min/max/disabled time、rounding、wrap-around、now source、confirm/cancel semantics、controlled/uncontrolled、clear、manual typing、mask、paste、IME、open/defaultOpen、commit/revert 或 form serialization；不得从 raw names、cell copy、selected fixtures或 nested component names补写。
- **Interaction / responsive blockers**：未返回 pointer/touch、wheel/trackpad、drag scrollbar、column momentum/snap、hover/press/focus/blur、keyboard Arrow/Page/Home/End/Enter/Escape/Tab、open/close/focus restore；responsive/mobile、RTL、dark/high-contrast/reduced-motion、overlay collision。Figma 未定义与 connector 未返回必须分开补证。
- **A11y blockers**：未返回 input/combobox/spinbutton/listbox roles、accessible name、`aria-expanded`/`aria-controls`/`aria-activedescendant`、selected/disabled/error announcement、column labels、reading order、focus trap/restore、live region 或 screen-reader time format。禁止按行业惯例自动补写。
- **Not-returned blockers / lifecycle**：两次 live response 仍未证明 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/text/font/vector/path/main-instance/override/reference/prototype/reaction/asset/export/hash closure；formal raw `State/Property 1/type/format` definitions/default/legal combinations；hidden registry-only Time Cell Disabled 的 node closure；完整 override、scroll、overlay、interaction 与 a11y evidence。因此 `direct_read_complete=false`，Time Cell、panel set 与 Time Picker set 均保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.30 Toast live-read 观测证据（非完整组件合同）

本节只按用户 component-set 节点与注册 Canvas 的两次 live connector response 登记 Toast/全局提示的 current identity/inventory、formal-property wiring、raw-name matrix、single/multi-line composition、resolved geometry/appearance、nested icons、fixtures 与明确推断边界；不构成通知队列、自动消失、操作回调、动效或无障碍行为的完整组件合同，禁止超出返回字段推断：

- **Source / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；本次分别读取用户 `COMPONENT_SET` `14657:16873` 与注册 `CANVAS` `14657:16548`。Canvas response 中的 Toast subtree 与用户 response 对 8 个 direct component IDs/keys、formal properties、raw names、shown descendants、geometry/appearance 与 nested identities 一致；Canvas 额外明确 set current dimensions=970×732px。两次均不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Source topology（身份必须分离）**：注册 `CANVAS` id=`14657:16548`、raw name=`Toast-全局提示`；唯一 shown `COMPONENT_SET` id=`14657:16873`、key=`e4351716df27721e86a9906001197f0af0ec8136`、raw name=`Toast`、description 精确为空字符串。Canvas 不是 set，也没有 component key；禁止把 Canvas identity、set scaffold 与 runtime Toast root 合并。
- **Set scaffold / formal properties**：set current 970×732px、white fill、stroke=`#9747FF`/1px/dash `10,5`/radius=5px；这些只作 component-set scaffold。connector-returned formal definitions 仅为 `closable`（boolean，default=`true`）与 `text button`（boolean，default=`false`）；property 名中的小写和空格必须原样保留。

- **Current raw-name matrix（不是 formal API）**：direct names 使用 `type={info,error,warning,success}, Content Line={Single-line,Multi-line}`，current inventory 完整覆盖 `4×2=8` 项。raw `type`、`Content Line` 未出现在 `propertyDefinitions` 中，不是 public enums、defaults、severity model 或 legal combinations。

| exact raw name | id | key | current set location / root geometry |
|---|---|---|---|
| `type=info, Content Line=Single-line` | `14657:16874` | `4f1d1a30f1884bdb2183d1898725be43a0832f60` | x=28/y=24；horizontal hug；h=40px |
| `type=error, Content Line=Single-line` | `14657:16920` | `200d280875b048a78419146d552f186777efb755` | x=28/y=94；horizontal hug；h=40px |
| `type=warning, Content Line=Single-line` | `14657:16908` | `ea8a67ca134350c45d3b63df60c4bb9dae15f1dc` | x=28/y=164；horizontal hug；h=40px |
| `type=success, Content Line=Single-line` | `14657:16914` | `ae0c947278a8b3db0fb4d97058df3268edb95ad6` | x=28/y=234；horizontal hug；h=40px |
| `type=info, Content Line=Multi-line` | `14657:16880` | `9e2742bbcb382fa5d8651c6be8a81fe24a5f19ee` | x=28/y=354；fixed w=914px；vertical hug |
| `type=error, Content Line=Multi-line` | `14657:16887` | `e992f16a9226a3d6790cf7727b9fb65e4de1ce0a` | x=28/y=448；fixed w=914px；vertical hug |
| `type=warning, Content Line=Multi-line` | `14657:16894` | `c2e151c62c24a7b35d5cd7b1627139d66a4ad9ad` | x=28/y=542；fixed w=914px；vertical hug |
| `type=success, Content Line=Multi-line` | `14657:16901` | `2dfb8a368ef34c35068ee749819acf1c52ec514f` | x=28/y=636；fixed w=914px；vertical hug |

- **Shared root geometry / composition**：8 项均为 row、padding=`8px 12px`、align-items=`center`、gap=8px、stroke=1px、radius=16px、shadow=`0px 4px 12px rgba(0,0,0,.08)`。Single-line 使用 horizontal hug + fixed h=40px；Multi-line 使用 fixed w=914px + vertical hug。Single-line content container为 icon+text 的 hug row；Multi-line sub-container为 fill/hug row，icon另包在 h=24px frame。914px 和当前 hug/fixed 差异只是 specimens，不是 viewport width、max-width、wrap 或响应式合同。
- **Formal visibility wiring**：每项都包含 trailing action text layer fixture=`去查看`，其 visibility 引用 formal `text button`；也包含 trailing XLg 16×16 layer，其 visibility 引用 formal `closable`。defaults只证明当前 property definition，不证明 action/close event、hit target、focusability、URL、callback、dismiss reason 或关闭动画。message text 没有 text/content property reference；本次也未返回 icon-swap property、SLOT 或 arbitrary action content。
- **Current typography**：main single-line text=PingFang SC Regular 16/24、vertical center；multi-line text=PingFang SC Regular 16/24、top aligned；resolved fill均为 `rgba(0,0,0,.94)`。action text current 42×20px、PingFang SC Medium 500 14/20、fill=`#007AFF`。这些只作 current appearance，不证明 typography/color Token binding或 contrast 合规。

- **Resolved type palette / icon mapping（非 Token binding）**：

| raw `type` | current 90deg background gradient | current border | current leading icon identity |
|---|---|---|---|
| `info` | `rgba(242,247,255,1) 0% → rgba(247,251,255,1) 100%` | `#E4EEFF` | ExclamationCircleFill1 `9704:20530` / `3e68a771e46131d7d3022f28b2286dd831b37158` |
| `error` | `rgba(255,240,241,1) 0% → rgba(255,245,245,1) 100%` | `#FFE0E3` | XCircleFill `9704:20529` / `e5d9af8a021db4d47a0484025506010540c2f3bf` |
| `warning` | `rgba(255,245,236,1) 0% → rgba(255,247,240,1) 100%` | `#FFE8D6` | ExclamationCircleFill `9704:20540` / `9a68efabcdb42f21c4d520c96c17a2aa7c922772` |
| `success` | `rgba(238,255,240,1) 0% → rgba(247,255,248,1) 100%` | `#DBFFE1` | CheckCircleFill `9704:20547` / `c718a8b754d1914ae8b7f609014489d160eaf04b` |

  leading icons current 20×20px；connector 未返回其 resolved vector fill/path。info 的 icon raw name 精确带后缀 `ExclamationCircleFill1`，与 warning 的 `ExclamationCircleFill` 是不同 component identities，禁止按图形相似合并。XLg identity=`9704:20548` / `d0ca92c75b49960ce717bf7bfd9d6e4f69935b01`；其图形不证明 dismiss semantics。

- **Single-line copy fixtures**：info=`通知类消息通知类消息通知类消息。`；error=`异常类消息异常类消息异常类消息。`；warning=`警示类消息警示类消息警示类消息。`；success=`成功类消息成功类消息成功类消息。`。这些文本和 punctuation 都不是产品默认文案、severity definition 或 localization contract。
- **Multi-line copy fixture anomaly**：info 使用 `这个通知类消息很长…` 长文；error 使用 `这个异常类消息很长…`。warning 与 success direct components 也复用同一个 error template，returned copy仍从 `这个异常类消息很长…` 开始，而不是各自的警示/成功文案。该 cross-type fixture reuse 必须原样保留，禁止按 raw type 自动“纠正文案”。
- **Geometry/scaffold sequencing evidence**：Single-line roots y=`24/94/164/234`，固定步进70px；Multi-line roots y=`354/448/542/636`，固定步进94px。connector 未返回 Multi-line exact root height；不得由步进反推高度、行数或截断规则。set 内排序和 y 值只是 scaffold，不是 runtime stack gap/placement。
- **Fixture / API separation**：all message copy、`去查看`、raw `type`/`Content Line` values、gradients、set positions都只描述 current design fixtures。唯一 formal properties 是 `closable` 与 `text button` 两个 boolean；没有 message、action label、icon、duration、id/key、priority 或 placement property。
- **Data / behavior inference boundary**：未返回 create/update/destroy API、toast id、dedupe、queue/max count、stack ordering、top/bottom placement、offset、portal/container/z-index、duration/auto-dismiss、persistent mode、pause-on-hover/window blur、progress、action callback/link、close callback/reason、promise/loading、severity mapping、manual dismiss、swipe/drag 或 lifecycle events；不得从 raw names、XLg、action fixture 或 scaffold positions补写。
- **Interaction / responsive / motion blockers**：未返回 pointer/touch、hover/press/focus/focus-visible、keyboard Tab/Enter/Space/Escape、focus transfer/restore；enter/exit/stack/reflow motion、easing/duration、reduced motion；responsive/mobile/wrap/max-width、safe area、RTL、dark/high contrast。Figma 未定义与 connector 未返回必须分开补证。
- **A11y blockers**：未返回 `status`/`alert`/`alertdialog` role、`aria-live` politeness、`aria-atomic`、announcement ordering/deduplication、accessible close/action names、keyboard reachability、focus policy、timeout extension 或 contrast evidence。禁止按行业惯例自动补写。
- **Not-returned blockers / lifecycle**：两次 live response 仍未证明 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/text/font/vector/path/main-instance/override/reference/prototype/reaction/asset/export/hash closure；formal raw `type/Content Line` definitions/default/legal combinations；完整 hidden-layer/property/slot/action closure；deterministic browser、timing、motion、keyboard、screen-reader 与 visual evidence。因此 `direct_read_complete=false`，Toast set 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.31 Tooltip live-read 观测证据（非完整组件合同）

本节只按用户 component-set 节点与注册 Canvas 的两次 live connector response 登记 Tooltip/消息提示的 current identity/inventory、raw-name matrix、directional composition、resolved geometry/appearance、arrow evidence、fixtures 与明确推断边界；不构成触发、定位、碰撞处理、关闭、动效或无障碍行为的完整组件合同，禁止超出返回字段推断：

- **Source / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；本次分别读取用户 `COMPONENT_SET` `15749:2527` 与注册 `CANVAS` `12299:14090`。Canvas response 中的 Tooltips subtree 与用户 response 对 12 个 direct component IDs/keys、raw names、shown descendants、geometry/appearance、text fixture 与 connector-local element templates 一致；Canvas 额外明确 set current dimensions=1069×539px。两次均不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Source topology（身份必须分离）**：注册 `CANVAS` id=`12299:14090`、raw name=`Tooltip-消息提示`；唯一 shown `COMPONENT_SET` id=`15749:2527`、key=`dd66284ed100c8ef0c8492f1dd387b9b58acc704`、raw name 精确为 plural `Tooltips`、description 精确为空字符串。Canvas、set 与 runtime tooltip root 是不同层级；禁止把语义登记名 `Tooltip`、Canvas raw name 与 set raw name 合并为同一稳定身份。
- **Set scaffold / formal-property boundary**：set current 1069×539px、layout=`none`、stroke=`#7B61FF`/1px/dash `10,5`/radius=5px；connector 未返回 set fill，这些 returned values 也只作 component-set scaffold。两次 response 均未返回任何 set-level `propertyDefinitions`；因此下述 raw `Direction`/`Position` 不能声明为 formal variant properties、public enums、defaults 或完整 legal-combination contract。

- **Current raw-name matrix（不是 formal API）**：`Direction=Bottom|Top` 当前各搭配 `Position=Right|Center|Left`，`Direction=Right|Left` 当前各搭配 `Position=Top|Center|Bottom`，形成 direction-conditioned `4×3=12` 项 current inventory。下表保留 connector 返回的 direct-tree 顺序；顺序与 set 中的几何排列都不是 API precedence：

| exact raw name | id | key | current set location |
|---|---|---|---|
| `Direction=Bottom, Position=Right` | `15749:2528` | `cf83507b4dc422b76329ddf1f618b969b1e343c2` | x=236/y=424 |
| `Direction=Bottom, Position=Center` | `15749:2533` | `b2da26dc134954c07d150760a37edcd66894a88c` | x=440/y=424 |
| `Direction=Bottom, Position=Left` | `15749:2537` | `ef39e303bd7e47e2e285ca03d4dab3a3876118d5` | x=644/y=424 |
| `Direction=Top, Position=Left` | `15749:2542` | `e6f2fedc41a8a2d245e402d2692a3e42e97553fd` | x=644/y=27 |
| `Direction=Top, Position=Center` | `15749:2552` | `e7268671dac94c95b6505d766ee7b2335d79fd85` | x=440/y=26 |
| `Direction=Right, Position=Top` | `15749:2556` | `bd358bd0704c76fedf5edc5b96515a3ef01f4f6a` | x=844/y=132 |
| `Direction=Left, Position=Top` | `15749:2561` | `5157b782cd506a9ee5b1000d14fec94e5a7555c2` | x=32/y=132 |
| `Direction=Right, Position=Bottom` | `15749:2566` | `49f7a87d79b9971207bae48744b3f4837e21e386` | x=844/y=324 |
| `Direction=Left, Position=Bottom` | `15749:2571` | `0ec99ea3de9d6386b809312ae90817d74243ebb7` | x=32/y=324 |
| `Direction=Right, Position=Center` | `15749:2576` | `317df3f186e1c46e24b181572914159b055040f3` | x=844/y=228 |
| `Direction=Left, Position=Center` | `15749:2580` | `0b0b960cfba9edd6ca45fc15f5a24e3040dc00c2` | x=32/y=228 |
| `Direction=Top, Position=Right` | `15942:54187` | `4329f177858a31ca0cf0a88669a8464c27b333a2` | x=236/y=29 |

- **Directional composition evidence（不等于 placement semantics）**：raw `Direction=Bottom` roots 为 column，arrow 在 content 前；`Direction=Top` 为 column，content 在 arrow 前；`Direction=Right` 为 row，arrow 在 content 前；`Direction=Left` 为 row，content 在 arrow 前。edge-position specimens 通过 arrow wrapper 的 24px 单侧 padding 与 root `alignItems`/`justifyContent` 差异定位箭头，center specimens 使用居中 alignment。这里只能证明 current child order/alignment；不能把 raw labels直接翻译成 trigger-relative placement、CSS placement name、transform origin、anchor side 或 arrow pointing direction。
- **Current content geometry / appearance**：12 项 root 均为 horizontal/vertical hug 并应用 returned named effect `Shadow/Popover/xl`，current resolved shadow=`0px 6px 16px -4px rgba(6,6,6,.08)`。content frame current width=188px、padding=`12px 16px`、gap=10px、fill=`#171717`、radius=8px；Top/Bottom specimens 为 horizontal fixed + vertical hug，Left/Right specimens 为 horizontal fixed + vertical fill。188px 只是当前 content width，不是 max-width、min-width、viewport rule 或响应式合同；connector 未返回每个 component root 的 exact dimensions。named effect 及 auto-generated fill labels也不证明稳定 Variable/Style/Token binding。
- **Current typography / copy fixture**：所有 direct definitions 的 shown text 均精确为 `此处是可自定义的说明文字内容，按照上述规则定义最大宽度以及高度`；text layer 为 horizontal fill + vertical hug，resolved style=`PingFang SC Regular 400 12/16`、horizontal=`JUSTIFIED`、vertical=`TOP`、fill=`#FFFFFF`。文案中“按照上述规则定义最大宽度以及高度”只是 specimen copy，不能反向建立任何宽高规则；本次未返回 text/content property、rich content、line clamp、overflow、localization 或 measurement contract。
- **Arrow evidence / connector-local template anomaly**：Top/Bottom arrow images current 10×5px，Left/Right current 5×10px，resolved fill=`#171717`；shown wrappers/images raw names 为 `气泡指示箭头`/`三角形`。Bottom image nodes `15749:2530`/`15749:2534`/`15749:2539` 与 Top/Right image `15942:54191` 使用 connector-local `EL-a776459e`，而 Top/Left `15749:2546` 与 Top/Center `15749:2555` 使用 `EL-17b0805f`；六个 side image nodes `15749:2558`/`15749:2565`/`15749:2568`/`15749:2575`/`15749:2577`/`15749:2583` 使用 `EL-787fb7be`。这些 `EL-*` 不是 Figma stable IDs；connector 未返回完整 vector path、transform、export/hash 或 asset provenance，尤其不得因 resolved dimensions/fill 相同而合并模板或推断三角形朝向。
- **Prior Slider nested-fixture correlation**：既有 §3.6.17 Slider 观测中的 Top/Center `15749:2552` / `e7268671dac94c95b6505d766ee7b2335d79fd85` 与 Right/Center `15749:2576` / `317df3f186e1c46e24b181572914159b055040f3` identity 与本次 direct inventory 一致；Slider fixtures 的 shown content=`50`，而本次 direct definitions 使用长说明文案。该差异只证明 current instance-layer override evidence，不证明 formal text property、format API、hover trigger 或通用 Tooltip contract。
- **Scaffold sequencing boundary**：Top group current locations约为 x=`236/440/644`、y=`29/26/27`；Bottom group x=`236/440/644`、y=424；Left/Right groups x=`32/844`、y=`132/228/324`。坐标只描述 set scaffold，禁止推导 runtime offset、gap、viewport placement、stacking 或 collision behavior。
- **Data / behavior inference boundary**：未返回 open/close state、controlled/uncontrolled API、content/children/render slot、trigger/anchor reference、placement resolver、offset、arrow offset、portal/container、z-index、boundary、flip/shift/collision、follow-cursor、virtual anchor、delay、duration、keep-mounted、interactive mode、dismiss reason 或 callbacks；不得从 raw names、child order、shadow或箭头 fixture 补写。
- **Interaction / responsive / motion blockers**：未返回 hover/focus/click/context-menu/manual trigger组合、pointer enter/leave、focus transfer/restore、Escape、outside press、touch/long-press、disabled target、scroll/resize handling；enter/exit/reposition motion、easing/duration、transform origin、reduced motion；mobile、safe area、RTL、zoom、high contrast、text scaling、wrapping与 overflow behavior。Figma 未定义与 connector 未返回必须分开补证。
- **A11y blockers**：未返回 `role=tooltip`、trigger 与 tooltip 的 `aria-describedby`/id linkage、accessible description来源、keyboard/touch等价触发、announcement timing、hoverable content policy、dismissibility、focus policy、contrast或 WCAG 1.4.13 evidence。禁止按行业惯例自动补写。
- **Not-returned blockers / lifecycle**：两次 live response 仍未证明 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/text/font/vector/path/main-instance/override/reference/prototype/reaction/asset/export/hash closure；formal `Direction/Position` definitions/default/legal combinations；hidden layers、完整 instances/overrides、interaction、responsive、motion与 a11y evidence。因此 `direct_read_complete=false`，Tooltip set 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.32 Progress live-read 观测证据（非完整组件合同）

本节只按用户 documentation frame 与注册 Canvas 的两次 live connector response 登记 Progress/进度条的 current source topology、direct inventory、raw-name matrix、label composition、resolved geometry/appearance、fixture anomalies 与明确推断边界；不构成数值模型、状态语义、更新行为、动效或无障碍行为的完整组件合同，禁止超出返回字段推断：

- **Source / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；用户 URL 指向 `FRAME` `18523:1472`，并非 component set；本次另读取注册 `CANVAS` `17649:6904`。两次 response 对 frame 内 set identity、12 个 direct component IDs/keys、raw names、shown descendants、geometry/appearance 与 fixtures 一致；Canvas response 额外明确 documentation frame current dimensions=838×957px。两次均不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Source topology（身份必须分离）**：注册 `CANVAS` id=`17649:6904`、raw name=`Progress-进度条`；用户 documentation `FRAME` id=`18523:1472`、raw name=`组件库`，无 component key；实际 shown `COMPONENT_SET` id=`18523:1583`、key=`a4e4f2c02752cc99d7d380de91d4bad660bdf9fc`、raw name 精确为 generic `Container`、description 精确为空字符串。Canvas、documentation frame、generic-named set 与 runtime Progress root 是不同身份，禁止合并或仅凭 `Container` 名称跨组件复用。
- **Documentation scaffold（不是组件合同）**：frame current 838×957px、white fill、radius=48px；header x=80/y=40/w=678，title fixtures 精确为 `web  / Progress`（`web` 后两个空格）与 `进度条`；footer x=80/y=845/w=678/h=72，copy fixtures 为 `@ Lingee 2026` 与 `组件设计师：xxx`。set 位于 frame x=81/y=259，current dimensions=651×580px。以上标题、logo、footer、坐标和 frame 外观均只属 documentation page。
- **Set scaffold / formal-property boundary**：set layout=`none`、stroke=`#9747FF`/1px/dash `10,5`/radius=5px，仅作 component-set scaffold。两次 response 均未返回任何 set-level `propertyDefinitions` 或 component-property references；因此下述 lowercase raw `status` 与 capitalized raw `Progress` 不能声明为 formal variant properties、public enums、defaults、数值 API 或完整 legal-combination contract。styled-text 标记 `ts1`/`ts2`/`ts3`/`ts4` 也只是 connector 展示的 text style runs，不是组件 properties。

- **Current raw-name matrix（不是 formal API）**：current direct names 覆盖 `status={Label Right,Label Left,Label Bottom,No Label}` × `Progress={0,Arbitrary,100}` 的 `4×3=12` 项。下表保留 connector direct-tree 返回顺序；raw order、set location 与 fixture labels 都不是数值 precedence：

| exact raw name | id | key | current set location / root width |
|---|---|---|---|
| `status=Label Right, Progress=0` | `18523:1582` | `ace3ca2f4517bdf9301177b1a625478add0f5c06` | x=20/y=287；w=280px |
| `status=Label Left, Progress=Arbitrary` | `18523:1742` | `f2acd9eb0924b9eb3c754a1ea806e25aa3e5d682` | x=20/y=173；w=280px |
| `status=Label Left, Progress=0` | `18765:819` | `37a38a95a12784bcc6a0d512c639a4dcc38109e0` | x=20/y=141；w=280px |
| `status=Label Left, Progress=100` | `18765:809` | `475d1e36c7143ab4ebd6b9376990ecd4ed117186` | x=20/y=205；w=280px |
| `status=Label Right, Progress=Arbitrary` | `18765:773` | `024ef0cc0181b2f52150f9d702f5c0a6f14ad845` | x=20/y=313；w=280px |
| `status=Label Bottom, Progress=0` | `18765:779` | `67a4a4d88ade1106298913243d70a159359f5f7e` | x=20/y=417；w=611px |
| `status=Label Bottom, Progress=Arbitrary` | `18765:831` | `cf2c736922471ac585c813c18cf2ca6ce0569976` | x=20/y=471；w=611px |
| `status=Label Bottom, Progress=100` | `18780:757` | `e398aabb7b2f511e42d0cf04664af4d6c29bb3b0` | x=20/y=525；w=611px |
| `status=No Label, Progress=Arbitrary` | `18765:789` | `991fa88044f4441195bf9bac013d3639d7ae9ed3` | x=20/y=46；w=280px |
| `status=No Label, Progress=0` | `18765:806` | `3b118fa30da76a02e169be70bd93a5f0b065bec5` | x=20/y=20；w=280px |
| `status=No Label, Progress=100` | `18765:800` | `cd0042844fd4a6e617024f916cf9c7b764320148` | x=20/y=72；w=280px |
| `status=Label Right, Progress=100` | `18523:1580` | `1a557109c2ae3f0a8520502daf3c9eaf6d256032` | x=20/y=339；w=280px |

- **Current label composition**：`No Label` roots 为 fixed-width column，仅含 Progress bar；`Label Left` 为 280px row、gap=4px、text 在 bar 前，text current fixed w=120px；`Label Right` 为 280px row、gap=4px、bar 在 label container 前，percentage text current fixed w=36px；`Label Bottom` 为 611px column、gap=4px、bar 在上下文 label row 前，label row 为 fill-width space-between。所有 roots vertical hug；这些结构只描述 specimens，不定义响应式重排或 label-placement API。
- **Track / fill geometry evidence**：returned empty/background bars 使用 horizontal fill + vertical hug、fill=`rgba(0,0,0,.06)`、radius=200px。raw `Progress=0` specimens 没有 shown nested `Progress` child；四个 `Arbitrary` specimens 均复用 fixed w=135px/h=6px、fill=`#495DFF`、radius=`0px 200px 200px 0px` 的 nested segment，即使 host/root widths 与 label composition 不同。connector 未返回 empty/full bar exact height；不得把 135px、6px、radius 或 hug behavior转换为通用 percentage formula、stroke width、方向或 clipping contract。
- **`Progress=100` color/structure anomaly**：`Label Left`、`Label Right` 与 `No Label` 的 100 fixtures 使用整条 `#04B545` root、radius=200px，且没有 shown nested segment；`Label Bottom, Progress=100` 则保留 `rgba(0,0,0,.06)` track，并使用 horizontal-fill/h=6px 的 `#495DFF` nested segment。connector 未返回 green/blue 的 semantic token、success state、completion transition 或设计解释；必须原样保留差异，禁止按 raw `100` 自动统一颜色或 DOM 结构。
- **Label Right fixtures / typography**：shown copy 精确包含 leading space：Progress 0=` 0%`、Arbitrary=` 90%`、100=` 100%`；current text style=`PingFang SC Medium 500 12/16`、fill=`rgba(0,0,0,.82)`、left/top alignment。leading whitespace、90% 与 fixed 36px width 只作 fixture，不是 formatter、padding 或 value mapping。
- **Label Left fixtures / typography**：shown styled copy 分别为 `0 / 20,000`、`18,500 / 20,000`、`20,000 / 20,000`；text current fixed w=120px，base style=`Microsoft YaHei Regular 400 14/22`、right/center alignment，returned layer fill=`rgba(0,0,0,.64)`，styled runs 使用 current value `rgba(0,0,0,.82)` 与 denominator `rgba(0,0,0,.46)`。这些数字和 mixed runs 不是 min/max/value schema、locale 或 token contract。
- **Label Bottom fixtures / typography**：left copy 分别为 `0 / 20,000（已使用0%）`、`18,500 / 20,000（已使用25.6%）`、`20,000 / 20,000（已使用100%）`；right group 固定包含 `剩余` 与对应 `20,000`/`3,720`/`0`。left base style=`Microsoft YaHei Regular 400 12/18`，shown runs 为 14/22 且 fills=`rgba(0,0,0,.82)`/`rgba(0,0,0,.46)`；`剩余` 为 Microsoft YaHei Regular 14/22、fill=`rgba(0,0,0,.46)`；remaining number 为 Noto Sans SC Medium 500 16/24、fill=`rgba(0,0,0,.82)`。font/fill labels只作 resolved appearance，不证明稳定 Variable/Style/Token binding。
- **Fixture arithmetic / geometry inconsistency（必须保留）**：同一 raw `Arbitrary` 在 Label Right 显示 90%，在 Label Left 显示 `18,500 / 20,000`，在 Label Bottom 又把相同 18,500/20,000 配为“已使用25.6%”与“剩余3,720”；四种 Arbitrary bars仍复用同一个 fixed 135×6px segment，而 host/root widths与 label reservations不同。返回证据不存在一致的 value→percentage→remaining→pixel-width 映射；禁止选择任一 fixture“纠正”其他文案，也禁止据普通算术补写计算规则。
- **Scaffold sequencing boundary**：No Label specimens current y=`20/46/72`，Label Left y=`141/173/205`，Label Right y=`287/313/339`，Label Bottom y=`417/471/525`；direct-tree 返回顺序与几何顺序不同。坐标和组间距只描述 documentation set scaffold，不是 runtime list、margin、layout或 variant order。
- **Data / behavior inference boundary**：未返回 `value`/`min`/`max`/`percent`/`remaining`/`status`/`format`/`showInfo`/`labelPosition`/`size`/`strokeWidth` properties，亦未返回 clamp、rounding、overflow、negative、NaN、indeterminate、buffered、segmented、upload/loading/success/error mapping、update frequency 或 callbacks；不得由 raw names、copy、colors或 geometry 补写。
- **Interaction / responsive / motion blockers**：未返回 value change/re-render semantics、loading/completion transition、fill animation、easing/duration、reduced motion、live updates；responsive width、label wrapping/truncation/stacking、mobile、RTL/progress direction、vertical mode、zoom或 text scaling behavior。Figma 未定义与 connector 未返回必须分开补证。
- **A11y blockers**：未返回 `role=progressbar`、`aria-valuemin`/`aria-valuemax`/`aria-valuenow`/`aria-valuetext`、indeterminate accessible name、update announcement policy、color-independent completion cue、contrast或 forced-colors evidence。禁止按行业惯例自动补写。
- **Not-returned blockers / lifecycle**：两次 live response 仍未证明 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/text/font/vector/path/main-instance/override/reference/prototype/reaction/asset/export/hash closure；formal `status/Progress` definitions/default/legal combinations；hidden layers、exact bar dimensions、numeric/format behavior、interaction、responsive、motion与 a11y evidence。因此 `direct_read_complete=false`，Progress set 保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.33 Alert live-read 观测证据（非完整组件合同）

本节只按用户 documentation frame 与注册 Canvas 的两次 live connector response 登记 Alert/消息通知的 current source topology、formal-property wiring、raw-name matrix、four-style composition、resolved palette/icons、SLOT/Description evidence、fixtures 与明确推断边界；不构成消息数据模型、关闭/操作回调、动态列表、响应式或无障碍行为的完整组件合同，禁止超出返回字段推断：

- **Source / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；用户 URL 指向 documentation `FRAME` `16375:3589`，本次另读取注册 `CANVAS` `9640:63959`。Canvas response 中的 frame/Alert subtree 与用户 response 对 set identity、20 个 direct variant IDs/keys、formal properties、shown descendants、geometry/appearance、nested identities与 fixtures 一致；Canvas 额外明确 documentation frame current dimensions=792×2265.74px。两次均不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Source topology（身份必须分离）**：注册 `CANVAS` id=`9640:63959`、raw name=`Alert-消息通知`；documentation `FRAME` id=`16375:3589`、raw name=`组件库`，无 component key；实际 `COMPONENT_SET` id=`14507:2701`、key=`e7c2b9ab96d7a69b54ad9d3140b5055fe5bca8e4`、raw name=`Alert`、description 精确为空字符串。Canvas、frame、set 与 runtime Alert root 是不同身份，禁止合并。
- **Documentation scaffold（不是组件合同）**：frame current 792×2265.74px、white fill、radius=48px；title fixtures 为 generic `web  / 组件名称` 与 `信息通知`；footer x=40/y=2153.74/w=712/h=72，copy fixtures=`@ Lingee 2026` 与 `组件设计师：xxx`。这些 title/footer/坐标和页面外观仅属 documentation scaffold。
- **Set scaffold / formal properties**：set current 632×1672px、layout=`none`、stroke=`#9747FF`/1px/dash `10,5`/radius=5px，仅作 component-set scaffold。connector-returned formal definitions 精确为 `Closable`（boolean，default=`true`）与 `Text Button`（boolean，default=`true`）；capitalization 与空格必须保留，且不得与 Toast 的 lowercase properties 合并。

- **Current raw-name matrix（不是 formal API）**：direct names 完整覆盖 `Style={WithTitleDesc,WithActionButton,Default,Multiple}` × `type={warning,error,success,defualt,info}` 的 `4×5=20` 项。raw `Style`/`type` 未因 name syntax 自动成为 formal properties；`defualt` 是 source typo，必须原样保留，禁止改写成 `default`。下表保留 connector direct-tree 返回顺序：

| exact raw name | id | key | current set y / root geometry |
|---|---|---|---|
| `Style=WithTitleDesc, type=warning` | `14507:2697` | `084536735880b1a49d0f8d4e8f01ed08c8667736` | y=560；w=600px；vertical hug |
| `Style=WithTitleDesc, type=error` | `14507:2700` | `1246e2d44d777c0400bb0750e92e5d3de8887e2d` | y=468；w=600px；vertical hug |
| `Style=WithTitleDesc, type=success` | `14507:2698` | `b4dc35bc07126cac2e7406549e0e3026d1d2cb21` | y=652；w=600px；vertical hug |
| `Style=WithTitleDesc, type=defualt` | `14826:5457` | `52249d9b9c6881da5222f4f9cb6baab5cc7f0c93` | y=744；600×62px fixed |
| `Style=WithTitleDesc, type=info` | `14507:2694` | `f53d0f58c7c96d756f3a8939b77d5a49b7a2b60c` | y=376；w=600px；vertical hug |
| `Style=WithActionButton, type=success` | `14507:2695` | `3ad6755789da684260a8d0d5de7d7a411a09388a` | y=836；w=600px；vertical hug |
| `Style=WithActionButton, type=info` | `14507:2693` | `49ea589a7511cd83d2409c27cae5e752d6f40ee0` | y=908；w=600px；vertical hug |
| `Style=WithActionButton, type=error` | `14507:2692` | `1a15a389d521e3a675c7942e2d28b9d3b1f6a6b1` | y=980；w=600px；vertical hug |
| `Style=WithActionButton, type=warning` | `14507:2690` | `6e9a66206836314a8dcd8c45373f3252bcb9c61c` | y=1052；w=600px；vertical hug |
| `Style=WithActionButton, type=defualt` | `14826:7023` | `6f112a8075b0e95ed5eec0a9d488cbb1a2211dc7` | y=1124；w=600px；vertical hug |
| `Style=Default, type=warning` | `14507:2696` | `01bcd428267344b0bf1bfa3835a8a639bede8247` | y=160；w=600px；vertical hug |
| `Style=Default, type=success` | `14507:2691` | `af5a48a19369c59fa97964f77bc97b03cb01f40a` | y=232；w=600px；vertical hug |
| `Style=Default, type=defualt` | `14826:7008` | `c0805c50c179f9596ff0655db6eb5a973c251c54` | y=304；w=600px；vertical hug |
| `Style=Default, type=info` | `14507:2699` | `b5fa2e87c6e2f26b378beafad03b56845acb6317` | y=16；w=600px；vertical hug |
| `Style=Default, type=error` | `14507:2689` | `17b9610ee431df9925682faee9ee03b16e11e26f` | y=88.26；w=600px；vertical hug |
| `Style=Multiple, type=defualt` | `14826:7213` | `6733303a123efa61667fa46c78ac79bd00ea7bf9` | y=1588；w=600px；vertical hug |
| `Style=Multiple, type=success` | `14826:7214` | `d00a84d0b0bc1ff74527ab39e85b512be7361044` | y=1490；w=600px；vertical hug |
| `Style=Multiple, type=warning` | `14826:7322` | `981bf6ebe9d06a2519dd8b9f4046f2e699c69d68` | y=1392；w=600px；vertical hug |
| `Style=Multiple, type=error` | `14826:7332` | `323da584267d674aedf43688efaa202e5dbae4a9` | y=1294；w=600px；vertical hug |
| `Style=Multiple, type=info` | `14826:7342` | `7e9974add2a1bbaaff7106dad92e3e052dbe9fad` | y=1196；w=600px；vertical hug |

- **Shared root geometry**：20 项均 current w=600px、padding=`10px 12px`、stroke=1px、radius=16px；Default/WithTitleDesc/WithActionButton 为 row 且主要 gap=8px，Multiple 为 column、align stretch、gap=2px。只有 `WithTitleDesc, type=defualt` 明确 fixed h=62px，其余为 vertical hug；不得由 scaffold y步进反推 runtime height、margin 或 stack gap。
- **Formal visibility wiring（作用域不能泛化）**：Default 与 WithTitleDesc 的 shown `Close Icon` 使用 component `icon/close-small` `14:1995` / key=`5639a365b70e5c730ec532d7942faaee39263795`，visibility→formal `Closable`；五个 WithActionButton 的 shown `Text Button` frame visibility→formal `Text Button`。WithActionButton 未显示 close layer，Multiple 未显示 close/action layer；因此 set-level defaults不证明每个 Style 都存在对应控件，也不证明 dismiss/action event、hit target、keyboard behavior、callback 或 URL。
- **Default composition / copy fixtures**：Default 为 leading 16×16 icon + fill text + optional close。info/error/warning copy分别为 `这是一个消息通知，通知样式。`、`这是一个消息通知，报错样式。`、`这是一个消息通知，警告样式。`；success 与 raw `defualt` 都复用 `这是一个消息通知，完成样式。`。该 cross-type fixture reuse 必须保留，禁止按 raw type 自动纠正文案。text current PingFang SC Regular 14/22、fill=`rgba(0,0,0,.82)`。
- **WithTitleDesc composition / copy fixtures**：content column gap=2px；title row为 icon + `检测未通过`，title current PingFang SC Medium 500 14/22、fill=`rgba(0,0,0,.82)`；description wrapper left padding=24px，copy 精确为 `存在1项合规阻断问题，暂不可上传;安全性检测已通过。`（source 使用 ASCII semicolon），current PingFang SC Regular 12/18、fill=`rgba(0,0,0,.46)`；trailing close visibility连接 `Closable`。五种 type 复用同一失败类文案，不能据 type 推导业务语义。
- **WithActionButton composition / copy fixtures**：root shown children 为 prefix `folder-check`、filename `财务报告分析.zip` 与 action frame；action 含 `arrow-clockwise` + `重新上传`，visibility连接 `Text Button`。folder-check identity=`11351:5099` / `b35873cdb49029405a6bf98687bf9a4991636579`，arrow-clockwise identity=`970:2628` / `047b7a84f5e1d0a95615e42fb6762c98bda69b7f`。五种 type 复用同一上传 fixture；不得推断文件模型、upload/retry API、action callback 或图标可替换性。
- **Multiple SLOT / standalone Description boundary**：五个 Multiple variants各含 shown `SLOT` raw name=`Description`，current 默认展开两个 `Description` instances。standalone `COMPONENT` `14826:7548`、key=`1c6b2965aa4564ad20beb132989930a403ce10e0`、raw name=`Description`，current h=22px、row gap=6px，包含 4×4px `rgba(0,0,0,.28)` bullet 与同一长文案（14/22、fill=`rgba(0,0,0,.64)`）。SLOT 只证明 current slot node/fixtures，不证明 item schema、数量、增删、fallback、allowed components 或 list semantics；Description 不计入 Alert set 的 20 项 matrix。
- **Resolved type palette / leading icon identities（非 Token binding）**：warning base=`rgba(255,119,0,*)`、border alpha=.08、icon ExclamationCircleFill `9704:20540` / `9a68efabcdb42f21c4d520c96c17a2aa7c922772`；error base=`rgba(255,41,59,*)`、border alpha=.08、icon XCircleFill `9704:20529` / `e5d9af8a021db4d47a0484025506010540c2f3bf`；success base=`rgba(8,204,80,*)`、border alpha=.08、icon CheckCircleFill `9704:20547` / `c718a8b754d1914ae8b7f609014489d160eaf04b`；info base=`rgba(77,137,255,*)`、border alpha=.08、icon ExclamationCircleFill1 `9704:20530` / `3e68a771e46131d7d3022f28b2286dd831b37158`；raw `defualt` base black、border=`rgba(0,0,0,.06)`，也复用 ExclamationCircleFill1。default/info icon身份相同，warning 的无后缀 icon 是另一 identity，禁止合并。
- **Gradient fixture differences**：backgrounds均由 type base alpha=.03 渐变至透明，但 returned angle/first-stop 随 Style/type 不一致：WithTitleDesc 与 Multiple current 为 132deg/1%；WithActionButton 通常135deg/0%，但 raw `defualt` 为90deg/0%；Default warning/info/defualt为90deg/0%，error为132deg/1%，success为135deg/0%。这些差异与 resolved borders只作 current appearance，不证明 semantic color、stable Token binding 或跨 Style normalization rule。
- **Scaffold sequencing boundary**：Default y约=`16/88.26/160/232/304`，WithTitleDesc=`376/468/560/652/744`，WithActionButton=`836/908/980/1052/1124`，Multiple=`1196/1294/1392/1490/1588`；direct-tree order与几何/type order不同。全部坐标只描述 set scaffold，禁止推导 runtime ordering、placement 或间距。
- **Content / data-model boundary**：本次未返回 title/description/message/action label/file/icon/list items 的 formal text/content properties，也未返回 id、severity/status映射、persistent/ephemeral mode、duration、queue、priority、timestamp、data source、validation schema或 localization contract；所有 copy、标点、文件名和两条 Description 都只是 fixtures。
- **Interaction / responsive / motion blockers**：未返回 close/action pointer与 keyboard handlers、focus transfer/restore、Escape、auto-dismiss、retry/upload lifecycle、loading/success/error transition；responsive width/max-width/wrap/overflow、mobile、RTL、zoom、高对比；enter/exit/expand/list motion、easing/duration、reduced motion。Figma 未定义与 connector 未返回必须分开补证。
- **A11y blockers**：未返回 `alert`/`status`/`alertdialog` role、`aria-live` politeness、`aria-atomic`、announcement timing/deduplication、accessible close/action names、list semantics、focus policy、timeout extension、color-independent severity cue或 contrast evidence。禁止按行业惯例自动补写。
- **Not-returned blockers / lifecycle**：两次 live response 仍未证明 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/text/font/vector/path/main-instance/override/reference/prototype/reaction/asset/export/hash closure；formal raw `Style/type` definitions/default/legal combinations；完整 SLOT/Description allowed-content、hidden layers、interaction、responsive、motion与 a11y evidence。因此 `direct_read_complete=false`，Alert set 与 standalone Description 均保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.34 Breadcrumb live-read 观测证据（非完整组件合同）

本节只按用户指定的 Breadcrumb 主 set 与注册 Canvas 的两次 live connector response，登记 Breadcrumb/面包屑的 current source topology、主 set、独立 Link/Separator sets、formal-property wiring、shown SLOT fixtures、resolved geometry/appearance 与明确推断边界；不构成路由模型、层级数据、导航行为、响应式或无障碍行为的完整组件合同，禁止超出返回字段推断：

- **Source / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；用户 URL 直接指向主 `COMPONENT_SET` `15942:54622`，本次另读取注册 `CANVAS` `12456:15731`。两次 response 的重叠主 set subtree 对 identity、2 个 direct variants、shown SLOT descendants、nested component references 与 fixture values 一致；Canvas response 额外返回 documentation frame、完整 Link set、Separator set 及其 sibling variants。两次均不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Source topology（身份必须分离）**：注册 `CANVAS` id=`12456:15731`、raw name=`Breadcrumb-面包屑`；documentation `FRAME` id=`16980:2666`、raw name=`Breadcrumb`，无 component key；主 `COMPONENT_SET` id=`15942:54622`、key=`7ed3b4e71ce5825150f706b09857d6ba9f5e6463`、raw name=`Breadcrumb`、description 精确为空字符串；Link set 与 Separator set 是另外两个独立身份，禁止与 Canvas、frame 或主 set 合并。
- **Documentation scaffold（不是组件合同）**：frame current 1444×1367px、white fill、radius=48px；标题 fixtures 为 `web  / 组件名称` 与 `Breadcrumb`；footer y=1265、1444×72px，copy fixtures=`@ Lingee 2026`、`交互设计师：xxx`、`视觉设计师：xxx`。这些坐标、标题、footer 与页面外观只属 documentation scaffold。
- **主 set scaffold / formal-property boundary**：主 set 在 Canvas 中 current 559×112px、layout=`none`、radius=5px；两次 response 均未返回其 `propertyDefinitions`。direct raw names 仅为 `Type=Basic` 与 `Type=Icon`；raw `Type` 来自组件名称，不得自动升格为 formal property，也不得据两项推断其他 Type、default 或完整 variant 规则。

| 主 set exact raw name | id | key | current scaffold position / root layout |
|---|---|---|---|
| `Type=Basic` | `15942:54623` | `27a130e2dc2589373dfc9b0a3e01d7949541c3a6` | x=23 / y=26；row、center、wrap=true、hug×hug |
| `Type=Icon` | `15942:54641` | `a0a1904742d006a9dc8cb7a99adc4be021f3d60a` | x=24 / y=66；row、center、wrap=true、hug×hug |

- **`Items` SLOT / Basic fixture**：两个主 variants 各有 shown `SLOT` raw name=`Items`，current 为 row、center、hug×hug。Basic 默认展开“Default Link + `icon=false` Separator + Current Link”：2 个 Link 与 1 个分隔符；两项 Link 均 `Label=true`、`Title=Breadcrumb Link`、`Icon=false`。SLOT 只证明 current node 与默认 fixture，不证明 items schema、允许组件、任意 children、数量上下限、动态增删、fallback、key、层级或数据绑定。
- **Icon fixture**：Icon 默认展开 3 个 Link 与 2 个 `icon=false` Separator：首项为 Default Link，`Label=false`、`Icon=true`、current padding=`0 4px`、radius=4px；第二项为 Default Link，`Label=true`、`Icon=true`；末项为 Current Link，`Label=true`、`Icon=true`；三项 `Title` fixture 均为 `Breadcrumb Link`。该 shown sequence 不是通用首项/中间项/末项算法，也不证明 icon-only 必须位于首项。
- **独立 Link set identity / inventory**：`COMPONENT_SET` id=`15942:54663`、key=`39840aea0ffa6fb6fd7434144327c581a2d2738a`、raw name=`Breadcrumb / Breadcrumb Link`、description 精确为空字符串；Canvas current scaffold 178×210px、radius=5px。direct raw inventory 精确为 `State=Default` `15942:54664` / key=`6dec82bf613652243eca832f6e5a3eb53ca76b47`、`State=Hover` `15942:54668` / key=`377f41623c38304e7d8f7c214d69d848e5707313`、`State=Current` `15942:54673` / key=`612e47f22539d15356a612979e87bb022997bee8`。raw `State` 不是 connector-returned formal definition；三项不证明完整交互状态集。
- **Link formal properties（仅此 set）**：connector-returned definitions 精确为 `Icon`（boolean，default=`false`）、`Title`（text，default=`Breadcrumb Link`）、`Label`（boolean，default=`true`）。shown `Icon Wrapper` visibility→`Icon`；shown label text visibility→`Label`、text→`Title`。这些 formal properties 只属于 Link set，不得抬升到 Breadcrumb 主 set 或 Separator set，也不证明 href、route、click handler、tooltip 或 accessible name fallback。
- **Link current geometry / state appearance（非交互合同）**：三项均为 row、center、gap=4px、hug；label current PingFang SC Regular 14/22。Default label fill=`rgba(0,0,0,.46)`，Hover=`rgba(0,0,0,.82)`，Current=`rgba(0,0,0,.94)`。Hover 另有 absolute `Bg Overlay`，current x=-4/y=0、119×22px、fill=`rgba(0,0,0,.03)`、radius=4px；119px 是当前 title fixture 下的 resolved width，不是任意文案宽度规则。主 Breadcrumb fixtures 未展开 Hover variant，禁止把 raw State 与 pointer/focus 状态机等同。
- **Link icon identity**：shown `Icon Wrapper` current padding=`4px 0`、gap=8px；默认图标为 14×14 `House` component id=`9704:20521`、key=`03f97c741551f232bb938a534ae85126ec62c22b`。本次只证明 current nested identity 与 visibility wiring，不证明图标可替换 API、semantic home destination、export/hash/license 或所有 Link 必须使用 House。
- **独立 Separator set identity / raw inventory**：`COMPONENT_SET` id=`16668:1351`、key=`e3142e7b1f395d3a2aad10f7c4e18d55f728d7f8`、raw name 精确为 ` Breadcrumb Separator`（含前导空格）、description 精确为空字符串；Canvas current scaffold 61×104px、stroke=`#8A38F5`/1px/dash `10,5`/radius=5px。direct raw items 为 `icon=false` `16663:6582` / key=`196de8dc5b0d73ee874d8afaa1a954c8d446d622` 与 `icon=true` `16668:1352` / key=`d6f68c3ccd531f11431c0e153457673ac37c5361`；response 未返回 Separator `propertyDefinitions`，raw lowercase `icon` 不得升格为 formal boolean。
- **Separator current appearance / fixture boundary**：`icon=false` current fixed w=30px、padding=`0 8px`，显示 `/`，字体为 SF Pro Text Regular 14/22、fill=`rgba(0,0,0,.46)`；`icon=true` current padding=`4px 8px`，显示 14×14 `ChevronRight` id=`9704:20838` / key=`0ee15397f3b1c8458467bf6d80ca0723890d855a`。主 Breadcrumb 两种 fixtures 当前均使用 `icon=false`；`icon=true` 只在独立 set 中出现，禁止推断主 Type 与 Separator raw icon 的映射规则。链接使用 PingFang SC 而 slash 使用 SF Pro Text 的字体差异必须按 source 保留，不能静默归一。
- **Inventory / composition boundary**：主 set 2 项、Link set 3 项、Separator set 2 项是三个独立 direct inventories，不是 `2×3×2` 笛卡尔积，也不证明合法组合矩阵。主 Type fixtures 中的 2/3 个 Link、1/2 个 Separator 仅为 shown SLOT content；scaffold x/y 与各 set 尺寸不得转译成 runtime placement、margin 或 section gap。
- **Content / navigation-model boundary**：除 Link 的 formal text `Title` 外，本次未返回 breadcrumb item id、label source、href/route、current-index、ancestor graph、home mapping、separator policy、click callback、router integration、query/hash preservation、permissions、loading/error、localization 或 truncation contract；`Breadcrumb Link`、`/`、House 与 ChevronRight 均为 current fixtures/identities，不是业务导航规则。
- **Responsive / overflow / RTL blockers**：虽然主 variants current `wrap=true`，仍未返回 container width/max-width、breakpoint、line-break strategy、ellipsis/collapse/menu、long text、multiline、overflow、mobile、zoom、RTL order与 separator mirroring。单个 resolved wrap flag 不构成响应式合同。
- **Interaction / state / motion blockers**：未返回 link pointer/keyboard handlers、URL behavior、focus-visible/pressed/visited/disabled 状态、Hover 触发条件、Current 可点击性、focus order/restore、transition/easing/duration 或 reduced-motion behavior；不得从 raw `State` 名称补写。
- **A11y blockers**：未返回 `nav` landmark、breadcrumb accessible name、`ol/li` semantics、link roles、`aria-current`、icon decorative status、separator screen-reader hiding、icon-only accessible name、keyboard/focus contract、contrast evidence 或 target-size evidence。禁止按行业惯例自动补写。
- **Not-returned blockers / lifecycle**：两次 live response 仍未证明 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/text/font/vector/path/main-instance/override/reference/prototype/reaction/asset/export/hash closure；主 set formal `Type`、Link formal/raw State relation、Separator formal raw icon、完整 SLOT/hidden layers/instances/overrides、interaction、responsive、motion与 a11y evidence。因此 `direct_read_complete=false`，Breadcrumb、Breadcrumb Link 与 Breadcrumb Separator 三个 sets 均保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

#### 3.6.35 Pagination live-read 观测证据（非完整组件合同）

本节只按用户指定的 Pagination documentation section 与注册 Canvas 的两次 live connector response，登记 Pagination/分页的 current source topology、主 Pagination set、独立 Pagination Item set、raw-name inventories、shown compositions、resolved geometry/appearance、fixtures 与明确推断边界；不构成分页数据模型、页码算法、输入校验、交互、响应式或无障碍行为的完整组件合同，禁止超出返回字段推断：

- **Source / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；用户 URL 指向 documentation `SECTION` `15083:1117`，本次另读取注册 `CANVAS` `12456:13325`。两次 response 的 Pagination subtree 对 section descendants、两个 set identities、主 set 5 项、Pagination Item set 17 项、shown instances/overrides、resolved values 与 fixtures 一致；Canvas response 额外明确 section current dimensions=1202×1530px。两次均不是 immutable-version、full-recursive 或 completeness-proven read；not returned 不等于不存在。
- **Source topology（身份必须分离）**：注册 `CANVAS` id=`12456:13325`、raw name=`Pagination-分页`；documentation `SECTION` id=`15083:1117`、raw name=`Pagination/原子`，无 component key；主 `COMPONENT_SET` id=`15835:1970`、key=`0dcff03621266543df7d8fc2ba3d5d45eb839dac`、raw name=`Pagination`；原子 `COMPONENT_SET` id=`15835:1140`、key=`1a3df26993dc32e501fca4d43390b0cb1421180d`、raw name=`Pagination Item`。两个 set descriptions 均精确为空字符串；Canvas、section、主 set、item set 与 runtime root 禁止合并。
- **Documentation scaffold（不是组件合同）**：section current 1202×1530px、white fill、stroke=`rgba(0,0,0,.12)`/1px；title fixture=`分页-light`；footer y=1458、1202×72px，copy fixtures=`@ 2026` 与 `组件设计师：明慧`。这些坐标、标题、footer 与 section 外观只属 documentation scaffold，不证明 light/dark theme API。
- **Set scaffolds / formal-property boundary**：主 set current 673×324px，Item set current 306×217px；两者均为 layout=`none`、stroke=`#9747FF`/1px/dash `10,5`/radius=5px 的 component-set scaffold。两次 response 均未返回任一 set 的 `propertyDefinitions`；因此 raw `Style/ShowPage/ShowPageNum` 与 `Type/Status/icon` 均不得自动升格为 formal API，也不得由名称推断 defaults、合法组合或完整矩阵。

- **主 Pagination set current direct inventory**：下表保留 connector direct-tree 顺序。source typo `Defualt` 必须原样保留，禁止改写为 `Default`；raw `ShowPage` 的 `True/False` 与数字 `ShowPageNum` 只是名称片段，不是 formal boolean/number definitions。

| exact raw name | id | key | current set y / root layout |
|---|---|---|---|
| `Style=Simple, ShowPage=False, ShowPageNum=0` | `15835:1957` | `d5e241ec2df9695e1d85659b2e4f83cd68b229c1` | y=16；row、center、gap=8px、hug×hug |
| `Style=Defualt, ShowPage=False, ShowPageNum=7` | `15835:2062` | `208ee835c66b0e60089422ab25fa64e6a7001795` | y=90；row、center、gap=8px、hug×hug |
| `Style=Complex, ShowPage=True, ShowPageNum=7` | `15835:2178` | `5da2099cb919bb0b5a4616335d8e3b4817b4e7f3` | y=164；row、center、gap=8px、hug×hug |
| `Style=Complex, ShowPage=True, ShowPageNum=5` | `15835:2220` | `40ea406b971746dd21e4f771aec4d836d379171a` | y=222；row、center、gap=8px、hug×hug |
| `Style=Complex, ShowPage=True, ShowPageNum=3` | `15835:2257` | `e57f38f2d0b5536b0c6c43c1b5d296dd793631b7` | y=280；row、center、gap=8px、hug×hug |

- **Simple fixture**：shown composition 为总数 copy `共 80 条` + `Pager`；Pager current row/gap=8px，包含 previous icon item、plain text `1/6`、next icon item。该 copy 与三段结构不证明 page-count 计算、total/currentPage 输入、首末页 disable rule 或 compact mode API。
- **raw `Defualt` fixture**：shown composition 为 `共 80 条` + Pager；Pager current row/gap=4px，顺序为 ChevronLeft、`1`、selected `2`、`3`、`4`、`5`、`6`、`...`、`50`、ChevronRight。raw `ShowPage=False` 只与当前未显示 page-size/jump controls 的 fixture共现，不能据此定义 visibility semantics。
- **Complex fixtures**：三项都显示 `共 1,000 条相关记录`、Pager、`20条/页` dropdown、`跳至` + Number Input fixture `999` + `页`。`ShowPageNum=7` 的 Pager 与 raw Defualt 同序列并 selected=2；`ShowPageNum=5` 为 `1 / ... / selected 8 / 9 / 10 / ... / 50`；`ShowPageNum=3` 为 `1 / ... / selected 8 / ... / 50`。这些是三个 current sequences，不能反推 sibling/boundary count、ellipsis 算法、总页数或 `ShowPageNum` 的正式数值语义。

- **Pagination Item set current direct inventory（17 项）**：raw `icon` 的值在 source 中混用 uppercase `False` 与 lowercase `true`，必须逐项保留；raw axes 不是 formal definitions，下表不是笛卡尔积声明。

| exact raw name | id | key |
|---|---|---|
| `Type=Button, Status=Default, icon=False` | `15835:1138` | `b5ef55a5a2ba3571e363614fcf48139e6fdcd937` |
| `Type=Number Input, Status=Default, icon=False` | `15835:1874` | `25df23d8a4ea22895110a4939cbeef03ddf9fc82` |
| `Type=Number Input, Status=Hover, icon=False` | `15835:1879` | `4c5afc5b18de7e0afa4cf85fab03d71e1552aa2d` |
| `Type=Number Input, Status=Focus, icon=False` | `15835:1886` | `8da40e66ab3fb9207652fd51290fc1690fef4a63` |
| `Type=Number Input, Status=Disabled, icon=False` | `15835:1892` | `71a6e9a6209d47de0bd357a0cac916db3ba82c0f` |
| `Type=Button, Status=Default, icon=true` | `15835:1834` | `0ecbb21845b83c70516ceb6b37f3ddf485d17554` |
| `Type=Button, Status=Hover, icon=False` | `15835:1141` | `e688b86902d2a908be7306df2ef555efecac5876` |
| `Type=Button, Status=Hover, icon=true` | `15835:1836` | `06a79453213dbec3840892a386c66ff6ad252041` |
| `Type=Button, Status=Active, icon=False` | `15835:1815` | `27adb482d1d20c2d3208f8c441148c8e99680d41` |
| `Type=Button, Status=Active, icon=true` | `15835:1838` | `101f2eef6d0337640d452df0f6f6b4da8aff0957` |
| `Type=Button, Status=Selected, icon=False` | `15835:1823` | `696572764a93a96824d1c65bfacbf152b9d1f2d1` |
| `Type=Button, Status=Disabled, icon=False` | `15835:1831` | `94af79be456ffe0deede79d945de617a3d60ee3f` |
| `Type=Button, Status=Disabled, icon=true` | `15835:1842` | `ef83a5ffbf6cdd13dc0d2f276c5f2437aee434d7` |
| `Type=DropdownButton, Status=Default, icon=true` | `15835:1910` | `1cf077a11f6fb906022cd4d3c8558d7059d2d70f` |
| `Type=DropdownButton, Status=Disabled, icon=true` | `15835:1925` | `2de61d7fb2ecbd036f6987f1871d1a3b094dcb6b` |
| `Type=DropdownButton, Status=Hover, icon=true` | `15835:1911` | `ab92675a524f39de4cdcfc23027a03fa025042f9` |
| `Type=DropdownButton, Status=Active, icon=true` | `15835:1915` | `3620bd0dd603af8be91c246b78dfe8f4e5fe4c08` |

- **Button item resolved fixtures**：text variants use current fixed text width=28px、PingFang SC Regular 14/22、fixture `2`；Default text fill=`rgba(0,0,0,.64)`，Hover adds `rgba(0,0,0,.03)` background，Active uses同一 background且 text=`rgba(0,0,0,.82)`，Selected text=`#495DFF`，Disabled text=`rgba(0,0,0,.28)`。text roots current vertical padding=1px；Selected/Disabled current h=24px、radius=8px。icon variants current padding=4px、16×16 icon；shown Hover/Active/Disabled roots有 radius=8px where returned。不得由 resolved states 补写 event state machine、token binding 或缺失的 Selected+icon 组合。
- **Number Input resolved fixtures**：四项 current h=28px、radius=8px、text style 12/18。Default/Hover 显示 `999`、padding=`5px 8px`，border分别为 `rgba(0,0,0,.08)` 与 `#495DFF`；Focus 为 fixed 38×28px，显示 `9` 与 16px vertical caret line，border=`#495DFF`；Disabled padding=`0 8px`、background=`rgba(0,0,0,.03)`、text=`rgba(0,0,0,.46)`，未显示 stroke。caret 只属 current visual fixture，不证明真实 editable input、selection、IME、validation 或 focus behavior。
- **DropdownButton resolved fixtures**：四项 current h=28px、padding=`0 8px`、gap=8px、radius=8px，copy fixture=`20条/页`、text 12/18。Default border=`rgba(0,0,0,.08)`；Hover/Active border=`#495DFF`；Disabled 保留淡 border且 text=`rgba(0,0,0,.28)`。Default/Hover/Disabled 显示 ChevronDown，Active 显示 ChevronUp；这不证明 popup、options、open/close、placement、selection 或 page-size update behavior。
- **Nested icon identities / override boundary**：ChevronLeft=`9704:20840` / key=`df0ee81aee9349cc19945aa7a1ccb35cdb55d467`，ChevronRight=`9704:20838` / `0ee15397f3b1c8458467bf6d80ca0723890d855a`，ChevronDown=`9704:20842` / `fbb332d9134078158c2aef5c0a0bc688cbd14de4`，ChevronUp=`9704:20841` / `cd05805145a3e8bafc2ea9b0dde3aece32d80a99`；均 current 16×16。Item icon component fixtures以 ChevronLeft/Down 展开，而主 set 的 next controls通过 nested override显示 ChevronRight；只证明 current override，不证明 formal icon property、direction API、RTL mapping、export/hash/license。
- **Typography / palette boundary**：总数、`1/6`、`跳至`、`页` current 14/22；page number current 14/22 centered；Number Input 与 page-size copy current 12/18。`#495DFF` 与 black alpha fills/strokes均只作 current resolved appearance；connector 未返回 semantic token/variable binding，禁止据颜色反推状态语义或自动归一。
- **Inventory / composition boundary**：主 set 5 项与 Item set 17 项是两个独立 inventories，不是相乘矩阵。main fixtures对 Item 的 instance使用、文本与图标 override，不证明所有 Item 组合可由主 Pagination生成；scaffold x/y、set dimensions 与纵向排布不得转译成 runtime margin、width 或 row gap。
- **Content / numeric/data-model boundary**：本次未返回 formal currentPage、pageSize、totalItems、pageCount、total-pages、sibling/boundary count、item key、controlled/uncontrolled value、zero/one-based index、ellipsis rule、min/max/step、invalid/empty/decimal/negative handling、clamp、submit timing、loading/error、async race、URL/query/router、localization/number-format contract。`80`、`1,000`、`1/6`、`20条/页`、`999`、页码与 ellipsis 全是 fixtures。
- **Interaction / state / motion blockers**：未返回 previous/next/page click handlers、keyboard activation、Number Input editing/Enter/blur behavior、dropdown popup、focus transfer、disabled enforcement、hover/active/focus trigger relation、loading transition、animation/easing/duration 或 reduced-motion behavior；不得从 raw `Status` 名称补写。
- **Responsive / i18n / RTL blockers**：未返回 container width/max-width、wrap/collapse/compact switching、small viewport、overflow、touch target、zoom、long localized totals/page-size/jump labels、CJK/Latin number formatting、RTL order与 chevron mirroring。所有 roots 的 current hug sizing 不构成响应式合同。
- **A11y blockers**：未返回 pagination `nav` landmark/accessible label、page button names、current-page `aria-current`、previous/next labels、disabled semantics、ellipsis hiding、Number Input role/name/value/min/max/error、page-size combobox semantics、status announcement、focus-visible、keyboard order或 contrast/target-size evidence。禁止按行业惯例自动补写。
- **Not-returned blockers / lifecycle**：两次 live response 仍未证明 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/text/font/vector/path/main-instance/override/reference/prototype/reaction/asset/export/hash closure；formal raw axes/defaults/legal combinations；hidden layers、完整 instances/overrides、numeric model、ellipsis algorithm、interaction、responsive、motion与 a11y evidence。因此 `direct_read_complete=false`，Pagination 与 Pagination Item 两个 sets 均保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。


#### 3.6.36 Avatar live-read 观测证据（非完整组件合同）

本节只按用户提供的 documentation FRAME 与既有注册 Canvas 的两次 live connector response，登记 Avatar/头像的 current source topology、Avatar 与 AvatarGroup 两个 set、compact inventory、resolved palette、fixtures 与明确推断边界；不构成头像数据模型、图片加载、分组溢出、交互、响应式或无障碍行为的完整组件合同，禁止超出返回字段推断：

- **Source / read boundary**：live Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；既有注册 `CANVAS` id=`9640:65021`、raw name=`Avatar-头像`。用户提供的链接 [Avatar documentation FRAME `16375:2793`](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=16375-2793) 指向该 Canvas 内 raw name=`组件库` 的文档 FRAME，链接与节点身份均正确。分别读取 FRAME `16375:2793` 与 Canvas `9640:65021` 时，返回的 Avatar subtree 一致；两次都只是有限 live connector reads，不是 immutable-version、full-recursive 或 completeness-proven read，`not returned` 不等于不存在。
- **Source topology（身份必须分离）**：documentation FRAME `16375:2793` current dimensions=1049×1440px；Avatar `COMPONENT_SET` id=`14909:7012`、key=`b277336f9694c78d6a702f16325b86c2060768fe`、current dimensions=969×426px、description 为空；AvatarGroup `COMPONENT_SET` id=`15039:29445`、key=`fe8b5a3992adeab9381e2c0f639a2f2475319580`、current dimensions=364×108px、description 为空。Canvas、FRAME 与两个 sets 是四个不同 node，禁止因同属 Avatar 页面而合并身份、互相覆盖或只按名称查找。
- **Documentation scaffold（不是组件合同）**：页面标题 fixture=`头像`；footer fixtures=`@ Lingee 2026`、`组件设计师：祁杰`。FRAME/set 尺寸、页面坐标、标题与 footer 仅属 documentation scaffold，不是 Avatar runtime 外框、默认文案、品牌或布局合同。
- **Formal-property boundary**：两次 response 均未为 Avatar set 或 AvatarGroup set 返回 `propertyDefinitions`。下述 `size`、`color`、raw typo `trye` 与 group `size` 都只来自 direct `COMPONENT` raw names；不得升格为 formal properties、公开 API、defaults、完整 enum 或合法组合。

- **Avatar set current direct inventory**：两次 response 一致返回 78 个 direct `COMPONENT` rows；current compact count 为 6 个 size groups，每组 13 项，总计 `6×13=78`。这是 current live inventory，不是 immutable total、正式 API 或完整笛卡尔积证明。

| exact raw size value | current avatar dimensions | current direct rows |
|---|---:|---:|
| `custom=64` | 64×64px | 13 |
| `xlarge=48` | 48×48px | 13 |
| `large=36` | 36×36px | 13 |
| `medium=32` | 32×32px | 13 |
| `small=24` | 24×24px | 13 |
| `xsmall=20` | 20×20px | 13 |

- **Current row composition / raw-name anomaly**：每个 size group 当前由一个 default-icon fixture 与六种 color 下各一组 Chinese/English text fixtures构成；Chinese fixture=`金`，English fixture=`KW`。text dimension 的 source raw name 精确拼为 `trye`，必须保留，不得静默修正为 `type`。其中 current `large, color=blue` 的一个 direct raw name 异常为 `trye=default`；其余常规文本值观测为 `chinese|english`。这里只登记异常，不裁决 intended naming、默认 variant 或组合合法性。
- **Default icon fixture / identity boundary**：default icon 当前引用 `People1` component id=`14909:1532`、key=`e6f7cb6ddb2b06927fe9307164af9048947a0b52`。该 identity 只证明 current nested fixture，不证明 icon-swap API、fallback 策略、用户语义、资产导出/hash/license 或所有 size 的完整 reference closure。
- **Resolved text palette（非 Token binding）**：六组 current background/foreground pairs 如下；只作 resolved appearance，不证明 Variable/Style/Token identity、主题映射、contrast 或公开 color enum。

| raw color | current background | current foreground |
|---|---|---|
| `blue` | `#F2F7FF` | `#2970FF` |
| `emerald` | `#EBFEF7` | `#009D72` |
| `pink` | `#FFF0F1` | `#F12234` |
| `indigo` | `#F5F6FF` | `#4343F5` |
| `amber` | `#FFFDEA` | `#E28800` |
| `fuchsia` | `#FFF2FC` | `#ED1DB9` |

- **AvatarGroup current inventory**：AvatarGroup set current response 只返回以下 2 个 direct components；两项只是 current live inventory，不是 immutable total、formal size enum 或完整 group contract。

| exact raw name | id | key | current fixture observation |
|---|---|---|---|
| `size=Large` | `15039:29444` | `cfb94a040e51c0a5002cf55d16f820bcebe70112` | 6 个 32×32px avatar frames；gap=-8px；stroke=2px；末项=`+4` |
| `size=Small` | `15039:29443` | `ff35e5e729f32352e9b1f98d0fecb5bccd4acfee` | 5 个 24×24px avatar frames；gap=-8px；stroke=1px；末项=`+4` |

- **AvatarGroup anomaly / fixture boundary**：Large fixture 的 raw frame name 含 `头像集群36`，但 current returned child geometry 是 32×32px；名称与 geometry 的冲突必须原样保留，禁止静默改名或把 36px/32px 任一方升格为最终合同。6、5、negative gap、stroke 与末项 `+4` 都只属于 current fixtures，不证明最大可见数量、overflow count 算法、排序、stack direction、点击行为或动态 cardinality。
- **Content / image-model boundary**：`金`、`KW`、`+4`、People1 与六色 palette 都是 current fixtures/resolved values；本次未返回 image URL/file/blob、alt/name、initials derivation、locale/grapheme handling、fallback priority、loading/error/broken-image、online status、badge、shape/crop/object-position、cross-origin、cache、privacy 或 user data contract，不得从视觉样例补写。
- **Token boundary**：resolved hex 不证明组件 Token binding；第 3.8.6 节已确认 `Avatar.border-color.Color` 在当前 `components.json` 中不存在，本文不会因 group stroke 或头像外观恢复该 path、硬编码白色或从相邻 Token 补位。若组件确需该职责，仍必须按 Token 治理流程新建并审批。
- **Interaction / responsive / a11y blockers**：未返回 hover/pressed/focus/focus-visible/disabled/selected 状态、pointer/keyboard behavior、tooltip/profile navigation、group expansion、responsive size/overflow、RTL stack、theme/dark/high contrast、reduced motion；也未返回 image alternative、accessible name、decorative vs informative policy、group semantics、`+4` accessible announcement、focus order或 contrast evidence。禁止按行业惯例自动补写。
- **Not-returned blockers / lifecycle**：两次 live response 仍未证明 immutable version；raw chunks/snapshot/IR/hash/source-map/Completeness Report；完整 Variable/Style/text/font/main-instance/override/reference/prototype/reaction/asset/export/hash closure；78 个 direct rows 的固定版本 identity index；formal raw axes/default/legal combinations；image/content/group/interaction/responsive/a11y contracts与 deterministic browser evidence。因此 `direct_read_complete=false`，Avatar 与 AvatarGroup 两个 sets 均保持 `catalogued_not_contract_complete`（归一 `catalogued`），不得升级为 `extracted`。

以下为**未在上表确认**的候选类别，与实时根节点注册表严格分表。候选项不证明 Figma 中存在同名 Canvas；其 node ID 必须保持 `unknown`，`catalogue_category_only` 只是目录分类标记，不是生命周期状态。第 3.3–3.5 节已登记的 Topbar、Sidebar、Icon 与 Domain Canvas 不在此重复列为候选。

| 类别组 | 未确认候选项 | node ID | 分类状态 |
|---|---|---|---|
| Foundations | Color、Typography、Spacing、Grid、Radius、Border、Shadow、Motion、Illustration | `unknown` | `catalogue_category_only` |
| Layout | Container、Space/Stack、Grid/Columns、Layout/Shell | `unknown` | `catalogue_category_only` |
| Actions | Icon Button、Link、Dropdown Button、Segmented Control、Floating Action | `unknown` | `catalogue_category_only` |
| Data Entry | Cascader、TreeSelect、Autocomplete、Upload | `unknown` | `catalogue_category_only` |
| Navigation | Menu、Anchor、BackTop | `unknown` | `catalogue_category_only` |
| Data Display | Badge、Card、List、Tree、Collapse、Descriptions、Statistic、Timeline、Image（非 Image Preview）、Carousel | `unknown` | `catalogue_category_only` |
| Feedback | Message、Notification、Result、Popconfirm | `unknown` | `catalogue_category_only` |
| Overlay | Sheet、Context Menu | `unknown` | `catalogue_category_only` |
| Domain | 其他未登记领域控件 | `unknown` | `catalogue_category_only` |

只有先完成可追溯提取，再按第 3.7 节补齐目标声明范围的组件契约并被目标 Manifest 引用，组件才可依次从 `catalogued` 升级为 `extracted`、`contract_complete`；后续状态仍须遵守第 1.3 节的逐级链。

### 3.7 组件契约模板

每个被生成页面使用的组件必须有一份可机器读取的契约；模板如下：

```yaml
component_contract_schema: "2.2.0"
schema_ref: "schemas/component-contract-2.2.0.schema.json"
component_id: "REQUIRED_STABLE_ID"
name: "REQUIRED"
version: "REQUIRED_SEMVER"
status: "catalogued|extracted|contract_complete|implementation_ready|implemented_unverified|verified|blocked"
renderer_profile_id: "REQUIRED"
owners:
  design: "REQUIRED"
  engineering: "REQUIRED"
  qa: "REQUIRED"
figma:
  file_key: "REQUIRED"
  file_url: "REQUIRED_CLICKABLE_FIGMA_FILE_URL"
  immutable_version_id: "REQUIRED"
  canonical_version_request: "REQUIRED_EXACT_VERSIONED_REQUEST_WITHOUT_SECRET"
  catalog_entry:
    node_id: "REQUIRED_OR_SAME_AS_EXACT_ROOT"
    expected_node_type: "PAGE|SECTION|FRAME|GROUP|COMPONENT_SET|COMPONENT"
    canonical_node_url: "REQUIRED_CLICKABLE_FIGMA_URL"
  component_set_node_id: "REQUIRED_OR_STANDALONE_COMPONENT_NODE"
  component_node_ids: ["REQUIRED_NON_EMPTY"]
  source_roots:
    - role: "exact_source_root"
      node_id: "REQUIRED_COMPONENT_SET_OR_COMPONENT_NODE"
      expected_node_type: "COMPONENT_SET|COMPONENT"
      expected_raw_name: "REQUIRED_EXACT"
      component_key: "REQUIRED_REAL_KEY"
      canonical_node_url: "REQUIRED_CLICKABLE_FIGMA_URL"
      snapshot_sha256: "REQUIRED_REAL_SHA256"
  source_root_closure_complete: true
  raw_names_preserved: true
  description_url: "REQUIRED_OR_NOT_APPLICABLE_WITH_REASON"
  dev_resources: ["REQUIRED_OR_EXPLICIT_EMPTY_WITH_GAP"]
  snapshot_path: "REQUIRED"
  snapshot_sha256: "REQUIRED_REAL_SHA256"
scope:
  platforms: ["web"]
  viewport_ids: ["REQUIRED_NON_EMPTY"]
  theme_ids: ["REQUIRED_NON_EMPTY"]
variant_model:
  axes:
    - raw_name: "EXACT_FIGMA_AXIS_NAME"
      normalized_name: "REQUIRED_STABLE_INTERNAL_NAME"
      kind: "variant|boolean|text|instance_swap|slot|product_state"
      values: ["REQUIRED_EXACT_RAW_VALUES"]
      default_source: "figma-definition|page-instance|product-contract|none"
      default: "REQUIRED_OR_NONE"
  legal_tuples:
    - tuple_id: "REQUIRED_STABLE_TUPLE_ID"
      raw_values: {"EXACT_FIGMA_AXIS_NAME": "EXACT_RAW_VALUE"}
      component_node_id: "REQUIRED"
      component_key: "REQUIRED"
      evidence: "REQUIRED"
  forbidden_tuples:
    - raw_values: {"EXACT_FIGMA_AXIS_NAME": "EXACT_RAW_VALUE"}
      reason: "REQUIRED"
  unknown_tuple_policy: fail-closed
  cartesian_completion_allowed: false
api:
  properties:
    - raw_name: "EXACT_FIGMA_PROPERTY_NAME"
      normalized_name: "REQUIRED"
      type: "boolean|enum|string|number|instance_swap|slot"
      allowed_values: ["REQUIRED"]
      default: "REQUIRED_OR_NONE"
      required: true
      wiring:
        target_render_node_ids: ["REQUIRED"]
        target_property: "visibility|characters|instance-swap|other"
  slots:
    - raw_name: "REQUIRED"
      cardinality: "0..1|1|0..n|1..n"
      allowed_contract_ids: ["REQUIRED_OR_EXPLICIT_ANY_WITH_REASON"]
      layout_owner: "slot|parent"
      empty_behavior: "REQUIRED"
  events:
    - name: "REQUIRED_EXACT_EVENT"
      category: "pointer|keyboard|focus|input|composition|clipboard|drag|scroll|system|network|timer|route|custom"
      payload_schema_ref: "REQUIRED"
state_model:
  axes:
    pointer: ["rest", "hover", "pressed"]
    focus: ["none", "focus", "focus-visible"]
    selection: ["unselected", "selected"]
    availability: ["enabled", "disabled"]
    activity: ["idle", "active", "loading"]
    data: ["present", "empty", "error"]
    structure: ["REQUIRED_COMPONENT_SPECIFIC_VALUES"]
  initial_vector:
    pointer: rest
    focus: none
    selection: "REQUIRED"
    availability: enabled
    activity: idle
    data: present
    structure: "REQUIRED"
  legal_vectors: ["REQUIRED_NON_EMPTY_STATE_VECTOR_IDS"]
  precedence:
    rules: ["REQUIRED_EXPLICIT_COMPOUND_STATE_RULES"]
    unspecified_compound_state: block
  transitions:
    - from_vector: "REQUIRED_VECTOR_ID"
      event: "REQUIRED_EXACT_EVENT"
      guard: "REQUIRED_OR_NONE"
      to_vector: "REQUIRED_VECTOR_ID"
      side_effects: ["REQUIRED_OR_NONE"]
      focus_result: "REQUIRED_OR_NOT_APPLICABLE"
render_contract:
  coordinate_space: component-local
  render_tree_schema: "1.0.0"
  variants:
    - tuple_id: "REQUIRED_LEGAL_TUPLE_ID"
      state_vector_id: "REQUIRED_LEGAL_STATE_VECTOR_ID"
      source_component_node_id: "REQUIRED"
      render_tree_path: "REQUIRED"
      render_tree_sha256: "REQUIRED_REAL_SHA256"
      root_geometry:
        width: "REQUIRED_NUMBER_OR_HUG"
        height: "REQUIRED_NUMBER_OR_HUG"
        min_width: "REQUIRED_OR_NONE"
        max_width: "REQUIRED_OR_NONE"
        min_height: "REQUIRED_OR_NONE"
        max_height: "REQUIRED_OR_NONE"
      auto_layout: "REQUIRED_FULL_OBJECT_OR_REF"
      overflow: "REQUIRED"
      z_index: "REQUIRED"
      visual_bindings:
        - render_node_id: "REQUIRED"
          property: "fill|stroke|color|opacity|effect|radius|spacing|typography|visibility|asset"
          token:
            source_file: "REQUIRED"
            mode: "REQUIRED"
            component_path: "REQUIRED_FOR_COMPONENT_VISUAL_OR_NOT_APPLICABLE"
            semantic_alias_path: "REQUIRED_OR_NOT_APPLICABLE"
            variable_id: "REQUIRED"
            alias_chain: ["REQUIRED_OR_EMPTY"]
            resolved_value: "REQUIRED"
          source_map_entry: "REQUIRED"
interaction:
  pointer: "REQUIRED"
  keyboard: ["REQUIRED"]
  focus_entry: "REQUIRED_OR_NOT_APPLICABLE"
  focus_return: "REQUIRED_OR_NOT_APPLICABLE"
  async_behavior: "REQUIRED_OR_NOT_APPLICABLE"
  ime_composition: "REQUIRED_OR_NOT_APPLICABLE"
responsive:
  rules:
    - viewport_id: "REQUIRED"
      behavior: "REQUIRED"
      evidence: "REQUIRED_NODE_OR_APPROVAL"
assets:
  - logical_name: "REQUIRED"
    node_id: "REQUIRED"
    component_key: "REQUIRED_OR_NOT_APPLICABLE"
    local_path: "REQUIRED"
    original_dimensions: {width: "REQUIRED", height: "REQUIRED"}
    view_box: "REQUIRED_FOR_SVG"
    export_parameters: "REQUIRED"
    color_policy: "monochrome-currentColor|multicolor-original"
    sha256: "REQUIRED_REAL_SHA256"
fonts:
  - family: "REQUIRED"
    postscript_name: "REQUIRED"
    weight: "REQUIRED_NUMBER"
    style: "REQUIRED"
    variable_axes: "REQUIRED_OR_NONE"
    binary_sha256: "REQUIRED_REAL_SHA256"
    license_evidence: "REQUIRED"
    load_probe: "REQUIRED"
a11y:
  role: "REQUIRED"
  accessible_name_rule: "REQUIRED"
  aria_state_mapping: "REQUIRED"
  focus_order: "REQUIRED"
  contrast_evidence: "REQUIRED"
exceptions:
  loading: {status: "required|not_applicable", contract: "REQUIRED_OR_NA_EVIDENCE"}
  empty: {status: "required|not_applicable", contract: "REQUIRED_OR_NA_EVIDENCE"}
  error: {status: "required|not_applicable", contract: "REQUIRED_OR_NA_EVIDENCE"}
  forbidden: {status: "required|not_applicable", contract: "REQUIRED_OR_NA_EVIDENCE"}
  offline_timeout: {status: "required|not_applicable", contract: "REQUIRED_OR_NA_EVIDENCE"}
evidence:
  baselines: ["REQUIRED_PER_LEGAL_TUPLE_STATE_VIEWPORT_THEME"]
  geometry_assertions: ["REQUIRED"]
  interaction_tests: ["REQUIRED"]
  accessibility_report: "REQUIRED"
unknowns: []
approvals:
  design: "REQUIRED"
  engineering: "REQUIRED"
  qa: "REQUIRED"
```

组件合同中的 `state_model.axes` 是完整状态向量模型，未使用的通用轴必须以 `not_applicable` 和证据显式关闭；不得删除轴后把 pointer、selection、availability、activity、data 或 structure 再压回单一 `state`。`render_contract.variants` 必须覆盖当前页面实际使用的全部 `legal tuple × critical state`，并允许渐进补齐未被任何 active page 使用的库范围；因此可先完成页面依赖闭包，而不要求为首个页面同时完成全部 37 个基础控件。

### 3.8 设计 Token 单一事实源与依赖合同

#### 3.8.1 已登记来源、模式与状态

下列七份工作区 JSON 是本仓库当前 Token 合同的机器可读事实源；文件名和 mode 大小写均是身份的一部分，禁止规范化、猜测或按“看起来相同”替换。它们补充页面 Figma IR 中的 token provenance，不替代 immutable version、source-map、baseline 或浏览器验收证据。

| 层/职责 | 文件 | `com.figma.modeName` | 当前合同用途 |
|---|---|---|---|
| 全局色板 | `color.tokens.json` | `color` | primitive/基础颜色与品牌、状态、图表色来源；实现层禁止直接消费 |
| Light 语义色板 | `light.tokens.json` | `Light` | Light 主题的语义前景、边框、背景、阴影 |
| Dark 语义色板 | `dark.tokens.json` | `dark` | Dark 主题的语义前景、边框、背景、阴影 |
| 组件色板 | `components.json` | `Mode 1` | 组件命名空间、变体、颜色职责和状态的消费入口 |
| 字体 | `typography.json` | `kwork` | family/weight/size/line-height 原子角色；Figma 复合用途合同见 3.8.7 |
| 间距 | `spacing.json` | `Mode 1` | 仅 `GAP` scope 的元素间距；Figma hook/rem/px 校对合同见 3.8.8 |
| 圆角 | `radius.json` | `light` | `CORNER_RADIUS`/显式 scope 的原子身份；Figma 值、示例与用途合同见 3.8.9 |

当前 `token_contract_status=registered_alias_audit_pending`：已确认文件、mode、结构与下述事实，但尚未为 acceptance release 固定七文件 SHA-256，也未完成全量 alias 图、非法跨层消费、直接值、命名迁移和 scope 使用审计。登记不等于 `audited`、`source_exact` 或 `verified`。发布证据包必须保存七文件的逐字节副本；若它们与锁定 Figma version 的 variables IR 冲突，必须 `block` 并由 Design System owner 以版本化迁移裁决，禁止静默选择任一方。除非用户明确要求，本合同不会自动改写这七份 Token JSON。

#### 3.8.2 颜色依赖方向与消费边界

唯一允许的颜色依赖方向为：

```text
全局色板（primitive） → Light/Dark 语义色板 → 组件色板 → 组件实现
全局色板（primitive） → Light/Dark 语义色板 → 非组件实现
```

硬规则：

1. 语义色板只能绑定全局色板；组件色板只能绑定语义色板。alias 解析可跨颜色职责名称，但不得跨越层级或反向依赖。
2. 组件实例/内部实现只能消费**该组件自身命名空间**中的组件 Token。缺少所需组件 Token 时必须登记缺口并停止该视觉属性，禁止退回语义 Token、全局 Token、HEX/RGBA 或相邻组件 Token。
3. 非组件页面元素只能消费当前 theme/mode 的语义 Token；不得消费组件 Token，也不得直接消费全局 Token。
4. 全局色板永远不作为 DOM/CSS/Canvas/SVG 实现消费入口。全局值只可由语义层 alias 引用，不能因值相同而绕过语义身份。
5. 相同 HEX、RGBA 或 number 不代表相同 Token；同值 Token 仍保留各自 path、Variable ID、mode 和语义。禁止按值去重、反向匹配或合并。
6. source-map 必须记录 `文件 + mode + token path + com.figma.variableId + aliasData.targetVariableId 链 + 最终解析值`。只记录 HEX/number 不能证明合法消费。
7. 源文件中的直接值或异常 alias 是待治理事实，不是允许实现硬编码的例外。任何 direct/raw value 均须列入 `token-audit.json`，有 owner、原因、影响、审批和关闭策略；未处置项按影响进入 P0/P1。

#### 3.8.3 解析、identity 与 alias 规则

- `$value` 表示导出时当前 mode 的**解析结果**，用于核对渲染值，不是绑定来源或稳定身份。
- `aliasData.targetVariableId` 表示该 Token 的直接绑定来源；审计必须逐跳保存 alias chain，直到终点，并检查 cycle、unresolved、跨层反向引用和 mode 覆盖。
- `com.figma.variableId` 是 Light/Dark 与其他集合中 Token 的稳定身份；rename 不得改变其身份解释，迁移也不得只按 path 文本匹配。
- 禁止依据 HEX、透明度、`black`/`white`/`dark` 等名称、相似拼写或当前 `$value` 反推 alias。无 `targetVariableId` 的项必须按 direct value 记录，不得伪造绑定。
- mode 名必须精确使用 `color`、`Light`、`dark`、`Mode 1`、`kwork`、`Mode 1`、`light`；尤其文件名是小写 `light.tokens.json`，而其 mode 是大写 `Light`。
- 任何自动迁移都必须提供 `旧 path/Variable ID → 新 path/Variable ID` 映射、消费者清单、兼容期、owner 与审批。不得直接修正拼写、重建 Variable ID 或用新名称覆盖旧名称。

#### 3.8.4 全局色板事实与审计点

- `primary.500 = #6D80FF`。
- 状态色族的已观察 alias 方向为 `success.* → green.*`、`warning.* → orange.*`、`danger.* → red.*`；实现仍只能经语义/组件层消费这些结果。
- 已知值疑点必须原样进入 audit，不可在规范中擅自“纠正”：`orange.orange 500 = #FF7700` 当前对应 `orange.600`，而 `orange.500 = #FF8D42`；`chart.12 = #FFE500`，`chart.12-64% = #FFE600`。
- 已知命名治理项包括 `primary  透明度`、`indigo-defauit`、`lime-defauit`、`violet-defauit`、`emeraid-translucent-soft`、`pink.New group`、`green.green 500.Color 11`、`orange.orange 500`。它们是兼容路径，不得无迁移映射自动重命名。

#### 3.8.5 Light/Dark 语义色板合同

两个语义文件都以四类职责组织：`fg-color`、`border-color`、`bg-color`、`shadow-color`。页面 Manifest 的 theme 必须映射到精确文件/mode，Light 与 Dark 各自拥有独立 baseline；不能由滤镜、名称替换或 HEX 反推另一主题。

已知直接值治理缺口：

- Light：`bg-color.white-bg`。
- Dark：`bg-color.white-bg`、`bg-color.white-heavy`，以及多个 `*-faint-dark`。

这些项必须在 `token-audit.json` 中标明 direct/alias 状态与处置，不得因为名称含 `white`/`dark` 就猜测全局来源。已知透明度/值疑点也必须保留：Dark `primary-translucent-soft` 与 `primary-translucent-muted` 均为 12%；Warning ghost/faint/subtle 为 3%/8%/6%；Danger ghost/faint/subtle/soft 为 3%/8%/6%/6%；Dark `success-translucent-transparent` 与 `blue-translucent-transparent` 为 3%。相同百分比不允许自动合并身份。

#### 3.8.6 组件色板合同

`components.json` 当前包含 34 个顶层组件命名空间，常见结构是“组件 → 变体 → 颜色职责 → 状态”。组件实现必须从自身命名空间起始解析；不能直接选择语义或全局 path。已观察到的跨颜色职责 alias 包括：

- `Alert.fg-color.icon-info → bg-color/blue-default`
- `checkbox.bg-color.background-disabled → border-color/black-subtle`
- `steps.bg-color.active → fg-color/primary-default`
- `slider.bg-color.slider-rail-hover → fg-color/black-aint`

颜色职责名称不同本身不等于错误；必须按 `targetVariableId` 与最终所属层审计，不能按 path 文本强行“对齐”。组件命名治理项包括 `defualt`、`boder-color`、空格、`&`、`text-default 2`、`primary-title- success` 和 `black-aint`；全部保留为待迁移兼容名称。

`Avatar.border-color.Color` 已从当前 `components.json` 删除，合同明确视为**不存在**。实现、生成器与迁移脚本不得恢复该 path，也不得用白色、HEX/RGBA、语义 Token 或全局 Token 静默补位；若 Avatar 确实需要该职责，必须新建经审批、绑定语义色板且有迁移记录的组件 Token。

Sidebar 需要新增或确认一条**自身组件命名空间**内的 selected-icon Token，其直接 alias target 必须是 semantic `fg-color/black-strong`，以落实 §3.4.7 的用户裁决。具体 component path 与 Variable ID 不得由本文命名猜测；必须从固定版本 `components.json`/Variables snapshot 读取并写入 compatibility mapping。该 alias 未存在、指向其他 semantic Token、跨层直连 global palette，或只因 resolved HEX 相同而被判相等时，Sidebar selected icon 视觉合同保持 `block`。

#### 3.8.7 Typography 原子 Token 与 Figma 复合使用合同

##### 3.8.7.1 双来源、职责边界与读取状态

Typography 采用两个互补但不可互相替代的来源：

| 来源职责 | 来源 | 精确身份 | 提供内容 |
|---|---|---|---|
| 原子 Token 身份源 | `typography.json` | mode=`kwork` | path、`$value`、Variable ID、scope；不定义复合 Text Style 或用途组合 |
| 复合使用规范源 | Figma `Lingee-设计规范 (AI投喂版)` | file key=`HXHbn9VT1RgPuJ70JI4tQ5`；Section `Typography - 芝芝`=`22009:521`；内容组=`22009:535` | 标题/正文分组、实际样本文字属性、字号×行高×字重组合及用途文案 |
| 页面设计源 | 当前无 active page source | 仅由未来每份 Page Manifest 的锁定 file/node/immutable version 建立 | 页面实例 typography provenance；在新页面完整直读前不得从组件规范、历史页面或实现推断 |

本轮通过 Figma MCP 分别读取根节点 `22009:521` 与内容子节点 `22009:535`，两次返回的 10 条产品规范行、样本节点、属性与用途文案一致。该交叉读取证明当前 live 节点返回内容内部一致，但 connector 未返回真实 immutable version ID、稳定 Figma Text Style ID、styled-range Variable 引用或 alias chain；URL 参数 `t=3q5itijUbfVCp7Fd-4` 也不是 immutable version。因此当前状态固定为 `combined_live_read_consistent_binding_pending`，不能标记 `direct_read_complete`、`bound`、`source_exact` 或 `verified`。

根 Section 还包含规范页面自身的 Header/Footer/展示元素：Inter 的 `Label/Medium`、`Body/Medium`、100px“字体”，Geist footer 及 Fragment Mono 分隔符。这些只用于规范页面 UI，**不属于下表 Lingee 产品字体角色**，不得导入产品 Token 或实现。产品规范范围只取 `22009:535` 中“标题”节点 `22009:636`、“正文”节点 `22009:637` 及其 10 个样本行。

##### 3.8.7.2 `typography.json` 原子事实修正

`typography.json` 共 31 个原子 Token：12 个 `font-size`、3 个 `family`、4 个 `weight`、12 个 `line-height`。必须使用真实 path，不得用展示名称改写身份：

- family 的真实 path 是 `family.body`、`family.title`、`family.display`，三者分别为 `VariableID:5041:855/856/857`，均解析为 `PingFang SC`，但身份不可合并。旧写法 `font-family.*` 不是源文件 path。
- weight 的真实 key/value 是：`weight.light=light`（`VariableID:5041:858`）、`weight.normal=regular`（`VariableID:5041:859`）、`weight.semibold=semibold`（`VariableID:5041:860`）、`weight.bold=bold`（`VariableID:5041:861`）。`regular` 是 `weight.normal` 的解析值，不是可擅自创建的 Token key。
- font-size 值集合为 `10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 72`。其中 `large-28`、`large-32` scope=`ALL_SCOPES`，其余已登记 size scope=`FONT_SIZE`。
- line-height 值集合为 `15, 18, 22, 24, 28, 30, 36, 42, 48, 54, 72, 108`。其中 `42`、`48` scope=`ALL_SCOPES`，其余已登记 line-height scope=`LINE_HEIGHT`。
- 原子 number 仍未声明 Web 单位；Figma 样本的 `lineHeight` 明确返回 px，而 `fontSize` 返回 number。结合映射必须同时保留 raw Figma 属性与 Token number，不得仅因值相等自动补单位或宣称 Variable 已绑定。

##### 3.8.7.3 已识别的 10 条复合规范

下表中“结合映射”是本规范建立的语义 join，不是 connector 已证明的 Figma Variable binding。标题组统一映射到 `family.title`、正文组映射到 `family.body`；`family.display` 本轮不分配。只有取得固定版本的实际 Variable/style ref 并与本地 Variable ID 对账后，状态才可从 `resolved-value-match` 升为 `bound`。

| role_id | Figma 证据（行/样本/用途） | 直读样本属性 | 结合映射（path；Variable ID） | Figma 用途原文 | 当前状态 |
|---|---|---|---|---|---|
| `heading-36` | `22009:536` / `22009:543` / `22009:545` | PingFang SC；Semibold 600；36 / 54px | `family.title` `VariableID:5041:856`；`weight.semibold` `VariableID:5041:860`；`font-size.large-36` `VariableID:5041:852`；`line-height.54` `VariableID:5041:869` | 页面一级大标题、全站页面头部主标题、大屏模块顶级标题。用于页面最顶端的全局标题，页面仅出现 1 次。 | `resolved-value-match; binding-pending` |
| `heading-24` | `22009:546` / `22009:553` / `22009:555` | PingFang SC；Semibold 600；24 / 36px | `family.title` `VariableID:5041:856`；`weight.semibold` `VariableID:5041:860`；`font-size.large-24` `VariableID:5041:851`；`line-height.36` `VariableID:5041:868` | 页面二级模块标题、卡片容器大标题、区块分组总标题 | `resolved-value-match; binding-pending` |
| `heading-20` | `22009:556` / `22009:563` / `22009:565` | PingFang SC；Semibold 600；20 / 30px | `family.title` `VariableID:5041:856`；`weight.semibold` `VariableID:5041:860`；`font-size.large-20` `VariableID:5041:850`；`line-height.30` `VariableID:5041:867` | 三级小标题、卡片内部主标题、面板核心标题 | `resolved-value-match; binding-pending` |
| `heading-18` | `22009:566` / `22009:573` / `22009:575` | PingFang SC；Semibold 600；18 / 28px | `family.title` `VariableID:5041:856`；`weight.semibold` `VariableID:5041:860`；`font-size.medium-18` `VariableID:5041:849`；`line-height.28` `VariableID:5041:866` | 四级小标题、列表大标题、强调型栏目标题 | `resolved-value-match; binding-pending` |
| `heading-16` | `22009:576` / `22009:583` / `22009:585` | 信息标签=`Medium`；实际样本=Semibold 600；16 / 24px | 候选：`family.title` `VariableID:5041:856`；`font-size.medium-16` `VariableID:5041:848`；`line-height.24` `VariableID:5041:865`；weight 未裁决 | 次级栏目标题、列表项主标题、菜单重点标题 | `label-style-conflict; block` |
| `heading-14` | `22009:586` / `22009:593` / `22009:595` | 信息标签=`Medium`；实际样本=Semibold 600；14 / 22px | 候选：`family.title` `VariableID:5041:856`；`font-size.small-14` `VariableID:5041:847`；`line-height.22` `VariableID:5041:864`；weight 未裁决 | 基础小标题、辅助栏目标注、表单字段标题 | `label-style-conflict; block` |
| `body-16` | `22009:596` / `22009:603` / `22009:605` | PingFang SC；Regular 400；16 / 24px | `family.body` `VariableID:5041:855`；`weight.normal` `VariableID:5041:859`；`font-size.medium-16` `VariableID:5041:848`；`line-height.24` `VariableID:5041:865` | 常规正文长文本、详情页内容、弹窗主体描述文案 | `resolved-value-match; binding-pending` |
| `body-14` | `22009:606` / `22009:613` / `22009:615` | PingFang SC；Regular 400；14 / 22px | `family.body` `VariableID:5041:855`；`weight.normal` `VariableID:5041:859`；`font-size.small-14` `VariableID:5041:847`；`line-height.22` `VariableID:5041:864` | 通用正文、表格内容、列表详情文案、常规按钮文字 | `resolved-value-match; binding-pending` |
| `body-12` | `22009:616` / `22009:623` / `22009:625` | PingFang SC；Regular 400；12 / 18px | `family.body` `VariableID:5041:855`；`weight.normal` `VariableID:5041:859`；`font-size.small-12` `VariableID:5041:846`；`line-height.18` `VariableID:5041:863` | 辅助说明文字、标签备注、状态提示、次级描述文案 | `resolved-value-match; binding-pending` |
| `body-10` | `22009:626` / `22009:633` / `22009:635` | PingFang SC；Regular 400；10 / 15px | `family.body` `VariableID:5041:855`；`weight.normal` `VariableID:5041:859`；`font-size.small-10` `VariableID:5041:845`；`line-height.15` `VariableID:5041:862` | 极小号标注、版权信息、角落备注、数据尾注、底部水印文字 | `resolved-value-match; binding-pending` |

##### 3.8.7.4 冲突、使用与升级规则

1. 复合角色是白名单，不允许从 31 个原子 Token 任意做 size×line-height×weight 笛卡尔积。当前 Figma 节点未使用的 size `28/32/48/72`、line-height `42/48/72/108`、`weight.light`、`weight.bold` 和 `family.display` 仍是原子事实，但不能据此节点自动获得产品用途。
2. `heading-16` 与 `heading-14` 的展示标签写 `Medium`，实际样本节点却为 `fontStyle=Semibold/fontWeight=600`；本地又没有 `weight.medium`。三者冲突必须由 Design System owner 裁决：修正标签、修正样本文字或新增经审批 Token。在裁决和固定版本复读前不得默认选择 `weight.semibold`、不得把 `Medium` 猜为 500，也不得创建 `weight.medium`。
3. 其余 8 条的 family、weight label/value、size 与 line-height 均能与本地原子值对齐，但相同值不证明绑定；source-map 只能先写 `resolved-value-match`，不得写 Figma variable provenance。
4. 产品样本节点均为 LEFT/TOP；connector 对这些样本未返回 letter-spacing、paragraph spacing、Text Style ID 或 Variable ref。缺失字段保持 `connector-not-returned/unknown`，不能默认为 `0`、`normal` 或继承规范页面 scaffold。
5. `heading-36` 的“页面仅出现 1 次”是该复合角色硬约束；其余用途文案用于选择角色，不自动等同 HTML heading level，语义层级仍由页面 a11y/heading outline 合同决定。
6. 页面实际字体必须同时满足：页面节点 typography provenance、已批准复合 role、原子 Token identity、字体 binary/PostScript/version/license/load probe。任一来源冲突即 `block`，不得用“最接近”组合、系统 fallback 或规范页 scaffold 字体替代。
7. 升级为 `bound` 的必要条件：锁定该字体规范文件真实 immutable version；保存 `22009:521`/`22009:535` 原始响应和 hash；读取每个样本的稳定 Text Style/Variable refs 与 styled ranges；逐条对账本地 Variable ID；关闭两个 Medium/Semibold 冲突；mapping unresolved/conflict=0。字体 binary/license/load 未通过时，即使绑定成立，P0-05 仍不能关闭。
8. 页面中观察到的 Songti SC、Noto Sans SC、Inter、Geist、Fragment Mono、Microsoft YaHei 等不会因出现在页面或规范 scaffold 中自动成为产品复合角色；只有单独的页面 provenance 或经批准的字体合同可放行。

#### 3.8.8 Spacing 原子 Token 与 Figma Hook/单位规范校对合同

##### 3.8.8.1 双来源、精确范围与读取状态

| 来源职责 | 来源 | 精确身份 | 提供内容 |
|---|---|---|---|
| 原子 Token 身份源 | `spacing.json` | mode=`Mode 1` | path、number `$value`、Variable ID、scope；不提供 Web 单位、hook 拼写或对非 gap 属性的授权 |
| Hook/单位规范源 | Figma `Lingee-设计规范 (AI投喂版)` | file key=`HXHbn9VT1RgPuJ70JI4tQ5`；root=`22009:894`；table=`22009:895` | 12 条样式 hook、rem 值、px 值及逐行顺序 |
| 页面/组件实例 | 目标页面固定 Figma version | 实际使用节点与 gap property | 最终 spacing provenance；不得只凭本表、名称相似或相同数值推断绑定 |

本轮先读取 root `22009:894`/table `22009:895`，再分别读取名称列 `22009:896`、rem 列 `22009:923` 和 px 列 `22009:950`。三列均返回 12 条且顺序一致，支持逐行对账；12/12 行都满足 `rem × 16 = px`。connector 仍未返回该文件真实 immutable version、Variable ref/alias 或稳定 style binding；URL 参数 `t=g73DPXurHrZNMIgj-4` 不是 immutable version。因此当前状态为 `combined_live_column_cross_read_consistent_naming_conflicts_coverage_gap_binding_pending`，只能证明当前 live 表格与本地值可校对，不能标记 `direct_read_complete`、`bound`、`source_exact` 或 `verified`。

规范来源必须按**表头、行内容和语义范围**分类，禁止按承载表格的视觉 scaffold 分类。root/table 的 24px 外框圆角、单元格 padding/gap、Noto Sans SC/Microsoft YaHei 字体、填充与描边只属于规范页展示容器；它们既不是额外 Spacing 条目，也不能把本节点误判为 Radius、Typography 或产品组件规范。

##### 3.8.8.2 十二条 Figma → 本地显式映射

下表是合同级 join，不是 rename，也不是 connector 已证明的 Figma Variable binding。只有普通 `spacing-` 前缀被登记为 namespace join；去掉该前缀后有 9 条 hook 与本地 path 逐字符相同。小数点、连字符和 `--sl-` 前缀差异不得被通用 normalize 规则静默消除。

| Figma hook | Figma 证据（名称/rem/px） | Figma rem / px | 本地 Token（值；Variable ID；scope） | 校对状态 |
|---|---|---|---|---|
| `spacing-3x-small` | `22009:900` / `22009:927` / `22009:954` | `0.125rem` / `2px` | `3x-small`=2；`VariableID:5041:874`；`GAP` | `exact-hook-join; value/unit-match; binding-pending` |
| `spacing-2x-small` | `22009:902` / `22009:929` / `22009:956` | `0.25rem` / `4px` | `2x-small`=4；`VariableID:5041:875`；`GAP` | `exact-hook-join; value/unit-match; binding-pending` |
| `spacing-1.5x-small` | `22009:904` / `22009:931` / `22009:958` | `0.375rem` / `6px` | `1-5x-small`=6；`VariableID:5041:876`；`GAP` | `naming-conflict; value/unit-match; binding-pending` |
| `spacing-x-small` | `22009:906` / `22009:933` / `22009:960` | `0.5rem` / `8px` | `x-small`=8；`VariableID:5041:877`；`GAP` | `exact-hook-join; value/unit-match; binding-pending` |
| `spacing-0.5x-small` | `22009:908` / `22009:935` / `22009:962` | `0.625rem` / `10px` | `0-5x-small`=10；`VariableID:5041:878`；`GAP` | `naming-conflict; value/unit-match; binding-pending` |
| `spacing-small` | `22009:910` / `22009:937` / `22009:964` | `0.75rem` / `12px` | `small`=12；`VariableID:5041:879`；`GAP` | `exact-hook-join; value/unit-match; binding-pending` |
| `--sl-spacing-medium` | `22009:912` / `22009:939` / `22009:966` | `1rem` / `16px` | `medium`=16；`VariableID:5041:880`；`GAP` | `naming-conflict; value/unit-match; binding-pending` |
| `spacing-large` | `22009:914` / `22009:941` / `22009:968` | `1.25rem` / `20px` | `large`=20；`VariableID:5041:881`；`GAP` | `exact-hook-join; value/unit-match; binding-pending` |
| `spacing-x-large` | `22009:916` / `22009:943` / `22009:970` | `1.75rem` / `28px` | `x-large`=28；`VariableID:5041:883`；`GAP` | `exact-hook-join; value/unit-match; binding-pending` |
| `spacing-2x-large` | `22009:918` / `22009:945` / `22009:972` | `2.25rem` / `36px` | `2x-large`=36；`VariableID:5041:884`；`GAP` | `exact-hook-join; value/unit-match; binding-pending` |
| `spacing-3x-large` | `22009:920` / `22009:947` / `22009:974` | `3rem` / `48px` | `3x-large`=48；`VariableID:5041:885`；`GAP` | `exact-hook-join; value/unit-match; binding-pending` |
| `spacing-4x-large` | `22009:922` / `22009:949` / `22009:976` | `4.5rem` / `72px` | `4x-large`=72；`VariableID:5041:886`；`GAP` | `exact-hook-join; value/unit-match; binding-pending` |

本地仍有一条未被该 Figma 表覆盖的原子身份：

| 本地 Token | Figma 对应行 | 状态 |
|---|---|---|
| `0-5x-large`=24；`VariableID:5041:882`；`GAP` | 无；表格从 20px 直接到 28px | `local-only-coverage-gap; do-not-infer-1.5rem-or-hook` |

##### 3.8.8.3 校对结论、冲突与使用规则

1. 12 条 Figma 行全部能按 px 值匹配本地 number，且 12/12 的 rem/px 换算一致；这只是 `resolved-value-match`，相同数值不能证明 Variable binding。
2. 9 条普通 `spacing-*` hook 在去掉已登记 namespace 前缀后与本地 path 精确相同。`spacing-1.5x-small ↔ 1-5x-small`、`spacing-0.5x-small ↔ 0-5x-small`、`--sl-spacing-medium ↔ medium` 是 3 个命名冲突；禁止把 `.` 自动替换为 `-`、删除 `--sl-`，或把一次性 join 变成全局 normalize 规则。
3. 三个命名冲突必须由 Design System owner 以版本化 mapping 或迁移裁决，保留 Figma hook、本地 path、Variable ID、consumer、兼容期和审批。裁决前可记录值匹配，但不得写 `bound` 或让生成器仅按名称自动消费。
4. 本地 `0-5x-large=24` 是 Figma 表覆盖缺口。即使 `24/16=1.5`，也不得自动补造 `1.5rem`、`spacing-0.5x-large` 或任何其他 hook；只有页面实例的独立 Variable/property provenance 或上游新增并固定的规范行才能授权使用。
5. `1rem=16px` 仅是本 Figma 表的转换合同，不是浏览器环境的无条件事实。实现若输出 rem，Page Manifest 必须锁定并实测 root font size=16px，source-map 记录 number→rem 的确定性转换；root font size 不为 16px 或未锁定时不得声称与表中 px 等价。
6. `spacing.json` 的 13 个 number Token 全部 scope=`GAP`。本表只补充 hook/单位表达，不扩大 scope；只允许在页面/组件 source-map 证明目标属性为 gap 且身份绑定成立时消费。
7. 禁止将这些 Token 自动用于 padding、margin、页面 gutter、定位偏移、width/height 或其他空间属性。此类属性若无独立 Token 或 Figma property provenance，必须保留为页面/组件合同值或缺口，不能为了“Token 化”伪造 alias。
8. scaffold 中观察到的 padding、gap、24px 圆角和字体不得反向成为产品合同；来源分类和条目提取必须以表头与逐行语义为准，不能以容器视觉属性或节点根类型为准。
9. mode `Mode 1`、本地 path 与完整 Variable ID 都是身份的一部分；禁止按 px/rem 值去重、合并同值 Token或从值反推绑定。`GAP` scope 也不等于所有 gap 实例均已绑定。
10. 升级为 `bound` 需要：固定真实 immutable version；保存 root/table/三列 raw 与 hash；取得各行 Variable refs；逐项对账本地 Variable ID；关闭 3 个命名冲突；对 24px coverage gap 给出明确 disposition；验证 rem 输出环境；mapping unresolved/conflict=0。否则最高保持当前 pending/gap 状态。

#### 3.8.9 Radius 原子 Token 与 Figma 使用规范校对合同

##### 3.8.9.1 双来源、精确范围与读取状态

| 来源职责 | 来源 | 精确身份 | 提供内容 |
|---|---|---|---|
| 原子 Token 身份源 | `radius.json` | mode=`light` | path、number `$value`、Variable ID、scope；不提供 Web 单位或完整应用场景 |
| 使用规范源 | Figma `Lingee-设计规范 (AI投喂版)` | file key=`HXHbn9VT1RgPuJ70JI4tQ5`；root=`22009:657`；table=`22009:658` | `radius-*` 名称、px/`50%H` 表达、实际示例 geometry 与应用场景 |
| 页面/组件实例 | 目标页面固定 Figma version | 实际使用节点 | 最终 radius provenance；不得只凭本表或相同数值推断绑定 |

本轮先读取 root `22009:657`，再分别读取名称列 `22009:659`、值列 `22009:684`、示例列 `22009:709`、应用场景列 `22009:734`。四列均返回 11 条且顺序一致，支持逐行对账。connector 仍未返回该文件真实 immutable version、Variable ref/alias 或稳定 style binding；URL 参数 `t=g73DPXurHrZNMIgj-4` 不是 immutable version。因此当前状态为 `combined_live_column_cross_read_consistent_circle_conflict_binding_pending`，只能证明 live 表格内容内部一致，不能标记 `direct_read_complete`、`bound`、`source_exact` 或 `verified`。

root/table 自身的 24px 外框及表头/表尾 24px 圆角是规范表格 scaffold，不是额外 Radius Token 或产品用途条目；表格文字使用的 Noto Sans SC/Microsoft YaHei 也不参与圆角合同。

##### 3.8.9.2 十一条逐项校对

Figma 名称带 `radius-` 前缀，本地 Token path 不带前缀；下表是显式 join，不是 rename，也不是已证明的 Figma Variable binding。Figma 固定值列明确使用 px，本地 `$value` 仍是无单位 number，实施时必须通过本合同和 source-map 记录单位转换。

| Figma 名称 | Figma 证据（名称/值/示例/用途） | Figma 值与示例 | 本地 Token（值；Variable ID；scope） | Figma 应用场景原文 | 校对状态 |
|---|---|---|---|---|---|
| `radius-small` | `22009:663` / `22009:688` / `22009:713` / `22009:738` | 4px；示例 radius=4 | `small`=4；`VariableID:5041:887`；`CORNER_RADIUS` | `/`（未定义应用场景） | `resolved-value-match; description-conflict; binding-pending` |
| `radius-medium` | `22009:665` / `22009:690` / `22009:715` / `22009:740` | 6px；示例 radius=6 | `medium`=6；`VariableID:5041:888`；`CORNER_RADIUS` | `/`（未定义应用场景） | `resolved-value-match; description-conflict; binding-pending` |
| `radius-x-medium` | `22009:667` / `22009:692` / `22009:717` / `22009:742` | 8px；示例 radius=8 | `x-medium`=8；`VariableID:5041:889`；`CORNER_RADIUS` | `H≤32组件` | `resolved-value-match; binding-pending` |
| `radius-large` | `22009:669` / `22009:694` / `22009:719` / `22009:744` | 12px；示例 radius=12 | `large`=12；`VariableID:5041:890`；`CORNER_RADIUS` | `三级嵌套卡片、H≤40组件` | `resolved-value-match; description-conflict; binding-pending` |
| `radius-x-large` | `22009:671` / `22009:696` / `22009:721` / `22009:746` | 16px；示例 radius=16 | `x-large`=16；`VariableID:5041:891`；`CORNER_RADIUS` | `二级嵌套卡片、H≤56组件` | `resolved-value-match; description-conflict; binding-pending` |
| `radius-2x-large` | `22009:673` / `22009:698` / `22009:723` / `22009:748` | 20px；116×52 示例 radius=20 | `2x-large`=20；`VariableID:5041:892`；`CORNER_RADIUS` | `用于大边框半径的组件，下拉框边框圆角` | `resolved-value-match; binding-pending` |
| `radius-3x-large` | `22009:675` / `22009:700` / `22009:725` / `22009:750` | 24px；116×80 示例 radius=24 | `3x-large`=24；`VariableID:5041:893`；`CORNER_RADIUS` | `一级卡片背景、弹窗、模态面板` | `resolved-value-match; binding-pending` |
| `radius-4x-large` | `22009:677` / `22009:702` / `22009:727` / `22009:752` | 28px；116×80 示例 radius=28 | `4x-large`=28；`VariableID:5508:5422`；`ALL_SCOPES` | `一级卡片背景、弹窗、模态面板` | `resolved-value-match; scope-broad; binding-pending` |
| `radius-5x-large` | `22009:679` / `22009:704` / `22009:729` / `22009:754` | 32px；116×80 示例 radius=32 | `5x-large`=32；`VariableID:5041:5196`；`CORNER_RADIUS` | `用于界面边框` | `resolved-value-match; binding-pending` |
| `radius-circle` | `22009:681` / `22009:706` / `22009:731` / `22009:756` | `50%H`；80×80 示例 radius=40 | `circle`=999；`VariableID:5041:894`；`CORNER_RADIUS` | `用于正圆形场景，如头像` | `semantic-value-conflict; block` |
| `radius-pill` | `22009:683` / `22009:708` / `22009:733` / `22009:758` | 999px；116×80 示例 radius=999 | `pill`=999；`VariableID:5041:895`；`CORNER_RADIUS` | `用于长条按钮、标签、胶囊状导航栏等胶囊形场景` | `resolved-value-match; binding-pending` |

##### 3.8.9.3 校对结论、冲突与使用规则

1. `small/medium/x-medium/large/x-large/2x-large/3x-large/4x-large/5x-large/pill` 的名称语义和解析数值可逐项对齐，共 10 条 `resolved-value-match`；相同名称/值仍不证明 Figma Variable binding。
2. `circle` 与 `pill` 的 Figma 语义明确不同：`circle=50%H`，`pill=999px`。本地两者却都解析为 999，虽然 Variable ID 不同，仍不能把 `circle` 的 999 当作 `50%H` 的无损同义值。
3. `radius-circle` 在解除 blocker 前不得用于实现。Design System owner 必须选择并版本化一种裁决：将 circle 改为可表达百分比/高度关联的 Token；批准 `circle identity → 50%` 的确定性转换并强制 `width=height`；或修改 Figma 规范为 999px 并证明所有 circle consumer 均保持正方形。任何方案都须保留旧/新 path、Variable ID、consumer、迁移与 baseline。
4. Figma 圆形示例是 80×80、实际 radius=40。`50%` 只有在 `width=height` 时产生正圆；非正方形使用会成为椭圆，因此 circle 合同必须同时验证 shape invariant。`pill` 则面向长条形状，禁止与 circle 互换。
5. Figma 已明确固定项单位为 px，但 `radius.json` number 没有单位。source-map 必须记录从 Token number 到 Web px 的批准转换；禁止把相同 number 用到非 radius 属性，也不能将 `ALL_SCOPES` 解释为任意用途许可。
6. `small`、`medium`、`large`、`x-large` 的 `$description="边框宽度"` 与文件类型、scope 及 Figma 圆角表冲突，是 4 项 metadata defect。它们不改变当前数值/身份，但必须通过版本化描述修复，不得复制错误描述到生成文档。
7. `4x-large` scope=`ALL_SCOPES` 比其他 Token 更宽；消费审计仍只能允许其用于经本规范和页面 provenance 证明的 radius 属性，不能因 scope 宽泛而绕过语义。
8. Figma 对 `small`、`medium` 的应用场景原文为 `/`，应记录为 `figma-not-defined`，不能从尺寸、相邻行或行业惯例补用途。
9. 两份来源都没有 0 圆角 Token/条目，确认不能用最小 4 替代 0，也不能伪造 `radius-none`。
10. 升级为 `bound` 需要：固定真实 immutable version；保存 root 与四列 raw/hash；取得各行 Variable refs；逐项对账本地 Variable ID；处理四项 description defect；关闭 circle conflict 并验证 shape invariant；mapping unresolved/conflict=0。否则最高保持当前 pending/block 状态。

#### 3.8.10 Token audit 与发布条件

每个 acceptance release 的 `sources/tokens/token-audit.json` 至少必须包含：七文件相对路径、精确 mode、实际 SHA-256、Token/Variable ID 计数与唯一性、alias edge/chain/cycle/unresolved、跨层与反向依赖、direct value 清单、命名/值疑点台账、Light/Dark 覆盖、34 个组件命名空间及非法越界消费、Sidebar selected-icon component Token → semantic `fg-color/black-strong` 的真实 alias chain、Typography 未决映射、Spacing/Radius scope 违规、Figma Spacing 12 条 mapping 与 `rem×16=px` 校验、9 条 exact hook join、3 个 naming conflict、本地 24px coverage gap、rem 输出的 root-font-size 约束、Figma Radius 11 条 mapping、`circle=50%H` 与本地 999 的冲突/shape invariant、`circle`/`pill` 身份保持，以及 `Avatar.border-color.Color` 不存在断言。只有 unresolved/cycle/非法消费为 0、所有 direct value/命名迁移/coverage gap 有 disposition、Sidebar alias 通过、scope 与单位转换检查通过、三个复合规范 mapping 满足各自关闭条件、七文件 hash 与 Manifest/Evidence Pack 一致时，Token 合同才可从 `registered_alias_audit_pending` 升为 `audited`；这仍不单独推导页面 `verified`。

### 3.9 Lingee UI 官方图标库合同

本节覆盖并废止 v2.4.0 及更早版本中“从 Figma 基础图标 Section 读取、导出 SVG、以 component ID/key 作为运行时身份”的全部规则。自 v2.5.0 起，Figma 页面实例仍可提供**图标语义、位置、尺寸、状态和颜色 Token provenance**，但产品图标的可执行几何、组件 API 和运行时身份只能来自官方 Lingee UI 图标库。

#### 3.9.1 唯一来源与固定版本

| 字段 | 固定合同 |
|---|---|
| 人工选图入口 | [Lingee UI / Foundation / Icon](https://kingdee.github.io/lingee-ui/#/foundation/icon) |
| 机器读取与运行时包 | `lingee-icon@1.0.15` |
| npm 固定版本 | [lingee-icon 1.0.15](https://www.npmjs.com/package/lingee-icon/v/1.0.15) |
| npm integrity | `sha512-BS9sueKMX0tPaOkr7RkZBqwiZshjx/L+jKLu/7l6cnvr42Lm0FrJuda8Yx7oaLJkqTx9au+QHm/W/P7aPDhHZg==` |
| tarball SHA-256 | `87ecacb9900ea61cb5fb8734d9d5ede35c28e4b378a62d893d8856428eb58e7e` |
| 目录事实源 | `ICONS.md`；SHA-256=`90adaced05883590a1a67b93eb8c99adcf428528482399976f40dd2b0ceb0963` |
| 类型/export 事实源 | `dist/index.d.ts`；SHA-256=`8836802c7b4230b45192303534fee58abb76ad28e2fce56d6a06fdbde93e786f` |
| HTML sprite 事实源 | `dist/svg-sprite.js`；SHA-256=`0aeaec0e07641e1cc6505261dc45409a765dc8c96a51b1680f6d9ffef3791600` |
| 固定运行时计数 | 27 个分类、966 个 PascalCase exports；以实际 package exports 与类型索引为准 |
| 目录审计 | `ICONS.md` 表=967 行；顶部声明 21 类/872 个、各分类声明数合计 966，均与实际表/export 不完全一致 |
| 已知目录/runtime 差异 | exact match=965；catalog-only=`GitFork`,`ExclamationCircleFill（详情）`；runtime-only=`ExclamationCircleFill` |
| 常用尺寸 | 16 / 18 / 20 / 24px；仅作候选，最终值仍由页面/组件合同决定 |
| 合同状态 | `official-package-pinned-runtime-exports-audited_catalog-defects-and-page-icon-mapping-pending` |

网站页面只用于人类浏览和选择，**不得被生成器抓取 DOM、截图或解析网络请求来构造图标**。机器必须使用发布包中固定版本的 package metadata、`ICONS.md`、类型索引和实际模块；生产构建不得使用 `latest`、浮动 semver、未锁定 CDN 或 Figma 临时资源 URL。

#### 3.9.2 机器读取顺序

每个页面图标必须按以下顺序解析；任一步失败都输出 blocker，不得继续猜测：

1. 从页面实例或组件合同取得 `logical_name`、业务语义、尺寸、状态、颜色 Token、可访问性语义，以及可选的 Figma instance node。
2. 在固定版本 `ICONS.md` 中按语义选择候选，但它只是语义目录，不是可用性事实源；最终必须落到大小写完全一致的 PascalCase runtime `export_name`。禁止仅凭目录声明计数、视觉相似、中文翻译或子串命中自动裁决。
3. 在 `dist/index.d.ts` 与实际 package export 中双重确认该 `export_name` 存在；二者不一致时 `ICON_PACKAGE_INDEX_MISMATCH=block`。`GitFork` 当前不可用；`ExclamationCircleFill（详情）` 只有经显式 compatibility mapping 才可落到 `ExclamationCircleFill`，不得通用化为“自动去括号”。
4. 将裁决写入版本化 `icon-compatibility-map.json`，保存 owner、原因、来源页面、批准记录和适用状态；禁止运行时模糊查找。
5. React 生成器输出静态 named import；纯 HTML 生成器使用相同固定包版本的本地 sprite ID。生成后校验 DOM `data-icon`/`<use href>`、尺寸、computed color 与 Manifest 一致。
6. 页面图标的截图 baseline、交互状态与 a11y 通过后，该映射才可进入 `verified`；仅能成功 import 不等于视觉已验证。

#### 3.9.3 稳定身份与 Page Manifest 映射

图标稳定身份固定为：

```text
package_name + exact_package_version + export_name
```

`logical_name` 只用于页面语义，Figma component/node/key 只作为可选映射证据，均不能替代 `export_name`。每个实际使用图标必须有如下记录：

```yaml
icon_usage:
  logical_name: "sidebar-search"
  source:
    docs_url: "https://kingdee.github.io/lingee-ui/#/foundation/icon"
    package_name: "lingee-icon"
    package_version: "1.0.15"
    export_name: "Search"
    category: "通用类"
  page_evidence:
    figma_instance_node_id: "OPTIONAL_WHEN_NOT_PRESENT_IN_FIGMA"
    figma_component_node_id: "OPTIONAL_VISUAL_MAPPING_ONLY"
    semantic_reason: "搜索"
  render:
    size: 20
    color_token: "REQUIRED_COMPONENT_OR_SEMANTIC_TOKEN_PATH"
    fill: "currentColor"
    rotate: 0
    spin: false
  accessibility:
    decorative: true
    accessible_name: null
  source_map_entry: "REQUIRED"
  mapping_status: "approved|blocked"
```

同一 `logical_name` 在不同状态使用不同 export 时必须显式登记 state mapping；同一个 export 可被多个语义消费，但每个消费者都须独立记录。`Search` 与 `SearchAnalysis`、`Play` 与 `Play1`、带 `1/2` 后缀的 export 都是不同身份，禁止静默合并。

#### 3.9.4 React 与纯 HTML 使用合同

React/React 兼容项目必须使用 tree-shakable named import：

```tsx
import { Search } from "lingee-icon";

<Search size={20} color="currentColor" aria-hidden="true" />
```

禁止复制包内 SVG path 到业务仓库、通过字符串动态索引未知组件、读取 `node_modules` 私有实现路径，或把官方组件转存成未经版本约束的散落 SVG。

纯 HTML 项目必须把固定版本 `dist/svg-sprite.js` 纳入受 hash 约束的发布包并只加载一次，然后使用精确 ID：

```html
<svg width="20" height="20" fill="currentColor" aria-hidden="true">
  <use href="#Search"></use>
</svg>
```

禁止生产环境引用 `https://cdn.jsdelivr.net/npm/lingee-icon@latest/...`。若必须走 CDN，也只能使用精确版本并同时校验 SRI、离线 fallback 与最终字节 hash；默认策略仍是随 release bundle 本地化。

#### 3.9.5 尺寸、颜色、状态与可访问性

1. `size` 同时设置宽高；必须来自 Figma 页面实例或组件合同。16/18/20/24 只是官方常用值，不能把非标准设计尺寸强制归一。
2. 默认使用 `color="currentColor"`，由组件 Token 或允许的语义 Token 控制。不得把页面 observed HEX、包内默认 paint 或 Figma 示例色硬编码进业务组件。
3. `fill` 仅在设计明确要求多色/渐变且固定包实现支持时使用；不得修改官方 path。`rotate`、`spin` 只能由明确状态/动效合同开启。
4. default/hover/pressed/selected/active/disabled/focus-visible 的 export、size、color、opacity 与 motion 必须按 legal tuple 记录。未登记 compound state fail closed。
5. 装饰图标必须 `aria-hidden=true`；独立图标按钮必须由按钮提供稳定 accessible name，不能把 export 名直接暴露为用户文案。
6. 验收至少断言 exact package version、exact export、DOM `data-icon` 或 sprite ID、rendered width/height、computed color、焦点/禁用状态及截图 baseline。

#### 3.9.6 缺失图标、禁用来源与新增流程

当 `ICONS.md`、类型索引或实际 export 中不存在所需图标时：

- 记录 `ICON_NOT_FOUND`，包含 logical name、业务语义、页面/Figma evidence、候选被拒原因、owner 和解除条件。
- 停止该图标及依赖它的验收范围；不得自动选相似图标。
- 由 Design System owner 向 `lingee-icon` 官方库新增图标并发布新固定版本，再更新本节版本/integrity/hash、compatibility map、lockfile 与全部受影响 baseline。
- 禁止 `@ant-design/icons`、`lucide-react`、其他第三方图标包、Figma 导出 SVG、业务仓库散落 SVG、emoji、Unicode glyph、CSS 手绘、截图和模糊位图作为 fallback。

#### 3.9.7 Evidence Pack 与升级条件

每个 acceptance release 必须保存 `sources/lingee-icon/<exact-version>/`，至少包括 package metadata、lockfile slice、npm integrity、tarball SHA-256、`ICONS.md`、`dist/index.d.ts`、导出清单、sprite（若适用）、各文件 hash、`icon-compatibility-map.json`、used-icons report 与 license。`used-icons report` 必须证明：

- 所有 Manifest icon 都存在于固定 package export；missing/unknown/fuzzy-match=0。
- 每个 `logical_name × state` 都有精确 `export_name`、size、Token、a11y 和 source-map。
- 构建产物只包含允许的 `lingee-icon` 来源，不含禁止包、散落 SVG 或临时 Figma URL。
- package version、lockfile、运行时模块、类型索引、目录、sprite 与 Evidence Pack hash 一致。
- 所有目标 viewport/theme/state 的 geometry、computed color、交互与截图 baseline 通过。

只有上述条件全部满足，且页面/Figma 语义映射 unresolved=0，图标合同才可从 `catalogued` 推进到 `implementation_ready`/`verified`。升级 `lingee-icon` 版本必须作为设计系统迁移：重新生成目录与 export diff、复核全部 mapping、重跑视觉矩阵；禁止无审计跟随最新版本。

<!-- LEGACY_V2_4_FIGMA_ICON_AUDIT_BEGIN
以下 v2.4.0 Figma 图标目录审计仅保留作迁移历史；其中任何“必须从 Figma 导出/以 component ID 为运行时身份”的表述均已被 §3.9.1–§3.9.7 废止，不得被生成器消费。

#### 3.9.1 来源、读取范围与计数口径

| 字段 | 当前事实 |
|---|---|
| 规范文件 | `Lingee-设计规范 (AI投喂版)`；file key=`HXHbn9VT1RgPuJ70JI4tQ5` |
| 根节点 | Section `基础图标`=`22007:30176` |
| 读取路径 | root 默认深读；root `depth=1` 顶层复读；20 个 Section 各自 `depth=1` 直接子节点交叉读 |
| 当前可证明范围 | 当前 live connector 返回中的 Section 目录、直接 COMPONENT 的 raw name/component ID/key、根尺寸与部分深层几何一致性 |
| 当前不可证明范围 | immutable version、完整隐藏/实例后代计数、Variable/Style binding、全部引用闭包、稳定 SVG 字节/hash、许可与页面实例选择 |
| 合同状态 | `live-root-and-20-section-cross-read-consistent_immutable-version-and-asset-closure-pending` |

计数硬规则：**只把节点类型 `COMPONENT` 计为图标组件**。Section、FRAME、INSTANCE、IMAGE-SVG、VECTOR、Union/Subtract/BOOLEAN_OPERATION 以及组件内部实现节点均不增加图标总数。根级 `Search`=`15530:16890` 因自身类型为 COMPONENT，虽不属于任何分类 Section，仍计入总数。默认深读响应没有显式 truncation 标记，随后 root 浅读精确返回 20 个 Section + 1 个根级组件，20 个 Section 的独立浅读又逐类对上直接 COMPONENT；这只证明当前 live 返回的目录对账一致，不能替代 DR-4 固定版本的 raw chunk/hash/引用闭包证明。

#### 3.9.2 二十分类与精确计数

| Figma 分类 | Section ID | 直接 COMPONENT 数 |
|---|---:|---:|
| Icon-AI类 | `9704:21747` | 73 |
| Icon-代码开发 | `9704:21756` | 34 |
| Icon-安全&防护 | `9704:21751` | 15 |
| Icon-链接类 | `9704:21758` | 13 |
| Icon-电商财产 | `9704:21746` | 25 |
| Icon-数据类 | `9704:21759` | 27 |
| Icon-邮件&通讯 | `9704:21743` | 42 |
| Icon-时间&日期 | `9704:21752` | 27 |
| Icon-用户性别 | `9704:21750` | 27 |
| Icon-编辑类 | `9704:21749` | 122 |
| Icon-箭头&方向 | `9704:21742` | 135 |
| Icon-键盘&设备 | `9704:21753` | 28 |
| Icon-符号标识 | `9704:21745` | 44 |
| Icon-房屋 | `9704:21741` | 14 |
| Icon-媒体类 | `9704:21755` | 31 |
| Icon-表情&收藏 | `9704:21757` | 23 |
| Icon-数字类 | `9704:21748` | 10 |
| Icon-书籍&文档&标签 | `9704:21754` | 68 |
| Icon-文件类型 | `9704:21744` | 53 |
| Icon-通用类 | `20718:9019` | 51 |
| **20 Section 小计** | — | **862** |
| 根级独立 `Search` | `15530:16890` | 1 |
| **图标库候选总计** | `22007:30176` | **863** |

分类是 provenance，不是可由生成器重算的语义标签。组件必须保留其原 Section；即使名称看起来更适合其他分类，也只能通过有 owner/版本/迁移的额外产品 taxonomy 建立别名，不能移动或覆盖源分类。

#### 3.9.3 稳定身份、精确重名与选择规则

图标稳定身份最少是 `file_key + immutable_version_id + component_node_id + component_key`；同时保存 `raw_name + section_node_id`，页面使用时再追加 `page_instance_node_id + override chain`。raw name 仅供展示/检索，**不是唯一键**。当前目录存在 8 组精确重名、共 16 个不同组件：

| raw name | 身份 A（component ID / key） | 身份 B（component ID / key） |
|---|---|---|
| `Search` | `20718:8985` / `bc5cd6cab6280b7f90911b7c1217485e12a81734` | `15530:16890` / `7ea685327f24e2190197a206578a11a4dbccd7c5` |
| `Information` | `9704:21004` / `3cf91da19234e7113d61f0f1b61e0c3984916202` | `9704:20537` / `20bb293f1616534ed86ddf016feb1e448572f9f6` |
| `Wallet` | `9704:20938` / `378641d44c18932eb28af7d2dd643afe45165d20` | `9704:21163` / `15d510814a1567a7b28ca6a17d787f739c0632c4` |
| `Basicinformation` | `9704:20690` / `bc7014e374539acb093a4e437fff94f60d161125` | `20718:9003` / `21292f9b60094358aaf93a2d124a35b04522d913` |
| `Share1` | `11340:1417` / `b1fa4675537c3530cd1d057039c6a031a3fe4ccd` | `20718:9014` / `dda2cf3e96881850d9cba3d94c2da69c1dc2f227` |
| `Play` | `9704:21046` / `b2f4514978cf749d123dfeae5c119383532ca989` | `9704:21035` / `db7c69d56a0f83cc2d0ffcd20f0ddc64f139ee76` |
| `ZoomInBold` | `9704:20778` / `857b56aa0b32f6c9f76c864e8d6c2feb009bd555` | `9704:20777` / `d5451b3891bf88c03cce9ff049635d5ab8600d82` |
| `PanelTopDashed` | `9704:21201` / `32eda66d559a6cb33062966d07ef8302195fae08` | `9704:21200` / `6d952a407a227d74d68bd07e2730440d75fdc311` |

禁止按名称去重、选择“第一个匹配”、把根级 Search 合并进通用类 Search、按视觉相似度替换，或在代码中只保存字符串名。Page Manifest 必须从页面实例 provenance 选择本唯一图标规范源中的精确 component ID/key。页面实例若来自其他文件，必须明确分类为非本库资产并提供独立来源合同；不能因名称与本库一致就自动切换、合并或冒充本库组件。

#### 3.9.4 命名治理但不破坏源身份

已观察到的治理项包括：拼写/截断 `mobel`、`loding`、`Forwar 5`、`ImagReduce`；大小写风格 `calculator`、`analytical`；词形/分隔 `Threedots`、`GamePs`、`Repeat 1`；以及大量 `*1`/`*2` 后缀（如 `History1`、`Mouse1`、`Record2`、`FiletypeJpg1`）。这些都是原始兼容名称，不能在摄取时静默修正。若产品需要 canonical alias，映射必须以 component ID/key 为主键，记录 raw name、canonical name、owner、原因、消费者、弃用期、版本与审批；alias 不能改变源组件身份，也不能消除精确重名。

#### 3.9.5 几何、颜色与 scaffold 边界

- 大多数直接组件显式为 24×24，但 24×24 只是主流观察，不是无例外的强制归一规则。部分 hug/grid 根在浅读结果中没有独立 dimensions，也不得由 padding 算式冒充已读尺寸。
- 已确认根几何例外：`ToDo`=`9704:20992` 约 22.16×20.96；`DashLg1`=`9704:20544` 为 26×26。`Forwar 5`=`17573:1540` 的组件根为 24×24，但深读内部矢量约 26.67×26.67，必须保留 overflow/crop/viewBox 证据。`People1`=`14909:1532` 为 24×24 且根 `borderRadius=999px`。
- 深读中常见图形 paint 为 `rgba(0,0,0,0.64)`，但它不是已证明覆盖 863 个组件的统一 Token/绑定；不得据此把所有 SVG path 硬编码为该色。单色图标是否使用 `currentColor` 必须由固定版本导出与页面实例颜色 provenance 决定。
- 根 Section 的白底、10% 黑描边、分类容器位置/间距及展示布局属于规范页 scaffold；不得导入产品图标、页面背景或组件 Token。
- 禁止为了“统一”强制重设 24×24、居中、stroke、fill、viewBox 或 path。任何规范化都必须保留原始 bounds/export、给出确定性 transform、页面实例证据及视觉回归。

#### 3.9.6 非组件节点与引用闭包

明确不计数的展示/实现节点包括：`EnvelopeCheck` FRAME=`11323:713`；`CheckSquare` INSTANCE/IMAGE-SVG 链=`20029:4947`；`CheckSquareFill` INSTANCE/IMAGE-SVG 链=`20029:4927`；以及每个 COMPONENT 内部的 vector、Union、Subtract 和 BOOLEAN_OPERATION。它们可作为实现/展示证据，但不能再次登记成独立图标。

默认深读还观察到若干根外 componentId 复用，说明只保存 863 个本地外壳仍不能关闭引用闭包：

| 本库组件 | 已观察到的内部 componentId |
|---|---|
| `GripVertical` `20718:9004` | `84:3669` |
| `Attach` `20718:8986` | `84:3699` |
| `FindTime` `20718:8984` | `84:3653` |
| `ZoomOut` `20718:8983` | `84:3661` |
| `FindText` `20718:8982` | `84:3725` |
| `FindValue` `20718:8981` | `84:3675` |
| `Notify` `20718:8980` | `2:550` |

该表是已观察样例，不宣称穷尽。固定版本证据包必须递归解析全部 main component/instance/override/remote-or-root-external refs；不可访问项按 DR-2.3 进入 `inaccessible` + `block`，不能以本地扁平 SVG 隐藏来源缺口。

#### 3.9.7 导出、消费与升级条件

1. 本轮只学习目录和合同，**未批量导出 863 个 SVG**。没有 immutable version/export bytes/hash 时，任何条目都不是 `asset-bound`。
2. 每个被页面消费的图标必须在 Manifest/asset manifest 中记录规范 file/version、component ID/key、Section、页面 instance/override、export node/format/scale/suffix、原始尺寸、viewBox、颜色策略、稳定本地路径、SHA-256 与许可；页面 instance 的精确来源优先于名字搜索。
3. 禁止 emoji、Unicode、CSS 手绘、第三方/近似图标、截图、临时 Figma URL 或另一个同名组件替代。若固定版本导出失败，保持 P0-07 block，不允许降级后宣称一致。
4. 只有取得真实 immutable version，保存 root + 20 Section raw/chunk/hash 与完整 863 identity index，完成 descendants/type/hidden/instance 对账、Variable/Style 与引用闭包，导出并 hash 所有实际使用资产，建立 page-instance source-map 且 unresolved/unmapped=0，才可把本库从 live cross-read 状态推进到 `extracted`/`asset-bound`；后续 `contract_complete/verified` 仍须逐级满足第 1.3 节与页面验收矩阵。

LEGACY_V2_4_FIGMA_ICON_AUDIT_END -->

# 第二层：Archetype Contract

## 4. 页面原型合同

### 4.1 Archetype 的职责

Archetype 只定义结构槽位、组合约束和通用状态类别，不承载业务文案、业务数据或未经证明的视觉值。每份 Archetype Contract 至少必须包含：

- `archetype_id`、版本、适用 platform/viewport/shell。
- 来源 Figma 的 `file_key`、`file_url`、真实 `immutable_version_id`、`canonical_version_request`，以及至少一个 `source_page_root_url`；若结构由局部 FRAME 提炼，还必须逐项登记 `source_structure_root_urls[]`，每条 URL 同时保存 node ID、预期 type/raw name 与 snapshot SHA-256。
- 必需、可选、互斥 slot；每个 slot 允许的 component contract。
- DOM landmark 和阅读/焦点顺序。
- 内容流、滚动、溢出、sticky/overlay 边界。
- critical states 与五类异常态的容器归属。
- 可继承和必须由 Page Manifest 实例化的字段。
- 明确的 `must_not_infer` 列表。
- 结构、交互、响应式和 a11y 的证据链接。

页面级 node 与 Archetype 冲突时停止并升级合同；不得用“原型通常如此”覆盖页面证据。

Archetype 的最小 Figma 来源记录固定如下；任何 active Archetype 缺少这些一一对应直链时，`G-FL=block`：

```yaml
figma_source:
  file_key: "REQUIRED"
  file_url: "REQUIRED_CLICKABLE_FIGMA_FILE_URL"
  immutable_version_id: "REQUIRED_REAL_FIGMA_VERSION_ID"
  canonical_version_request: "REQUIRED_EXACT_VERSIONED_REQUEST_WITHOUT_SECRET"
  source_page_root:
    node_id: "REQUIRED"
    url: "REQUIRED_CLICKABLE_EXACT_NODE_URL"
    expected_type: "FRAME|COMPONENT|SECTION"
    expected_raw_name: "REQUIRED_EXACT_RAW_NAME"
  source_structure_roots:
    - node_id: "REQUIRED_OR_EMPTY_ONLY_WHEN_PAGE_ROOT_IS_COMPLETE_SOURCE"
      url: "REQUIRED_CLICKABLE_EXACT_NODE_URL"
      expected_type: "FRAME|COMPONENT|COMPONENT_SET|SECTION"
      expected_raw_name: "REQUIRED_EXACT_RAW_NAME"
  snapshot_sha256: "REQUIRED_REAL_SHA256"
```

### 4.2 当前 archetype 登记（active 空；pending intake=1）

| 登记项 | 当前值 | 规则 |
|---|---:|---|
| pending typical page intake | 1（`workbench-home`） | 仅为待 immutable-version 锁版的 live evidence，不计 archetype source page |
| active archetype | 0 | 当前不存在可继承的页面原型合同 |
| archetype source pages | 0 | pending intake 尚未在真实 immutable version 上完成直读与 Page Manifest；当前没有可填入 `source_page_root.url` 的 active 来源链接 |
| candidate types | `list`、`table`、`form`、`dashboard`、`chat`、`settings`、`auth`、`error` | 全部仅为 `not_registered` 候选，不构成 identity、结构或生成许可 |

新 archetype 只能在至少一个新 page node 已按真实 immutable version 完整直读、形成通过 schema 校验的 Page Manifest 与 Evidence Pack 后建立。`workbench-home` 的 live identity、用户确认 matrix 与 current-live child geometry 均不足以建立 archetype；候选名称、历史页面名称、现有 route/DOM/CSS 或组件组合也不得自动生成 archetype，名称相同不得建立历史关联。

### 4.3 Archetype 继承规则

1. Manifest 必须显式写 archetype 版本；禁止隐式使用“最新”。
2. Archetype 的 required slot 不能被页面删除；可选 slot 必须由显式 boolean/enum 控制。
3. 视觉验收的业务内容只能来自 deterministic approved fixture；生产运行仅在 Manifest 选择 `production_data_contract` 时，按已批准 API/data contract 注入。Archetype、Figma 或 fixture 的示例文案/数据不得成为生产默认值。
4. archetype 响应式规则必须有对应 viewport node/baseline 或批准的工程 fallback；否则为 P0 gap。
5. 一个页面可组合多个已批准局部 pattern，但只能有一个主 archetype。Page Manifest 只能在 Archetype 明确开放的字段中实例化或收紧；与硬约束冲突时必须停止，并通过版本化 `exception_contract` 或升级 Archetype 解决，禁止因 Manifest“更具体”而静默覆盖。

# 第三层：Page Manifest

## 5. Page Manifest 完整 YAML 模板

每个页面必须单独落一份符合以下 schema 的 YAML。`REQUIRED`、`unknown`、空 evidence 或未关闭 gap 都不能通过 Readiness Gate。

```yaml
page_manifest_schema: "2.2.0"
schema_ref: "schemas/page-manifest-2.2.0.schema.json"
release_id: "REQUIRED_STABLE_RELEASE_ID"
page_id: "REQUIRED_STABLE_PAGE_ID"
manifest_version: "REQUIRED_SEMVER"
generation_mode: "exact-state-preview|interactive-prototype|production"
contract_status: "catalogued|extracted|contract_complete|implementation_ready|implemented_unverified|verified|blocked"
title: "REQUIRED"
business_content_policy: "approved_fixture_only|production_data_contract" # REQUIRED_ENUM；必须二选一
provenance_required: true
renderer:
  renderer_profile_id: "REQUIRED"
  renderer_profile_version: "REQUIRED_PINNED_VERSION"
  renderer_profile_path: "REQUIRED_REPOSITORY_RELATIVE_PATH"
  renderer_profile_sha256: "REQUIRED_REAL_SHA256"
readiness:
  derived_only: true
  generation_ready: false
  figma_link_validation_pass: false
  blocking_reason_codes: ["REQUIRED_OR_EMPTY_AFTER_VALIDATION"]
owners:
  product: "REQUIRED"
  design: "REQUIRED"
  engineering: "REQUIRED"
  qa: "REQUIRED"
source:
  figma:
    file_key: "REQUIRED"
    file_url: "REQUIRED_CLICKABLE_FIGMA_FILE_URL"
    canvas_node_id: "REQUIRED"
    page_node_id: "REQUIRED_ROOT_PAGE_NODE"
    page_node_url: "REQUIRED_CLICKABLE_EXACT_PAGE_NODE_URL"
    page_node_role: "page_instance_root"
    expected_page_node_type: "FRAME|COMPONENT|SECTION"
    expected_page_raw_name: "REQUIRED_EXACT_RAW_NAME"
    immutable_version_id: "REQUIRED_REAL_FIGMA_VERSION_ID"
    canonical_version_request: "REQUIRED_EXACT_VERSIONED_REQUEST_WITHOUT_SECRET"
    version_url: "OPTIONAL_HUMAN_LOCATOR"
    version_created_at: "REQUIRED_ISO8601"
    version_last_modified: "REQUIRED_ISO8601"
    captured_at: "REQUIRED_ISO8601"
  icon_library:
    documentation_url: "https://kingdee.github.io/lingee-ui/#/foundation/icon"
    package_name: "lingee-icon"
    package_version: "1.0.15"
    npm_integrity: "sha512-BS9sueKMX0tPaOkr7RkZBqwiZshjx/L+jKLu/7l6cnvr42Lm0FrJuda8Yx7oaLJkqTx9au+QHm/W/P7aPDhHZg=="
    evidence_path: "sources/lingee-icon/1.0.15/"
    validation_status: "pass"
  audit_sources: []
source_ingestion:
  mode: "direct_figma"
  tool:
    name: "REQUIRED"
    version: "REQUIRED_PINNED_VERSION"
    connector: "REQUIRED"
    connector_version: "REQUIRED_PINNED_VERSION"
  read_scope:
    root_node_id: "REQUIRED"
    recursive_descendants: true
    include_hidden_layers: true
    skipInvisibleInstanceChildren: false
    include_instance_internals: true
    resolve_reference_closure: true
    viewports: ["REQUIRED"]
    themes: ["REQUIRED"]
    states: ["REQUIRED"]
  version_probe:
    before_path: "REQUIRED"
    after_path: "REQUIRED"
    unchanged: true
  source_version_capability:
    path: "REQUIRED_source-version-capability.json"
    sha256: "REQUIRED_REAL_SHA256"
    source_version_coherence: "pass"
  snapshot:
    metadata_path: "REQUIRED"
    nodes_path: "REQUIRED_NDJSON"
    components_path: "REQUIRED"
    variables_path: "REQUIRED"
    styles_path: "REQUIRED"
    assets_path: "REQUIRED"
    fonts_path: "REQUIRED"
    interactions_path: "REQUIRED"
    hashes_path: "REQUIRED"
    canonical_snapshot_sha256: "REQUIRED_REAL_SHA256"
  completeness_report:
    path: "REQUIRED"
    sha256: "REQUIRED_REAL_SHA256"
    result: "pass"
    direct_read_complete: true
  source_map:
    path: "REQUIRED"
    sha256: "REQUIRED_REAL_SHA256"
    unmapped_value_count: 0
  pagination:
    page_count: "REQUIRED_INTEGER"
    chunk_count: "REQUIRED_INTEGER"
    all_chunks_reconciled: true
  truncation: false
figma_feature_support:
  - feature: "REQUIRED_FEATURE_CLASS"
    read_support: "supported|partial|unsupported|not_present"
    generation_support: "supported|partial|unsupported|not_applicable"
    verification_support: "supported|partial|unsupported|not_applicable"
    evidence: "REQUIRED"
    impact: "none|block"
unsupported_features: []
manual_overrides: [] # 非空项必须含 owner/reason/evidence/expiry/approval/locator/before/after，且 source_exact=false
fidelity:
  derived_only: true
  direct_read_complete: false
  source_exact: false
  structure_exact: false
  behavior_verified: false
  visual_threshold_verified: false
  literal_pixel_exact: false
classification:
  archetype_id: "REQUIRED"
  archetype_version: "REQUIRED_SEMVER"
  platform: "web|client"
  shell_id: "REQUIRED_OR_NONE"
  route_kind: "public|authenticated|internal|not_applicable"
target:
  repository_root: "REQUIRED"
  route: "REQUIRED_OR_NOT_APPLICABLE"
  stack_detection:
    project_state: "non_empty|empty"
    detected_stack: ["REQUIRED"]
    evidence_files: ["REQUIRED"]
    preserve_existing_stack: true
  implementation:
    entrypoints: ["REQUIRED"]
    allowed_paths: ["REQUIRED"]
    forbidden_paths: ["REQUIRED_OR_EMPTY"]
  dependencies:
    additions_allowed: false
    approvals: []
render_matrix:
  viewports:
    - id: "REQUIRED_VIEWPORT_ID"
      width: "REQUIRED_INTEGER"
      height: "REQUIRED_INTEGER"
      device_scale_factor: "REQUIRED_NUMBER"
      figma_node_id: "REQUIRED"
      figma_node_url: "REQUIRED_CLICKABLE_EXACT_VIEWPORT_NODE_URL"
      evidence_status: "pass|partial|block"
  themes:
    - id: "REQUIRED_THEME_ID"
      color_scheme: "REQUIRED"
      token_mode: "REQUIRED"
  critical_states:
    - id: "REQUIRED_CRITICAL_STATE_ID"
      deterministic_fixture_id: "REQUIRED"
  baseline_cells:
    - key: "${page_id}__${viewport_id}__${theme_id}__${critical_state_id}"
      page_id: "REQUIRED"
      viewport_id: "REQUIRED_VIEWPORT_ID"
      theme_id: "REQUIRED_THEME_ID"
      critical_state_id: "REQUIRED_CRITICAL_STATE_ID"
      baseline_png: "REQUIRED"
      baseline_sha256: "REQUIRED"
      source_node_id: "REQUIRED"
      source_node_url: "REQUIRED_CLICKABLE_EXACT_STATE_NODE_URL"
      source_version_id: "REQUIRED"
      baseline_source:
        kind: "figma-versioned-render|approved-design-raster"
        request_method: "REQUIRED"
        format: png
        scale: "REQUIRED_NUMBER"
        contents_only: "REQUIRED_BOOLEAN"
        use_absolute_bounds: "REQUIRED_BOOLEAN"
        background_policy: "REQUIRED"
        expected_pixel_width: "REQUIRED_INTEGER"
        expected_pixel_height: "REQUIRED_INTEGER"
        request_fingerprint_sha256: "REQUIRED_REAL_SHA256"
      actual_capture:
        url_or_route: "REQUIRED"
        capture_state_setup: "REQUIRED"
        stability_probe: "REQUIRED"
        screenshot_path: "REQUIRED"
        screenshot_sha256: "REQUIRED_REAL_SHA256"
      status: "pass|partial|block"
environment:
  locale: "zh-CN"
  timezone: "Asia/Taipei"
  color_space: "sRGB"
  media_features:
    prefers_reduced_motion: "no-preference|reduce"
    prefers_color_scheme: "light|dark"
    forced_colors: "none|active"
  browser_matrix:
    - browser: "REQUIRED"
      version_or_revision: "REQUIRED"
      binary_path_or_image_digest: "REQUIRED"
      os_image_digest: "REQUIRED"
      headless_mode: "REQUIRED_BOOLEAN"
      launch_arguments: ["REQUIRED_OR_EMPTY"]
  clock: "REQUIRED_FIXED_ISO8601"
  random_seed: "REQUIRED"
  network_policy: "local_only|declared_fixture_endpoints"
  root_font_size_px: "REQUIRED_NUMBER"
  scrollbar_policy: "REQUIRED"
  capture_stability:
    fonts_loaded: true
    images_loaded: true
    fixture_settled: true
    consecutive_layout_signature_matches: 2
    animation_timepoint: "REQUIRED"
    scroll_state: "REQUIRED"
    pointer_focus_selection_state: "REQUIRED"
shell:
  shell_id: "REQUIRED_OR_NONE"
  coordinate_space: "canvas-global"
  source_page_node_id: "REQUIRED_ROOT_PAGE_NODE"
  source_shell_node_id: "REQUIRED_OR_NONE"
  viewport: {x: "REQUIRED", y: "REQUIRED", width: "REQUIRED", height: "REQUIRED"}
  sidebar: {present: "REQUIRED_BOOLEAN", rect: "REQUIRED_OR_NONE", source_node_id: "REQUIRED_OR_NONE", contract_id: "REQUIRED_OR_NONE", tuple_id: "REQUIRED_OR_NONE", state_vector_id: "REQUIRED_OR_NONE"}
  main: {x: "REQUIRED", y: "REQUIRED", width: "REQUIRED", height: "REQUIRED", source_node_id: "REQUIRED"}
  topbar: {present: "REQUIRED_BOOLEAN", rect: "REQUIRED_OR_NONE", variant_node_id: "REQUIRED_OR_NONE", contract_id: "REQUIRED_OR_NONE", tuple_id: "REQUIRED_OR_NONE", state_vector_id: "REQUIRED_OR_NONE"}
  content: {coordinate_space: "main-local", x: "REQUIRED", y: "REQUIRED", width: "REQUIRED", height: "REQUIRED_OR_HUG", source_node_id: "REQUIRED"}
  main_local_origin:
    defined_by_node_id: "REQUIRED"
    canvas_global_x: "REQUIRED"
    canvas_global_y: "REQUIRED"
layout_regions:
  - id: "REQUIRED"
    parent_id: "REQUIRED_OR_ROOT"
    coordinate_space: "canvas-global|main-local|component-local"
    rect: {x: "REQUIRED", y: "REQUIRED", width: "REQUIRED", height: "REQUIRED_OR_HUG"}
    display: "REQUIRED"
    sizing: "REQUIRED_FIXED_HUG_FILL_MIN_MAX_CONTRACT"
    alignment: "REQUIRED"
    position: "flow|absolute|sticky|fixed"
    transform: "REQUIRED_OR_IDENTITY"
    gap: "REQUIRED_OR_NONE"
    padding: "REQUIRED"
    overflow: "REQUIRED"
    clip: "REQUIRED_BOOLEAN"
    z_order: "REQUIRED_INTEGER"
    scroll_owner: "REQUIRED_OR_NONE"
components:
  - instance_id: "REQUIRED"
    contract_id: "REQUIRED"
    contract_version: "REQUIRED"
    figma_instance_node_id: "REQUIRED"
    figma_instance_node_url: "REQUIRED_CLICKABLE_EXACT_INSTANCE_NODE_URL"
    component_contract_source_root_url: "REQUIRED_CLICKABLE_EXACT_DEFINITION_ROOT_URL"
    region_id: "REQUIRED"
    properties:
      EXACT_PROPERTY_NAME: "REQUIRED"
    slots:
      REQUIRED_SLOT: "FIXTURE_OR_COMPONENT_REF"
    tuple_id: "REQUIRED_LEGAL_TUPLE_ID"
    initial_state_vector_id: "REQUIRED_LEGAL_STATE_VECTOR_ID"
    critical_state_vector_ids: ["REQUIRED"]
    render_tree_ref: "REQUIRED"
render_tree:
  schema: "1.0.0"
  path: "REQUIRED_RENDER_TREE_NDJSON"
  sha256: "REQUIRED_REAL_SHA256"
  root_render_node_id: "REQUIRED"
  node_count: "REQUIRED_INTEGER"
  source_order_signature_sha256: "REQUIRED_REAL_SHA256"
  all_lowering_rule_ids_resolved: true
content:
  fixture_set_id: "REQUIRED"
  fixture_file: "REQUIRED"
  locale: "zh-CN"
  deterministic: true
  fields:
    - key: "REQUIRED"
      value: "REQUIRED_EXAMPLE_VALUE"
      classification: "example_only|product_copy"
      source:
        kind: "figma-text-node|approved-product-copy|fixture"
        node_id: "REQUIRED_OR_NOT_APPLICABLE"
        property_path: "REQUIRED"
        styled_range_ref: "REQUIRED_OR_NOT_APPLICABLE"
        sha256: "REQUIRED_REAL_SHA256"
      rendering:
        white_space: "REQUIRED"
        word_break: "REQUIRED"
        overflow_wrap: "REQUIRED"
        line_clamp: "REQUIRED_OR_NONE"
        bidi_direction: "REQUIRED"
        unicode_normalization: "preserve-source"
  truncation_rules: ["REQUIRED_OR_NONE"]
tokens:
  contract_version: "2.1.4"
  contract_status: "registered_alias_audit_pending|audited"
  source_root: "REQUIRED_REPOSITORY_RELATIVE_OR_ACCEPTANCE_PATH"
  sources:
    global_color:
      file: "color.tokens.json"
      mode: "color"
      layer: "global-palette"
      sha256: "REQUIRED_REAL_SHA256"
    semantic_light:
      file: "light.tokens.json"
      mode: "Light"
      layer: "semantic-palette"
      sha256: "REQUIRED_REAL_SHA256"
    semantic_dark:
      file: "dark.tokens.json"
      mode: "dark"
      layer: "semantic-palette"
      sha256: "REQUIRED_REAL_SHA256"
    component_color:
      file: "components.json"
      mode: "Mode 1"
      layer: "component-palette"
      sha256: "REQUIRED_REAL_SHA256"
    typography:
      file: "typography.json"
      mode: "kwork"
      layer: "typography"
      sha256: "REQUIRED_REAL_SHA256"
    spacing:
      file: "spacing.json"
      mode: "Mode 1"
      layer: "spacing"
      sha256: "REQUIRED_REAL_SHA256"
    radius:
      file: "radius.json"
      mode: "light"
      layer: "radius"
      sha256: "REQUIRED_REAL_SHA256"
  resolution:
    resolved_value_field: "$value"
    alias_target_field: "aliasData.targetVariableId"
    stable_identity_field: "com.figma.variableId"
    aliases_resolved: true
    preserve_full_alias_chain: true
    infer_alias_by_value_or_name: false
  color_dependency:
    chain: "global-palette -> semantic-palette -> component-palette -> component-implementation"
    non_component_source: "semantic-palette"
    component_source: "own-component-namespace"
    direct_global_consumption: false
  audit:
    report: "REQUIRED_sources/tokens/token-audit.json"
    sha256: "REQUIRED_REAL_SHA256"
    unresolved_alias_count: 0
    alias_cycle_count: 0
    illegal_layer_dependency_count: 0
    direct_global_implementation_consumption_count: 0
    avatar_border_color_Color_absent: true
    sidebar_selected_icon_component_alias_target: "fg-color/black-strong"
    sidebar_selected_icon_alias_verified: true
  raw_values_with_approval: []
  naming_migrations: []
  typography_composite:
    contract_version: "2.1.2"
    source:
      file_key: "HXHbn9VT1RgPuJ70JI4tQ5"
      root_node_id: "22009:521"
      content_node_id: "22009:535"
      immutable_version_id: "REQUIRED_REAL_FIGMA_VERSION_ID"
      metadata_path: "REQUIRED_sources/figma-typography/<immutable-version-id>/metadata.json"
    mapping:
      file: "REQUIRED_sources/figma-typography/<immutable-version-id>/typography-mapping.json"
      sha256: "REQUIRED_REAL_SHA256"
      status: "resolved-value-match|bound|conflict"
      figma_variable_binding_proven: false
      unresolved_count: "REQUIRED_INTEGER"
      conflict_count: "REQUIRED_INTEGER"
    required_role_ids:
      - heading-36
      - heading-24
      - heading-20
      - heading-18
      - heading-16
      - heading-14
      - body-16
      - body-14
      - body-12
      - body-10
    excluded_scaffold_fonts: ["Inter", "Geist", "Fragment Mono"]
    known_conflicts:
      - role_id: heading-16
        issue: "Figma label Medium conflicts with sample Semibold 600"
      - role_id: heading-14
        issue: "Figma label Medium conflicts with sample Semibold 600"
  spacing_composite:
    contract_version: "2.1.4"
    source:
      file_key: "HXHbn9VT1RgPuJ70JI4tQ5"
      root_node_id: "22009:894"
      table_node_id: "22009:895"
      immutable_version_id: "REQUIRED_REAL_FIGMA_VERSION_ID"
      metadata_path: "REQUIRED_sources/figma-spacing/<immutable-version-id>/metadata.json"
      columns:
        names: "22009:896"
        rem: "22009:923"
        px: "22009:950"
    mapping:
      file: "REQUIRED_sources/figma-spacing/<immutable-version-id>/spacing-mapping.json"
      sha256: "REQUIRED_REAL_SHA256"
      status: "resolved-value-match|bound|naming-conflict|coverage-gap"
      figma_variable_binding_proven: false
      conversion_basis: "1rem=16px"
      rem_emission_requires_root_font_size_px: 16
      matched_value_count: 12
      unit_conversion_match_count: 12
      exact_hook_join_count: 9
      naming_conflict_count: 3
      local_coverage_gap_count: 1
      unresolved_count: "REQUIRED_INTEGER"
      conflict_count: "REQUIRED_INTEGER"
    required_hook_ids:
      - spacing-3x-small
      - spacing-2x-small
      - spacing-1.5x-small
      - spacing-x-small
      - spacing-0.5x-small
      - spacing-small
      - --sl-spacing-medium
      - spacing-large
      - spacing-x-large
      - spacing-2x-large
      - spacing-3x-large
      - spacing-4x-large
    known_naming_conflicts:
      - {figma_hook: "spacing-1.5x-small", local_token: "1-5x-small"}
      - {figma_hook: "spacing-0.5x-small", local_token: "0-5x-small"}
      - {figma_hook: "--sl-spacing-medium", local_token: "medium"}
    local_coverage_gaps:
      - {local_token: "0-5x-large", value: 24, inferred_figma_rem_forbidden: "1.5rem"}
    allowed_token_scope: ["GAP"]
    forbidden_property_classes: ["padding", "margin", "page-gutter", "positioning-offset", "width", "height"]
    classification_basis: "table-header-and-row-semantics"
    excluded_scaffold_nodes: ["22009:894", "22009:895"]
  radius_composite:
    contract_version: "2.1.3"
    source:
      file_key: "HXHbn9VT1RgPuJ70JI4tQ5"
      root_node_id: "22009:657"
      table_node_id: "22009:658"
      immutable_version_id: "REQUIRED_REAL_FIGMA_VERSION_ID"
      metadata_path: "REQUIRED_sources/figma-radius/<immutable-version-id>/metadata.json"
      columns:
        names: "22009:659"
        values: "22009:684"
        examples: "22009:709"
        usage: "22009:734"
    mapping:
      file: "REQUIRED_sources/figma-radius/<immutable-version-id>/radius-mapping.json"
      sha256: "REQUIRED_REAL_SHA256"
      status: "resolved-value-match|bound|conflict"
      figma_variable_binding_proven: false
      fixed_value_unit: "px"
      matched_count: 10
      unresolved_count: "REQUIRED_INTEGER"
      conflict_count: 1
    required_role_ids:
      - radius-small
      - radius-medium
      - radius-x-medium
      - radius-large
      - radius-x-large
      - radius-2x-large
      - radius-3x-large
      - radius-4x-large
      - radius-5x-large
      - radius-circle
      - radius-pill
    known_conflicts:
      - role_id: radius-circle
        issue: "Figma 50%H conflicts with radius.json circle=999"
        required_shape_invariant: "width=height"
    metadata_description_conflicts: ["small", "medium", "large", "x-large"]
    excluded_scaffold_nodes: ["22009:657", "22009:658", "22009:660", "22009:735"]
icon_catalog:
  contract_version: "3.0.0"
  contract_status: "catalogued|extracted|contract_complete|implementation_ready|implemented_unverified|verified|blocked"
  source:
    documentation_url: "https://kingdee.github.io/lingee-ui/#/foundation/icon"
    package_name: "lingee-icon"
    package_version: "1.0.15"
    package_version_policy: "exact"
    npm_integrity: "sha512-BS9sueKMX0tPaOkr7RkZBqwiZshjx/L+jKLu/7l6cnvr42Lm0FrJuda8Yx7oaLJkqTx9au+QHm/W/P7aPDhHZg=="
    tarball_sha256: "87ecacb9900ea61cb5fb8734d9d5ede35c28e4b378a62d893d8856428eb58e7e"
    metadata_path: "sources/lingee-icon/1.0.15/package-metadata.json"
  inventory:
    catalog_path: "sources/lingee-icon/1.0.15/ICONS.md"
    catalog_sha256: "90adaced05883590a1a67b93eb8c99adcf428528482399976f40dd2b0ceb0963"
    type_index_path: "sources/lingee-icon/1.0.15/dist/index.d.ts"
    type_index_sha256: "8836802c7b4230b45192303534fee58abb76ad28e2fce56d6a06fdbde93e786f"
    runtime_category_count: 27
    runtime_export_count: 966
    catalog_table_row_count: 967
    catalog_declared_header_category_count: 21
    catalog_declared_header_icon_count: 872
    catalog_declared_section_count_sum: 966
    catalog_runtime_exact_match_count: 965
    catalog_only_name_count: 2
    runtime_only_name_count: 1
    export_index_path: "sources/lingee-icon/1.0.15/export-index.json"
    export_index_sha256: "REQUIRED_REAL_SHA256"
    catalog_type_runtime_mismatch_count: 3
    known_catalog_defects:
      - {catalog_name: "GitFork", runtime_export: null, disposition: "unavailable_block"}
      - {catalog_name: "ExclamationCircleFill（详情）", runtime_export: "ExclamationCircleFill", disposition: "explicit_compatibility_mapping_required"}
  identity:
    stable_tuple: [package_name, package_version, export_name]
    export_name_case: PascalCase
    exact_export_lookup_required: true
    fuzzy_lookup_allowed: false
    suffix_merge_allowed: false
    silent_rename_allowed: false
  compatibility_map:
    path: "sources/lingee-icon/1.0.15/icon-compatibility-map.json"
    sha256: "REQUIRED_REAL_SHA256"
    unresolved_count: 0
  page_icon_mapping:
    - logical_name: "REQUIRED"
      export_name: "REQUIRED_EXACT_PACKAGE_EXPORT"
      category: "REQUIRED_FROM_ICONS_MD"
      figma_page_instance_node_id: "OPTIONAL_VISUAL_MAPPING_ONLY"
      semantic_reason: "REQUIRED"
      states: ["REQUIRED_LEGAL_STATE_IDS"]
      size: "REQUIRED_NUMBER_OR_TOKEN"
      color_token: "REQUIRED_COMPONENT_OR_SEMANTIC_TOKEN_PATH"
      decorative: "REQUIRED_BOOLEAN"
      accessible_name: "REQUIRED_IF_NOT_DECORATIVE"
      source_map_entry: "REQUIRED"
  runtime:
    react_strategy: "static-named-import"
    html_strategy: "pinned-local-svg-sprite"
    remote_latest_allowed: false
    runtime_dynamic_unknown_export_allowed: false
    default_color: "currentColor"
    allowed_props: [size, color, fill, rotate, spin, className, style, standard-svg-attrs]
  used_icons_report:
    path: "sources/lingee-icon/1.0.15/used-icons-report.json"
    sha256: "REQUIRED_REAL_SHA256"
    missing_count: 0
    fuzzy_match_count: 0
    forbidden_source_count: 0
  forbidden_substitutions: [figma-svg-export, name-only-first-match, fuzzy-match, approximate-icon, emoji, unicode-glyph, css-drawing, screenshot, third-party-icon-package, loose-svg, temporary-url, floating-cdn-version]
fonts:
  - family: "REQUIRED"
    weight: 400
    style: "normal"
    source: "REQUIRED"
    local_file: "REQUIRED_OR_SYSTEM_IMAGE"
    license: "REQUIRED"
    license_evidence: "REQUIRED"
    load_probe: "document.fonts.check(...)"
    fallback_policy: "REQUIRED"
assets:
  - logical_name: "REQUIRED"
    asset_kind: "figma-image|figma-vector|product-asset"
    figma_source_file_key: "REQUIRED"
    figma_node_id: "REQUIRED"
    figma_component_key: "REQUIRED_WHEN_SOURCE_IS_COMPONENT_OR_NOT_APPLICABLE"
    local_path: "REQUIRED"
    media_type: "image/svg+xml|image/png|image/webp"
    original_dimensions: {width: "REQUIRED", height: "REQUIRED"}
    view_box: "REQUIRED_FOR_SVG"
    preserve_aspect_ratio: "REQUIRED_FOR_SVG"
    export_parameters:
      immutable_version_id: "REQUIRED"
      format: "REQUIRED"
      scale: "REQUIRED_NUMBER"
      contents_only: "REQUIRED_BOOLEAN"
      use_absolute_bounds: "REQUIRED_BOOLEAN"
      svg_outline_text: "REQUIRED_FOR_SVG"
      svg_simplify_stroke: "REQUIRED_FOR_SVG"
    sha256: "REQUIRED"
    color_policy: "monochrome-currentColor|multicolor-original"
    license: "REQUIRED"
interactions:
  state_machine_id: "REQUIRED"
  state_vector_schema_ref: "REQUIRED"
  initial_state_vector_id: "REQUIRED"
  legal_state_vector_ids: ["REQUIRED"]
  transitions:
    - transition_id: "REQUIRED_STABLE_ID"
      from_state_vector_id: "REQUIRED"
      event:
        category: "pointer|keyboard|focus|input|composition|clipboard|drag|scroll|system|network|timer|route|custom"
        name: "REQUIRED_EXACT_EVENT"
        key_or_button: "REQUIRED_OR_NOT_APPLICABLE"
        payload_schema_ref: "REQUIRED_OR_NOT_APPLICABLE"
      guard: "REQUIRED_OR_NONE"
      to_state_vector_id: "REQUIRED"
      side_effects: ["REQUIRED_OR_NONE"]
      focus_result: "REQUIRED"
exception_states:
  loading:
    status: "required|not_applicable"
    not_applicable_evidence: "REQUIRED_IF_NOT_APPLICABLE"
    trigger: "REQUIRED_IF_REQUIRED"
    visual: "REQUIRED_IF_REQUIRED"
    semantics: "REQUIRED_IF_REQUIRED"
    recovery: "REQUIRED_IF_REQUIRED"
  empty:
    status: "required|not_applicable"
    not_applicable_evidence: "REQUIRED_IF_NOT_APPLICABLE"
    trigger: "REQUIRED_IF_REQUIRED"
    visual: "REQUIRED_IF_REQUIRED"
    semantics: "REQUIRED_IF_REQUIRED"
    recovery: "REQUIRED_IF_REQUIRED"
  error:
    status: "required|not_applicable"
    not_applicable_evidence: "REQUIRED_IF_NOT_APPLICABLE"
    trigger: "REQUIRED_IF_REQUIRED"
    visual: "REQUIRED_IF_REQUIRED"
    semantics: "REQUIRED_IF_REQUIRED"
    recovery: "REQUIRED_IF_REQUIRED"
  forbidden:
    status: "required|not_applicable"
    not_applicable_evidence: "REQUIRED_IF_NOT_APPLICABLE"
    trigger: "REQUIRED_IF_REQUIRED"
    visual: "REQUIRED_IF_REQUIRED"
    semantics: "REQUIRED_IF_REQUIRED"
    recovery: "REQUIRED_IF_REQUIRED"
  offline_timeout:
    status: "required|not_applicable"
    not_applicable_evidence: "REQUIRED_IF_NOT_APPLICABLE"
    trigger: "REQUIRED_IF_REQUIRED"
    visual: "REQUIRED_IF_REQUIRED"
    semantics: "REQUIRED_IF_REQUIRED"
    recovery: "REQUIRED_IF_REQUIRED"
responsive:
  strategy: "figma_baseline|approved_engineering_fallback"
  rules:
    - viewport_id: "REQUIRED"
      node_id: "REQUIRED_OR_GAP"
      behavior: "REQUIRED"
      baseline_key: "REQUIRED_OR_GAP"
a11y:
  standard: "WCAG 2.2 AA"
  landmarks: ["REQUIRED"]
  heading_outline: "REQUIRED"
  focus_order: ["REQUIRED"]
  keyboard_contract: ["REQUIRED"]
  accessible_names: ["REQUIRED"]
  live_regions: ["REQUIRED_OR_NONE"]
  contrast_report: "REQUIRED"
route_and_access:
  route_contract: "REQUIRED_OR_NOT_APPLICABLE"
  authentication: "REQUIRED_OR_NOT_APPLICABLE"
  permissions: ["REQUIRED_OR_NONE"]
  forbidden_behavior: "REQUIRED"
i18n:
  supported_locales: ["zh-CN"]
  message_catalog: "REQUIRED"
  expansion_test: "REQUIRED"
theme:
  supported_themes: ["light"]
  mode_mapping: "REQUIRED"
data_contracts:
  api_schema: "REQUIRED_OR_NOT_APPLICABLE"
  fixture_adapter: "REQUIRED"
  cancellation_and_retry: "REQUIRED_OR_NOT_APPLICABLE"
forms:
  schema: "REQUIRED_OR_NOT_APPLICABLE"
  validation: "REQUIRED_OR_NOT_APPLICABLE"
  submission_states: "REQUIRED_OR_NOT_APPLICABLE"
tables:
  schema: "REQUIRED_OR_NOT_APPLICABLE"
  sorting_filtering_pagination: "REQUIRED_OR_NOT_APPLICABLE"
  virtualization: "REQUIRED_OR_NOT_APPLICABLE"
charts:
  data_schema: "REQUIRED_OR_NOT_APPLICABLE"
  color_and_a11y: "REQUIRED_OR_NOT_APPLICABLE"
  empty_error_behavior: "REQUIRED_OR_NOT_APPLICABLE"
motion:
  transitions: "REQUIRED_OR_NONE"
  reduced_motion_behavior: "REQUIRED"
analytics:
  event_schema: "REQUIRED_OR_NOT_APPLICABLE"
  privacy_review: "REQUIRED_OR_NOT_APPLICABLE"
performance:
  budgets: {lcp_ms: "REQUIRED", cls: "REQUIRED", js_kb: "REQUIRED"}
  measurement_report: "REQUIRED"
acceptance:
  direct_read_report: "REQUIRED_PASS_REPORT"
  source_map_report: "REQUIRED_ZERO_UNMAPPED_REPORT"
  figma_feature_compatibility_report: "REQUIRED"
  override_audit_report: "REQUIRED_ZERO_ACTIVE_OVERRIDE_FOR_SOURCE_EXACT"
  hard_assertions: ["REQUIRED_ZERO_TOLERANCE_ASSERTIONS"]
  interaction_tests: ["REQUIRED"]
  accessibility_report: "REQUIRED"
  network_console_report: "REQUIRED"
  visual_diff:
    algorithm: "rgba-threshold-ratio-v2"
    comparison_color_space: sRGB
    alpha_representation: "straight-alpha"
    transparent_rgb_policy: "zero-rgb-when-alpha-zero"
    per_channel_absolute_delta_threshold: 8
    changed_pixel_ratio_max: 0.001
    observed_max_channel_delta: "REPORT_ONLY_INTEGER"
    dimension_mismatch_policy: fail
    literal_pixel_match: false
    literal_pixel_requirements:
      changed_pixels: 0
      changed_ratio: 0
      max_channel_delta: 0
      same_browser_font_os_dpr: true
      all_hard_interaction_a11y_checks_pass: true
  report_path: "REQUIRED"
gaps:
  p0: []
  p1: []
  p2: []
approvals:
  product: "REQUIRED"
  design: "REQUIRED"
  engineering: "REQUIRED"
  qa: "REQUIRED"
```

Manifest 中页面/组件设计的 `source_ingestion.mode` 固定为 `direct_figma`，图标则固定为 `source.icon_library` 所登记的 pinned package；两者不得互相替代。`truncation` 只能在 read-report 证明所有截断均已续读并对账后写 `false`，不能由人工直接改值。`provenance_required=true` 是硬规则：每个 generated DOM node/attribute/content、CSS declaration/value、非图标 asset、component property 和 behavior transition 都必须在 `source-map.json` 中指向固定 Figma version 的 node/property/variable/style/asset，或指向经批准的产品合同；每个图标必须指向固定 `package_version + export_name` 及其页面语义/Token mapping。Page Manifest 的视觉值只能由本次 normalized IR 与 §3.9 的已批准映射自动产生，禁止从旧规范、当前 CSS、截图或人工记录手抄。

`manual_overrides` 非空时，每项只能采用以下合同；缺一字段即 P0 blocker：

```yaml
- locator: "REQUIRED_IMPLEMENTATION_TARGET"
  before: "REQUIRED_SOURCE_VALUE"
  after: "REQUIRED_OVERRIDE_VALUE"
  owner: "REQUIRED_NAMED_OWNER"
  reason: "REQUIRED"
  evidence: "REQUIRED_STABLE_PATH_OR_URL"
  expiry: "REQUIRED_ISO8601"
  approval: "REQUIRED_APPROVAL_ID"
```

任何 override（包括已批准且未过期）都会使该声明范围 `source_exact=false`；批准只允许受控偏离，不能把偏离重命名为 source-exact 100%。`figma_feature_support` 必须覆盖本次 IR 实际出现的 feature classes；影响目标范围的 `partial/unsupported` 必须同时出现在 `unsupported_features` 和 P0 blocker 中。

`business_content_policy` 是必填二选一枚举：`approved_fixture_only` 表示该页面只消费经批准的 fixture；`production_data_contract` 表示生产运行时可按已批准且版本化的 API/data contract 注入业务数据。无论选择哪一项，**视觉验收始终必须使用 deterministic approved fixture**，固定 locale、clock、seed 与网络输入；生产数据不得直接参与 baseline。Figma 画板、fixture 和规范中的示例业务内容只能作为验收样例，禁止把其 literal、记录或名称固化为生产默认内容；选择 `production_data_contract` 时还必须补齐 `data_contracts`、adapter、错误/重试规则及批准证据。

### 5.1 典型页面 registry（active 空；pending intake=1）

```yaml
typical_page_registry:
  status: live_evidence_pending_immutable_version
  pending_typical_page_intake_count: 1
  pending_typical_page_intakes:
    - page_id: workbench-home
      title: 工作台首页
      source_identity:
        file_key: HXHbn9VT1RgPuJ70JI4tQ5
        root_node_id: "22025:6465"
        root_type: FRAME
        root_raw_name: 首页-新任务
        url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22025-6465&t=1NxUXT2KNQgaazdo-4"
        canonical_node_url: "https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22025-6465"
        link_role: page_instance_root
        immutable_version_id: REQUIRED
        canonical_version_request: REQUIRED
        version_url: OPTIONAL_HUMAN_LOCATOR
        source_mode: current-live-only
      target_matrix:
        viewport: "1920×1080"
        theme: light
        state: new-task-default
      direct_read_complete: false
      contract_status: blocked
      active_registry_eligible: false
  registered_page_count: 0
  active_page_source_count: 0
  active_archetype_count: 0
  active_shell_count: 0
  pages: []
```

`workbench-home` 是已收到 live locator 与用户确认 target matrix 的 **pending intake**，不计入 `registered_page_count`，也不创建 active page source、正式 Page Manifest、archetype 或 shell。当前仍缺 Figma 服务真实返回且可复读的 immutable version ID、canonical versioned request、source-version coherence，以及 route、owners、目标仓库允许实现路径和完整 Direct-Read 证据；因此 active registry 继续为空，禁止实现与验收实例化。

取得缺失输入后仍须从零执行 Direct-Read Protocol；只有固定版本完整读取、分页/分块对账、IR/hash/source-map/Completeness Report、schema 校验与 owner 审批准入全部完成，才可新增 `pages` 行和 active source/Manifest/archetype/shell。旧代码、README、磁盘 SVG、聊天上下文、缓存读取与已丢弃历史典型页面均不得成为页面事实，也不得因名称相似自动关联。

### 5.2 工作台首页待锁版 live 学习证据（pending intake，非 active Page Manifest）

以下内容只登记用户本次提供并由 connector current-live 返回的待锁版学习证据。它不满足 immutable-version Direct-Read 合同，不得解释为 active Page Manifest、source-exact snapshot、baseline 或实现许可。

#### A. Source identity

- `page_id=workbench-home`；title=`工作台首页`。
- Figma file key=`HXHbn9VT1RgPuJ70JI4tQ5`；root node=`22025:6465`；root type=`FRAME`；root raw name=`首页-新任务`。
- 用户给出的完整 live URL：<https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22025-6465&t=1NxUXT2KNQgaazdo-4>。查询参数 `t=1NxUXT2KNQgaazdo-4` **不是** immutable version ID，也不是 version lock 证据。
- `source_mode=current-live-only`；`immutable_version_id=REQUIRED`；`canonical_version_request=REQUIRED`；`version_url=OPTIONAL_HUMAN_LOCATOR`；`direct_read_complete=false`；`contract_status=blocked`；`active_registry_eligible=false`。

#### B. 用户确认 target matrix

| viewport | theme | state | 当前证据边界 |
|---|---|---|---|
| `1920×1080` | `light` | `new-task-default` | `child-geometry-observed + user-confirmed` |

`1920×1080` 是由已返回 child geometry 观测并经用户确认的目标 viewport；root `22025:6465` 的当前 response 未显式返回 root dimensions。该确认可登记 intake 目标，但不是 immutable geometry proof，也不创建 acceptance/baseline cell。

#### C. current-live 两大区域

| 区域 | current-live identity 与 geometry | 边界 |
|---|---|---|
| main frame | [node `22025:6466`](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22025-6466)；x=280、y=1、width=1640、height=1080；column；padding=`240px 0px 320px`；alignment=`center` | 仅 live child observation |
| Sidebar instance | [node `22132:3165`](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22132-3165)；x=0、y=0、width=280、height=1080；componentId=`22109:986`；raw variant=`state=chat, scene=web` | 仅 live instance observation；定义 root 仍需按 Sidebar Component Contract closure 追溯 |

上述两区不得登记为 active shell、shell source 或 `main-local` origin；其 geometry 也不得在锁定 immutable version 前作为可复现页面几何。

#### D. Main current-live 内容

- footer disclaimer node=`22025:6468`，current text=`内容由 AI 生成，请注意甄别`。
- 首页对话框 INSTANCE=`22132:3502`；raw name 精确保留一个前导 ASCII 空格：` 1.首页-对话框`；componentId=`22130:13426`；current property `显示推荐卡=true`。
- Slogan=`灵基一动，工作轻松`，current typography=`Songti SC Bold 700 / 40px`。
- glass tabs：`办法` selected，另有 `分析`、`业务`。
- 首页输入框 componentId=`22130:13080`，current width=714，提示=`问我问题或布置任务，输入@选择技能`；第一行 actions 为 plus、At、`快速`、Voice、disabled send，下一行为 `本地`、`选择目录`、`请求批准`。
- quick functions 包括 `银企对账智能体`、`财务报告生成技能`、`合同审批归档流程` 等。
- 推荐 tabs 为 `战略咨询` selected、`制造页`、`央国企`、`其他`，action=`更多模板`；3 张 cards 当前 fixture 的标题=`沉稳灰金`、副标题=`平台模版`。

以上文字、tab 选择、action、quick function 与卡片记录均只是 current fixture observation，不是 production defaults、deterministic approved fixture 或 cross-page rules。

#### E. Sidebar current-live 内容

- 顶部含 Window Title Bar、Logo，以及布局、搜索、通知 actions。
- global tabs：`工作` selected、`管理`、`开发`。
- navigation：`新任务` selected、`自动化`、`日历`、`技能`、`发现`。
- history tabs：`历史对话` selected、`自动化任务`。
- conversation groups：`置顶`、`默认`、`云端`、`本地`，其中项目/会话名称与内容均为 current fixture。
- profile/utility：`王俊`、`问题`、文件入口。

上述人名、项目、会话、选中态与导航内容只界定本次 current-live fixture；它们不成为生产账号、数据、默认状态、route 或跨页面 Sidebar 合同。

#### F. 当前页面 image refs

本次 pending page live observation 登记以下 Figma imageRef identifiers：

1. `880c21d5f4ec65c7a05284b030c4b72e1462cf2a`
2. `1c444169943c32827aabc78f8ab6645053a5c083`
3. `a91353ad96f1aff5e02ec119276e8cc10ed8f835`

三者均未 download、export 或 hash；这里的值只是 live Figma `imageRef` identifier，**不是 content hash**，不构成 `asset-bound`、asset mapping、reference closure 或 asset closure。

#### G. Evidence boundary / blockers

1. connector 仅读取 current live file，未返回真实 immutable version ID/canonical versioned request，也未建立 source-version coherence；因此尚未完成 fixed-version preflight、前后 version probes 或可复读版本锁。
2. 尚未保存/对账 raw chunks、canonical SHA-256、pagination/completeness、完整 descendants/hidden/instance/reference closure、normalized IR、source-map 与 Direct-Read Completeness Report；`direct_read_complete` 必须保持 `false`。
3. route、owners、目标仓库与 allowed implementation paths 尚未提供；交互、异常态、响应式、a11y、deterministic fixture、feature inventory 与 acceptance evidence 也未形成。
4. 在以上 blocker 关闭前，不得建立 active Page Manifest、page source、archetype、shell、fixture、baseline、route 或 implementation，不得提升 registered/active counts，也不得把 live child geometry 当作 immutable proof。
5. 现有 global/base/composite component contracts 可继续作为其已声明边界内的全局合同；但旧典型页面 identity、shell、fixture、geometry、asset mapping 与 implementation **绝对禁止复用**，`historical_page_reuse: forbidden` 继续生效。
6. `index.html`、`styles.css`、`app.js`、`README.md`、`assets/` 继续属于 `quarantined historical implementation evidence`，不提供本 intake 的页面 authority、provenance 或实现许可。

# 第四层：Evidence & Acceptance Pack

## 6. 证据包与 Readiness Gate

### 6.1 Evidence & Acceptance Pack 目录合同

每个 release/页面应生成独立证据包；实际路径可随项目调整，但 Manifest 必须给出映射：

```text
acceptance/<release-id>/
  release-manifest.yaml
  schemas/
    page-manifest-2.2.0.schema.json
    component-contract-2.2.0.schema.json
    archetype-contract-2.2.0.schema.json
    source-map-2.2.0.schema.json
    read-report-2.2.0.schema.json
  validators/
    lingee-contract-validator
  renderer/
    renderer-profile.yaml
    lowering-rules.json
    feature-registry.json
    reset.css
    global.css
  manifests/<page-id>.yaml
  contracts/archetypes/<archetype-id>@<version>.yaml
  contracts/components/<component-id>@<version>.yaml
  sources/figma/<page-id>/<immutable-version-id>/metadata.json
  sources/figma/<page-id>/<immutable-version-id>/raw/chunks/*
  sources/figma/<page-id>/<immutable-version-id>/nodes.ndjson
  sources/figma/<page-id>/<immutable-version-id>/components/*
  sources/figma/<page-id>/<immutable-version-id>/variables/*
  sources/figma/<page-id>/<immutable-version-id>/styles/*
  sources/figma/<page-id>/<immutable-version-id>/assets/*
  sources/figma/<page-id>/<immutable-version-id>/fonts/*
  sources/figma/<page-id>/<immutable-version-id>/interactions/*
  sources/figma/<page-id>/<immutable-version-id>/read-report.json
  sources/figma/<page-id>/<immutable-version-id>/hashes.json
  sources/figma/<page-id>/<immutable-version-id>/source-map.json
  sources/figma/<page-id>/<immutable-version-id>/render-tree.ndjson
  sources/figma/<page-id>/<immutable-version-id>/source-version-capability.json
  sources/figma-version.json
  sources/tokens/
    color.tokens.json
    light.tokens.json
    dark.tokens.json
    components.json
    typography.json
    spacing.json
    radius.json
    token-audit.json
  sources/figma-typography/<immutable-version-id>/
    metadata.json
    raw-node-22009-521.json
    raw-node-22009-535.json
    text-ranges.ndjson
    typography-composite.json
    typography-mapping.json
    read-report.json
    hashes.json
  sources/figma-spacing/<immutable-version-id>/
    metadata.json
    raw-node-22009-894.json
    raw-table-22009-895.json
    raw-column-22009-896-names.json
    raw-column-22009-923-rem.json
    raw-column-22009-950-px.json
    spacing-composite.json
    spacing-mapping.json
    read-report.json
    hashes.json
  sources/figma-radius/<immutable-version-id>/
    metadata.json
    raw-node-22009-657.json
    raw-column-22009-659-names.json
    raw-column-22009-684-values.json
    raw-column-22009-709-examples.json
    raw-column-22009-734-usage.json
    radius-composite.json
    radius-mapping.json
    read-report.json
    hashes.json
  sources/lingee-icon/1.0.15/
    package-metadata.json
    package-lock-slice.json
    package.tgz
    package.json
    LICENSE
    ICONS.md
    dist/index.d.ts
    dist/svg-sprite.js
    export-index.json
    export-diff-from-previous.json
    icon-compatibility-map.json
    used-icons-report.json
    prohibited-source-audit.json
    hashes.json
  sources/fonts.json
  sources/assets-manifest.json
  fixtures/<fixture-set-id>.*
  baselines/<page>__<viewport>__<theme>__<state>.png
  actual/<page>__<viewport>__<theme>__<state>.png
  diff/<page>__<viewport>__<theme>__<state>.png
  reports/<page>__<viewport>__<theme>__<state>.json
  reports/structure.json
  reports/interactions.json
  reports/accessibility.json
  reports/network-console.json
  reports/browser-environment.json
  approvals.json
```

每个 evidence 文件必须记录 Figma file/version/root node、抓取/生成时间、工具版本、输入 canonical JSON SHA-256 和关联 Manifest version；所有 hash 必须由实际落盘字节计算。临时 Figma URL、人工口头确认、未落盘截图、live-only 读取和被截断的响应不能作为可复现证据。DR-3 目录是本 Evidence Pack 的强制子集，不得只保留汇总 Manifest 而丢弃 raw chunks、read-report 或 source-map。

### 6.2 Readiness Gate

| Gate | 必查项 | 通过条件 | 未通过时的 Gate 维度结果与生命周期影响 |
|---|---|---|---|
| G-FL Figma Link Closure | §3.0.3 registry、Global/Component/Composite/Archetype/Page 五层链接、immutable version request、page instance → component definition lineage | 所有 active/used record 的 URL 可解析到精确 file key/node ID；type/raw name/key 匹配；immutable version 可复读；`catalog_entry` 可达的实际被使用定义全部进入 `source_roots[]`；页面每个 viewport/state/instance 均有直链；dead/superseded/unknown=0 | `block`；禁止进入 Direct Read 和代码生成。file-only、Canvas-only、目录页或会话参数 `t=` 均不能替代 exact/versioned closure |
| G-IC Lingee Icon Closure | §3.9 固定包身份、完整性、目录/类型/运行时 export、catalog defect ledger、compatibility map、used-icons report | `lingee-icon` 精确版本、lockfile、npm integrity、tarball/catalog/type-index/sprite hash 一致；所有 used icon 精确 runtime export 存在；页面语义×状态映射、size、Token、a11y、source-map 完整；已知 catalog defect 对当前 used set 均为 not-used 或有 owner-approved explicit mapping；missing/fuzzy/forbidden source=0 | `block`；禁止从 Figma、第三方库、散落 SVG 或近似图标降级；缺失项必须先进入官方图标包的新固定版本 |
| G-DR Direct-Read | DR-1 preflight、immutable version、全 root 递归读取、隐藏/实例子节点、分页 chunk 对账、标准化 IR/hash、Completeness Report、source-map、feature support | `direct_read_complete=true`；`truncation=false`；所有 chunk 对账；orphan/unresolved/unmapped=0（仅允许逐项证明不影响范围）；目标 variant/state 与资产覆盖完整 | `block`；在任何实现之前停止，生命周期转为 `blocked`。live-only、截断、版本漂移或当前 connector 无 immutable version ID 均不得放行 |
| G-WR Web Rendering | release manifest、Schema bundle、semantic validator、renderer profile、lowering rules、render tree、CSS baseline、source-version capability | `generation_ready` 由校验器派生为 true；source version coherence=pass；active page>0；used component contract ratio=1；render tree/lowering rule/source-map 全解析；renderer binary/profile/hash 固定 | `block`；禁止由相同 IR 临时选择另一种 DOM/CSS/SVG 实现，也不得从 prose 直接写代码 |
| G0 Identity | page_id、page node、Canvas、immutable version | 唯一且可读取，且与 G-DR metadata 一致 | `block`；形成 blocker，生命周期转为 `blocked` |
| G1 Schema | 四层引用、Manifest/Component 2.2 schema、release manifest、owner、scope、`source_ingestion`、`figma_feature_support`、`provenance_required` 与 §0.2 跨字段不变量 | JSON Schema + semantic validator 均 pass；active 闭包无 `REQUIRED`/非法枚举/悬空引用；所有 snapshot/report/render-tree/source-map 路径与 hash 可复核 | `block`；形成 blocker，生命周期转为 `blocked` |
| G2 Stack | 项目探测、allowed paths、依赖许可 | 证据完整且不破坏现有栈 | `block`；形成 blocker，生命周期转为 `blocked` |
| G3 Determinism | fixture、clock、seed、network、七份 Token、Typography/Spacing/Radius 复合规范、固定 `lingee-icon`、font、asset | 七份 Token 与 Typography/Spacing/Radius 来源锁定 immutable version/hash；`lingee-icon` 精确版本、integrity、tarball/catalog/type/runtime hashes 与 lockfile 一致；compatibility map、used-icons report 可离线复核且 missing/fuzzy/forbidden=0；其余输入可离线重复渲染 | 按影响为 `partial` 或 `block`；Token/复合规范/图标包 audit 或其他 P0 open 时禁止升级为 `verified` |
| G4 Contract | 使用到的 archetype/component 状态和 API、图标 `package_version + export_name` 与页面语义来源 | 声明范围合同完整；无影响实现的 unknown；不存在模糊/名称首项选图、动态未知 export 或未解析映射 | `block`；停止对应范围，生命周期转为 `blocked` |
| G5 Matrix | viewport/theme/critical state 与 baseline 一一对应 | 每个笛卡尔积 cell 独立 baseline | `block`；P0 open，禁止升级为 `verified` |
| G6 Quality | structure/content/interaction/states/responsive/assets/fonts/a11y | 所有适用检查 pass | 按影响为 `partial` 或 `block`；保留报告并修复 |
| G7 Visual | 同环境 baseline/actual/diff/report、baseline export fingerprint、capture stability、保真等级证据 | 使用 §8.2 `rgba-threshold-ratio-v2`；`per_channel_absolute_delta_threshold=8`、`changed_pixel_ratio<=0.001`；尺寸一致；hard checks 仍为 0 容差；只有 `changed_pixels=0`、`max_channel_delta=0` 且 hard/interaction/a11y 全通过才可 `literal_pixel_exact` | `block`；禁止升级为 `verified`，不得放宽阈值或缩放 baseline |
| G8 Release | P0=0、人工 override 零残留、P1 disposition、审批、声明矩阵与保真 claim | 全部完成且可追溯；claim 不高于真实证据 | `block`；最高 `implemented_unverified` |

判定规则：

- G-FL 与 G-IC 都必须在代码生成前通过；G-FL 通过后才执行 G-DR，G-DR 必须先于 G-WR 与 G0–G8。没有真实 immutable page version ID/approved frozen subresource snapshot、source version coherence、精确节点链接闭包、固定图标包完整性或页面图标映射，或任一响应仍截断、chunk 未对账、source-map 有未映射实现值时，结论只能是 `block`。当前 immutable page version 与 active page icon mapping 尚未闭合，故现状不能标记 `verified`。
- 新 Figma node 尚无本次直读快照/IR/Completeness Report/Manifest 时，G-DR/G0/G1 失败，**必须停止，不猜 P0 字段**；Manifest 不得从旧文档、代码或截图手抄视觉值。
- `direct_read_complete` 只允许把来源摄取状态推进到 `extracted`；它是 `extracted → contract_complete` 的必要非充分条件，仍须补齐产品交互、响应式、a11y、异常态和环境合同。
- 未来新登记页面若 P0 是明确 `partial/open` 且不影响确定性结构，只能在 G-DR 已通过且 owner 批准后实现，状态最高 `implemented_unverified`。当前 active registry 为空；`workbench-home` 仍是 pending intake，故该规则尚未实例化。
- 任一 P0 为 `unknown` 或 `block` 且影响待生成区域时，停止该区域实现；不可访问/unsupported 不能用人工值关闭。
- P1/P2 不自动阻止原型实现，但必须有 owner、风险处置和目标版本；若影响当前 acceptance cell，则升级为 P0。

## 7. 通用生成、失败与变更流程

### 7.1 生成流程

1. **解析请求并运行来源 Gate**：取得 Figma file key/URL、root page node 直链、每个 viewport/state root 直链、真实 immutable version ID、`page_id`、viewport/theme/states、代码仓库和允许改动范围；解析 Global/Component/Composite/Archetype/Page 引用闭包并运行 G-FL，同时验证固定 `lingee-icon` 包与页面图标映射并运行 G-IC，任一缺失或错链即停止。
2. **Direct read**：仅在 G-FL 通过后执行 DR-1 preflight，从固定版本递归读取 root、全部 descendants/隐藏层/instance internals 和引用闭包；分页/分块直到无截断并完成前后版本 probe。
3. **快照与 hash**：落盘 raw chunks、metadata、canonical SHA-256；禁止只有内存结果或摘要。
4. **Normalized IR**：生成 nodes/components/variables/styles/assets/fonts/interactions 与 feature-support IR，并产生 Direct-Read Completeness Report。
5. **自动生成/更新 Manifest、render tree 与 source-map**：仅从本次 IR 写视觉/结构/内容值，解析 Global、固定版本 Archetype、组件 legal tuples/state vectors 与 Evidence Pack；每个 lowering decision 绑定 WR rule ID，禁止从旧 Markdown prose、代码或截图抄值。
6. **组装 release bundle 并运行 Gate**：生成 §0.1 release manifest、Schema bundle、source-version capability 和 renderer profile 引用；再次验证 G-FL 与 G-IC，再依次运行 G-DR、G-WR、G0–G8；`generation_ready` 只能由 validator 派生。输出 P0/P1/P2 和 `go / go-unverified / stop`。unknown、inaccessible、truncation、unresolved 或 unsupported 影响目标范围时为 `block`，不得先写代码再补来源。
7. **探测技术栈并锁定输入**：保留非空项目现有栈；空项目才创建语义 HTML/CSS/JS；固定 approved fixture、token mode、字体、浏览器、OS、DPR、clock、seed 与网络，依赖变更先审批。
8. **解析图标并导出其他资产**：图标只从固定 `lingee-icon` 包按 exact named export 或本地 pinned sprite 生成，并验证 package/export/size/color/a11y；图片与非图标矢量才按 Figma 固定版本 export plan 导出并验证 node/ref、尺寸、viewBox、media type、许可和真实 hash。禁止临时 URL、Figma 图标导出、emoji、近似/替代图标或截图组件。
9. **生成 DOM/CSS/behavior**：严格按锁定 renderer profile 和 WR lowering rules，从已验证 render tree 生成；先 landmark/shell/archetype slot，再组件实例。只消费已通过 Gate 的 release bundle。所有 DOM、CSS、asset 与 transition 必须同步写入 source-map，禁止生成器临时选择另一种等价实现。
10. **执行 runtime hard checks**：实测关键 geometry、DOM、内容、状态、键盘、焦点、异常态和 a11y；0px/硬断言不能被 visual threshold 豁免。
11. **同环境视觉验收**：逐个 `page × viewport × theme × state` cell 生成 baseline/actual/diff/report；固定 binary/font/OS/DPR 与输入，按 DR-5 记录实际保真等级。
12. **分类、修复并重跑**：按 source/structure/behavior/font/asset/environment 分类回溯 provenance，从受影响最早阶段重跑，直到全部目标 cell pass 或形成 blocker。不得放宽阈值、删除 cell、手调无来源 magic number或伪造证据。
13. **发布结论**：只有目标矩阵、hard/interaction/a11y checks 全部通过且 P0=0 才标 `verified`；`literal_pixel_exact` 还必须 `changed_pixels=0`、`changed_pixel_ratio=0`、`max_channel_delta=0`。否则列出 gap 并标 `implemented_unverified` 或 `blocked`。

### 7.2 失败流程

| 失败 | 必须动作 | 禁止动作 |
|---|---|---|
| connector 仅 live / 无 immutable version | 记录 capability blocker，取得可按版本复读的 connector/导出证据后从 preflight 重跑 | 用 `lastModified`、当前时间或自造 ID 冒充 immutable version |
| MCP/API 截断、分页缺失或版本漂移 | 作废候选完整状态，继续按 subtree/ID batch 分块；漂移时整次重读并对账 | 把部分响应、摘要或旧缓存当完整读取 |
| 字段 inaccessible/unsupported/not returned | 按 DR-2.3 分类为 unknown/block，列 owner 与解除条件 | 从代码、截图、旧 Markdown 或相似节点推断 |
| Figma/Manifest/baseline 冲突 | 停止字段，保留三方证据，交 owner 裁决并升级版本 | 任选“更合理”的值 |
| page node 或 Manifest 缺失 | 返回 `not_registered`，创建接入任务 | 从相似页复制 |
| component property/state 未知 | 将实例标 `block` 或缩小范围 | 猜 boolean、状态或 slot |
| token/font/asset 缺失 | 停止视觉完成，登记 P0 | 写近似色、fallback 字体后声称一致、手绘/第三方替代 |
| fixture/API 不确定 | 使用已批准 deterministic fixture 或停止 | 把画板示例当生产数据 |
| hard assertion 失败 | 修复结构/状态并保留失败报告 | 提高 pixel 阈值掩盖 |
| visual diff 超阈值 | 保留 baseline/actual/diff/report，定位最大差异 | 删除 baseline、无版本变更放宽阈值 |
| a11y/interaction 失败 | 修复合同或实现并重跑受影响 cell | 隐藏控件、移除语义以过截图 |
| 设计变更 | 新 Manifest/合同版本和新 baseline；记录迁移 | 静默覆盖旧基线 |

## 8. 多页面验收协议

### 8.1 独立 baseline 维度

baseline key 固定为：

```text
<page-id>__<viewport-id>__<theme-id>__<critical-state-id>
```

每个 `page × viewport × theme × critical state` cell 必须拥有独立 PNG、SHA-256、source node/version 和报告。禁止：

- 一个 viewport 的 baseline 缩放后用于另一个 viewport。
- light baseline 经滤镜作为 dark baseline。
- default baseline 代替 loading/error/菜单展开等 critical state。
- 一个页面的相似区域 baseline 代替另一页面。

### 8.2 默认视觉算法

- baseline 与 actual 的尺寸、DPR 和 sRGB 色彩空间必须一致。
- 在 sRGB、straight-alpha 下逐像素比较 RGBA；alpha=0 的像素先按合同把 RGB 归零。任一通道绝对差 `> per_channel_absolute_delta_threshold(8)` 计为 changed pixel。
- 通过条件：`changed_pixel_ratio = changed_pixels / total_pixels <= 0.001`。报告必须另列 `observed_max_channel_delta`，但它不与 8 再做普通 Gate，否则会使 changed-pixel ratio 容差失去意义；hard region 可另设 0 容差 mask。
- baseline 与 actual 尺寸不一致立即失败，不缩放、不裁切、不补透明边；diff runner 的版本、算法 ID、输入 hash、alpha policy 和退出码必须写入报告。
- 布局 hard assertion、文案、ARIA 和资源 hash 不受 0.1% 容差豁免。
- 声称 `literal_pixel_exact` 或字面“像素 100%”时，必须在相同 browser binary、font binaries、OS/image、DPR、viewport 与输入下达到 `changed_pixels=0`、`changed_pixel_ratio=0`、`max_channel_delta=0`，且所有 hard/interaction/a11y checks 通过。
- 浏览器字体光栅化或抗锯齿造成非零差异时，即使在默认阈值内，也只能标 `visual_threshold_verified`；不得把工程阈值通过描述成数学零差异。

### 8.3 每个 cell 的检查顺序

1. Manifest/schema/source/version 校验。
2. DOM/landmark/尺寸/内容 hard assertions。
3. 状态机、键盘、焦点和五类异常态。
4. responsive/overflow/scroll（仅对该 viewport 合同）。
5. 资产 path/node/viewBox/hash 与字体 license/load probe。
6. WCAG 2.2 AA 自动检查 + 人工键盘/阅读顺序检查。
7. route/权限/i18n/theme/API，以及适用的 form/table/chart 行为。
8. network 4xx/5xx、外部请求、console error/unhandled rejection。
9. 截图 actual/diff/report。
10. 汇总：单 cell 独立 pass/fail；release 只有目标 cells 全 pass 且 P0=0 才 verified。

### 8.4 当前典型页面验收状态（active registry 空；pending intake=1）

值仍只允许 `pass`、`partial`、`block`。当前已有 1 个待 immutable-version 锁版的 `workbench-home` live intake，但 registered page=`0`；因此没有 active 逐页行，也没有任何 cell 可进入验收或标记 `verified`。

| registry status | pending intakes | registered pages | active page sources | active archetypes | active shells | acceptance cells |
|---|---:|---:|---:|---:|---:|---:|
| `live_evidence_pending_immutable_version` | 1 | 0 | 0 | 0 | 0 | 0 |

用户确认的单个 target matrix `workbench-home × 1920×1080 × light × new-task-default` 只是 pending intake 声明，尚无 immutable source version、Page Manifest、baseline image/hash 或 acceptance evidence，**不是 baseline cell**。锁版并 active 登记后，才可按 §8.1–§8.3 为完整笛卡尔积逐 cell 建立矩阵；不得复用、缩放或改名任何历史 baseline，也不得从 pending/空 active registry 推导默认 pass/block 行。

## 9. 需要补充的内容

### 9.1 P0：生成确定性与验收阻断

| ID | 缺口 | 影响 | 当前/所需证据 | owner | 交付格式 | 关闭条件 |
|---|---|---|---|---|---|---|
| P0-01 | Figma immutable 版本锁与子资源版本一致性 | live 文件漂移或历史 node 混入 live Variables/Styles 会使 baseline 不可复现 | pending intake=1：`workbench-home` 已知 file key=`HXHbn9VT1RgPuJ70JI4tQ5`、live root=`22025:6465` 与含 `t=1NxUXT2KNQgaazdo-4` 的 URL，但该 `t` 不是 immutable version；`immutable_version_id=REQUIRED`、`canonical_version_request=REQUIRED`，active page source=0 | Design Owner | `figma-version.json` + `source-version-capability.json` | 所有目标 node 可从同一不可变版本复读；每个子资源为 same-version 或 approved frozen snapshot，`source_version_coherence=pass`；ID/request/hash/时间入库 |
| P0-02 | 页面 registry 完整性 | pending intake identity 被误当 active page/route/archetype 会产生错误实现授权 | `workbench-home` pending identity 与用户确认 matrix 已知，但 registered page=0、active source=0、archetype=0、shell=0，状态=`live_evidence_pending_immutable_version`；route、owners、allowed implementation paths 与正式 Manifest 仍缺 | Product + Design | `page-registry.yaml` | 锁定 immutable version并完成直读后，page_id 唯一，node/route/archetype/owner 无空值且审批准入；pending intake 才可转 active |
| P0-03 | `page × viewport × theme × critical_state` 完整 baseline 矩阵 | 任一维度或 cell 缺失都会使视觉验收不完整 | 用户已确认 pending tuple=`workbench-home × 1920×1080 × light × new-task-default`，但它不是 baseline cell；当前 active page=0、baseline/acceptance cells=0，仍缺固定 source version、DPR、baseline image/hash 与完整目标矩阵 | Design + QA | PNG + `baselines-manifest.json` | 目标 `page × viewport × theme × critical_state` 矩阵无缺 cell，且每个 cell 的尺寸/DPR/source version/SHA 全部可复现 |
| P0-04 | 七源机器可读 Token、alias/作用域与 Spacing/Radius 复合规范 | 手填值、直接取全局色、按值反推、组件越界、错误 scope/单位，或把 `circle=999` 当作 Figma `50%H`，都会污染页面几何与主题 | 七文件/mode 已登记；Spacing root `22009:894`、table `22009:895` 与三列一致 live 直读，12 条值/rem 匹配，但有 3 个命名冲突、本地 24px coverage gap，且缺 immutable version/Variable refs；Radius root `22009:657` 与四列一致 live 直读，10 条值匹配，但 `radius-circle` 存在 50%H vs 999 blocker和 4 项 description defect；其余 alias/命名/消费审计仍待完成 | Design System | `sources/tokens/` 七文件副本 + `token-audit.json` + `sources/figma-spacing/<version>/` 与 `sources/figma-radius/<version>/` raw/read-report/hash/mapping | 七文件/mode/hash/Variable ID 一致；alias/非法消费为 0；组件与颜色层级合规；Spacing 12 行均有 binding provenance，3 个命名冲突、24px coverage gap、root-font-size/rem 转换与 GAP-only scope 均处置；Radius 11 条均有 binding provenance，circle 语义与 `width=height` invariant 经批准且冲突清零，description/scope 已处置；Typography/Spacing/Radius audit 通过，且 `Avatar.border-color.Color` 保持不存在 |
| P0-05 | 字体复合规范绑定、冲突、许可与加载 | 把值匹配误报为 Variable 绑定、混入规范页 scaffold 字体、猜测 Medium/单位/fallback 或使用不同字体 binary，都会破坏换行、层级与合规 | 已对 Figma `HXHbn9VT1RgPuJ70JI4tQ5` 的 `22009:521`/`22009:535` 做两次一致 live 直读，识别 6 标题+4 正文并与 `typography.json` 原子值结合；但缺 immutable version、稳定 Style/Variable refs，且 `heading-16/14` 存在 Medium 标签 vs Semibold 600 样本冲突；CSS 单位/fallback、字体文件/系统镜像与 license 仍缺 | Legal + Design System + Frontend | Figma typography raw/read-report/hash、`typography-composite.json`、`typography-mapping.json`、`typography.json` 副本、`fonts.json`、许可文件、字体 binary/系统镜像 digest | 固定版本可复读；10 条 role 均有 node/style/range provenance 与原子 path/Variable ID；`family.*`、`weight.normal=regular` 和 scope 例外保持；Medium/Semibold 冲突清零；scaffold 字体未混入；mapping unresolved=0 且 binding 可证；单位/fallback 明确、许可有效、离线加载与全部 `document.fonts.check` 通过 |
| P0-06 | 页面依赖组件的多轴状态、property 与 render contract | boolean 组合、compound state、slot、尺寸和 Token 绑定可能实现错误 | 当前顶部栏/Sidebar/基础控件只 catalogued；需第 3.7 节 2.2 合同，尤其 Sidebar selected icon 与 Button icon exposure | Design System + Frontend | component contract YAML + render-tree + legal tuple/state-vector baseline | active 页面依赖闭包中的组件 100% 引用固定合同版本；legal tuple/state vector/property/slot/visual binding 无 unknown；未使用的库组件可后续补齐 |
| P0-07 | 资产与完整图标包/export/mapping/hash | 浮动版本、模糊/名称首项选图、后缀误合并、Figma 临时导出、第三方 fallback 或运行时未知 export 会导致语义与像素漂移 | 官方 `lingee-icon@1.0.15` 的 npm integrity、tarball/catalog/type-index/sprite hash 与实际 27 类/966 runtime exports 已登记；目录表有 967 行且顶部 21/872 声明过时，存在 2 catalog-only / 1 runtime-only 名称差异。当前无 active page icon mapping、compatibility map/used-icons report 与逐状态 baseline，故页面范围仍为 block。Figma `22007:30176` 只保留视觉映射证据 | Design System + Frontend | `sources/lingee-icon/1.0.15/` + `icon-compatibility-map.json` + `used-icons-report.json` + lockfile + baseline | 每个使用图标均有 exact package version/export/category、页面语义与可选 Figma instance evidence、size、Token、state、a11y、source-map；package/lock/runtime hashes 一致，used icon missing/fuzzy/forbidden source=0，已知 catalog defect 均有明确 disposition，且所有目标状态 baseline 通过。图片与非图标 SVG 仍按独立 asset manifest 闭合 |
| P0-08 | deterministic fixture | 业务样例、截断、时间和随机数据漂移 | `workbench-home` live response 已观察到文案、推荐卡、项目/会话等 current fixture，但尚未批准、锁版或形成 schema；active page fixture=0，不得把这些 literal 当 production defaults 或 deterministic fixture | Product + QA | fixture JSON/TS/静态文件 + schema | 每 critical state 可离线重放，clock/seed/locale 固定，无未裁决 literal |
| P0-09 | 交互状态机 | 点击/键盘/异步/焦点恢复无法验收 | pending intake 仅观察到 tabs/actions/input/disabled send 等 current state；未取得 immutable prototype/reactions、初态/guard/transition/side effect/focus 合同，active page state machine=0 | Product + Design + Frontend | 状态图 + transition YAML + tests | 所有操作有初态、guard、转移、副作用、焦点结果和测试 |
| P0-10 | 五类异常状态适用性 | loading/empty/error/forbidden/offline-timeout 未建模或错误假定适用性会产生断页/伪状态 | 用户只确认 pending state=`new-task-default`；它不是 active critical-state/baseline，五类异常尚未逐项判定 required/not_applicable | Product + Design | 每态 applicability + required 状态的 node/baseline/文案/恢复矩阵 | 每态均为 `required` 或带证据的 `not_applicable`；required 项视觉、语义、触发、恢复、权限和测试全部明确 |
| P0-11 | 响应式合同 | viewport 行为缺证时会被猜测，组件尺寸也可能被误当页面 Shell | pending viewport=`1920×1080` 仅为 `child-geometry-observed + user-confirmed`；root response 未显式返回 root dimensions，且缺 immutable version/其他 viewport。active viewport=0、active shell=0，不得把 live child geometry当响应式或 Shell 合同 | Design + Frontend | viewport matrix + node/baseline 或 fallback approval | 每支持 viewport 有证据；不支持项明确拒绝，不存在隐式断点 |
| P0-12 | a11y 合同 | 键盘、读屏、对比度和动态状态不可用 | 当前无 active page_id，因此无页面级 a11y 合同或验收证据 | Accessibility + Design + Frontend | WCAG checklist、焦点图、自动/人工报告 | 0 serious/critical，键盘路径/名称/状态/对比度均通过 |
| P0-13 | 浏览器矩阵 | 字体与渲染引擎差异使截图不可复现 | 当前未锁 binary/version | QA + Frontend | `browser-environment.json`/容器 digest | 每目标浏览器版本、binary、OS、DPR、locale、timezone 固定并实测 |
| P0-14 | 截图工具、baseline export 与无歧义 diff 报告 | 阈值声明无法被执行或审计，错误的 max-delta Gate 会使 0.1% 容差失效 | 当前未落盘 runner/report schema；需 §8.2 `rgba-threshold-ratio-v2` | QA | 可重复命令、工具锁、baseline request fingerprint、actual/diff JSON schema | 冷启动重复运行稳定；尺寸一致；报告含输入 hash、per-channel threshold、changed pixels/ratio、observed max delta、alpha policy 和退出码 |
| P0-15 | Figma 完整直读与对账报告 | 只读摘要、跳过隐藏/实例子节点或截断会使结构与来源不完整 | pending intake `workbench-home` 的 live root=`22025:6465` 与部分 child observation 已知，但 active source=0；未完成 fixed-version preflight、raw chunks、pagination/completeness 对账、reference closure、计数签名或 Direct-Read Completeness Report，故 `direct_read_complete=false`、REQUIRED/block | Design Ops + Frontend | DR-4 `read-report.json` + version probes + chunk index | P0-01 已关闭；`truncation=false`、全部 chunk 对账、orphan=0（或逐项证明合法）、unresolved=0、目标 variants/states 覆盖完整，`direct_read_complete=true` |
| P0-16 | 标准化 IR、canonical hash 与 source-map | 无法证明生成值来自哪个 node/property/token，回归不可审计 | `workbench-home` current-live 摘要与 imageRef identifiers 不是 IR/hash/source-map；当前无固定版本 normalized IR、实际字节 canonical SHA-256 或每值 provenance，active IR=0 | Frontend Platform + QA | `nodes.ndjson`、components/variables/styles/assets/fonts/interactions、`hashes.json`、`source-map.json` | 实际文件 SHA-256 可复算；raw→IR 可重现；所有 DOM/CSS/asset/behavior 实现值均可追溯，unmapped=0 |
| P0-17 | Figma feature compatibility 与 unsupported blocker | connector/CSS/SVG/runtime 不支持的 mask/blend/effect/media/variable/component 特性可能被静默近似 | 尚未对 immutable `workbench-home` root 完成 feature inventory；当前 live geometry、componentId、text/property 与 3 个 imageRef observations 不构成 read/generate/verify 支持矩阵，也不得声称 feature coverage | Design System + Frontend Platform | `figma-feature-support.json` + unsupported report | 所有实际出现特性有 evidence；影响目标范围的 partial/unsupported=0，或设计正式改版并以新固定版本重读，禁止人工猜值关闭 |
| P0-18 | 人工 override 零残留与 provenance 审计 | magic number、替代资产或手工修正会破坏 source-exact 声明 | 当前需审计 Manifest、CSS、DOM、asset 与 source-map；override 仅可临时含 owner/reason/evidence/expiry/approval | Engineering + Design + QA | `override-audit.json` + approval records | release 范围 active/expired/unapproved override 全部为 0；每个实现值有 source-map。任何 override 存在时不得声称 `source_exact` 或 source-exact 100% |
| P0-19 | Release bundle、真实 Schema、semantic validator 与确定性 Web lowering | 同一 MD/IR 可被不同生成器解释成不同 DOM/CSS/SVG，或 active 数据仍含占位符却被误生成 | v2.3.0 引入 §0.1–0.3 与 WR 协议；v2.4.0 将 `figma_link_validation_pass` 加入 readiness，但对应 artifact 仍未 materialize/hash，renderer profile 未锁 | Frontend Platform + QA | `release-manifest.yaml`、`schemas/`、validator、renderer profile/lowering rules/reset/render-tree | JSON Schema + semantic validation pass；artifact root hash 可复算；`generation_ready=true` 由 validator 派生；unresolved lowering rules=0；相同 release/profile 冷启动生成字节与截图稳定 |
| P0-20 | Figma 五层 exact-link closure | 只给文件、Canvas、目录页或 node ID 文本会让生成器无法稳定定位真正 source root，也会把跨文件同 ID 错并 | v2.4.0 已建立 §3.0.3 机器注册表并补齐已知 Topbar/Sidebar/内容卡片/AI 输入定义直链；仍缺 immutable version、Topbar legacy replacement、旧 Sidebar 五项迁移目标、Skeleton exact root、active Archetype source，以及每个典型页面 viewport/state/instance 直链 | Design Owner + Design System | `figma-link-registry.yaml` + versioned URL/request + lineage approvals | G-FL 全量通过；所有 active/used Global/Component/Composite/Archetype/Page URL 可解析且 type/name/key/version 一致；catalog→definition→instance closure 无 missing/dead/unknown/superseded 未裁决项 |

### 9.2 P1：产品与工程完整性

| ID | 缺口 | 影响 | 当前/所需证据 | owner | 交付格式 | 关闭条件 |
|---|---|---|---|---|---|---|
| P1-01 | Route 合同 | 深链、返回、404 和刷新行为不确定 | 无 active page_id，因此无 route 登记 | Product + Frontend | route table + router tests | 每 page_id 有 route、参数、404/redirect 和刷新测试 |
| P1-02 | 权限 | 不同角色可能看到错误操作或数据 | 当前无 active page_id，未登记页面权限或视觉状态 | Product + Security | RBAC/ABAC matrix + tests | view/action/data 权限及 forbidden state 全覆盖 |
| P1-03 | i18n | 文案扩张、复数、日期数字格式可能破版 | 当前只登记 zh-CN | Product + Localization | message catalog + pseudo-locale report | 支持 locale 全量 key、扩张/RTL（适用时）检查通过 |
| P1-04 | Theme | Light/Dark 文件虽已登记，mode 大小写、直接值缺口或 baseline 缺失仍会造成错配 | 已登记 `light.tokens.json`/`Light` 与 `dark.tokens.json`/`dark`；这不等于页面已有双主题证据，且 white-bg/white-heavy/*-faint-dark 等 direct value 待审计 | Design System | theme-mode mapping + `token-audit.json` + 独立 baselines | 每声明 theme 精确绑定文件/mode/hash并有独立 baseline；direct value 有 disposition；未支持 theme 明确拒绝，禁止由滤镜或值反推 |
| P1-05 | API 合同 | loading/error/retry/cancel 与数据结构不确定 | 当前多为 fixture | Backend + Frontend | OpenAPI/GraphQL schema + adapter tests | 请求、响应、错误、重试、取消和 fixture adapter 一致 |
| P1-06 | Form 合同 | 校验、提交、脏状态和错误定位不确定 | 当前无表单页合同 | Product + Frontend | form schema + validation/submit tests | 字段、同步/异步校验、focus error、成功/失败完整 |
| P1-07 | Table 合同 | 排序筛选分页、空态和大数据行为不确定 | 当前无表格页合同 | Product + Frontend | column/data schema + behavior tests | 排序/筛选/分页/选择/虚拟化（适用时）均有合同和测试 |
| P1-08 | Chart 合同 | 数据域、色彩、tooltip 和无障碍替代缺失 | 仅登记 Chart Canvas `9659:18996` | Data + Design + Frontend | chart schema + sample dataset + a11y report | domain/scale/legend/empty/error/文本替代和对比度通过 |
| P1-09 | Motion | 动画时序与 reduced motion 不确定 | 当前无跨页 motion contract | Design + Frontend | motion tokens + transition table | 每动画有触发/时长/easing；reduce 模式可用且不丢信息 |
| P1-10 | Analytics | 事件命名、重复上报和隐私不确定 | 当前无事件表 | Product Analytics + Privacy | event schema + privacy review + tests | 事件/payload/触发唯一，敏感字段审查与去重通过 |
| P1-11 | Performance | 页面可能视觉正确但加载/交互不可接受 | 当前无预算和测量 | Frontend + QA | budget YAML + lab/field report | 每页满足批准的 LCP/CLS/JS/资源预算或有签字例外 |

### 9.3 P2：治理与长期维护

| ID | 缺口 | 影响 | 当前/所需证据 | owner | 交付格式 | 关闭条件 |
|---|---|---|---|---|---|---|
| P2-01 | Figma descriptions/dev resources | 设计意图和实现链接不可发现 | 当前多数 description 为空或未登记 | Design System | Figma description + Dev Resource URL 清单 | 所有公共组件/page node 有 owner、用途、合同和代码链接 |
| P2-02 | 命名治理 | 中英混名、拼写和数字后缀会破坏 API 或触发错误合并 | 已知 `Show Button`；固定 `lingee-icon@1.0.15` 中存在需原样保留的 export，如 `ImagReduce`、`Threedots` 及多个 `*1/*2`。Figma 历史名称只作迁移线索，不得直接成为运行时 export | Design System + Frontend | naming dictionary + 以 `package_version+export_name` 为主键的 compatibility map | 每个 logical name 精确映射到真实 package export；所有兼容/非理想名称均有版本化映射、消费者与弃用期；大小写、后缀保持且 fuzzy/name-only-first-match 被禁止 |
| P2-03 | Visual CI | 本地可过但持续集成无法防回归 | 当前无 CI 证据 | QA + DevOps | CI workflow + artifact retention policy | PR 自动跑目标矩阵、上传 diff、按阈值阻断并保留报告 |
| P2-04 | 设计变更流程 | baseline 和实现可能被静默覆盖 | 当前无统一 change record | Design Ops + Engineering | change request template + changelog | 变更含影响页、合同版本、baseline 重建、审批和回滚方案 |
| P2-05 | 版本迁移 | 既有 Manifest/组件消费者无法安全升级 | 当前未提供迁移记录 | Architecture + Frontend | migration guide + codemod/manual checklist | N/N-1 迁移路径、兼容期、破坏性变更和验证报告完整 |
| P2-06 | 跨平台 Client | 组件级 Sidebar 规则可能被误推为客户端页面 Shell | 当前 active page/shell=0；保留的 Client Sidebar component identities 仅为 `historical/current-revalidation-pending` 组件证据，不登记任何页面 | Client + Design | platform contract + OS matrix + baselines | 新页面按 macOS/Windows/Linux（实际支持项）分别提供宿主、输入、字体、窗口状态合同与验收 |

## 10. 参数化一句话指令

1. **完全直读并生成：**“依据 `{SPEC_PATH}` 指向的 `Lingee-unified-page-generation-spec.md` v2.5.0，先对 Global/Component/Composite/Archetype/Page 五层 `figma_source_record` 执行 G-FL，确认所有 exact node URL、`file_key+node_id+immutable_version_id`、type/raw name/key 与页面 instance→definition lineage 闭合；同时按 §3.9 校验 `lingee-icon@1.0.15` 的 lockfile/integrity/tarball/catalog/type-index/sprite hash，并对所有页面图标生成 exact `logical_name×state→export_name` mapping，执行 G-IC；再对 Figma `file_key={FIGMA_FILE_KEY}` 的固定版本 `{IMMUTABLE_VERSION_ID}`、root page node URL `{PAGE_NODE_URL}`、`page_id={PAGE_ID}` 和矩阵 `viewports={VIEWPORTS}`、`themes={THEMES}`、`states={STATES}` 做 preflight，使用 `skipInvisibleInstanceChildren=false` 或等价策略递归全读全部 descendants/隐藏层/实例与引用闭包，分页分块直到无截断并对账；生成 raw/IR/hash/read-report/source-version-capability/source-map/render-tree/Page Manifest，组装 release manifest，锁定 Schema bundle、semantic validator 与 renderer profile；仅当 `figma_link_validation_pass=true`、`icon_library_validation_pass=true` 且 `generation_ready` 派生为 true 后，图标使用固定包 exact named import/本地 sprite，其他资产按 WR lowering rules 导出，再生成 DOM/CSS/behavior 并执行 runtime hard checks 与同环境 baseline/actual diff；任一 missing/dead/unknown 链接、图标 export/mapping 缺失、版本漂移、不可访问、unsupported、unresolved、无 provenance 或无 lowering rule 的值立即停止且不猜。”
2. **只直读建快照/Manifest，不改代码：**“先验证 `figma_source_record` 与 `{PAGE_NODE_URL}` 的 G-FL；仅通过后，对 Figma `file_key={FIGMA_FILE_KEY}`、固定版本 `{IMMUTABLE_VERSION_ID}`、root `{PAGE_NODE_ID}`、`page_id={PAGE_ID}`、`{VIEWPORTS}/{THEMES}/{STATES}` 执行完整递归直读、分块对账，生成 raw snapshot、normalized IR、真实 SHA-256、Direct-Read Completeness Report、source-map 和从 IR 自动更新的 Page Manifest，报告 G-FL/G-DR/P0 blocker；不修改代码、README、资产、配置或 baseline，遇到 missing/dead/unknown link、inaccessible、truncation 或 unsupported 立即停止且不推断。”
3. **审计现有实现：**“只审计 `page_id={PAGE_ID}` 的现有 DOM/CSS/behavior/assets 与固定 Figma version 的 snapshot/IR/source-map、四层合同、P0/P1/P2、feature-support、人工 override、保真等级及 `page×viewport×theme×state` 证据，逐值输出 node/property/token provenance、gap/影响/证据/owner/关闭条件和诚实的最高可声明等级，不修改任何代码、README、资产、配置、Manifest、hash 或 baseline。”
4. **只学习/校对完整图标库：**“只读取官方 [Lingee UI 图标库](https://kingdee.github.io/lingee-ui/#/foundation/icon) 对应的固定 `lingee-icon@{EXACT_VERSION}` 发布包；验证 lockfile、npm integrity、tarball SHA-256、`ICONS.md`、`dist/index.d.ts`、实际 exports、sprite 与 license，生成 `sources/lingee-icon/{EXACT_VERSION}/`、export index、版本 diff、compatibility map 模板、used-icons report 和真实 hashes。按 exact PascalCase export 身份对账，不抓取网站 DOM、不读取 Figma 图标字节、不使用 latest/模糊匹配/第三方 fallback，也不修改页面代码、Token JSON、README 或现有资产；目录、类型和运行时 export 不一致时保持 block 且不猜。”

# 附录 A：当前规范完整性自检

## A.1 结构与登记

- [x] front matter 标题为《Lingee 通用页面生成与验收规范》，当前版本为 `2.5.0`，状态为 `lingee-icon-source-migrated_pending_versioned-page-source-closure`；保留 `figma_link_contract`、五层 exact-link identity、G-FL 与 `figma_link_validation_ready=false`，并新增固定 `lingee-icon` 来源、G-IC 与 `LINGEE_ICON_PAGE_MAPPING_INCOMPLETE`。`workbench-home` 仍是 pending intake：FRAME root=`22025:6465`、live URL 与 `1920×1080/light/new-task-default` 已知，但 immutable version、canonical versioned request、逐 viewport/state 直链、active Page Manifest、archetype、shell、页面图标映射、baseline、IR 与资产闭包仍缺。AI 输入 SECTION `22130:12743` 已校正为 22 个 direct child=`17 sets+3 standalone+1 instance+1 non-contract FRAME 22130:13104`；60 个组件定义、20 个 definition exact probes、1 个独立 source probe 与 6 个未导出 imageRefs 的边界保持不变。
- [x] 四层协议均有执行产物、优先级和失败动作。
- [x] 提供完整 Page Manifest YAML 模板和组件契约模板；Page Manifest 与组件契约 schema 已升级为 `2.2.0`，并要求正式 JSON Schema 与 semantic validator。
- [x] 提供 Readiness Gate、通用生成流程、失败流程和多页面验收。
- [x] 典型页面 registry 状态为 `live_evidence_pending_immutable_version`，pending intake=1，但 registered page=0、active page source=0、active archetype=0、active shell=0；`workbench-home` 只有 live identity、用户确认 matrix 与有边界的 current-live observations，当前无 active Page Manifest、fixture、route、baseline、IR、feature inventory 或逐页验收结论。
- [x] 历史典型页面 source/identity/evidence、页面专用几何/文案/fixture/assets/blockers 已清空且禁止复用；新页面不得按名称与历史记录自动关联。
- [x] 新页面 active 登记的最小输入仍包含 file key/URL、唯一 root page node、真实 immutable version/canonical versioned request、page_id、viewport/theme/states、目标仓库、allowed paths、owners 与 route；`workbench-home` 已提供前述 live identity 和 matrix，但 immutable version/canonical versioned request、仓库实施边界、owners/route 与完整证据仍缺，完成锁版从零直读前不得登记 Page Manifest、archetype 或 shell。
- [x] `canvas-global`、`main-local`、`component-local` 抽象保留，`main-local` 原点与全部 shell 几何只能由每个新 Manifest 的 page/shell node 定义。
- [x] v2.3.0 将本文角色明确为“唯一可执行入口与治理合同”；v2.4.0 新增机器可读 Figma link registry、catalog/source/instance 角色、五层直链闭包、G-FL 与 readiness 联动；v2.5.0 将图标唯一运行时来源迁移到固定 `lingee-icon` 包，增加 G-IC、exact export mapping 与禁止 Figma/第三方 fallback，仍不误称所有外部字节都内嵌于 MD。
- [x] §0.2 要求真实 JSON Schema + 固定 semantic validator，并列出 root/shell/fidelity/component tuple/cell key/path/hash/source-map 等跨字段不变量；YAML 示例不再被当成 Schema 本体。
- [x] §0.3 分离 exact-state-preview、interactive-prototype、production 三种声明范围；缩小范围不降低该范围内的视觉、资产与 provenance 标准。
- [x] WR-1–WR-8 已补充 renderer profile、render tree、DOM/CSS baseline、Auto Layout/geometry/paint/stroke/type/SVG lowering 与截图稳定条件；无 lowering rule 的 feature 必须 block。
- [x] DR-1.3 已补 source-version capability/coherence；UI version URL 降为可选 human locator，版本锁以 version ID + canonical request + response bytes/hash 为准，历史节点禁止混入未经批准的 live-only 子资源。

## A.2 组件与缺口

- [x] 顶部栏当前可验证拓扑为 Canvas `9659:23458` → SECTION `22090:14341` → 5 个直接 COMPONENT；五个 component ID/key、12 个 formal boolean definitions、当前布局/SLOT/visibility/dependency/fixture 与异常均在 §3.3 登记。旧 root `20086:11753` 本次 probe=`Node not found` 且 topology unresolved；全节保持 `catalogued_not_contract_complete`、`direct_read_complete=false`。
- [x] 左导航当前可验证拓扑为 Canvas raw=`左导航` `9659:23457` → 两个直接 sibling：新组合 set raw=`1.Sidebar` `22109:985` 与原子 SECTION raw=`左导航原子` `22109:1090`。新 set 的 3 个 `scene=web` component ID/key，SECTION 的 14 个 set ID/key、50 个 component ID、49 个唯一 tuple、3 个直接示例 INSTANCE 与 19 项已返回 formal properties（11 boolean + 8 text）均在 §3.4 登记；两个同名 `Partner Sessions` 保持独立，`Component 1` 的 duplicate `default+warning` / missing `selected+warning` 与 `state3` 未定义均保留为 blocker。legacy set raw=`Sidebar` `9745:8380` 本次只返回 identity、无 descendants，十个旧 node 降为 `historical/current-revalidation-pending`；当前仅 `variant-enumerated`，`state_switch_readiness=blocked`、`direct_read_complete=false`，不得虚报 runtime-ready 或 full-read。
- [x] §3.4.7 已登记用户裁决：Sidebar selection=`selected` 时 icon 目标 semantic Token 精确为 `fg-color/black-strong`；组件实现必须经 Sidebar 自身 component Token alias 消费，并使用固定 `lingee-icon` 包的 exact `export_name` 与 `currentColor`。旧 `c6v3V45f3zltmKeSNBgR1f` 左导航节点到当前 AI 投喂版的 lineage 仍为 mapping pending，因此不虚报 source-exact。
- [x] §3.6.1 已明确 Button `Icon Start/Icon End default=false` 不等于所有实例默认；正式合同必须补 visibility wiring、legal tuples、exact `lingee-icon package_version + export_name` 与开启后的 geometry baseline，生成器不得自行开启。
- [x] 内容卡片当前有限拓扑为 Canvas raw=`内容卡片` `9667:19011` → SECTION raw=`设置` `22125:5795`；SECTION exact read 与 Canvas response 中同一 subtree 一致，但只有 current direct-child 观测、没有 completeness proof。§3.5.1 已逐项登记 6 个直接 set ID/key、13 个 variant ID/key、2 个 standalone ID/key、6 个 instance→componentId/key 映射、32=24 boolean+8 text formal definitions、四次仅返回 source root 且 descendants/formal properties 未返回的 exact probe、前导 ASCII space、五组同名不同 identity、FileListItem 400/368 几何异常与全部 runtime blockers；状态保持 `catalogued_not_contract_complete`、`runtime_contract_readiness=blocked`、`direct_read_complete=false`、immutable version pending。
- [x] AI 输入当前有限拓扑为 Canvas `9667:17533` → SECTION `22130:12743`；已对账 22 个直接 child=`17 COMPONENT_SET+3 standalone COMPONENT+1 example INSTANCE+1 non-contract FRAME`，其中 [FRAME `22130:13104`](https://www.figma.com/design/HXHbn9VT1RgPuJ70JI4tQ5/Lingee-%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--AI%E6%8A%95%E5%96%82%E7%89%88-?node-id=22130-13104) raw=`Animated Grid 15×15` 仅作 documentation scaffold。57 set variants+3 standalone=60 definitions；20 个 definition exact reads、1 个独立 source-root probe、4 条 visibility wiring 与 6 个未导出 imageRefs 均已登记；无 immutable version/completeness/dependency/asset/runtime closure，状态仍 blocked。
- [x] 基础控件注册表分为 36 项已完成有限 live-read 与 Skeleton 1 项仅注册待学习；37/37 均保留精确 node ID、完整 Figma URL 与 `catalogued_not_contract_complete` 生命周期。已学习项逐一映射 §3.6.1–§3.6.36，未声称深读、完整合同或 `direct_read_complete`。
- [x] 未确认候选类别与实时注册表分离，node ID 均保持 `unknown`。
- [x] P0/P1/P2 每项均含缺口、影响、证据、owner、交付格式和关闭条件。
- [x] P0 覆盖版本、registry、baseline、token、字体、组件、资产、fixture、状态机、五类异常、响应式、a11y、浏览器、截图报告，以及 P0-15～P0-20 的完整直读/对账、IR/hash/source-map、feature compatibility、人工 override 零残留、release bundle、Schema/validator、确定性 Web lowering与 Figma 五层 exact-link closure。
- [x] P1 覆盖 route、权限、i18n、theme、API、form、table、chart、motion、analytics 和 performance。
- [x] P2 覆盖 descriptions/dev resources、命名、visual CI、设计变更、版本迁移和跨平台 Client。

## A.3 验收与边界

- [x] 当前 active 逐页验收 registry 为空，pending intake=`workbench-home` 计数为 1，但 registered/active page/source/archetype/shell 与 acceptance cells 均为 0；用户确认的 `1920×1080` / `light` / `new-task-default` tuple 不是 baseline cell，通用 `pass/partial/block` 矩阵模板与逐 cell 机制仅待锁版 active 登记后实例化。
- [x] `list/table/form/dashboard/chat/settings/auth/error` 均为未登记候选；无新 page node 完整直读和 Manifest 时禁止生成或建立 archetype。
- [x] baseline 按 page×viewport×theme×critical state 独立；默认以 per-channel delta>8 定义 changed pixel，并要求 changed pixels<=0.1%；字面逐像素必须为 0。
- [x] 技术栈探测机制保留；`index.html`、`styles.css`、`app.js`、`README.md` 与 `assets/` 仅为 `quarantined historical implementation evidence`，不得反推 Page Manifest、archetype、shell、fixture 或资产绑定。
- [x] `workbench-home` pending intake 锁定 immutable version 并通过 active 登记前，旧代码、README、磁盘 SVG、聊天上下文与缓存读取仍不得成为页面事实；历史典型页面复用保持 forbidden，页面名称相似不建立历史关联。
- [x] 提供“完全直读并生成”“只直读建快照/Manifest不改代码”“审计现有实现”三类参数化指令；通用指令含 `{FIGMA_FILE_KEY}`、`{PAGE_NODE_ID}`、`{IMMUTABLE_VERSION_ID}`、`{PAGE_ID}`、`{VIEWPORTS}`、`{THEMES}`、`{STATES}`，并要求 unknown 时停止且不得猜测。
- [x] P0 未清零时，交付状态最高只能是 `implemented_unverified`。

## A.4 当前一致性与完整性确认

- [x] 生命周期为 `catalogued → extracted → contract_complete → implementation_ready → implemented_unverified → verified`，禁止跳级；任一阶段可因 blocker 转为 `blocked`，`pass/partial/block` 仅作为 Gate 维度结果。
- [x] `workbench-home` 在 front matter、§0、§3.2、§4.2、§5.1–§5.2、§8.4、P0 与附录中的状态一致：pending intake=1、registered/active page source/archetype/shell=0；live root=`22025:6465`，target=`1920×1080` / `light` / `new-task-default`，main `22025:6466` 与 Sidebar `22132:3165` 的 geometry 仅为 current-live child observation。root dimensions 未显式返回，三个 imageRef 未 download/export/hash；`immutable_version_id=REQUIRED`、`canonical_version_request=REQUIRED`、`version_url=OPTIONAL_HUMAN_LOCATOR`、`contract_status=blocked`、`direct_read_complete=false`，不形成 active Page Manifest、shell、baseline、IR、feature inventory 或 asset closure，历史复用继续 `forbidden`。
- [x] §3.6 注册表、三十六个有限 live-read 主章节、执行摘要和本附录使用一致的组件名单、章节范围与生命周期边界。
- [x] §3.0 的 9 类保留全局设计来源中，8 类 Figma 来源与 §3.6 的 37 个组件条目均有 file key/node ID 对应的完整 Figma URL；第 9 类图标来源改为 Lingee UI 文档 URL、固定 `lingee-icon` 包版本及完整性/hash 记录。顶部栏来源以 Canvas `9659:23458` 与 SECTION `22090:14341` 保存当前入口，同时保留 legacy root `20086:11753` 的失效链接与 unresolved 身份；内容卡片来源以 Canvas `9667:19011` 与 SECTION `22125:5795` 保存当前入口；AI 输入来源以 Canvas raw=`对话输入框（ai）` `9667:17533` 与 SECTION raw=`输入框原子` `22130:12743` 保存当前入口；各 identity 均不按名称合并。36 项已学习与 1 项仅注册严格分组；Figma URL 不被解释为 immutable-version，图标网站 URL 不被解释为固定包完整性或页面 mapping 证据。
- [x] §3.3、front matter、执行摘要与 A.2 对顶部栏使用一致计数：5 个直接 COMPONENT、5 个 component key、12 个 formal boolean definitions、3 个 raw SLOT；保留 raw `Show Button` 与第二行 small SearchInput visibility wiring 缺失异常，并一致声明 `direct_read_complete=false`。顶部栏未加入 §3.6，基础控件仍为 36+1=37。
- [x] §3.4、front matter、执行摘要、§3.0.1、§3.5 与 A.2 对 Sidebar 使用一致身份与计数：Canvas `9659:23457`、新 set `22109:985`/key `7f84bbc8a9d1927d5d30aaca70a3f4e6c5b242e1`、SECTION `22109:1090`、legacy set `9745:8380`/key `3d9d9a3bc0534026f5757ff0ffb51e36d96c57fb` 相互独立；3 个新组合 variant、14 个原子 set/14 keys、50 个 component node、49 个唯一 tuple、3 个示例与 19=11 boolean+8 text properties 已对账。raw `Management`、`state3`、`Default`、`Property 1`、两个独立同名 `Partner Sessions`、中英双套 properties，以及 `Component 1` duplicate `default+warning` / missing `selected+warning` 异常均保留；legacy 十 node 为 historical/current revalidation pending。所有同步点一致声明当前仅 `variant-enumerated`、`state_switch_readiness=blocked`、`direct_read_complete=false`，不声称 immutable version、full recursive completeness、dependency closure 或 runtime-ready；Sidebar 未加入 §3.6，基础控件仍为 36+1=37。
- [x] §3.5.1、front matter、执行摘要、§3.0.1、§3.5、A.1 与 A.2 对内容卡片使用一致身份与计数：Canvas raw=`内容卡片` `9667:19011`、SECTION raw=`设置` `22125:5795` 相互独立；14 个直接 child=6 sets+2 standalone components+6 instances，13 个 set variants+2 standalone=15 个 section-owned definitions，formal properties=32=24 boolean+8 text，exact source-root probes=4。全部同步点原样保留 ` 2.列表内容卡片`、` 5.执行卡片`、` 7.输入框卡片` 的前导 ASCII space、五组同名不同 ID/key、raw `Property 1` 未定义、CategoryLink `Style` 非 pointer state、FileListItem Default 400×54/padding `8px 0` 与 Hover 368×54/padding `6px 0` 的待裁决异常，以及四个 source root descendants/formal properties 未返回的边界；一致声明 `evidence_level=section-enumerated-and-resolved-instance-observed`、`runtime_contract_readiness=blocked`、`direct_read_complete=false`、immutable version pending，不声称 full read、完整 descendants、dependency closure、runtime contract 或 verified。内容卡片未加入 §3.6，基础控件仍为 36+1=37。
- [x] §3.5.2、front matter、执行摘要、§3.0.1、§3.5、A.1 与 A.2 对 AI 输入使用一致身份与计数：Canvas `9667:17533`、SECTION `22130:12743` 相互独立；22 个直接 child=17 个 COMPONENT_SET+3 个 standalone COMPONENT+1 个 example INSTANCE+1 个 non-contract FRAME `22130:13104`，其中 FRAME 仅作 documentation scaffold；57 个 set variants+3 个 standalone=60 个 section-owned definitions，formal properties=4=4 boolean+0 text。17/17 set roots + 3/3 standalone roots=`direct_definition_exact_root_probe_count=20`，与 `问题引导` source `22130:13030` 的独立 source-root probe=1 分开计数；完整 direct/root URL 已注册，6 个 imageRef 均未 export/hash。所有同步点一致声明 immutable/version/completeness/dependency/asset/runtime closure 未完成，`runtime_contract_readiness=blocked`、`direct_read_complete=false`。
- [x] 当前 workspace 只有一份规范入口 `Lingee-unified-page-generation-spec.md`，根目录无重复 spec/backup/old/编号历史副本；`semantic-review/` 下的审查报告明确为非规范证据。
- [x] Alert、Breadcrumb、Pagination、Slider、Spin、Steps、Switch、Table、Dialog、Tabs、Tag、Textarea、Time Picker、Toast、Tooltip 与 Progress 的 identity、current inventory、geometry/appearance、formal-property 边界、not-returned blockers 和 `direct_read_complete=false` 结论均保留在主正文；Switch 的 Canvas `9640:66921`、FRAME `17182:2447`、set `11773:6781` 及 12 项 current inventory 可追溯；Table 的 Canvas `9640:65189`、FRAME `16803:7479`/`16803:7480`、主 set `16803:7684`、Header Item 2 项、Header Control 4 项及 Table cell 54 项 current inventory 可追溯；Dialog 的 Canvas `9640:64241`、documentation/user FRAME `16355:10797`/`16355:10798`、Modal set `11070:2993` 的 3 项及 Message-Modal set `15974:16368` 的 3 项 current inventory 可追溯；Tabs 的 Canvas `9640:64818`、FRAME `17005:12817`、主 set `13134:7779` 的 7 项及五个 item sets 的 18 项 current inventory 可追溯；Tag 的 Canvas `9640:63706`、SECTION `22073:9897`、`tag` set `15039:45871` 的 306 项、`HintBadge` set `9839:3658` 的 3 项及 `LevelBadge` set `11842:12949` 的 3 项 current inventory 可追溯；Textarea 的 Canvas `15443:3939`、SECTION `15443:4052`、light-appearance set `15392:3094` 的 10 项、dark-appearance set `17386:26151` 的 10 项及 30 个 light-set documentation instances 可追溯；Time Picker 的 Canvas `9659:15034`、FRAME `15236:1909`、Time Cell set `13652:18709` 的 3 个 shown nodes 加 1 个 registry-only identity、panel set `15638:9427` 的 2 项及 Time Picker set `14937:17763` 的 9 项 current inventory 可追溯；Toast 的 Canvas `14657:16548` 与 set `14657:16873` 的 8 项 current inventory 可追溯；Tooltip 的 Canvas `12299:14090` 与 set `15749:2527` 的 12 项 current inventory 可追溯；Progress 的 Canvas `17649:6904`、documentation FRAME `18523:1472` 与 set `18523:1583` 的 12 项 current inventory 可追溯；Alert 的 Canvas `9640:63959`、documentation FRAME `16375:3589`、set `14507:2701` 的 20 项 raw matrix 与 standalone Description `14826:7548` 可追溯；Breadcrumb 的 Canvas `12456:15731`、documentation FRAME `16980:2666`、主 set `15942:54622` 的 2 项、Link set `15942:54663` 的 3 项及 Separator set `16668:1351` 的 2 项 current inventory 可追溯；Pagination 的 Canvas `12456:13325`、SECTION `15083:1117`、主 set `15835:1970` 的 5 项及 Pagination Item set `15835:1140` 的 17 项 current inventory 可追溯；Avatar 的 Canvas `9640:65021`、documentation FRAME `16375:2793`、Avatar set `14909:7012` 的 78 项及 AvatarGroup set `15039:29445` 的 2 项 current inventory 可追溯，全部生命周期仍为 `catalogued_not_contract_complete`。
- [x] Page Manifest 的 `business_content_policy` 为必填枚举 `approved_fixture_only|production_data_contract`；视觉验收固定使用 deterministic approved fixture，生产运行仅可按批准 API/data contract 注入，示例业务内容不得固化。
- [x] P0-03 覆盖完整 `page × viewport × theme × critical_state` baseline 矩阵，每个 cell 均要求尺寸、DPR、source version 与 SHA 可复现。
- [x] 唯一图标运行时规范源为 [Lingee UI 图标库](https://kingdee.github.io/lingee-ui/#/foundation/icon) 对应的固定 `lingee-icon@1.0.15`；Figma `HXHbn9VT1RgPuJ70JI4tQ5 / 22007:30176` 仅为历史视觉映射证据，Figma 导出和散落 SVG 不提供运行时图标身份。
