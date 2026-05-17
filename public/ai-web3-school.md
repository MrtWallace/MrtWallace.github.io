# AI × Web3 School — Learning Agent 配置文件

> **使用方法**：把本文件的 URL 丢给你的 AI coding agent（Claude Code / Codex / Hermes），它会自动理解课程结构并协助你学习。
>
> ```
> 请阅读这个文档：[URL]
> 然后帮我开始 AI × Web3 School 的学习计划。
> ```

---

## 课程定位

**AI × Web3 School** 是一个为期 4 周 + Hackathon 的实战共学营，面向希望同时掌握 AI 工程和 Web3 开发的工程师、开发者和技术爱好者。

**核心理念**：AI 和 Web3 不是两个独立赛道——它们的交叉点（AI Agent、链上智能、去中心化推理、数据主权）才是下一个爆发窗口。

**学完你将获得**：
- 一个可运行的 AI × Web3 交叉项目（从 0 到 1）
- 使用 AI coding agent 高效开发的工作流
- Web3 智能合约部署与测试网实战经验
- 一份完整的 repo + 复盘笔记，可直接用于求职或 Hackathon pitch

**面向谁**：
- 有基础编程能力（不限语言），想快速进入 AI + Web3 赛道的开发者
- 已有 AI 或 Web3 单边经验，想补齐另一边的工程师
- 想用 AI agent 提升开发效率的技术人员

---

## 课程大纲

### Week 1：环境搭建 + AI Agent 工作流

**目标**：配置好开发环境，掌握 AI coding agent 的核心用法，完成第一个小任务。

- **模块 1.1** — AI Coding Agent 配置
  - Claude Code / Codex / Hermes Agent 三选一（或全部尝试）
  - 理解 agent 的能力边界：代码生成、调试、重构、文档
  - 推荐材料：各 agent 官方文档

- **模块 1.2** — GitHub 工作流
  - 创建个人学习 repo
  - Commit 规范、branch 策略、PR 流程
  - 用 agent 辅助写 README 和 commit message

- **模块 1.3** — 第一个 AI 辅助编码任务
  - 用 agent 完成一个小型 coding challenge（具体任务见挑战列表）
  - 记录 agent 的输入输出，反思哪些指令好用、哪些需要改进

- **Week 1 交付物**：
  - [ ] GitHub repo 已创建，README 包含个人介绍和学习目标
  - [ ] 至少 3 个有意义的 commits
  - [ ] Learning agent 已配置并可正常对话
  - [ ] 一份 "我的 Agent 使用心得" 短笔记

---

### Week 2：Web3 基础 + 智能合约入门

**目标**：理解区块链核心概念，能在测试网部署和交互智能合约。

- **模块 2.1** — 区块链核心概念
  - 账户模型、交易、Gas、共识机制
  - EVM 兼容链概览（Ethereum、Sepolia、Polygon zkEVM、Base 等）
  - 推荐材料：Ethereum.org 文档

- **模块 2.2** — Solidity / 智能合约基础
  - 合约结构、数据类型、函数、事件
  - 用 Hardhat 或 Foundry 搭建开发环境
  - 用 AI agent 辅助写第一个合约

- **模块 2.3** — 测试网实战
  - 领取测试网 ETH（Sepolia faucet）
  - 部署合约到测试网
  - 通过区块浏览器验证合约
  - 交互：调用合约函数、读取状态

- **Week 2 交付物**：
  - [ ] 至少 1 个智能合约已部署到测试网
  - [ ] 合约地址 + 区块浏览器链接
  - [ ] 测试脚本（至少 3 个 test case）
  - [ ] 一份 "Web3 概念理解" 笔记

---

### Week 3：AI 应用开发 + 数据层

**目标**：构建一个有实际功能的 AI 应用，理解 AI 在 Web3 场景中的落地方式。

- **模块 3.1** — LLM API 调用
  - OpenAI / Claude / 开源模型 API 使用
  - Prompt Engineering 基础
  - 用 AI agent 帮你写 AI 应用（meta-coding）

- **模块 3.2** — AI 应用架构
  - 前后端分离、API 设计、错误处理
  - 简单 RAG（检索增强生成）概念
  - 数据处理 pipeline

- **模块 3.3** — AI × Web3 交叉探索
  - AI Agent 与链上交互（自动交易、链上数据分析）
  - 去中心化推理 / 数据市场概念
  - NFT metadata 生成、链上 AI 等前沿方向

- **Week 3 交付物**：
  - [ ] 一个可运行的 AI 应用（CLI / Web / API 均可）
  - [ ] 代码包含 prompt 设计和 API 调用逻辑
  - [ ] 一份 "AI × Web3 交叉点" 分析笔记（至少 3 个方向）

---

### Week 4：项目整合 + Hackathon 准备

**目标**：将 AI 和 Web3 组件整合成一个完整项目，准备 Hackathon pitch。

- **模块 4.1** — 项目整合
  - 将 Week 2 的合约 + Week 3 的 AI 应用连接
  - 前端展示（可选：React / Next.js / CLI demo）
  - 端到端测试

- **模块 4.2** — 项目打磨
  - README 完善：项目介绍、架构图、使用说明
  - 代码清理、注释、文档
  - Demo 录制（屏幕录制 / live demo 准备）

- **模块 4.3** — Hackathon Pitch 准备
  - Problem → Solution → Demo → Traction 结构
  - 3 分钟 pitch 练习
  - 技术深度 + 商业叙事平衡

- **Week 4 交付物**：
  - [ ] 完整项目 repo（前端 + 后端 + 合约）
  - [ ] Demo 视频或可运行的 live demo
  - [ ] Pitch deck 或 pitch 文稿
  - [ ] 项目复盘笔记

---

### Hackathon（Week 5）

- 48 小时 / 1 周冲刺（具体形式见营期安排）
- 提交完整项目 + Demo
- 评审维度：技术完成度、创新性、AI × Web3 交叉深度、Demo 质量

---

## 挑战任务列表

学员需在 4 周内完成以下挑战（可选择性完成，但建议至少完成 80%）：

1. **Agent 配置挑战** — 成功配置至少一个 AI coding agent 并完成一个编码任务
2. **GitHub Repo 挑战** — 创建规范的学习 repo，README 含个人介绍、目标、进度追踪
3. **AI Coding 挑战** — 用 agent 完成一个有一定复杂度的编码任务（不是 hello world）
4. **Web3 测试网挑战** — 在测试网部署合约并完成至少 3 笔交互交易
5. **最小交叉实验** — 做一个最小的 AI + Web3 结合实验（哪怕只是用 AI 生成 NFT metadata）
6. **方向扫描** — 调研至少 3 个 AI × Web3 方向，写一份 500 字以上的分析
7. **Hackathon Proposal** — 写一份 Hackathon 项目提案，含 problem、solution、tech stack、timeline

---

## 关键时间点

| 节点 | 说明 |
|------|------|
| 开营日 | 课程启动、学员互相认识、环境配置 |
| Week 1 结束 | Agent 配置 + GitHub repo 检查点 |
| Week 2 结束 | 智能合约部署检查点 |
| Week 3 结束 | AI 应用检查点 |
| Week 4 结束 | 项目整合检查点、Hackathon 预热 |
| Hackathon | 项目冲刺 |
| Demo Day / Showcase | 项目展示、评审、交流 |

> ⚠️ 具体日期以共学营官方通知为准。本文件中的 Week 编号为相对时间，学员可根据自己的开营日期推算。

---

## 交付标准

每个 checkpoint 和最终提交需包含以下内容（按需选用，不是每项都必须）：

- **Repo**：GitHub repo URL，结构清晰，有 README
- **README**：项目介绍、安装步骤、使用说明、架构说明
- **Commits**：有意义的 commit 历史（非一次性提交），commit message 规范
- **日志 / 笔记**：学习日志、问题记录、解决方案
- **截图**：关键步骤的截图（部署成功、测试通过、交互记录等）
- **交易哈希**：链上操作的 tx hash，可在区块浏览器验证
- **合约地址**：已部署合约的地址 + 验证链接
- **Demo**：可运行的 demo（CLI / Web / 视频均可）
- **复盘笔记**：每个阶段的反思、收获、待改进点

---

## 安全边界（红线规则）

> ⚠️ 以下操作 **绝对不允许** 交给 AI agent 自动执行，必须由人类手动确认和操作：

- 🔴 **私钥 / 助记词** — 永远不要输入、粘贴或让 agent 读取
- 🔴 **API Key 泄露** — 不要把真实 API key 写入代码或 commit 到 repo
- 🔴 **签名操作** — 任何需要钱包签名的操作必须人工确认
- 🔴 **转账 / 交易** — 涉及真实资产的交易必须人工确认
- 🔴 **合约部署到主网** — 只允许测试网部署，主网需人工审批
- 🔴 **权限操作** — 合约 owner 权限、admin 操作、密钥轮换等

**原则**：Agent 是你的编程助手，不是你的财务授权人。写代码、查文档、debug、生成测试——交给它。涉及资产、密钥、权限——自己来。

---

## 交互式学习计划

当你把本文件交给 learning agent 后，它会按以下流程帮你制定个人学习计划：

### Step 1：评估当前水平

Agent 会问你：

> 你目前的编程水平如何？
> - A) 初级：有基础编程能力，但没有实际项目经验
> - B) 中级：有项目经验，但 AI 或 Web3 其中一边是零基础
> - C) 高级：两边都有一定经验，想做深度交叉项目

### Step 2：了解背景

> 你目前的背景更偏向哪边？
> - A) 偏 AI：做过 ML/DL、用过 LLM API、了解 prompt engineering
> - B) 偏 Web3：写过合约、用过 DApp、了解链上交互
> - C) 两边都刚入门
> - D) 两边都有经验，想做高级整合

### Step 3：确认时间和目标

> 你每周大概能投入多少时间？
> - A) 5-8 小时（跟上主线）
> - B) 8-15 小时（深度学习）
> - C) 15+ 小时（全力冲刺）

> 你的主要目标是？
> - A) 补基础，从 0 开始建立知识体系
> - B) 做出一个可展示的 demo
> - C) 深入研究某个 AI × Web3 方向
> - D) 准备 Hackathon 拿奖

### Step 4：生成个人计划

Agent 会根据你的回答生成：
- **个人 Week 1–Week 2 详细任务计划**
- **推荐 repo 结构**（按你的时间和水平调整粒度）
- **每日 / 每周任务清单**
- **Proof-of-work 节点**（每个任务有明确的交付物）

### Step 5：学习后复盘

每次学习结束后，Agent 会追问：

> 今天完成了什么？
> 遇到什么问题？卡在哪里？
> 下一步需要补什么材料？
> 需要我帮你调整计划吗？

---

## 给 Learning Agent 的指令

如果你是 reading this 的 AI agent，请遵循以下规则：

1. **先执行交互式学习计划的 Step 1-3**，了解学员情况后再给建议
2. **根据学员水平调整内容深度**：初级学员重点补基础，高级学员直接上手项目
3. **每次对话结束时主动追问**学习进展和问题
4. **帮助学员管理 repo**：建议 commit 策略、README 结构、代码组织
5. **辅助但不替代**：写代码时给出思路和 skeleton，鼓励学员理解后再采纳
6. **安全提醒**：涉及私钥、API key、签名、转账时，主动警告并拒绝执行
7. **鼓励记录**：每次学习后建议学员写笔记，作为 proof-of-work
8. **跟踪进度**：维护一个进度清单，每个 checkpoint 提醒学员

---

## 推荐工具链

| 类别 | 推荐工具 |
|------|----------|
| AI Coding Agent | Claude Code / OpenAI Codex / Hermes Agent |
| 智能合约开发 | Hardhat / Foundry |
| 测试网 | Sepolia (Ethereum) / Base Goerli / Polygon zkEVM |
| 区块浏览器 | Etherscan / Blockscout |
| 前端（可选） | Next.js / React + wagmi / viem |
| LLM API | OpenAI / Anthropic / 开源模型 |
| 版本管理 | GitHub + Conventional Commits |

---

## 资源链接

- [Ethereum 开发者文档](https://ethereum.org/en/developers/docs/)
- [Solidity 文档](https://docs.soliditylang.org/)
- [Hardhat 文档](https://hardhat.org/docs)
- [Foundry 文档](https://book.getfoundry.sh/)
- [OpenAI API 文档](https://platform.openai.com/docs)
- [Claude Code 文档](https://docs.anthropic.com/en/docs/claude-code)
- [wagmi — React Hooks for Ethereum](https://wagmi.sh/)

---

> **AI × Web3 School** — 用 AI 的方式学 Web3，用 Web3 的方式思考 AI。
>
> 好奇心是最好的老师，Agent 是最好的助教，代码是最好的笔记。
